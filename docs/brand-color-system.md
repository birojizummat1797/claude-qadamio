# Qadam.io Brand Color System v1.1

Status: PM decision 2026-10-03 applied on branch `claude/b2.1-brand-palette`. Final merge pending PM review.
Source of truth for values: `app/globals.css` (`@theme`). Contrast is locked by `tests/unit/contrast.test.ts` and the axe scan in `tests/e2e/a11y.spec.ts`.

## Roles

- **Qadam Blue** — actions and section labels (eyebrows), one short highlight in the H1.
- **Midnight** — depth: headings, the journey's final step, one dark zone (Final CTA + footer).
- **Clay** — decorative warmth only (quote marks). Never text, never logo.
- **Spark** — one "next step" micro-marker per screen. Never text, never button, never logo.
- Semantic colors (success / warning / error) are separate from the brand. Green is not a brand color.

## Tokens

| # | Role | Token | HEX | Contrast (WCAG 2.2) |
|---|---|---|---|---|
| 1 | Brand Primary · Qadam Blue | `--color-primary` | `#2F4FE0` | white text 6.33 · on Paper 5.81 · on Mist 5.52 |
| — | Primary hover | `--color-primary-hover` | `#2238B8` | white text 9.03 |
| 2 | Brand Primary Dark · Midnight | `--color-midnight` | `#0E1733` | Paper text 16.2 · muted 8.33 · link 8.48 |
| 3 | Brand Primary Soft · Mist | `--color-primary-soft` | `#EAEFFF` | Graphite 15.1 · Blue 5.52 |
| 4 | Background · Paper | `--color-paper` | `#F7F5F0` | Graphite 16.0 · Slate 6.15 |
| 5 | Surface | `--color-surface` | `#FFFFFF` | Graphite 17.4 · Slate 6.70 |
| 6 | Text · Graphite | `--color-fg` | `#151A26` | AAA everywhere |
| 7 | Muted Text · Slate | `--color-fg-muted` | `#545C6E` | Paper 6.15 · Surface 6.70 |
| 8 | Border · Line | `--color-line` | `#E3DFD7` | decorative only |
| — | Control border | `--color-line-strong` | `#8C8B93` | 3.37 on Surface (UI 3:1) |
| 9 | Accent · Clay | `--color-accent` | `#C07A5A` | graphics only: 3.40 on Surface |
| — | Spark | `--color-spark` | `#F0642A` | graphics only: 3.20 Surface · 5.52 Midnight |
| 10 | Success | `--color-success` | `#18704A` | 6.08 · soft `#E5F2EA` 5.27 |
| 11 | Warning | `--color-warning` | `#8A5A00` | 5.93 · soft `#FBF1DC` 5.28 · icon `#B87400` |
| 12 | Error | `--color-error` | `#B42828` | 6.41 · soft `#FCEBEA` 5.56 |

Dark-zone text: `--color-on-midnight` `#F7F5F0`, `--color-on-midnight-muted` `#A8B2CC`, `--color-on-midnight-link` `#9DB0FF` (also the focus ring in dark zones).
Journey staircase (desktop ≥1024px only): `--color-step-1…5` `#F5F7FF → #D2DCFF`.

## PM decisions applied (2026-10-03)

| Item | Decision | Applied |
|---|---|---|
| 12 tokens + Spark rule | Accepted | ✅ |
| Midnight Final CTA + footer | Accepted | ✅ |
| Eyebrow color | Blue (R1) | ✅ `--color-accent-text` removed |
| Logo | Not changed to Clay→Mist→Blue; Midnight + Blue, Mist on dark | ✅ |
| R2 Paper | Keep `#F7F5F0` | ✅ unchanged |
| R3 Hero | Midnight H1, Blue only on "mos yo’lni" | ✅ |
| R4 Spark | Micro accent; user test pending | ⏳ needs people |
| R5 Android readability | Check now | ✅ see below |
| R6 Mini App migration | Out of web scope | — |

## Zone rules (PM decision D-4, 2026-10-03)

- Midnight: at most **2** major zones per page — (1) result/sample block, (2) final CTA + footer.
- Dominant Qadam Blue block: at most **1** per page. Overall Blue share ≈ 10–15%.
- No gradients anywhere (Design DNA v1, `docs/design-dna.md`).

## R5 check (2026-10-03)

- Emulated Moto G4, Galaxy S9+ (320px), Galaxy A55, Pixel 7: no horizontal overflow, hero CTA ≥44px and above the fold, no text below 12px.
- axe WCAG 2.0/2.1/2.2 A+AA: 0 violations on homepage (FAQ open), 404, open mobile menu.
- Rough low-end panel simulation (contrast 0.8, saturation 0.75): hero, CTA and body text remain readable.
- Limits: real hardware color rendering cannot be emulated; a check on 2–3 physical Android phones is still recommended.
- Mist steps: adjacent ΔE76 3.2–5.7 (degraded 2.1–4.0). Steps also differ by height and number, so meaning never depends on color alone. The staircase only shows at ≥1024px; phones get the timeline on white.
- Narrowest margins: `fg-muted` on step-5 4.92 and `primary` on step-5 4.65 (AA, desktop only). Under the degraded simulation they fall below 4.5. Proposed fix if PM wants more margin: Graphite captions and `primary-hover` numbers on steps 4–5.
