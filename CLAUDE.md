# Qadam.io public web — notes for Claude Code

## Communication
- Reply to the project owner in **Uzbek, Latin script** (o‘zbek lotin yozuvi) in Claude Code sessions for this repository.
- Code, commit messages, code comments and technical docs stay in English.

## Ways of working
- Work in small batches; stop after each batch with a report: files changed, what was done, tests, known issues, next batch.
- Product decisions (brand, pricing, scope) belong to the product owner. Prepare options and evidence; do not approve your own proposals.
- Never invent data: no user counts, testimonials, partners, salaries, outcomes or accuracy claims.
- Backend source of truth: `qadam-loyiha-deepseek`. No scoring or diagnostic logic in this repo.

## Decision authority (locked, PM + Founder, 2026-10-04)
Order of authority, highest first:
1. **Founder decision** — mandatory for implementation.
2. **Founder request** — must be implemented; not dropped or left half-done.
3. **PM recommendation** — advice; the founder decides.
4. **Customer evidence** — informs the founder; does not override a decision.
5. **Claude** — implements and recommends; never decides.

Rules for Claude:
- Do not change, cancel or quietly abandon a founder decision or a requested task. Leaving an assigned task undone counts as a failure.
- Do not expand product scope on your own.
- Never ship an alternative to a founder decision as the default.
- If a decision carries technical, security, privacy, legal or data-integrity risk: state the risk and its consequences, give a recommendation, and wait — do not substitute your own decision.
- When reporting options, use the form: "PM recommendation / Claude recommendation: X. Final decision: Founder."
- Record founder decisions in `docs/decisions/` before implementing them.

## Design DNA v1 (locked)
Human-first · Intelligent · Calm · Evidence-led · Progressive. See `docs/design-dna.md`.
Product principle (locked, do not edit without owner decision): “Signallarni Qadam o’qiydi. Qarorni siz qilasiz.” (`PRODUCT_PRINCIPLE` in `content/site.ts`).

## Checks before every push
`npm run check` (lint, typecheck, unit, build) and
`PW_CHROMIUM_PATH=/opt/pw-browsers/chromium npm run test:e2e`.

See `README.md` and `docs/` for architecture, decisions and the Telegram deep-link spec.
