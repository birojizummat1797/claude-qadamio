# Spec: age gate, Telegram name, consent (bot + Mini App)

Status: **draft for owner/PM review** · 2026-10-04 · repo affected: `qadam-loyiha-deepseek`
Related: `docs/specs/adaptive-diagnostic-v2.md` (age 16 / 35), `docs/legal/2026-10-04-maxfiylik-siyosati-draft.md`,
`docs/legal/2026-10-04-rozilik-matni-draft.md`.

## 1. Why

Code audit 2026-10-04 (`qadam-loyiha-deepseek@bcf185e`):

| Data | Known? | Stored? |
|---|---|---|
| Name | Yes, Telegram `initData` / `from_user` | **No.** Used on the fly only (greeting, PDF caption, admin payment message). `users` table is never written by the v1 flow. |
| Age | **No**, never asked | `profiles.age` exists, always empty |
| Location | **No**, never asked | `profiles.location` exists, always empty |

`qadam-miniapp/lib/api.ts` has `saveProfile()` but nothing calls it.
So the owner-approved age rule (16+, warn after 35) cannot be enforced today, and a minor can reach the payment screen.

## 2. Owner decisions (2026-10-04)

- O1. Age matters more than location. Ask age now; location later (for routing to learning places).
- O2. Under 16: stop politely.
- O3. Over 35: stop **or** warn politely, "for now" (see open decision D1).
- O4. Name: take from Telegram automatically, do not ask.
- O5. Consent text and privacy policy are urgent.

## 3. Scope (this spec)

1. Consent screen (first screen of the Mini App, before any question).
2. Age question (first question after consent).
3. Age gate behaviour.
4. Store Telegram name + username.
5. Bot commands `/privacy` and `/malumotlarim` (show / delete my data).

Out of scope: location question (later batch), gender, exact birth date, patronymic — **not collected** (data minimisation).

## 4. Hard rules

- R1. Age, name and location **never** enter signal, fit, readiness or ranking. Recommendation depends on answers only. Test: same answers + different age/name → identical ranking.
- R2. Nothing is stored for a user who has not consented, except the `bot_start` event that already exists (see R4).
- R3. No question about age is shown before consent.
- R4. Under 16: no answers are stored; the user's existing rows (`events` `bot_start`) are deleted; only an anonymous counter (`age_gate_blocked_under_16`, no `user_id`) is kept.
- R5. Age is self-reported; we do not claim to verify it.

## 5. Flow

```
/start → "Boshlash" → Mini App
  └─ Consent screen ── "Roziman, davom etaman" ─→ Age question ─→ gate ─→ Discovery (13 questions)
                    └─ "Yo‘q" → short goodbye, nothing stored
```

### 5.1 Age question

- Text: **“Yoshingiz nechada?”**
- Input: number wheel 12…70 plus "70 dan katta". Asking age (not birth year) avoids the 15/16 ambiguity of a year-only answer.
- Stored as `profiles.age` + `profiles.meta.age_asked_at` (ISO date), so it can be aged later.

### 5.2 Gate

| Age | Behaviour |
|---|---|
| < 16 | Stop. Message A. Nothing stored (R4). |
| 16–17 | Continue. See D2 (minors' consent, legal check pending). |
| 18–35 | Continue. |
| > 35 | D1: option **B (recommended)** warn + allow continue; option A stop. |

**Message A (under 16):**
> Rahmat, {ism}! Qadam hozircha 16 yosh va undan kattalar uchun mo‘ljallangan. Bu sizning qobiliyatingiz haqida emas — shunchaki xizmatimiz hali sizning yoshingizga moslashtirilmagan. 16 yoshga to‘lganingizda sizni kutib qolamiz. 🌱

**Message B (over 35, recommended option):**
> Rahmat, {ism}! Ochig‘ini aytamiz: Qadam savollari va o‘qish yo‘llari hozircha asosan 16–35 yoshdagilar tajribasiga moslashtirilgan. Shuning uchun natijalar siz uchun kamroq aniq bo‘lishi mumkin. Baribir davom etishni xohlaysizmi?
> [Ha, davom etaman] [Keyinroq]

If B: the same note is shown once more on the premium page **before** payment (no payment without seeing it).

**Message A′ (over 35, if owner picks option A):**
> Rahmat, {ism}! Qadam hozircha 16–35 yoshdagilar uchun moslashtirilgan. Sizning yoshingizga mos versiyani tayyorlayapmiz — tayyor bo‘lganda xabar beramiz.

(A′ promises a future version; only use if the owner actually plans one. Otherwise drop the last sentence.)

## 6. Name

- On consent: upsert `users` row: `id` (telegram id), `first_name`, `last_name`, `username`, `language_code` from verified `initData`.
- Shown only to the user and to the admin (payment review). Never in public output, never in AI prompts.

## 7. Consent record

New columns (or `profiles.meta`): `consent_version` (e.g. `"2026-10-04"`), `consented_at`.
If the policy changes materially → bump version → consent screen again.

## 8. Bot commands

- `/privacy` — short text + link to the full policy (Telegram Bot Developer Terms require a privacy policy; it can also be set in @BotFather).
  Replaces the current `info:privacy` text ("Uchinchi shaxslarga ruxsatsiz uzatilmaydi"), which is incomplete: data is processed by hosting providers.
- `/malumotlarim` — shows what we store (name, age, number of sessions, payment status) and a button **“Ma’lumotlarimni o‘chirish”** → confirmation → deletes profile, answers, signals, events, feedback.
  Payment records: keep only what the law requires (D4), anonymised otherwise.

## 9. Tests (minimum)

- age 15 → no discovery session row, no answers, `bot_start` row deleted, counter incremented.
- age 16, 35 → normal flow; age 36 → warning shown before discovery and before payment.
- consent refused → no rows.
- R1 invariance test (age/name do not change ranking).
- `/malumotlarim` delete → all user rows gone.

## 10. Open decisions (owner)

- **D1.** Over 35: B (warn + continue, recommended — career change after 35 is real and blocking feels unfair) or A (stop).
- **D2.** 16–17 year-olds. The personal-data law requires parents' consent for minors; sources disagree whether the threshold is 16 or 18 (lex.uz was not reachable from this session). Until a lawyer confirms: option (a) keep 16+ and add a parent-consent confirmation for 16–17, and no payment under 18; option (b) 18+ until confirmed. **Needs legal check.**
- **D3.** Operator identity in the policy (person / self-employed / YaTT / MChJ) — depends on the registration decision.
- **D4.** Retention periods (proposal in the policy draft).
- **D5.** Hosting regions (Render, Neon) — owner to read from dashboards; needed for the policy and the localisation question.

## 11. PM gate

PM direction: no new features until verification (recompute dry run) is done. This spec is documentation only. Implementation starts after PM approval.
