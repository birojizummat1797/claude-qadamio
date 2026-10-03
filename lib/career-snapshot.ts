/**
 * Backend taxonomy → public career snapshot (B3).
 * Spec: docs/reviews/2026-10-03-b3-proposal.md §3, §5.
 *
 * Pure and dependency-free so `scripts/sync-careers.ts` can run it under plain Node.
 * The snapshot keeps only public fields: signal WEIGHTS, salary and prerequisites
 * never leave this function. Signal selection is a display rule, not scoring:
 * no user answers are involved.
 */

export const PATHWAY_TYPES = ["entry", "role", "advanced"] as const;
export type PathwayType = (typeof PATHWAY_TYPES)[number];

export const CAREER_SLUG_RE = /^[a-z0-9_]{2,40}$/;
export const CLUSTER_KEY_RE = /^[a-z0-9_]{2,40}$/;

/** Signals with weight >= this are eligible for "Kimga mos bo’lishi mumkin?". */
export const DISPLAY_SIGNAL_MIN_WEIGHT = 4;
export const DISPLAY_SIGNAL_MAX = 3;
export const LEARNING_MONTHS_MAX = 36;

export interface SnapshotCluster {
  key: string;
  title: string;
}

export interface SnapshotCareer {
  slug: string;
  title: string;
  cluster: string;
  learningMonths: number | null;
  pathway: PathwayType | null;
  /** Ordered signal keys, no weights. */
  signals: string[];
}

export interface CareerSnapshot {
  taxonomyVersion: string;
  signalsVersion: string;
  generatedAt: string;
  /** Backend signal keys in canonical order (signals_v1.json). */
  signalKeys: string[];
  clusters: SnapshotCluster[];
  careers: SnapshotCareer[];
}

/** Subset of backend `taxonomy_v1.json` / `GET /api/v1/taxonomy` that is read. */
export interface BackendTaxonomy {
  version?: unknown;
  clusters?: unknown;
}

/** Subset of backend `signals_v1.json`. */
export interface BackendSignals {
  version?: unknown;
  signals?: unknown;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanText(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

export function normalizePathway(value: unknown): PathwayType | null {
  return PATHWAY_TYPES.find((p) => p === value) ?? null;
}

export function normalizeLearningMonths(value: unknown): number | null {
  return typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= LEARNING_MONTHS_MAX
    ? value
    : null;
}

/**
 * Weight desc → canonical order → keep weight >= 4 → at most 3.
 * Unknown signal keys and non-numeric weights are ignored.
 */
export function selectDisplaySignals(weights: unknown, canonicalOrder: readonly string[]): string[] {
  if (!isRecord(weights)) return [];
  return Object.entries(weights)
    .filter(
      (entry): entry is [string, number] =>
        canonicalOrder.includes(entry[0]) && typeof entry[1] === "number" && entry[1] >= DISPLAY_SIGNAL_MIN_WEIGHT,
    )
    .sort((a, b) => b[1] - a[1] || canonicalOrder.indexOf(a[0]) - canonicalOrder.indexOf(b[0]))
    .slice(0, DISPLAY_SIGNAL_MAX)
    .map(([key]) => key);
}

export interface SnapshotResult {
  snapshot: CareerSnapshot;
  /** Records that were dropped or degraded, for the sync log. */
  warnings: string[];
}

export function buildCareerSnapshot(
  taxonomy: BackendTaxonomy,
  signals: BackendSignals,
  generatedAt: string,
): SnapshotResult {
  const warnings: string[] = [];
  const signalKeys = isRecord(signals.signals) ? Object.keys(signals.signals) : [];
  if (!signalKeys.length) warnings.push("signals: no signal keys found");

  const clusters: SnapshotCluster[] = [];
  const careers: SnapshotCareer[] = [];
  const seen = new Set<string>();

  const rawClusters = isRecord(taxonomy.clusters) ? taxonomy.clusters : {};
  for (const [clusterKey, rawCluster] of Object.entries(rawClusters)) {
    const clusterTitle = isRecord(rawCluster) ? cleanText(rawCluster.uz) : null;
    if (!CLUSTER_KEY_RE.test(clusterKey) || !clusterTitle || !isRecord(rawCluster)) {
      warnings.push(`cluster ${clusterKey}: invalid, skipped`);
      continue;
    }
    const rawCareers = isRecord(rawCluster.careers) ? rawCluster.careers : {};
    let kept = 0;
    for (const [slug, rawCareer] of Object.entries(rawCareers)) {
      const title = isRecord(rawCareer) ? cleanText(rawCareer.uz) : null;
      if (!CAREER_SLUG_RE.test(slug) || !title || !isRecord(rawCareer) || seen.has(slug)) {
        warnings.push(`career ${slug}: invalid or duplicate, skipped`);
        continue;
      }
      const career: SnapshotCareer = {
        slug,
        title,
        cluster: clusterKey,
        learningMonths: normalizeLearningMonths(rawCareer.learning_months),
        pathway: normalizePathway(rawCareer.pathway_type),
        signals: selectDisplaySignals(rawCareer.signals, signalKeys),
      };
      if (career.learningMonths === null) warnings.push(`career ${slug}: learning_months missing`);
      if (career.pathway === null) warnings.push(`career ${slug}: pathway_type missing`);
      if (!career.signals.length) warnings.push(`career ${slug}: no display signals`);
      seen.add(slug);
      careers.push(career);
      kept += 1;
    }
    if (kept) clusters.push({ key: clusterKey, title: clusterTitle });
  }

  return {
    snapshot: {
      taxonomyVersion: cleanText(taxonomy.version) ?? "unknown",
      signalsVersion: cleanText(signals.version) ?? "unknown",
      generatedAt,
      signalKeys,
      clusters,
      careers,
    },
    warnings,
  };
}
