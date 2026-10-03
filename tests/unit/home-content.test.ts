import { describe, expect, it } from "vitest";
import { splitHighlight } from "@/components/home/Hero";
import * as home from "@/content/home";

function allStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(allStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(allStrings);
  return [];
}

const strings = allStrings(home);
const text = strings.join("\n");

describe("homepage content rules", () => {
  it("has the required hero positioning", () => {
    expect(home.hero.titleLine1).toBe("Kasb tanlashda taxmin emas.");
    expect(home.hero.titleLine2).toBe("O’zingizga mos yo’lni tushunishdan boshlang.");
    expect(home.hero.secondaryHref).toBe("/qanday-ishlaydi");
    // R3: only one short segment of the H1 is Blue, and it must exist in the line.
    expect(home.hero.titleLine2).toContain(home.hero.titleHighlight);
    expect(home.hero.titleHighlight.length).toBeLessThan(home.hero.titleLine2.length / 2);
  });

  it("has the journey in the agreed order", () => {
    expect(home.journey.steps.map((s) => s.question)).toEqual([
      "Men kimman?",
      "Menga nima mos?",
      "Nega?",
      "Hozir qanchalik tayyorman?",
      "Qanday yetib boraman?",
      "Keyingi qadam",
    ]);
  });

  it("has 6 problems and 6 how-it-works steps", () => {
    expect(home.problems.items).toHaveLength(6);
    expect(home.howItWorks.steps).toHaveLength(6);
  });

  it.each([
    /eng aniq/i,
    /ilmiy (jihatdan )?isbotlangan/i,
    /haqiqiy kasb/i,
    /kafolat/i,
    /taqdir/i,
    /AI .*hal qiladi/i,
    /sun’iy intellekt .*hal qiladi/i,
    /oddiy (kasb )?test(i)? sifatida/i,
  ])("contains no forbidden claim %s", (pattern) => {
    expect(text).not.toMatch(pattern);
  });

  it("contains no numbers except explicit 100% disclaimers (no invented statistics)", () => {
    const allowed = ["100% aniq ayta olmaydi", "“100% mos” degan va’dalar bermaymiz", "Natija 100% aniq bo’ladimi?"];
    let stripped = text;
    for (const phrase of allowed) {
      expect(text).toContain(phrase);
      stripped = stripped.split(phrase).join("");
    }
    expect(stripped).not.toMatch(/\d/);
  });

  it("ships no social proof data until it is verified", () => {
    const { testimonials, stats, partners } = home.socialProof.data;
    expect([...testimonials, ...stats, ...partners]).toHaveLength(0);
  });

  it("has unique FAQ ids", () => {
    const ids = home.faqTeaser.items.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});


describe("splitHighlight", () => {
  it("splits around the highlight", () => {
    expect(splitHighlight("O’zingizga mos yo’lni tushunishdan boshlang.", "mos yo’lni")).toEqual([
      "O’zingizga ",
      "mos yo’lni",
      " tushunishdan boshlang.",
    ]);
  });

  it("falls back to plain text when the highlight is missing", () => {
    expect(splitHighlight("Matn", "yo’q")).toEqual(["Matn", "", ""]);
    expect(splitHighlight("Matn")).toEqual(["Matn", "", ""]);
  });
});
