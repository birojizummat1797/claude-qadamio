// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ANALYTICS_EVENTS, sanitizeProps, setAnalyticsAdapter, track, type AnalyticsEvent } from "@/lib/analytics";

describe("sanitizeProps", () => {
  it("keeps only allowed, short string props", () => {
    expect(
      sanitizeProps({
        source: "hr",
        slug: "data_analytics",
        email: "user@example.com",
        userId: 42,
        cluster: "x".repeat(500),
      }),
    ).toEqual({ source: "hr", slug: "data_analytics" });
  });

  it("handles non-objects", () => {
    expect(sanitizeProps(null)).toEqual({});
    expect(sanitizeProps("hr")).toEqual({});
  });
});

describe("track", () => {
  const adapter = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("window", {});
    adapter.mockReset();
    setAnalyticsAdapter(adapter);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("covers every event from the brief", () => {
    expect([...ANALYTICS_EVENTS].sort()).toEqual(
      [
        "page_view",
        "hero_cta_click",
        "how_it_works_view",
        "career_category_view",
        "career_detail_view",
        "diagnostic_cta_click",
        "telegram_redirect",
        "pricing_view",
        "faq_expand",
        "content_view",
      ].sort(),
    );
  });

  it("forwards sanitized props to the adapter", () => {
    track("diagnostic_cta_click", { source: "cd", slug: "seo", phone: "+998" } as never);
    expect(adapter).toHaveBeenCalledWith("diagnostic_cta_click", { source: "cd", slug: "seo" });
  });

  it("ignores unknown events", () => {
    track("purchase" as AnalyticsEvent);
    expect(adapter).not.toHaveBeenCalled();
  });

  it("never throws when the adapter fails", () => {
    setAnalyticsAdapter(() => {
      throw new Error("provider down");
    });
    expect(() => track("page_view")).not.toThrow();
  });

  it("is a no-op on the server", () => {
    vi.unstubAllGlobals();
    track("page_view");
    expect(adapter).not.toHaveBeenCalled();
  });
});
