import { devices, expect, test } from "@playwright/test";

/**
 * R5: Android viewport check. Emulates common Android screens (size, DPR,
 * touch, mobile UA). Real-hardware color rendering cannot be emulated here;
 * contrast is covered by tests/unit/contrast.test.ts and the axe scan.
 */
const ANDROID = ["Moto G4", "Galaxy S9+", "Galaxy A55", "Pixel 7"] as const;

for (const name of ANDROID) {
  test.describe(name, () => {
    const { defaultBrowserType: _ignored, ...device } = devices[name];
    void _ignored;
    test.use(device);

    test(`renders without overflow and keeps the CTA reachable`, async ({ page }, testInfo) => {
      // Device settings override the viewport, so run once instead of per project.
      test.skip(testInfo.project.name !== "mobile-390", "device matrix runs once");
      await page.goto("/");

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);

      // Primary hero interaction (D-1): the first situation card.
      const cta = page.locator("section", { has: page.locator("#hero-title") }).getByRole("link", { name: /Boshlayapman/ });
      await expect(cta).toBeVisible();
      const box = await cta.boundingBox();
      expect(box!.height).toBeGreaterThanOrEqual(44);
      // P2: the first situation card sits comfortably in the first view —
      // fully visible with at least 80px below it, so the next card starts to show.
      expect(box!.y + box!.height).toBeLessThanOrEqual(page.viewportSize()!.height - 80);

      // Body text never renders below 12px.
      const smallest = await page.evaluate(() => {
        let min = Infinity;
        for (const el of document.querySelectorAll("main p, main li, main a, main summary, footer p, footer a")) {
          const size = parseFloat(getComputedStyle(el).fontSize);
          if (el.getClientRects().length) min = Math.min(min, size);
        }
        return min;
      });
      expect(smallest).toBeGreaterThanOrEqual(12);
    });
  });
}

test("smallest phones (320×568): first situation card fully visible without scrolling", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-320", "runs once at 320px");
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/");
  const card = page.locator("section", { has: page.locator("#hero-title") }).getByRole("link", { name: /Boshlayapman/ });
  const box = await card.boundingBox();
  expect(box!.height).toBeGreaterThanOrEqual(44);
  expect(box!.y + box!.height).toBeLessThanOrEqual(568);
  // Body text is never shrunk below 15px to make it fit.
  const lead = await page.locator("#hero-title + p").evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
  expect(lead).toBeGreaterThanOrEqual(15);
});
