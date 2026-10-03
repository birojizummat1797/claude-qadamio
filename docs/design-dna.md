# Qadam Design DNA v1 — LOCKED

Source: PM decision 2026-10-03 (Design Direction v1). Changes require an explicit product-owner decision.

## The five principles

1. **Human-first.** The person comes first; profession, course and catalog follow. The hero opens with "Hozir qaysi holatdasiz?", not with a search for courses.
2. **Intelligent.** AI is not shouted about. Intelligence shows in the interface: signals, reasons, readiness, the next step.
3. **Calm.** No fear, urgency, countdowns, discount pressure or aggressive CTAs.
4. **Evidence-led.** Not "we give you the answer" but "we give you a better basis for your decision".
5. **Progressive.** One step → the next step → growth. The step mark, the staircase and the Spark marker all express this.

## Locked product principle (D-2)

> **Signallarni Qadam o’qiydi. Qarorni siz qilasiz.**

Single source: `PRODUCT_PRINCIPLE` in `content/site.ts`. Guarded by `tests/unit/home-content.test.ts` and `tests/e2e/home.spec.ts`.

## Positioning (internal only)

"Ta’lim marketplace’lari kursdan boshlaydi, Qadam insondan boshlaydi" is **internal** positioning.
Public copy speaks about Qadam’s own value. Comparative messaging that puts competitors down is not expanded. The existing neutral "Odatiy yondashuv / Qadam yondashuvi" block (B2) stays as is.

## Hard rules (enforced by tests where possible)

| Rule | Enforcement |
|---|---|
| No gradients | `palette-usage.test.ts` |
| ExtraBold only for H1, section H2 and the closing H2 (D-6) | `palette-usage.test.ts` |
| Midnight: at most 2 zones — result preview, final CTA + footer (D-4) | `home.spec.ts` |
| One dominant Blue block per page (D-4) | `home.spec.ts` |
| Spark only as a next-step marker | `palette-usage.test.ts` |
| Clay is decorative only; never text, never logo | `palette-usage.test.ts` |
| No invented metrics, testimonials, partners or salaries | `home-content.test.ts` (no digits), `social-proof.test.ts` |
| Illustration-first; no stock photos presented as Qadam users (D-5) | review rule |
| WCAG AA for every text/background pair | `contrast.test.ts`, axe in `a11y.spec.ts` |
