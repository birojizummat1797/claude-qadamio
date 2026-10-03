import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const WCAG = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

async function scan(page: import("@playwright/test").Page) {
  const results = await new AxeBuilder({ page }).withTags(WCAG).analyze();
  const summary = results.violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.length} → ${v.nodes[0]?.target.join(" ")}`);
  return { violations: results.violations, summary };
}

test("homepage has no WCAG A/AA violations (incl. color contrast)", async ({ page }) => {
  await page.goto("/");
  // Open one FAQ item so its answer text is checked too.
  await page.locator("#faq-aniqlik summary").click();
  const { violations, summary } = await scan(page);
  expect(violations, summary.join("\n")).toEqual([]);
});

test("404 page has no WCAG A/AA violations", async ({ page }) => {
  await page.goto("/mavjud-emas");
  const { violations, summary } = await scan(page);
  expect(violations, summary.join("\n")).toEqual([]);
});

test("open mobile menu has no WCAG A/AA violations", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop", "mobile only");
  await page.goto("/");
  await page.getByRole("button", { name: "Menyuni ochish" }).click();
  const { violations, summary } = await scan(page);
  expect(violations, summary.join("\n")).toEqual([]);
});
