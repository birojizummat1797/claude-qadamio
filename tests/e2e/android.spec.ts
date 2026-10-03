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

      const cta = page.locator("#hero-title ~ div").getByRole("link", { name: /Diagnostikani boshlash/ });
      await expect(cta).toBeVisible();
      const box = await cta.boundingBox();
      expect(box!.height).toBeGreaterThanOrEqual(44);
      // Primary CTA is visible without scrolling on every tested phone.
      expect(box!.y + box!.height).toBeLessThanOrEqual(page.viewportSize()!.height);

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
