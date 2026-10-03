import { describe, expect, it } from "vitest";
import { isActivePath } from "@/components/layout/NavLinks";

describe("isActivePath", () => {
  it("matches home only exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/faq", "/")).toBe(false);
  });

  it("matches nested routes", () => {
    expect(isActivePath("/yonalishlar/data-analytics", "/yonalishlar")).toBe(true);
    expect(isActivePath("/yonalishlarx", "/yonalishlar")).toBe(false);
  });
});
