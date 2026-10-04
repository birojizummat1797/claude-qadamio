/**
 * Career catalog data layer (B3): snapshot + optional backend API, filters, deep links.
 * Spec: docs/reviews/2026-10-03-b3-proposal.md §4, §5.
 *
 * No scoring lives here. Filters only use backend fields (cluster, pathway_type)
 * and the visitor's own choice of situation.
 */

import snapshotJson from "@/content/careers.snapshot.json";
import {
  CAREER_SLUG_RE,
  CLUSTER_KEY_RE,
  normalizeLearningMonths,
  normalizePathway,
  type CareerSnapshot,
  type PathwayType,
  type SnapshotCluster,
} from "./career-snapshot";
import { buildTelegramUrl, type EntryState } from "./telegram";

export const careerSnapshot = snapshotJson as CareerSnapshot;

export interface CatalogCareer {
  slug: string;
  title: string;
  cluster: string;
  clusterTitle: string;
  learningMonths: number | null;
  pathway: PathwayType | null;
  /** Ordered backend signal keys, no weights. Empty = block hidden. */
  signals: string[];
}

export interface CareerCatalog {
  taxonomyVersion: string;
  source: "api" | "snapshot";
  clusters: SnapshotCluster[];
  careers: CatalogCareer[];
}

/** One row of `GET /api/v1/taxonomy/careers`. */
interface ApiCareer {
  slug: string;
  title: string;
  cluster: string;
  clusterTitle: string;
  learningMonths: number | null;
  pathway: PathwayType | null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function text(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

/** Validates the API response. Invalid rows are dropped; a wholly invalid body returns null. */
export function parseApiCareers(body: unknown): ApiCareer[] | null {
  if (!isRecord(body) || !Array.isArray(body.careers)) return null;
  const out: ApiCareer[] = [];
  const seen = new Set<string>();
  for (const row of body.careers) {
    if (!isRecord(row)) continue;
    const slug = text(row.slug);
    const title = text(row.title_uz);
    const cluster = text(row.cluster);
    const clusterTitle = text(row.cluster_uz);
    if (!slug || !CAREER_SLUG_RE.test(slug) || seen.has(slug) || !title) continue;
    if (!cluster || !CLUSTER_KEY_RE.test(cluster) || !clusterTitle) continue;
    seen.add(slug);
    out.push({
      slug,
      title,
      cluster,
      clusterTitle,
      learningMonths: normalizeLearningMonths(row.learning_months),
      pathway: normalizePathway(row.pathway_type),
    });
  }
  return out.length ? out : null;
}

export function catalogFromSnapshot(snapshot: CareerSnapshot = careerSnapshot): CareerCatalog {
  const titles = new Map(snapshot.clusters.map((c) => [c.key, c.title]));
  return {
    taxonomyVersion: snapshot.taxonomyVersion,
    source: "snapshot",
    clusters: snapshot.clusters,
    careers: snapshot.careers.map((c) => ({ ...c, clusterTitle: titles.get(c.cluster) ?? c.cluster })),
  };
}

/**
 * API rows win for public fields. Signals come from the snapshot only while the
 * career's fields still match it; otherwise they are hidden rather than guessed
 * (the careers endpoint carries no taxonomy version — backlog BL-7).
 */
export function mergeCatalog(snapshot: CareerSnapshot, api: ApiCareer[]): CareerCatalog {
  const known = new Map(snapshot.careers.map((c) => [c.slug, c]));
  const clusters: SnapshotCluster[] = [];
  for (const row of api) {
    if (!clusters.some((c) => c.key === row.cluster)) clusters.push({ key: row.cluster, title: row.clusterTitle });
  }
  return {
    taxonomyVersion: snapshot.taxonomyVersion,
    source: "api",
    clusters,
    careers: api.map((row) => {
      const s = known.get(row.slug);
      const unchanged =
        s !== undefined &&
        s.title === row.title &&
        s.cluster === row.cluster &&
        s.pathway === row.pathway &&
        s.learningMonths === row.learningMonths;
      return { ...row, signals: unchanged ? s.signals : [] };
    }),
  };
}

export interface LoadCatalogOptions {
  apiUrl?: string;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  snapshot?: CareerSnapshot;
}

/** Never throws: any API problem falls back to the bundled snapshot. */
export async function loadCareerCatalog({
  apiUrl = process.env.QADAM_API_URL,
  fetchImpl = fetch,
  timeoutMs = 5000,
  snapshot = careerSnapshot,
}: LoadCatalogOptions = {}): Promise<CareerCatalog> {
  const base = apiUrl?.trim().replace(/\/+$/, "");
  if (!base || !/^https?:\/\//.test(base)) return catalogFromSnapshot(snapshot);
  try {
    const res = await fetchImpl(`${base}/api/v1/taxonomy/careers`, {
      signal: AbortSignal.timeout(timeoutMs),
      headers: { accept: "application/json" },
      next: { revalidate: 86400 },
    } as RequestInit);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const api = parseApiCareers(await res.json());
    if (!api) throw new Error("invalid body");
    return mergeCatalog(snapshot, api);
  } catch (error) {
    console.warn(`careers: API unavailable, using snapshot (${(error as Error).message})`);
    return catalogFromSnapshot(snapshot);
  }
}

// ── Filters ──────────────────────────────────────────────────────────────

export interface CatalogFilter {
  state?: EntryState;
  cluster?: string;
}

export interface FilterResult {
  careers: CatalogCareer[];
  /** “O’smoqchiman” without a cluster: ask “Hozirgi sohangiz qaysi?” instead of listing careers. */
  needsCluster: boolean;
}

/**
 * start → pathway `entry`; switch → no filter (no taxonomy field for it);
 * grow → current cluster only, never another field (owner decision 2026-10-03).
 * Order is always backend order; there is no “best match” sorting.
 */
export function filterCareers(careers: readonly CatalogCareer[], { state, cluster }: CatalogFilter): FilterResult {
  if (state === "grow" && !cluster) return { careers: [], needsCluster: true };
  return {
    careers: careers.filter(
      (c) => (!cluster || c.cluster === cluster) && (state !== "start" || c.pathway === "entry"),
    ),
    needsCluster: false,
  };
}

const STATE_PARAMS: Readonly<Record<string, EntryState>> = {
  boshlayapman: "start",
  almashtiraman: "switch",
  osmoqchiman: "grow",
};

/** `?holat=…&klaster=…` → filter. Unknown values are ignored. */
export function parseCatalogQuery(
  params: { holat?: string | null; klaster?: string | null },
  clusters: readonly SnapshotCluster[],
): CatalogFilter {
  const state = params.holat ? STATE_PARAMS[params.holat] : undefined;
  const cluster = clusters.some((c) => c.key === params.klaster) ? (params.klaster ?? undefined) : undefined;
  return { ...(state && { state }), ...(cluster && { cluster }) };
}

/** Public signal label: the backend label verbatim. Unknown key → null (never invented). */
export function signalLabel(key: string, snapshot: CareerSnapshot = careerSnapshot): string | null {
  return snapshot.signalLabels[key] ?? null;
}

export function catalogTelegramUrl(career: CatalogCareer, state?: EntryState): string {
  return buildTelegramUrl({ source: "catalog", career: { slug: career.slug, status: "active" }, state });
}
