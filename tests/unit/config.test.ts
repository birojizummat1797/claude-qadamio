import { describe, expect, it } from "vitest";
import {
  DEFAULT_SITE_URL,
  DEFAULT_TELEGRAM_BOT_URL,
  parseConfig,
  parseSiteUrl,
  parseTelegramBotUrl,
} from "@/lib/config";

describe("parseTelegramBotUrl", () => {
  it("accepts a valid t.me link and normalizes it", () => {
    expect(parseTelegramBotUrl("https://t.me/qadam_io_bot/")).toBe("https://t.me/qadam_io_bot");
    expect(parseTelegramBotUrl("  https://t.me/QadamBot  ")).toBe("https://t.me/QadamBot");
  });

  it.each([
    undefined,
    "",
    "http://t.me/qadam_bot",
    "https://t.me/ab",
    "https://evil.example/qadam_bot",
    "https://t.me/qadam_bot?start=x",
    "https://t.me/1qadam_bot",
    "javascript:alert(1)",
  ])("falls back to the default for %s", (value) => {
    expect(parseTelegramBotUrl(value)).toBe(DEFAULT_TELEGRAM_BOT_URL);
  });
});

describe("parseSiteUrl", () => {
  it("returns the origin without a trailing slash", () => {
    expect(parseSiteUrl("https://qadam.io/")).toBe("https://qadam.io");
    expect(parseSiteUrl("https://staging.qadam.io/path")).toBe("https://staging.qadam.io");
  });

  it("allows http only for localhost", () => {
    expect(parseSiteUrl("http://localhost:3000")).toBe("http://localhost:3000");
    expect(parseSiteUrl("http://qadam.io")).toBe(DEFAULT_SITE_URL);
  });

  it("falls back on garbage", () => {
    expect(parseSiteUrl("not a url")).toBe(DEFAULT_SITE_URL);
    expect(parseSiteUrl(undefined)).toBe(DEFAULT_SITE_URL);
  });
});

describe("parseConfig", () => {
  it("has safe defaults: pricing hidden, analytics off in production", () => {
    const config = parseConfig({ NODE_ENV: "production" });
    expect(config).toEqual({
      telegramBotUrl: DEFAULT_TELEGRAM_BOT_URL,
      siteUrl: DEFAULT_SITE_URL,
      showPricing: false,
      analytics: "none",
    });
  });

  it("shows pricing only for the exact string 'true'", () => {
    expect(parseConfig({ NEXT_PUBLIC_SHOW_PRICING: "true" }).showPricing).toBe(true);
    expect(parseConfig({ NEXT_PUBLIC_SHOW_PRICING: "1" }).showPricing).toBe(false);
    expect(parseConfig({ NEXT_PUBLIC_SHOW_PRICING: "yes" }).showPricing).toBe(false);
  });

  it("uses the console adapter by default in development", () => {
    expect(parseConfig({ NODE_ENV: "development" }).analytics).toBe("console");
    expect(parseConfig({ NODE_ENV: "development", NEXT_PUBLIC_ANALYTICS: "none" }).analytics).toBe("none");
    expect(parseConfig({ NODE_ENV: "production", NEXT_PUBLIC_ANALYTICS: "gtag" }).analytics).toBe("none");
  });
});
