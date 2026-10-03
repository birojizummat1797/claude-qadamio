import { describe, expect, it, vi } from "vitest";
import {
  catalogCopy,
  catalogStates,
  formatLearningMonths,
  pathwayLabels,
  plannedCareers,
  signalPhrases,
} from "@/content/careers";
import {
  careerSnapshot,
  catalogFromSnapshot,
  catalogTelegramUrl,
  filterCareers,
  loadCareerCatalog,
  mergeCatalog,
  parseApiCareers,
  parseCatalogQuery,
} from "@/lib/careers";
import { START_PAYLOAD_RE, TELEGRAM_START_MAX_LENGTH } from "@/lib/telegram";

const catalog = catalogFromSnapshot();
const all = catalog.careers;

function apiRow(c: (typeof all)[number]) {
  return {
    slug: c.slug,
    title_uz: c.title,
    cluster: c.cluster,
    cluster_uz: c.clusterTitle,
    learning_months: c.learningMonths,
    pathway_type: c.pathway,
  };
}

const okResponse = (body: unknown) =>
  vi.fn(async () => new Response(JSON.stringify(body), { status: 200 })) as unknown as typeof fetch;

describe("catalog copy", () => {
  it("has a phrase for exactly the 13 backend signals", () => {
    expect(Object.keys(signalPhrases).sort()).toEqual([...careerSnapshot.signalKeys].sort());
  });

  it("phrases carry no numbers, percentages or verdicts", () => {
    for (const phrase of Object.values(signalPhrases)) {
      expect(phrase).not.toMatch(/\d|%|siz uchun|aniq mos|eng yaxshi|kafolat/i);
    }
  });

  it("labels pathways without technical names", () => {
    expect(pathwayLabels).toEqual({ entry: "Boshlash uchun", role: "Kasb sifatida", advanced: "Keyingi bosqich" });
    // Visible strings only (object keys are data-layer names).
    const visible = JSON.stringify([catalogCopy, Object.values(pathwayLabels), Object.values(signalPhrases)]);
    expect(visible).not.toMatch(/\b(entry|role|advanced)\b/i);
  });

  it("makes no salary, percentage or certainty claims", () => {
    const copy = JSON.stringify(catalogCopy);
    expect(copy).not.toMatch(/maosh|daromad|so’m|\$|%|kafolat|eng aniq|siz uchun/i);
  });

  it("formats months as an estimate", () => {
    expect(formatLearningMonths(6)).toBe("taxminan 6 oy");
  });
});

describe("planned careers", () => {
  it("lists the 5 brief-only careers, none of them in the backend snapshot", () => {
    expect(plannedCareers).toHaveLength(5);
    const titles = new Set(all.map((c) => c.title.toLowerCase()));
    const slugs = new Set(all.map((c) => c.slug));
    for (const p of plannedCareers) {
      expect(p.status).toBe("planned");
      expect(titles.has(p.title.toLowerCase())).toBe(false);
      expect(slugs.has(p.id)).toBe(false);
    }
  });
});

describe("filterCareers", () => {
  const count = (f: Parameters<typeof filterCareers>[1]) => filterCareers(all, f).careers.length;

  it("Hammasi = 25, Boshlayapman = 8 (entry), Almashtiraman = 25", () => {
    expect(count({})).toBe(25);
    expect(count({ state: "start" })).toBe(8);
    expect(filterCareers(all, { state: "start" }).careers.every((c) => c.pathway === "entry")).toBe(true);
    expect(count({ state: "switch" })).toBe(25);
  });

  it("O’smoqchiman asks for the current field first and never leaves it", () => {
    expect(filterCareers(all, { state: "grow" })).toEqual({ careers: [], needsCluster: true });
    const marketing = filterCareers(all, { state: "grow", cluster: "digital_marketing" });
    expect(marketing.needsCluster).toBe(false);
    expect(marketing.careers.map((c) => c.slug)).toEqual([
      "smm_manager",
      "performance_marketing",
      "seo",
      "content_marketing",
    ]);
  });

  it("combines cluster and state with AND, including real empty results", () => {
    expect(count({ cluster: "software" })).toBe(4);
    expect(count({ state: "start", cluster: "software" })).toBe(1);
    expect(count({ state: "start", cluster: "data_ai" })).toBe(0);
    expect(count({ state: "start", cluster: "product_project" })).toBe(0);
  });

  it("keeps backend order", () => {
    expect(filterCareers(all, {}).careers.map((c) => c.slug)).toEqual(careerSnapshot.careers.map((c) => c.slug));
  });
});

