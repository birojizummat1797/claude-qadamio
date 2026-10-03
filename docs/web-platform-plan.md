# Qadam.io — Web Platform Plan

Status: STEP 3 of the Master Development Brief v1.0. Based on [`web-platform-audit.md`](./web-platform-audit.md).
Date: 2026-10-03

---

## 1. Goal of Phase 1

A public website whose only job is:

> understand Qadam → trust Qadam → explore directions → **start the diagnostic in Telegram**.

No diagnostic, accounts or payments on the web in this phase. Backend stays the single source of truth.

## 2. Architecture

```
                 ┌──────────────────────────────┐
                 │  qadam-loyiha-deepseek API    │  (source of truth)
                 │  GET /api/v1/taxonomy/careers │
                 └──────────────┬───────────────┘
                                │ build time / ISR (revalidate 1h)
                                ▼
┌───────────── claude-qadamio (this repo) ─────────────┐
│ lib/api/taxonomy.ts   adapter + snapshot fallback     │
│ content/*             editorial data (typed, by slug) │
│ lib/catalog.ts        merge → Career view model       │
│ components/*          UI (no content inside)          │
│ app/*                 routes, metadata, sitemap       │
│ lib/config.ts         env-driven site config          │
│ lib/analytics.ts      track() abstraction             │
└──────────────────────┬────────────────────────────────┘
                       │ CTA (single helper)
                       ▼
               Telegram Bot / Mini App
```

Principles:
- **Server Components by default**; client components only for: mobile menu, FAQ accordion (native `<details>` preferred), analytics click tracking, catalog filter.
- **Static generation** for every page; career pages via `generateStaticParams`.
- **No business logic in frontend** (no scoring, no matching). The website only describes.
- **Content ≠ UI.** Components receive props; all copy lives in `content/`.
- **Website never writes to the backend** in Phase 1.

## 3. Tech choices

| Need | Choice | Why |
|---|---|---|
| Framework | Next.js 16 App Router, TypeScript strict | Same as Mini App → shared skills, future merge of web diagnostic |
| Styling | Tailwind CSS 4 + CSS variables for tokens | Same as other Qadam frontends; tokens portable |
| Icons | `lucide-react` (tree-shaken) | Already used across Qadam |
| Fonts | `next/font` — IBM Plex Sans (latin + latin-ext for o'/g') | Self-hosted, no layout shift; continues `qadam-web` choice |
| Animation | CSS only, `prefers-reduced-motion` respected | No framer-motion → less JS |
| Tests | Vitest (unit: content integrity, config, catalog merge) + Playwright smoke (key pages render, CTA href, no horizontal scroll at 320px) | Chromium is preinstalled |
| Lint | ESLint (next config) + `tsc --noEmit` | |

## 4. Directory layout

```
app/
  layout.tsx                 root layout, fonts, Header/Footer, skip link
  page.tsx                   homepage
  qanday-ishlaydi/page.tsx
  yonalishlar/page.tsx       catalog (all clusters)
  yonalishlar/[slug]/page.tsx career detail
  qadam-haqida/page.tsx      about + principles + why Qadam
  faq/page.tsx
  maqolalar/page.tsx         content hub scaffold (empty state)
  maxfiylik/page.tsx         privacy placeholder (clearly marked draft)
  sitemap.ts, robots.ts, opengraph-image.tsx, not-found.tsx
components/
  layout/   Header, Footer, MobileNavigation, Breadcrumb, Container, Section
  ui/       Button, Badge, Card, Icon wrappers
  cta/      DiagnosticCTA (the only place that builds the Telegram link)
  home/     Hero, JourneyVisual, ProblemGrid, ComparisonBlock
  career/   CareerCard, CareerCategory, CareerGrid, CareerDetail, RoadmapPreview
  trust/    TrustCard, StepCard
  social/   TestimonialCard, StatsBlock, PartnerLogos, CaseStudyCard (placeholder-aware)
  content/  ArticleCard, FAQ
  pricing/  PricingCard
content/
  site.ts          nav, footer, hero copy
  clusters.ts      cluster order, uz names, descriptions
  careers/*.ts     editorial content per backend slug (+ planned careers)
  steps.ts, trust.ts, problems.ts, comparison.ts, faq.ts
  pricing.ts       plans (config-driven, hidden by flag)
  social.ts        empty arrays → placeholders render
  articles.ts      empty → empty state
lib/
  config.ts        reads NEXT_PUBLIC_* env, validates, defaults
  telegram.ts      buildTelegramUrl({ source }) — single source
  analytics.ts     track(event, props) with pluggable adapter
  api/taxonomy.ts  fetch + zod-free runtime guard + snapshot fallback
  catalog.ts       merge backend taxonomy with editorial content
  seo.ts           metadata helpers, JSON-LD builders
  i18n.ts          locale type ('uz' | 'ru' | 'en'), default 'uz'
data/
  taxonomy.snapshot.json   copy of public fields only (slug, title, cluster, months, pathway)
tests/
```

## 5. Data model (frontend view models)

```ts
type CareerStatus = "active" | "planned";      // planned = not yet in backend taxonomy
type ContentStatus = "draft" | "reviewed";     // editorial review flag, shown in dev only

interface Career {
  slug: string;              // backend slug, e.g. "frontend_development"
  urlSlug: string;           // kebab-case for URLs, e.g. "frontend-development"
  title: string;
  clusterId: string;
  status: CareerStatus;
  learningMonths?: number;   // from backend
  pathwayType?: "entry" | "role" | "advanced";
  content?: CareerContent;   // editorial; optional so a backend-only career still renders a minimal page
}
```

