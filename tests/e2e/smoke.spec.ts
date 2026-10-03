import { expect, test } from "@playwright/test";

const TELEGRAM_HREF = /^https:\/\/t\.me\/[A-Za-z][A-Za-z0-9_]{4,31}\?start=w1-[a-z]{2,3}(-[a-z0-9_]{2,40})?$/;

test("homepage renders the hero and a Telegram CTA with attribution", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Kasb tanlashda taxmin emas.");
  await expect(page).toHaveTitle(/Qadam\.io/);
  await expect(page.locator("html")).toHaveAttribute("lang", "uz");

  const hero = page.locator("main").getByRole("link", { name: /Diagnostikani boshlash/ });
  await expect(hero).toHaveAttribute("href", /\?start=w1-hr$/);
  await expect(hero).toHaveAttribute("rel", "noopener noreferrer");

  const telegramLinks = page.locator('a[href^="https://t.me/"]');
  const count = await telegramLinks.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    await expect(telegramLinks.nth(i)).toHaveAttribute("href", TELEGRAM_HREF);
  }
});

test("no horizontal scroll", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});

test("skip link moves focus to main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Asosiy kontentga o’tish" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

test("mobile menu is a modal dialog that closes on Escape and restores focus", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop", "mobile only");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Menyuni ochish" });
  await toggle.click();

  const dialog = page.getByRole("dialog", { name: "Asosiy navigatsiya" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("button", { name: "Menyuni yopish" })).toBeFocused();
  await expect(dialog.getByRole("link", { name: "FAQ" })).toBeVisible();
  await expect(dialog.getByRole("link", { name: /Diagnostikani boshlash/ })).toHaveAttribute("href", /\?start=w1-mn$/);

  // Background is inert while the modal is open: Tab never reaches page content
  // (it may pass through browser UI, which shows up as <body>).
  for (let i = 0; i < 12; i++) {
    await page.keyboard.press("Tab");
    const leaked = await page.evaluate(() => {
      const el = document.activeElement;
      return !!el && el !== document.body && !el.closest("dialog");
    });
    expect(leaked).toBe(false);
  }

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(toggle).toBeFocused();
});

test("mobile menu closes after navigating", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop", "mobile only");
  await page.goto("/mavjud-emas");
  await page.getByRole("button", { name: "Menyuni ochish" }).click();
  const dialog = page.getByRole("dialog", { name: "Asosiy navigatsiya" });
  await dialog.getByRole("link", { name: "Bosh sahifa", exact: true }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(dialog).toBeHidden();
  const overflow = await page.evaluate(() => document.documentElement.style.overflow);
  expect(overflow).toBe("");
});

test("desktop header shows navigation and header CTA", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop only");
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Asosiy navigatsiya" });
  await expect(nav.getByRole("link", { name: "Bosh sahifa" })).toHaveAttribute("aria-current", "page");
  await expect(page.locator("header").getByRole("link", { name: /Diagnostikani boshlash/ })).toHaveAttribute(
    "href",
    /\?start=w1-hd$/,
  );
});

test("unknown route returns 404 page", async ({ page }) => {
  const response = await page.goto("/mavjud-emas");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1")).toHaveText("Sahifa topilmadi");
});

test("security headers are set", async ({ request }) => {
  const response = await request.get("/");
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
  expect(response.headers()["x-powered-by"]).toBeUndefined();
});
