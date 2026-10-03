# PM uchun qisqa xulosa — merge gate (2026-10-03)

Hech narsa merge yoki deploy qilinmagan. Batafsil: `docs/reviews/2026-10-03-merge-gate-final.md` (F va G bo‘limlari).

## 1. Production check (host: qadam-backend-deepseek.onrender.com, faqat o‘qish)

| # | Tekshiruv | Natija |
|---|---|---|
| 1 | Production’da ishga tushirish | PASS |
| 2 | API ↔ snapshot, 25 kasb | **PASS** |
| 3 | DB taxonomy versiyasi | FAIL — faqat label (`v1.0`); mazmun v2.2 bilan aynan bir xil |
| 4 | Signal/vazn mosligi | **PASS** |
| 5 | `/compare` yo‘q | FAIL — kutilgan: production’da eski kod |
| 6 | `/dev-unlock` → 410 | FAIL — kutilgan + xavfsizlik (§3) |
| 7 | `/stage1`, `/stage2` → 410 | FAIL — kutilgan |
| 8 | Public taxonomy’da maosh yo‘q | FAIL — kutilgan |
| 9 | PDF endpoint | FAIL — kutilgan |
| 10 | Bot → Mini App deep-link | BLOCKED — PR #2 deploy + telefon sinovi |

5–9-bandlar P0 kodini tekshiradi. P0 hali deploy qilinmagan, shuning uchun bu natija kutilgan. Lokal backend’da yangi kod bilan barcha bandlar PASS, eski kod bilan esa 4 ta FAIL — skript farqni ushlaydi.

## 2. Kod holati

- **P0** — `qadam-loyiha-deepseek: claude/p0-diagnostic-fixes`: 289/289 test. PR #2 bilan birga sinalgan, konflikt yo‘q. Mini App build ✅.
- **B3 data layer** — `claude-qadamio: claude/b3-career-catalog`: unit 199, E2E 69, build ✅.
- B3 gate’ning 10 bandi bajarildi: signal typo’lari, yagona label manbasi, “Diagnostikani boshlash” CTA, 20 kasbga tavsiya va’dasi yo‘q, KB da’volari auditi, legacy migration skripti, v0 → 410, PDF v1 yo‘lida.

## 3. Kritik — production `ENV=development`

Soxta `init_data` yuborilganda 401 emas, 400 qaytdi. Bu Telegram autentifikatsiyasi dev rejimda chetlab o‘tilayotganini ko‘rsatadi (`auth.py`: `ENV` default qiymati `"development"`). Natijada `/dev-unlock` to‘lovsiz “paid” qo‘yishi mumkin. Dalil bilvosita; ekspluatatsiya qilinmagan. P0 bu muammoni to‘liq yopmaydi — `auth.py` dagi dev rejim saqlanib qolgan.

**Tavsiya (kodsiz, darhol):** Render → backend → Environment → `ENV=production` → redeploy → production check qayta ishga tushiriladi (soxta `init_data` → 401 bo‘lishi kerak).

## 4. Tavsiya etilgan tartib

1. `ENV=production` (bugun, kodsiz).
2. Production check qayta: 401 tasdiqlanadi.
3. PM ruxsati bilan P0 + PR #2 deploy.
4. Production check: 5–9 PASS bo‘lishi kerak.
5. Jamoa telefonda sinaydi (`merge-gate-final.md` §D).
6. B3 data layer merge → `/yonalishlar`.

## 5. PM qarori kerak

- P0 + PR #2 ni deploy qilishga ruxsat (1–2-qadamlardan keyin).
- Deploy usuli: alohida staging service yoki rollback rejasi bilan to‘g‘ridan-to‘g‘ri production.
- DB label `v1.0` → `v2.2`: tuzatilsinmi? Mazmun bir xil, bu kosmetik.
