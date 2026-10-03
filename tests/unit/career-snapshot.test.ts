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
  it("keeps weight >= 4, highest first, at most 3, ties in canonical order", () => {
    expect(
      selectDisplaySignals(
        { attention_to_detail: 4, visual_logic: 5, logical_thinking: 4, creative_design: 4, problem_solving: 3 },
        ORDER,
      ),
    ).toEqual(["visual_logic", "logical_thinking", "creative_design"]);
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
        signals: ["visual_logic", "logical_thinking"],
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

describe("committed snapshot (content/careers.snapshot.json)", () => {
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
