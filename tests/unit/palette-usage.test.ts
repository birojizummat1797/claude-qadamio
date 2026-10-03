import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const ROOTS = ["app", "components"];
const files = ROOTS.flatMap((root) =>
  readdirSync(join(process.cwd(), root), { recursive: true })
    .map(String)
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => join(root, f)),
);
const source = files.map((f) => [f, readFileSync(join(process.cwd(), f), "utf8")] as const);

describe("palette usage rules", () => {
  it("no legacy B1/B2 color names remain", () => {
    for (const [file, text] of source) {
      expect(text, file).not.toMatch(/\b(?:text|bg|border|fill|ring)-(?:green|ink)(?:-[a-z0-9]+)?\b/);
    }
  });

  it("Clay and Spark are never used as text color", () => {
    for (const [file, text] of source) {
      expect(text, file).not.toMatch(/\btext-spark\b/);
      // text-accent is allowed only on aria-hidden decorative glyphs.
      for (const match of text.matchAll(/<[^>]*\btext-accent(?![-\w])[^>]*>/g)) {
        expect(match[0], file).toContain('aria-hidden="true"');
      }
    }
  });

  it("logo uses only Midnight/Blue/Mist (no Clay or Spark)", () => {
    const logo = source.find(([f]) => f.endsWith(join("layout", "Logo.tsx")))![1];
    expect(logo).not.toMatch(/\b(?:fill|text|bg)-(?:accent|spark)\b/);
    expect(logo).toMatch(/\bfill-primary\b/);
  });

  it("section labels (eyebrows) use Qadam Blue, not Clay (PM decision R1)", () => {
    for (const [file, text] of source) {
      expect(text, file).not.toMatch(/\btext-accent-text\b/);
    }
    const section = source.find(([f]) => f.endsWith(join("layout", "Section.tsx")))![1];
    expect(section).toMatch(/"text-primary"/);
  });

  it("Spark appears only as a next-step marker (journey, result preview)", () => {
    const users = source.filter(([, text]) => /\b(?:bg|ring)-spark\b/.test(text)).map(([f]) => f).sort();
    expect(users).toEqual([join("components", "home", "JourneyVisual.tsx"), join("components", "home", "ResultPreview.tsx")]);
  });
});
