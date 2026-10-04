/**
 * Read-only production checks before the P0 + B3 merge gate closes.
 *
 *   NODE_USE_ENV_PROXY=1 node scripts/production-check.ts https://<backend-host>
 *   (NODE_USE_ENV_PROXY is only needed behind an HTTP proxy, e.g. the Claude cloud sandbox)
 *
 * 1. Taxonomy version label served by the production DB.
 * 2. API ↔ snapshot parity for the 25 careers (slug, title, cluster, months, pathway).
 * 3. Signal parity: display signals recomputed from the production weights
 *    with the same rule as the snapshot (weights are only read, never printed).
 * 4. Deployed-code markers: /compare gone, v0 /diagnostic/stage1 → 410,
 *    v1 PDF endpoint present, no salary in the public taxonomy.
 * Exit code 1 if any check fails. Writes nothing anywhere.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { selectDisplaySignals, type CareerSnapshot } from "../lib/career-snapshot.ts";

const base = process.argv[2]?.replace(/\/+$/, "");
if (!base || !/^https?:\/\//.test(base)) {
  console.error("usage: node scripts/production-check.ts https://<backend-host>");
  process.exit(2);
}

const snapshot: CareerSnapshot = JSON.parse(
  readFileSync(join(import.meta.dirname, "..", "content", "careers.snapshot.json"), "utf8"),
);
const results: { check: string; ok: boolean; detail: string }[] = [];
const record = (check: string, ok: boolean, detail = "") => results.push({ check, ok, detail });

async function get(path: string, init?: RequestInit): Promise<{ status: number; body: unknown }> {
  const res = await fetch(`${base}${path}`, { ...init, signal: AbortSignal.timeout(20000) });
  const text = await res.text();
  try {
    return { status: res.status, body: JSON.parse(text) };
  } catch {
    return { status: res.status, body: text };
  }
}

type Row = { slug: string; title_uz: string; cluster: string; learning_months: number | null; pathway_type: string | null };

const full = await get("/api/v1/taxonomy");
const tax = full.body as { version?: string; clusters?: Record<string, { careers: Record<string, { signals?: Record<string, number> }> }> };
// The label alone can lie (the DB was seeded as "v1.0" from the v2.2 JSON); checks 2–3 compare content.
record("1. DB taxonomy version label", full.status === 200 && tax.version === snapshot.taxonomyVersion,
  `served label: ${tax.version ?? "?"} · snapshot: ${snapshot.taxonomyVersion}`);

const careers = await get("/api/v1/taxonomy/careers");
const rows = ((careers.body as { careers?: Row[] }).careers ?? []) as Row[];
const bySlug = new Map(rows.map((r) => [r.slug, r]));
const mismatches: string[] = [];
for (const c of snapshot.careers) {
  const r = bySlug.get(c.slug);
  if (!r) { mismatches.push(`${c.slug}: missing in API`); continue; }
  if (r.title_uz !== c.title) mismatches.push(`${c.slug}: title "${r.title_uz}" ≠ "${c.title}"`);
  if (r.cluster !== c.cluster) mismatches.push(`${c.slug}: cluster ${r.cluster} ≠ ${c.cluster}`);
  if ((r.learning_months ?? null) !== c.learningMonths) mismatches.push(`${c.slug}: months ${r.learning_months} ≠ ${c.learningMonths}`);
  if ((r.pathway_type ?? null) !== c.pathway) mismatches.push(`${c.slug}: pathway ${r.pathway_type} ≠ ${c.pathway}`);
}
for (const r of rows) if (!snapshot.careers.some((c) => c.slug === r.slug)) mismatches.push(`${r.slug}: in API, not in snapshot`);
record("2. API ↔ snapshot (25 careers)", careers.status === 200 && mismatches.length === 0,
  mismatches.length ? mismatches.join("; ") : `${rows.length} careers identical`);

const signalDiffs: string[] = [];
for (const cluster of Object.values(tax.clusters ?? {})) {
  for (const [slug, career] of Object.entries(cluster.careers ?? {})) {
    const snap = snapshot.careers.find((c) => c.slug === slug);
    if (!snap) continue;
    const prod = selectDisplaySignals(career.signals ?? {}, snapshot.signalKeys);
    if (JSON.stringify(prod) !== JSON.stringify(snap.signals)) signalDiffs.push(`${slug}: [${prod}] ≠ [${snap.signals}]`);
  }
}
record("3. Signal parity (DB weights → display signals)", full.status === 200 && signalDiffs.length === 0,
  signalDiffs.length ? `${signalDiffs.length} differ: ${signalDiffs.join("; ")}` : "all identical");

const stage1 = await get("/diagnostic/stage1", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ init_data: "x", answers: {} }) });
record("4b. v0 /diagnostic/stage1 → 410", stage1.status === 410, `HTTP ${stage1.status}`);
const openapi = await get("/openapi.json");
const paths = Object.keys((openapi.body as { paths?: object }).paths ?? {});
// The old /compare route was shadowed by /{career_slug}; only its absence from the schema proves the new code.
record("4a. /compare endpoint removed", openapi.status === 200 && !paths.includes("/api/v1/career-intelligence/compare"), "");
record("4c. v1 PDF endpoint deployed", paths.includes("/api/v1/deep-diagnostic/{session_id}/pdf"), openapi.status === 200 ? "" : `openapi HTTP ${openapi.status}`);
record("4d. no salary in public taxonomy", full.status === 200 && !JSON.stringify(full.body).includes("salary"), full.status === 200 ? "" : `HTTP ${full.status}`);

for (const r of results) console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.check}${r.detail ? `  — ${r.detail}` : ""}`);
process.exit(results.every((r) => r.ok) ? 0 : 1);
