import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const CONTENT_DIR = join(process.cwd(), "content");
const files = readdirSync(CONTENT_DIR, { recursive: true })
  .map(String)
  .filter((f) => f.endsWith(".ts"));

describe("content typography", () => {
  // IBM Plex Sans has no glyph for U+02BB / U+02BC; they render with a gap
  // ("O ʻ zingizga"). Uzbek oʻ/gʻ and tutuq belgisi use U+2019 (’) on this site.
  it.each(files)("%s uses ’ instead of ʻ/ʼ", (file) => {
    const text = readFileSync(join(CONTENT_DIR, file), "utf8");
    expect(text).not.toMatch(/[ʻʼ]/);
  });
});
