# Qadam.io — Web Platform Audit

Status: STEP 1–2 of the Master Development Brief v1.0
Date: 2026-10-03
Scope: everything the Qadam team has on GitHub that the public website must fit into.

---

## 0. Summary (read this first)

- **This repository (`claude-qadamio`) is empty.** No commits, no code. The website will be built here from scratch.
- The real product lives in **four other repositories**. They were read (not modified) for this audit:

| Repo | Last push | What it is | Status |
|---|---|---|---|
| `qadam-loyiha-deepseek` | 2026-09-27 | FastAPI backend + aiogram bot + Next.js Mini App | **De-facto production.** Most recent, most complete, bot points at it. |
| `qadam-backend-v2` | 2026-09-05 | Clean-architecture FastAPI rewrite ("Batch 1") | Early skeleton, many placeholder endpoints. Appears paused. |
| `qadam-miniapp-v2` | 2026-09-05 | Next.js Mini App rewrite | Early skeleton (3 routes). Appears paused. |
| `qadam-web` | 2026-09-01 | Earlier public landing attempt (Next.js 16 + Tailwind 4) | 4 sections, CTA links to a route that does not exist. |

- **Recommendation:** treat `qadam-loyiha-deepseek/qadam/backend` as the backend source of truth, consume its **public, read-only** taxonomy endpoint, and build the website in this repo as a separate Next.js app. Do **not** create a new backend.
- Several **data-quality and security issues** were found in the backend (section 9). They are reported, not fixed — they are outside this repo and outside the website's scope.

---

## 1. Current stack

| Layer | Technology | Where |
|---|---|---|
| Backend API | Python 3.12, FastAPI 0.115, SQLAlchemy 2 (async), Pydantic 2 | `qadam-loyiha-deepseek/qadam/backend` |
| Database | PostgreSQL (Neon) in production, SQLite locally (`DATABASE_URL`) | same |
| Bot | aiogram 3.13, webhook mode on Render | `qadam-loyiha-deepseek/qadam/bot` |
| Mini App | Next.js 16, React 19, Tailwind 3, zustand, axios, framer-motion | `qadam-loyiha-deepseek/qadam-miniapp` (Vercel) |
| AI | OpenRouter (`OPENROUTER_MODEL`) — personalization layer | `backend/ai/personalizer.py` |
| Payments | Telegram Stars, Click (keys empty), manual card transfer + admin approval | `backend/api/payments.py`, `bot/handlers/payment.py` |
| PDF | xhtml2pdf + jinja2 (server), html2pdf.js (client) | |
| Hosting | Render (API + bot, Dockerfile), Vercel (Mini App) | |

Both frontend attempts (`qadam-web`, `qadam-miniapp-v2`) use **Next.js 16.3.x + React 19.2 + Tailwind 4**. Node 22 / npm 10 are available in this environment; npm registry is reachable (latest `next@16.3.8`).

## 2. Current frontend architecture

**Mini App (`qadam-miniapp`)** — App Router, all pages client-side, Telegram-only (relies on `window.Telegram.WebApp.initData`). Routes:

```
/                     intro
/discovery            free diagnostic (13 questions)
/preliminary, /teaser free result + premium teaser
/premium              payment
/deep-diagnostic      paid deep diagnostic (18 questions)
/career-intelligence  top-5 careers, fit + readiness
/roadmap/[slug]       personal roadmap (premium)
/report/[id]          report + PDF
/stage1, /stage2      legacy v1 flow
/admin                payment approval
```

Not reusable on the public web: every page assumes Telegram `initData` for auth.

**Earlier landing (`qadam-web`)** — 4 sections (Hero, ProblemSolution, RoadmapDemo, PricingAndCTA), Header/Footer, small UI kit (Button, Input, ProgressBar, YesNoToggle, ProfileFlowDiagram). Also contains `lib/questions.ts` + `lib/scoring.ts` — a **client-side scoring engine** with its own 4-career model (`software-development`, `data-analytics`, ...) that does **not** match the backend taxonomy. Hero CTA points to `/diagnostic`, which has no page.

## 3. Existing backend

`qadam-loyiha-deepseek/qadam/backend`:

```
api/            v0 routes (diagnostic, payments, admin)
api/v1/         profile, entitlements, discovery, taxonomy, career_intelligence,
                deep_diagnostic, roadmap
engine/         signals → fit → readiness → ranking → roadmap (deterministic scoring)
services/       discovery, deep diagnostic, entitlement, taxonomy
data/           versioned JSON knowledge (taxonomy_v1 v2.2, roadmap_kb_v2, questions, products)
ai/             OpenRouter personalizer
models.py       v0 tables (users, test_results, payments, events, feedbacks ...)
models_v2.py    v1 tables (profiles, products, product_plans, entitlements, discovery_*,
                taxonomy_versions, careers, deep_diagnostic_*)
```

