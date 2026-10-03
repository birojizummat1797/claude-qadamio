import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Locks WCAG 2.2 contrast for every color pair the UI actually uses.
 * Reads tokens straight from app/globals.css so a palette change that
 * breaks accessibility fails here, not in production.
 */

const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
const tokens = new Map<string, string>();
for (const [, name, hex] of css.matchAll(/--color-([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)) {
  tokens.set(name!, hex!.toLowerCase());
}

function hex(name: string): string {
  const value = tokens.get(name);
  if (!value) throw new Error(`Unknown token --color-${name}`);
  return value;
}

function luminance(color: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(color.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}

export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi! + 0.05) / (lo! + 0.05);
}

const TEXT = 4.5; // WCAG AA, normal text
const UI = 3; // WCAG 1.4.11, graphics and control boundaries

const steps = ["step-1", "step-2", "step-3", "step-4", "step-5"];

// [foreground, background, minimum, where]
const pairs: Array<[string, string, number, string]> = [
  ...["paper", "surface", "primary-soft"].flatMap((bg) => [
    ["fg", bg, TEXT, "body text"] as [string, string, number, string],
    ["fg-muted", bg, TEXT, "secondary text"] as [string, string, number, string],
    ["midnight", bg, TEXT, "headings"] as [string, string, number, string],
  ]),
  ["primary", "paper", TEXT, "links, active nav"],
  ["primary", "surface", TEXT, "step numbers, comparison header"],
  ["primary", "primary-soft", TEXT, "icons on Mist"],
  ["primary-hover", "paper", TEXT, "link hover"],
  ["on-primary", "primary", TEXT, "CTA label"],
  ["on-primary", "primary-hover", TEXT, "CTA hover label"],
  ["primary", "surface", TEXT, "eyebrows on surface sections"],
  ...steps.flatMap((s) => [
    ["midnight", s, TEXT, "journey question"] as [string, string, number, string],
    ["fg-muted", s, TEXT, "journey caption"] as [string, string, number, string],
    ["primary", s, TEXT, "journey number"] as [string, string, number, string],
  ]),
  ["on-midnight", "midnight", TEXT, "dark zone text"],
  ["on-midnight-muted", "midnight", TEXT, "dark zone secondary text"],
  ["on-midnight-link", "midnight", TEXT, "dark zone links, focus ring"],
  ["on-midnight", "midnight-2", TEXT, "dark cards"],
  ["success", "surface", TEXT, "success text"],
  ["success", "success-soft", TEXT, "success banner"],
  ["warning", "surface", TEXT, "warning text"],
  ["warning", "warning-soft", TEXT, "warning banner"],
  ["error", "surface", TEXT, "error text"],
  ["error", "error-soft", TEXT, "error banner"],
  ["line-strong", "surface", UI, "control borders"],
  ["line-strong", "paper", UI, "control borders on paper"],
  ["primary", "paper", UI, "focus ring"],
  ["accent", "surface", UI, "decorative quote marks"],
  ["spark", "surface", UI, "next-step marker ring"],
  ["spark", "midnight", UI, "next-step marker dot"],
  ["warning-icon", "surface", UI, "warning icon"],
];

describe("brand palette contrast (WCAG 2.2)", () => {
  it.each(pairs)("%s on %s ≥ %s (%s)", (fg, bg, min) => {
    expect(contrast(hex(fg), hex(bg))).toBeGreaterThanOrEqual(min);
  });

  it("keeps brand and semantic colors distinct (success is not the brand)", () => {
    expect(hex("success")).not.toBe(hex("primary"));
    expect(contrast(hex("spark"), hex("warning"))).toBeGreaterThan(1.5);
  });

  it("never uses Clay or Spark as text tokens", () => {
    // Accent and Spark fail AA for text on light backgrounds by design.
    expect(contrast(hex("accent"), hex("paper"))).toBeLessThan(TEXT);
    expect(contrast(hex("spark"), hex("paper"))).toBeLessThan(TEXT);
  });
});
