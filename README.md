# Qadam.io — public web platform

Public website of Qadam.io (Phase 1). Its job: help people understand Qadam,
trust it, explore directions, and **start the diagnostic in the Telegram bot**.
The diagnostic, results and roadmap live in the Telegram Mini App; the shared
backend (`qadam-loyiha-deepseek`) is the single source of truth.

Docs: [`docs/web-platform-audit.md`](docs/web-platform-audit.md) ·
[`docs/web-platform-plan.md`](docs/web-platform-plan.md) ·
[`docs/telegram-deeplink-spec.md`](docs/telegram-deeplink-spec.md)

## Stack

Next.js 16 (App Router, static rendering) · React 19 · TypeScript (strict) ·
Tailwind CSS 4 · lucide-react · Vitest · Playwright.

## Run

```bash
cp .env.example .env.local   # optional; safe defaults exist
npm install
npm run dev                  # http://localhost:3000
npm run check                # lint + typecheck + unit tests + build
npm run build && PW_CHROMIUM_PATH=/opt/pw-browsers/chromium npm run test:e2e
```

## Layout

```
app/          routes, root layout, base metadata
components/   UI only — receives content via props/imports
content/      all copy (uz), typed; no copy inside components
lib/          config (env), telegram deep links, analytics, i18n
tests/        unit (vitest) and e2e smoke (playwright, 320/390/1280px)
```

## Rules

- Every "Diagnostikani boshlash" button goes through `components/cta/DiagnosticCTA.tsx`,
  which uses `lib/telegram.ts`. Never hard-code a `t.me` link.
- No scoring or matching logic in this repo.
- No invented numbers, testimonials, partners, salaries or outcomes.
- Uzbek apostrophe: use `’` (U+2019). `ʻ`/`ʼ` have no glyph in IBM Plex (a test enforces this).