Good foundations for the website: **taxonomy is DB-driven and versioned** (`taxonomy_versions` + `careers`), with JSON fallback.

## 4. Existing API — what the website can use

| Endpoint | Auth | Website use |
|---|---|---|
| `GET /api/v1/taxonomy` | public | Clusters + careers (but also returns internal signal weights and salary data — see 9) |
| `GET /api/v1/taxonomy/careers` | public | **Primary source** for the career list: `slug, title_uz, cluster, cluster_uz, learning_months, pathway_type` |
| `GET /health` | public | Optional status check |
| `/api/v1/roadmap/{slug}` | Telegram initData + premium entitlement | Not usable publicly (correct) |
| discovery / deep-diagnostic / career-intelligence | Telegram initData | Not usable publicly (correct, Phase 2+) |

There is **no public endpoint for career descriptions, roadmap previews, FAQ, articles or pricing**. `products_v1.json` (pricing) is only exposed inside authenticated flows.

## 5. Existing Telegram integration

- Bot handle found in Mini App code: `@kelajakkailkqadam_bot` (OPEN DECISION D3 — confirm).
- Bot `/start` shows inline buttons; the free diagnostic opens `WEBAPP_URL/discovery` as a WebApp.
- `/start` **does not read deep-link parameters** (`/start <payload>`), so the website cannot currently tell the bot "user came from career page X". Plain `https://t.me/<bot>` works today; `?start=` payloads are harmless but ignored. Supporting `start` payloads (UTM-like, privacy-safe) is a small backend/bot change for later.
- Auth: Telegram `initData` HMAC verification (`backend/auth.py`). No web auth exists (Phase 3 concern).

## 6. Existing database

PostgreSQL via SQLAlchemy async; tables created by `init_db()` (no Alembic in this repo; `qadam-backend-v2` has Alembic). Relevant tables for future web phases: `users`, `profiles`, `taxonomy_versions`, `careers`, `products`, `product_plans`, `entitlements`, `events`.
The website itself needs **no database** in Phase 1.

## 7. Existing design system

Two incompatible directions exist:

| | `qadam-miniapp` | `qadam-web` |
|---|---|---|
| Theme | Dark default (`#0A0A0F`), light optional | Light, white background |
| Accent | Indigo `#6366F1` | Green `#17794E` |
| Neutrals | Grays | Ink `#111214`, Silver `#9AA0AA` |
| Type | System / Inter | IBM Plex Sans + Plex Mono |
| Tokens | CSS variables (`--color-*`, `--space-*`, `--radius-*`) | Tailwind config + few vars |

The brief asks for "calm, trustworthy, premium, not dark aggressive startup". The `qadam-web` palette (ink / silver / green, light) is closer to that brief. See OPEN DECISION D5.

## 8. Reusable pieces

| Asset | Reuse? |
|---|---|
| Backend taxonomy (25 careers, 8 clusters, slugs, learning months, pathway type) | **Yes** — canonical IDs for career pages |
| `roadmap_kb_v2.json` (rich stage content for 5 careers) | **Partially** — stage names/weeks can seed a public "roadmap preview"; must be served via a public endpoint later, not copied into frontend long-term |
| Mini App token naming (`--color-*`, `--radius-*`) | Yes, as a naming convention for shared tokens |
| `qadam-web` copy & trust ideas | Ideas only; components are small and animation-heavy (framer-motion on every block) |
| `qadam-web` client scoring | **No** — duplicate business logic in the frontend, conflicts with brief §29 |

## 9. Conflicts and problems found

### Product / data
1. **Taxonomy mismatch with the brief.** Backend has 25 careers; brief lists 27. Mapping:
   - In both (22): frontend, backend, mobile, QA automation, DevOps/cloud, cybersecurity, data analytics, data science, UI/UX, product design, graphic design, motion design, SMM, content marketing, performance marketing, SEO, product management, project management, business analysis, customer success, IT sales (`it_b2b_sales`), AI/ML (`ai_engineering`).
   - In brief only (5): Full-Stack Development, AI Automation, Copywriting, Content Creation, Growth Marketing.
   - Naming differs: brief "AI / ML" ↔ backend `ai_engineering`; "IT Sales" ↔ `it_b2b_sales`.
   - In backend only (3): `foundation_programming`, `video_content`, `brand_strategy`.
   → The website will key everything by **backend slug**; brief-only careers are added to the website catalog as `status: "planned"` until the backend taxonomy includes them (OPEN DECISION D2).
2. **Salary data is not publishable.** `taxonomy_v1.json` has `salary_uzs` ranges with a vague source ("HH.uz + Telegram channels + LinkedIn UZ, Q4 2025"), no employment type/coverage, and `salary_usd` is corrupted (values like `"j"`, `"u"`, `"m"`). `roadmap_kb_v2.json` also embeds salary text. Per brief §11/§30 the website shows **no salary data**.
3. **Pricing.** `products_v1.json`: Premium 39 000 so'm / 150 Stars (active); AI Career Assistant 49 000 so'm/month (inactive). Bot copy matches. Brief calls pricing a hypothesis → website pricing will be config-driven (OPEN DECISION D4).
4. Bot copy says "3 daqiqa — 13 savol". Website copy must stay consistent with whatever the bot actually does; numbers like this belong in config, not scattered in components.

