import { describe, expect, it } from "vitest";
import {
  buildStartPayload,
  buildTelegramUrl,
  CTA_SOURCES,
  START_PAYLOAD_RE,
  TELEGRAM_START_MAX_LENGTH,
  type CtaSource,
} from "@/lib/telegram";

const BOT = "https://t.me/test_qadam_bot";
const sources = Object.keys(CTA_SOURCES) as CtaSource[];

describe("CTA_SOURCES", () => {
  it("has unique codes", () => {
    const codes = Object.values(CTA_SOURCES);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it.each(sources)("%s produces a spec-valid payload", (source) => {
    const payload = buildStartPayload({ source });
    expect(payload).toMatch(START_PAYLOAD_RE);
  });
});

describe("buildStartPayload", () => {
  it("matches the spec examples", () => {
    expect(buildStartPayload({ source: "hero" })).toBe("w1-hr");
    expect(buildStartPayload({ source: "footer" })).toBe("w1-ft");
    expect(
      buildStartPayload({ source: "careerDetail", career: { slug: "frontend_development", status: "active" } }),
    ).toBe("w1-cd-frontend_development");
  });

  it("never sends a planned (taxonomy gap) career to the bot", () => {
    expect(buildStartPayload({ source: "careerDetail", career: { slug: "full_stack", status: "planned" } })).toBe(
      "w1-cd",
    );
  });

  it.each(["Frontend", "front-end", "a", "x".repeat(41), "../etc", "<script>", "data analytics", ""])(
    "drops an invalid slug %j",
    (slug) => {
      expect(buildStartPayload({ source: "catalog", career: { slug, status: "active" } })).toBe("w1-ct");
    },
  );

  it("stays within Telegram's 64-char limit for the longest allowed slug", () => {
    const payload = buildStartPayload({ source: "careerDetail", career: { slug: "x".repeat(40), status: "active" } });
    expect(payload.length).toBeLessThanOrEqual(TELEGRAM_START_MAX_LENGTH);
    expect(payload).toMatch(START_PAYLOAD_RE);
  });
});

describe("buildTelegramUrl", () => {
  it("appends the start payload", () => {
    expect(buildTelegramUrl({ source: "hero" }, BOT)).toBe(`${BOT}?start=w1-hr`);
    expect(
      buildTelegramUrl({ source: "careerDetail", career: { slug: "data_analytics", status: "active" } }, BOT),
    ).toBe(`${BOT}?start=w1-cd-data_analytics`);
  });

  it("uses the configured bot by default", () => {
    expect(buildTelegramUrl({ source: "header" })).toMatch(/^https:\/\/t\.me\/[A-Za-z][A-Za-z0-9_]{4,31}\?start=w1-hd$/);
  });
});
