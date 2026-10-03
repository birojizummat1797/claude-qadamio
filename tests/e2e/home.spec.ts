import { expect, test } from "@playwright/test";

test.describe("homepage (B2)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero: positioning, primary CTA to Telegram, secondary CTA to how-it-works", async ({ page }) => {
    const hero = page.locator("section", { has: page.locator("#hero-title") });
    await expect(page.locator("h1")).toHaveText(
      /Kasb tanlashda taxmin emas\.\s*O’zingizga mos yo’lni tushunishdan boshlang\./,
    );
    await expect(hero.getByRole("link", { name: /Diagnostikani boshlash/ })).toHaveAttribute("href", /\?start=w1-hr$/);
    await expect(hero.getByRole("link", { name: "Qanday ishlaydi?" })).toHaveAttribute("href", "/qanday-ishlaydi");
  });

  test("journey has six steps in order", async ({ page }) => {
    const steps = page.getByRole("figure", { name: "Qadam yo’li" }).locator("li");
    await expect(steps).toHaveCount(6);
    await expect(steps.first()).toContainText("Men kimman?");
    await expect(steps.last()).toContainText("Keyingi qadam");
  });

  test("all homepage sections are present with one h1", async ({ page }) => {
    await expect(page.locator("h1")).toHaveCount(1);
    for (const id of ["natija", "savollar", "yol", "qanday-ishlaydi", "nega-qadam", "tamoyillar", "natijalar", "faq"]) {
      await expect(page.locator(`section#${id} h2`)).toBeVisible();
    }
    await expect(page.locator("#savollar li")).toHaveCount(6);
    await expect(page.locator("#qanday-ishlaydi ol > li")).toHaveCount(6);
  });

  test("social proof shows the honest empty state, no numbers or quotes", async ({ page }) => {
    const section = page.locator("section#natijalar");
    await expect(section).toContainText("Raqamlarni o’ylab topmaymiz");
    await expect(section.locator("blockquote, dl, img")).toHaveCount(0);
  });

  test("FAQ teaser expands with keyboard", async ({ page }) => {
    const summary = page.locator("#faq-aniqlik summary");
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#faq-aniqlik")).toHaveAttribute("open", "");
    await expect(page.locator("#faq-aniqlik")).toContainText("100% aniq ayta olmaydi");
  });

  test("final CTA links to Telegram with fc source", async ({ page }) => {
    const final = page.locator("section", { has: page.locator("#final-cta-title") });
    await expect(final.getByRole("link", { name: /Diagnostikani boshlash/ })).toHaveAttribute("href", /\?start=w1-fc$/);
  });

  test("no horizontal overflow on the full page", async ({ page }) => {
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
});

test.describe("homepage B2.2 additions", () => {
  test("hero question chips start the diagnostic in Telegram", async ({ page }) => {
    await page.goto("/");
    const hero = page.locator("section", { has: page.locator("#hero-title") });
    const chips = hero.getByRole("list").getByRole("link");
    await expect(chips).toHaveCount(5);
    for (let i = 0; i < 5; i++) {
      await expect(chips.nth(i)).toHaveAttribute("href", /\?start=w1-hr$/);
    }
  });

  test("result preview is clearly labelled as a sample and shows no numbers", async ({ page }) => {
    await page.goto("/");
    const preview = page.locator("section#natija figure");
    await expect(preview).toContainText("Namuna");
    await expect(preview).toContainText("Haqiqiy foydalanuvchi natijasi emas");
    await expect(preview).toContainText("ma’lumot yetarli emas");
    const text = await preview.innerText();
    expect(text).not.toMatch(/\d/);
  });
});
