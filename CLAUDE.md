# Qadam.io public web — notes for Claude Code

## Communication
- Reply to the project owner in **Uzbek, Latin script** (o‘zbek lotin yozuvi) in Claude Code sessions for this repository.
- Code, commit messages, code comments and technical docs stay in English.

## Ways of working
- Work in small batches; stop after each batch with a report: files changed, what was done, tests, known issues, next batch.
- Product decisions (brand, pricing, scope) belong to the product owner. Prepare options and evidence; do not approve your own proposals.
- Never invent data: no user counts, testimonials, partners, salaries, outcomes or accuracy claims.
- Backend source of truth: `qadam-loyiha-deepseek`. No scoring or diagnostic logic in this repo.

## Design DNA v1 (locked)
Human-first · Intelligent · Calm · Evidence-led · Progressive. See `docs/design-dna.md`.
Product principle (locked, do not edit without owner decision): “Signallarni Qadam o’qiydi. Qarorni siz qilasiz.” (`PRODUCT_PRINCIPLE` in `content/site.ts`).

## Checks before every push
`npm run check` (lint, typecheck, unit, build) and
`PW_CHROMIUM_PATH=/opt/pw-browsers/chromium npm run test:e2e`.

See `README.md` and `docs/` for architecture, decisions and the Telegram deep-link spec.
