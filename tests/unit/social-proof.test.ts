import { describe, expect, it } from "vitest";
import { hasSocialProof, publishable } from "@/components/social/SocialProof";
import type { SocialProofData } from "@/content/types";

describe("social proof guard", () => {
  it("drops anything not explicitly verified", () => {
    const items = [
      { verified: true, name: "ok" },
      { verified: false, name: "demo" },
      { verified: "true", name: "string" },
      { verified: undefined, name: "missing" },
    ];
    expect(publishable(items).map((i) => i.name)).toEqual(["ok"]);
  });

  it("treats empty or unverified data as no social proof", () => {
    const empty: SocialProofData = { testimonials: [], stats: [], partners: [] };
    expect(hasSocialProof(empty)).toBe(false);
    const fake = { ...empty, stats: [{ verified: false, value: "10 000+", label: "x", source: "", asOf: "" }] };
    expect(hasSocialProof(fake as unknown as SocialProofData)).toBe(false);
  });
});
