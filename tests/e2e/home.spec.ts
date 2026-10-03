import { expect, test } from "@playwright/test";

test.describe("homepage (B2)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero: positioning, situation cards to Telegram, secondary link to how-it-works", async ({ page }) => {
    const hero = page.locator("section", { has: page.locator("#hero-title") });
    await expect(page.locator("h1")).toHaveText(
      /Kasb tanlashda taxmin emas\.\s*O’zingizga mos yo’lni tushunishdan boshlang\./,
    );
    await expect(hero.getByRole("link", { name: /Boshlayapman/ })).toHaveAttribute("href", /\?start=w1-hr$/);
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
  test("hero offers exactly three situations, each starting the diagnostic (D-1)", async ({ page }) => {
    await page.goto("/");
    const hero = page.locator("section", { has: page.locator("#hero-title") });
    await expect(hero.getByRole("heading", { name: "Hozir qaysi holatdasiz?" })).toBeVisible();
    const cards = hero.getByRole("list").getByRole("link");
    await expect(cards).toHaveCount(3);
    for (const [i, title] of ["Boshlayapman", "Almashtiraman", "O’smoqchiman"].entries()) {
      await expect(cards.nth(i)).toContainText(title);
      await expect(cards.nth(i)).toHaveAttribute("href", /\?start=w1-hr$/);
    }
  });

  test("question cards are secondary discovery with their own source code", async ({ page }) => {
    await page.goto("/");
    const links = page.locator("section#savollar").getByRole("link", { name: /Shu savoldan boshlash/ });
    await expect(links).toHaveCount(6);
    await expect(links.first()).toHaveAttribute("href", /\?start=w1-pq$/);
  });

  test("shows the locked product principle (D-2)", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("section#natija h2")).toHaveText("Signallarni Qadam o’qiydi. Qarorni siz qilasiz.");
  });

  test("uses at most two Midnight zones and one Blue block (D-4)", async ({ page }) => {
    await page.goto("/");
    const counts = await page.evaluate(() => {
      const midnight = "rgb(14, 23, 51)";
      const blue = "rgb(47, 79, 224)";
      const zones = [...document.querySelectorAll("main > section, body > footer")].map(
        (el) => getComputedStyle(el).backgroundColor,
      );
      return { midnight: zones.filter((c) => c === midnight).length, blue: zones.filter((c) => c === blue).length };
    });
    // Midnight: result preview + final CTA (the footer continues the final CTA zone).
    expect(counts.midnight).toBe(3);
    expect(counts.blue).toBe(1);
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