### Security (backend, not fixed here — reported)
5. `POST /api/v1/taxonomy/seed` is **unauthenticated**. Low impact (idempotent) but should be admin-only.
6. `GET /api/v1/taxonomy` publicly exposes internal scoring weights (`signals`, `prerequisites`) and salary data. Not secret, but it reveals the matching model; a public projection endpoint is preferable.
7. CORS falls back to `["*"]` with `allow_credentials=True` if `ALLOWED_ORIGINS` is unset (`qadam-backend-v2` does `*` unconditionally).
8. `.env.example` contains a real person's name as card holder; `qadam_working_v1.zip` and ~60 one-off code-generator scripts (`qadam-*.py`) are committed in the repo root — maintainability and accidental-leak risk.
9. `qadam-backend-v2/requirements.txt` is UTF-16 encoded with a stray line appended — `pip install -r` will fail.

### Architecture
10. Two parallel rewrites (`*-v2`) exist next to the live system. The website must pick one backend contract → D1.
11. No public content API (careers detail, FAQ, articles). Phase 1 keeps editorial content in this repo as typed data; moving it to the backend/CMS is a planned step.

## 10. Missing pieces (for the public website)

- Public website app itself (this repo).
- Editorial content per career (descriptions, tasks, skills, starting point, FAQ) — only 5 careers have any rich content, and it is written for the paid roadmap, not for public discovery.
- Real social proof (testimonials, outcomes, partners) — none exists; must stay placeholder.
- Privacy policy / terms pages — not found anywhere. Needed before analytics or any data collection.
- Domain / canonical URL decision (`qadam.io`?).
- Analytics provider — none chosen.

## 11. Recommended implementation plan (summary)

Full plan: [`web-platform-plan.md`](./web-platform-plan.md).

1. Next.js 16 (App Router, Server Components, static generation) + TypeScript + Tailwind 4 in this repo. No framer-motion; CSS transitions only.
2. Content layer: `content/` typed data (careers, clusters, FAQ, pricing, steps) keyed by backend slugs, merged at build time with `GET /api/v1/taxonomy/careers` (ISR, with local snapshot fallback so builds never depend on the API being up).
3. One `site config` module: Telegram URL, site URL, API URL, feature flags, pricing visibility — all from `NEXT_PUBLIC_*` env.
4. Analytics: a tiny `track()` abstraction with a no-op/console adapter; no third-party script until a provider and privacy policy are chosen.
5. i18n-ready routing shape (`uz` default, no prefix), strings kept in content modules — no full i18n library yet.
6. Pages: `/`, `/qanday-ishlaydi`, `/yonalishlar`, `/yonalishlar/[cluster]`, `/yonalishlar/[cluster]/[career]` (or flat `/kasb/[slug]` — D6), `/qadam-haqida`, `/faq`, `/maqolalar` (scaffold), `/maxfiylik` (placeholder), sitemap, robots, OG.

## 12. OPEN DECISIONS

> D1, D3, D4, D5 were decided on 2026-10-03 — see `web-platform-plan.md` §12.

| ID | Decision | Safe default taken |
|---|---|---|
| D1 | Which backend is canonical: `qadam-loyiha-deepseek` (live) or `qadam-backend-v2`? | `qadam-loyiha-deepseek`. Website only depends on `GET /api/v1/taxonomy/careers` via an adapter, so switching is a one-file change. |
| D2 | Add brief-only careers (Full-Stack, AI Automation, Copywriting, Content Creation, Growth Marketing) to the backend taxonomy? | Shown on website as "tez orada / tayyorlanmoqda", not linked to diagnostic. |
| D3 | Telegram bot handle and deep-link format | `NEXT_PUBLIC_TELEGRAM_BOT_URL`, default `https://t.me/kelajakkailkqadam_bot` (found in code — **please confirm**). |
| D4 | Show prices publicly? | Pricing block built but hidden behind config flag; shows "Bepul diagnostika" only. |
| D5 | Brand palette: light ink/green (`qadam-web`) or dark indigo (Mini App)? | Light, ink + deep green accent, refined from `qadam-web`; tokens centralized so changing is cheap. |
| D6 | Career URL shape | `/yonalishlar/[slug]` flat (stable even if a career moves cluster). |
| D7 | Production domain | `NEXT_PUBLIC_SITE_URL`, default `https://qadam.io`. |
| D8 | Analytics provider | None; console adapter in dev, no-op in prod. |
| D9 | Public content API in backend (careers, FAQ) — when? | Editorial content in this repo for Phase 1, typed so it can move to an API later. |
