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

  it("Spark appears only in the journey's next-step marker", () => {
    const users = source.filter(([, text]) => /\b(?:bg|ring)-spark\b/.test(text)).map(([f]) => f);
    expect(users).toEqual([join("components", "home", "JourneyVisual.tsx")]);
  });
});
