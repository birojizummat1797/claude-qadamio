/**
 * Regenerates content/careers.snapshot.json from the backend taxonomy.
 * Run by hand when the backend taxonomy changes; CI never calls the network.
 *
 *   node scripts/sync-careers.ts <path-to-qadam/backend/data>
 *
 * Reads taxonomy_v1.json + signals_v1.json and writes public fields only
 * (see lib/career-snapshot.ts).
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildCareerSnapshot } from "../lib/career-snapshot.ts";

const dataDir = process.argv[2];
if (!dataDir) {
  console.error("usage: node scripts/sync-careers.ts <path-to-qadam/backend/data>");
  process.exit(1);
}

const readJson = (file: string): unknown => JSON.parse(readFileSync(join(dataDir, file), "utf8"));

const { snapshot, warnings } = buildCareerSnapshot(
  readJson("taxonomy_v1.json") as object,
  readJson("signals_v1.json") as object,
  new Date().toISOString().slice(0, 10),
);

for (const warning of warnings) console.warn(`warn: ${warning}`);

const out = join(import.meta.dirname, "..", "content", "careers.snapshot.json");
writeFileSync(out, `${JSON.stringify(snapshot, null, 2)}\n`);
console.log(
  `wrote ${snapshot.careers.length} careers, ${snapshot.clusters.length} clusters (taxonomy ${snapshot.taxonomyVersion})`,
);