- Salary fields are **intentionally absent**. A future `SalaryInsight` type will require `source, geography, date, employmentType, seniority, coverage` — enforced by the type.
- Social proof types carry `verified: boolean`; components render a "Tez orada" placeholder when the array is empty, and refuse to render unverified items in production.

## 6. Configuration (env)

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_TELEGRAM_BOT_URL` | `https://t.me/kelajakkailkqadam_bot` (D3) | All diagnostic CTAs |
| `NEXT_PUBLIC_SITE_URL` | `https://qadam.io` (D7) | canonical, sitemap, OG |
| `QADAM_API_URL` | unset → snapshot | server-only, build-time taxonomy fetch |
| `NEXT_PUBLIC_SHOW_PRICING` | `false` (D4) | pricing block |
| `NEXT_PUBLIC_ANALYTICS` | `none` (D8) | adapter selection |

No secrets on the client. `.env.example` documents all.

## 7. Analytics events

`page_view, hero_cta_click, how_it_works_view, career_category_view, career_detail_view, diagnostic_cta_click, telegram_redirect, pricing_view, faq_expand, content_view`.
Props are limited to `{ source, slug?, cluster? }` — no personal data, no fingerprinting, no third-party cookies.

## 8. Design system (summary)

- Palette: ink `#111214` text, paper `#FAFAF7` background, white surfaces, line `#E4E4DE`, accent deep green (`#17794E`, from `qadam-web`), muted text with ≥4.5:1 contrast. One accent, no gradients.
- Type scale (mobile → desktop): display 34→56, h2 26→38, h3 19→22, body 16→17, small 14. Line-height 1.55 body.
- Spacing 4px base; section padding 56px mobile / 96px desktop.
- Radius: 8 / 12 / 20. Shadows: one subtle elevation only.
- Layout: max width 1200px content, 720px prose; gutters 16px (<=430px), 24px, 32px.
- Breakpoints: Tailwind defaults (sm 640, md 768, lg 1024, xl 1280); designs drawn at 360 first.
- Focus ring: 2px accent + 2px offset on every interactive element.

## 9. Batches

| # | Batch | Output | Verification |
|---|---|---|---|
| B1 | Foundation | Next.js app, tokens, config, telegram helper, analytics stub, layout (Header/Footer/MobileNav), Button/Section | `lint`, `typecheck`, `build`, unit tests for config/telegram |
| B2 | Homepage | Hero + journey visual, problems, how-it-works, why Qadam, trust, social placeholders, FAQ teaser, final CTA | build + Playwright smoke at 320/390/768/1280 |
| B3 | Career explorer | content model, taxonomy adapter + snapshot, catalog page with cluster filter | unit tests for merge; build |
| B4 | Career detail | `[slug]` page, all brief §11 blocks, breadcrumb, JSON-LD, roadmap preview | static params build for all careers |
| B5 | Inner pages | how-it-works, about, FAQ, articles hub, privacy placeholder | build |
| B6 | SEO / a11y / perf | metadata, OG image, sitemap, robots, axe checks, Lighthouse pass | Playwright + axe; bundle check |
| B7 | Hardening | README, `.env.example`, test pass, final report | all checks |

Each batch is one commit (or a few), pushed to `claude/qadam-public-web-platform-mdd0mg`, with a report: files changed / implemented / tests / results / known issues / next batch.

## 10. Content policy (applies to every batch)

- No invented numbers, users, testimonials, partners, salaries, accuracy claims.
- Career descriptions are general professional knowledge written as editorial drafts (`contentStatus: "draft"`) and must be reviewed by the Qadam team before launch.
- Learning duration shown only where it comes from the backend (`learning_months`), phrased as "taxminan", never as a promise.
- Copy never says Qadam "knows" or "decides"; it "helps", "may fit", "explains".

## 11. Future phases — how this plan keeps the door open

| Phase | Hook already in place |
|---|---|
| 2 Web diagnostic | `DiagnosticCTA` is the single entry point; switch target from Telegram to `/diagnostika` via config |
| 3 Accounts | Header has a reserved slot; no auth assumptions in pages |
| 4–6 Dashboard / comparison / roadmap | `Career` view model keyed by backend slug; `RoadmapPreview` takes stage data via props |
| 7 Providers | `CareerContent.education` is a typed list of education *types*, not vendors; providers can be attached later without pay-to-rank |
| 8–10 Jobs / skills / growth | Catalog + slug scheme reusable as navigation spine |
| i18n | Locale type + content modules per locale; routes can gain `/ru`, `/en` prefixes without moving files under `app/[locale]` until needed |

## 12. Accepted decisions (2026-10-03)

| ID | Decision |
|---|---|
| D1 | `qadam-loyiha-deepseek` is the backend / source of truth. `qadam-backend-v2` and `qadam-miniapp-v2` are legacy/experimental — **not modified, not deleted, not depended on**. |
| D3 | CTA target = the current working bot (env `NEXT_PUBLIC_TELEGRAM_BOT_URL`). Deep-link attribution per [`telegram-deeplink-spec.md`](./telegram-deeplink-spec.md). Bot-side parsing is a separate, approval-gated change. |
| D4 | No public prices. Pricing lives in `content/pricing.ts`, rendered only when `NEXT_PUBLIC_SHOW_PRICING=true`. |
| D5 | Light background + deep green. Shared Qadam design language with the Mini App via common token names (`--color-*`, `--radius-*`), not identical UI. |
| Taxonomy | Backend taxonomy is used as-is. Brief careers missing from backend are marked `status: "planned"` + `// TODO: taxonomy gap` in content, shown as "Tayyorlanmoqda", never linked to the diagnostic, never presented as production data. |
