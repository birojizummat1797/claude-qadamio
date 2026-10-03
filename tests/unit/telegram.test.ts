import { describe, expect, it } from "vitest";
import {
  buildStartPayload,
  buildTelegramUrl,
  CTA_SOURCES,
  ENTRY_STATES,
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

describe("spec v2: visitor state", () => {
  it.each([
    ["start", "w2-hr-bs"],
    ["switch", "w2-hr-al"],
    ["grow", "w2-hr-os"],
  ] as const)("%s → %s", (state, payload) => {
    expect(buildStartPayload({ source: "hero", state })).toBe(payload);
    expect(buildTelegramUrl({ source: "hero", state }, BOT)).toBe(`${BOT}?start=${payload}`);
  });

  it("combines state and an active career", () => {
    expect(
      buildStartPayload({ source: "careerDetail", state: "switch", career: { slug: "data_analytics", status: "active" } }),
    ).toBe("w2-cd-al-data_analytics");
  });

  it("keeps v1 when there is no state (existing links unchanged)", () => {
    expect(buildStartPayload({ source: "hero" })).toBe("w1-hr");
  });

  it("ignores an unknown state at runtime and falls back to v1", () => {
    expect(buildStartPayload({ source: "hero", state: "admin" as never })).toBe("w1-hr");
  });

  it("matches the backend whitelist (backend/entry_context.py)", () => {
    expect(ENTRY_STATES).toEqual({ start: "bs", switch: "al", grow: "os" });
  });

  it("stays within 64 chars for the longest v2 payload", () => {
    const p = buildStartPayload({ source: "careerDetail", state: "grow", career: { slug: "x".repeat(40), status: "active" } });
    expect(p.length).toBeLessThanOrEqual(TELEGRAM_START_MAX_LENGTH);
    expect(p).toMatch(START_PAYLOAD_RE);
  });
});