describe("parseCatalogQuery", () => {
  it("maps Uzbek URL values and ignores unknown ones", () => {
    expect(parseCatalogQuery({ holat: "boshlayapman", klaster: "software" }, catalog.clusters)).toEqual({
      state: "start",
      cluster: "software",
    });
    expect(parseCatalogQuery({ holat: "osmoqchiman" }, catalog.clusters)).toEqual({ state: "grow" });
    expect(parseCatalogQuery({ holat: "hack", klaster: "../etc" }, catalog.clusters)).toEqual({});
  });

  it("uses the same URL values as catalogStates", () => {
    for (const [state, { param }] of Object.entries(catalogStates)) {
      expect(parseCatalogQuery({ holat: param }, catalog.clusters).state).toBe(state);
    }
  });
});

describe("catalogTelegramUrl", () => {
  const BOT_PREFIX = /^https:\/\/t\.me\/[A-Za-z0-9_]+\?start=/;

  it.each(all.map((c) => [c.slug, c] as const))("%s builds valid v1 and v2 links", (_slug, career) => {
    for (const state of [undefined, "start", "switch", "grow"] as const) {
      const url = catalogTelegramUrl(career, state);
      expect(url).toMatch(BOT_PREFIX);
      const payload = url.split("?start=")[1] ?? "";
      expect(payload).toMatch(START_PAYLOAD_RE);
      expect(payload.length).toBeLessThanOrEqual(TELEGRAM_START_MAX_LENGTH);
    }
  });

  it("uses the catalog source code and carries the state", () => {
    const frontend = all.find((c) => c.slug === "frontend_development")!;
    expect(catalogTelegramUrl(frontend)).toMatch(/\?start=w1-ct-frontend_development$/);
    expect(catalogTelegramUrl(frontend, "start")).toMatch(/\?start=w2-ct-bs-frontend_development$/);
  });
});

describe("API adapter", () => {
  it("falls back to the snapshot without an API URL", async () => {
    const fetchImpl = vi.fn() as unknown as typeof fetch;
    const result = await loadCareerCatalog({ apiUrl: "", fetchImpl });
    expect(result.source).toBe("snapshot");
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("uses API rows and keeps snapshot signals when fields match", async () => {
    const result = await loadCareerCatalog({
      apiUrl: "https://api.example.uz/",
      fetchImpl: okResponse({ careers: all.map(apiRow), total: all.length }),
    });
    expect(result.source).toBe("api");
    expect(result.careers).toEqual(all);
  });

  it("hides signals for a career whose backend fields changed", () => {
    const rows = all.map(apiRow);
    rows[0] = { ...rows[0]!, learning_months: 7 };
    const merged = mergeCatalog(careerSnapshot, parseApiCareers({ careers: rows })!);
    expect(merged.careers[0]!.signals).toEqual([]);
    expect(merged.careers[1]!.signals.length).toBeGreaterThan(0);
  });

  it("shows a career that is new in the API without signals", () => {
    const merged = mergeCatalog(
      careerSnapshot,
      parseApiCareers({
        careers: [
          { slug: "new_role", title_uz: "New Role", cluster: "software", cluster_uz: "Dasturlash", pathway_type: "x" },
        ],
      })!,
    );
    expect(merged.careers).toEqual([
      {
        slug: "new_role",
        title: "New Role",
        cluster: "software",
        clusterTitle: "Dasturlash",
        learningMonths: null,
        pathway: null,
        signals: [],
      },
    ]);
  });

  it.each([
    ["HTTP error", vi.fn(async () => new Response("no", { status: 500 }))],
    ["invalid body", vi.fn(async () => new Response(JSON.stringify({ careers: "x" }), { status: 200 }))],
    ["network error", vi.fn(async () => Promise.reject(new Error("down")))],
  ])("falls back to the snapshot on %s", async (_name, fetchImpl) => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const result = await loadCareerCatalog({
      apiUrl: "https://api.example.uz",
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(result.source).toBe("snapshot");
    expect(result.careers).toHaveLength(25);
    warn.mockRestore();
  });

  it("drops invalid API rows", () => {
    expect(
      parseApiCareers({
        careers: [
          { slug: "Bad Slug", title_uz: "x", cluster: "software", cluster_uz: "D" },
          { slug: "ok_one", title_uz: "", cluster: "software", cluster_uz: "D" },
          { slug: "ok_two", title_uz: "Ok", cluster: "software", cluster_uz: "D", learning_months: 6 },
        ],
      }),
    ).toHaveLength(1);
  });
});
