import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  buildCareerSnapshot,
  CAREER_SLUG_RE,
  normalizeLearningMonths,
  normalizePathway,
  selectDisplaySignals,
} from "@/lib/career-snapshot";
import { careerSnapshot } from "@/lib/careers";

const ORDER = ["logical_thinking", "problem_solving", "creative_design", "visual_logic", "attention_to_detail"];

describe("selectDisplaySignals", () => {
  it("keeps weight >= 4, picks the 3 heaviest (ties canonical), outputs canonical order", () => {
    // Picked: visual_logic (5), then logical_thinking and creative_design (4, canonical tie-break).
    // Output order is canonical, so the weight ranking is not exposed.
    expect(
      selectDisplaySignals(
        { attention_to_detail: 4, visual_logic: 5, logical_thinking: 4, creative_design: 4, problem_solving: 3 },
        ORDER,
      ),
    ).toEqual(["logical_thinking", "creative_design", "visual_logic"]);
  });

  it("drops unknown keys, low weights and non-numbers", () => {
    expect(selectDisplaySignals({ made_up: 5, problem_solving: 3, visual_logic: "5" }, ORDER)).toEqual([]);
    expect(selectDisplaySignals(null, ORDER)).toEqual([]);
  });
});

describe("normalizers", () => {
  it("accepts only the three pathway types", () => {
    expect(normalizePathway("entry")).toBe("entry");
    expect(normalizePathway("senior")).toBeNull();
    expect(normalizePathway(undefined)).toBeNull();
  });

  it("accepts whole months 1..36 only", () => {
    expect(normalizeLearningMonths(6)).toBe(6);
    for (const bad of [0, 4.5, 37, "6", null]) expect(normalizeLearningMonths(bad)).toBeNull();
  });
});

describe("buildCareerSnapshot", () => {
  const taxonomy = {
    version: "v9",
    clusters: {
      software: {
        uz: "Dasturlash",
        careers: {
          frontend_development: {
            uz: "Frontend Development",
            signals: { visual_logic: 5, logical_thinking: 4 },
            learning_months: 6,
            pathway_type: "role",
            salary_uzs: { min: 1 },
            salary_usd: { min: "j" },
            prerequisites: { english: "B1" },
          },
          "Bad Slug": { uz: "X", signals: {} },
          no_title: { signals: {} },
        },
      },
      empty: { uz: "Bo’sh", careers: {} },
    },
  };
  const signals = { version: "v1.0", signals: Object.fromEntries(ORDER.map((k) => [k, { uz: k }])) };
  const { snapshot, warnings } = buildCareerSnapshot(taxonomy, signals, "2026-10-03");

  it("keeps public fields only", () => {
    expect(snapshot.careers).toEqual([
      {
        slug: "frontend_development",
        title: "Frontend Development",
        cluster: "software",
        learningMonths: 6,
        pathway: "role",
        signals: ["logical_thinking", "visual_logic"],
      },
    ]);
    expect(JSON.stringify(snapshot)).not.toMatch(/salary|prerequisites|weight|"B1"/);
  });

  it("drops invalid records with a warning and omits empty clusters", () => {
    expect(warnings.filter((w) => w.includes("skipped"))).toHaveLength(2);
    expect(snapshot.clusters).toEqual([{ key: "software", title: "Dasturlash" }]);
    expect(snapshot.taxonomyVersion).toBe("v9");
  });
});

// Stable public IDs: changing one breaks deep links, bookmarks and analytics.
const STABLE_SLUGS = [
  "foundation_programming", "frontend_development", "backend_development", "mobile_development",
  "data_analytics", "data_science", "ai_engineering",
  "devops_cloud", "cybersecurity", "qa_automation",
  "ui_ux_design", "product_design", "graphic_design", "motion_design",
  "smm_manager", "performance_marketing", "seo", "content_marketing",
  "video_content", "brand_strategy",
  "product_management", "project_management", "business_analysis",
  "it_b2b_sales", "customer_success",
];

describe("committed snapshot (content/careers.snapshot.json)", () => {
  it("keeps the 25 slugs stable and in backend (editorial) order", () => {
    expect(careerSnapshot.careers.map((c) => c.slug)).toEqual(STABLE_SLUGS);
  });

  it("lists signals in canonical backend order", () => {
    for (const c of careerSnapshot.careers) {
      const idx = c.signals.map((s) => careerSnapshot.signalKeys.indexOf(s));
      expect(idx).toEqual([...idx].sort((a, b) => a - b));
    }
  });

  const raw = readFileSync(join(process.cwd(), "content", "careers.snapshot.json"), "utf8");

  it("matches backend taxonomy v2.2: 25 careers, 8 clusters, 13 signals", () => {
    expect(careerSnapshot.taxonomyVersion).toBe("v2.2");
    expect(careerSnapshot.careers).toHaveLength(25);
    expect(careerSnapshot.clusters).toHaveLength(8);
    expect(careerSnapshot.signalKeys).toHaveLength(13);
  });

  it("has unique valid slugs, known clusters and 1..3 known signals per career", () => {
    const slugs = careerSnapshot.careers.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    const clusters = new Set(careerSnapshot.clusters.map((c) => c.key));
    for (const c of careerSnapshot.careers) {
      expect(c.slug).toMatch(CAREER_SLUG_RE);
      expect(clusters.has(c.cluster)).toBe(true);
      expect(c.signals.length).toBeGreaterThan(0);
      expect(c.signals.length).toBeLessThanOrEqual(3);
      for (const s of c.signals) expect(careerSnapshot.signalKeys).toContain(s);
    }
  });

  it("contains no weights, salary or prerequisites", () => {
    expect(raw).not.toMatch(/salary|prerequisites|weight|boost/i);
    for (const c of careerSnapshot.careers) {
      expect(c.signals.every((s) => typeof s === "string")).toBe(true);
    }
  });

  it("splits pathways 8 entry / 12 role / 5 advanced", () => {
    const count = (p: string) => careerSnapshot.careers.filter((c) => c.pathway === p).length;
    expect([count("entry"), count("role"), count("advanced")]).toEqual([8, 12, 5]);
  });
});

// Optional: QADAM_BACKEND_DATA=<qadam/backend/data> checks the committed snapshot
// against the backend source (API/snapshot semantic equality). Skipped in CI.
const backendData = process.env.QADAM_BACKEND_DATA;
describe.skipIf(!backendData)("snapshot is in sync with the backend source", () => {
  it("rebuilds to the same public data", () => {
    const read = (f: string) => JSON.parse(readFileSync(join(backendData!, f), "utf8"));
    const { snapshot } = buildCareerSnapshot(read("taxonomy_v1.json"), read("signals_v1.json"), careerSnapshot.generatedAt);
    expect(snapshot).toEqual(careerSnapshot);
  });
});
