# Website → Telegram deep-link attribution — spec v1

Status: accepted direction (D3). Website side is implemented in this repo (B1).
Bot side is a **separate change in `qadam-loyiha-deepseek`** and needs explicit approval before it is made.

## 1. Why not `source=web&career=frontend`

Telegram `start` parameter allows only `A–Z a–z 0–9 _ -`, max 64 chars.
`=`, `&`, spaces are invalid — Telegram silently drops such a parameter. So a compact, Telegram-safe grammar is used.

## 2. Format

```
https://t.me/<bot_username>?start=<payload>

payload  = "w1" "-" src [ "-" career ]
src      = short source code (table below)
career   = backend taxonomy slug, [a-z0-9_]{2,40}   (only careers with status "active")
regex    = ^w1-[a-z]{2,3}(-[a-z0-9_]{2,40})?$
```

- `w1` = channel `web`, format version `1`. A future format becomes `w2-...`; the bot keeps accepting `w1`.
- Separator is `-` because backend slugs use `_` only, so parsing is unambiguous.
- Longest current payload: `w1-cd-performance_marketing` (27 chars) — well under 64.

Examples:

| Click | Payload |
|---|---|
| Homepage hero CTA | `w1-hr` |
| Career page "Frontend Development" | `w1-cd-frontend_development` |
| Catalog card CTA for Data Analytics | `w1-ct-data_analytics` |
| Footer CTA | `w1-ft` |

## 3. Source codes

| Code | Placement |
|---|---|
| `hr` | Homepage hero |
| `hd` | Header (desktop) |
| `mn` | Mobile navigation |
| `hw` | How-it-works page / section |
| `ct` | Career catalog |
| `cd` | Career detail page |
| `ab` | About page |
| `fq` | FAQ |
| `fc` | Final CTA block (any page) |
| `ft` | Footer |
| `ar` | Article / content page |

The list lives in one file (`lib/telegram.ts`) and is unit-tested against the regex.

## 4. Privacy rules

- Payload carries **only placement + public career slug**. Never a user id, session id, email, phone, cookie value, or random visitor id.
- Therefore web visitors are **not** individually joined to Telegram users. Attribution is aggregate ("N bot starts came from the Frontend page"). This is intentional.
- Taxonomy-gap careers (`status: "planned"`, see audit §9) send `src` only, no career code — the bot must never receive a slug the backend does not know.

## 5. Bot side (proposed, NOT yet implemented)

In `qadam-loyiha-deepseek/qadam/bot/handlers/start.py`:

1. Read `command.args` in the `CommandStart()` handler.
2. Validate with the regex above. Invalid or missing → behave exactly as today (no error, no log of the raw string).
3. On valid payload, insert `events` row (table already exists in `backend/models.py`):
   `event_name="bot_start"`, `user_id=<telegram id>`, `payload={"channel":"web","v":1,"src":"cd","career":"frontend_development"}`.
4. Optionally forward attribution to the Mini App: `WEBAPP_URL/discovery?src=cd&career=frontend_development` so the Mini App can preselect/highlight context. (Mini App must treat it as a hint only.)
5. Unit tests: valid, invalid, oversized, injection-like strings (`<script>`, `../`, SQL), missing args.

Effort: small (one handler + one test file). Risk: low, fully backward compatible.

## 6. Deferred

- `?startapp=` (direct Mini App launch) — requires the Mini App to be configured as the bot's main app in BotFather; revisit when the bot username is rebranded.
- Bot username rebrand — the URL is env-driven (`NEXT_PUBLIC_TELEGRAM_BOT_URL`), so no code change is needed on the website.
