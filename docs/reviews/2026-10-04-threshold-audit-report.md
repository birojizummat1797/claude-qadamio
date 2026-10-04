# BL-14 — minimal ball (threshold) audit, 2026-10-04

**Rejim:** production DB, READ-ONLY (`QADAM_DB_READ_ONLY=1`). Hech narsa yozilmadi.
**Run:** `Recompute dry run (read-only)` → `threshold_audit`, run #4 (id 37227402736), branch `claude/threshold-audit` (`f91032e`, hali `main`ga merge qilinmagan — faqat o‘lchov skripti).
**Asos:** Founder qarori — `MAX=5`, `count = min(5, ball ≥ T bo‘lgan kasblar)`, 0 → halol xabar. Bu hisobot T qiymatini **tanlamaydi**; tanlash — Founder.

## Ball nima
`fit` (0–100): foydalanuvchining o‘lchangan signallari kasb talab qiladigan signallarga qanchalik mos (signal qiymati × ishonch, kasb vaznlari bilan). `composite` = fit × sharoit modifikatori (0.7–1.0). Hozirgi barcha sessiyalarda ikkalasi **bir xil chiqdi** (modifikator 1.0) — shuning uchun quyida bitta jadval.

## 1. Haqiqiy sessiyalar — har T da nechta tavsiya
Katakda: shuncha tavsiya oladigan sessiyalar soni.

**Dastlabki natija / Career Intelligence (faqat discovery), 10 sessiya.** Top-1 ball: 40.6 – 50.5 (median 44.4).

| T | 0 (halol xabar) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| 35 | 0 | 1 | 1 | 0 | 1 | 7 |
| 40 | 0 | 3 | 0 | 5 | 2 | 0 |
| 45 | **6** | 2 | 2 | 0 | 0 | 0 |
| 50 | **9** | 1 | 0 | 0 | 0 | 0 |
| 55+ | 10 | 0 | 0 | 0 | 0 | 0 |

**Chuqur tahlil natijasi / PDF (discovery + deep), 6 sessiya.** Top-1 ball: 54.0 – 58.3.

| T | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| 35 | 0 | 0 | 0 | 1 | 1 | 4 |
| 40 | 0 | 0 | 2 | 4 | 0 | 0 |
| 45 | 0 | 0 | 6 | 0 | 0 | 0 |
| 50 | 0 | 6 | 0 | 0 | 0 | 0 |
| 55 | 1 | 5 | 0 | 0 | 0 | 0 |
| 60+ | 6 | 0 | 0 | 0 | 0 | 0 |

**Roadmap (discovery + deep), 6 sessiya** — chuqur tahlilga juda yaqin (T=50 va 55 da hammasi 1 ta; T=60 da hammasi 0).

## 2. Taqqoslash: tasodifiy javoblar (sintetik, 200 ta, DB emas)
Har savolga tasodifan javob bosilgan 200 ta to‘plam — "o‘ylamay bosgan" holat. Bu haqiqiy foydalanuvchi emas, faqat shkala uchun mezon.

| T | Discovery: ≥1 tavsiya oladi | Chuqur: ≥1 tavsiya oladi |
|---|---|---|
| 40 | 48% | 45% |
| 45 | 26% | 27% |
| 50 | 13% | 10% |
| 55 | 4% | 3% |

Tasodifiy Top-1 median: discovery 39.7, chuqur 39.4.

## 3. Xulosalar (faktlar)
1. **Discovery bali tasodifiy javobdan deyarli ajralmaydi.** Haqiqiy sessiyalar Top-1 mediani 44.4, tasodifiy — 39.7 (75-persentil 45.0). Ya’ni faqat qisqa testga asoslangan tavsiyada qaysi T tanlansa ham: yo haqiqiy foydalanuvchilarning ko‘pchiligi halol xabar oladi (T ≥ 45), yo tasodifiy bosganlarning yarmiga yaqini tavsiya oladi (T = 40).
2. **Chuqur tahlil yaxshiroq ajratadi.** Haqiqiy Top-1: 54–58; tasodifiy javoblarning faqat 10% i 50 ga yetadi.
3. **Shkala past:** hech bir sessiyada ball 60 dan oshmagan. "Yaqin" bu shkalada ~50 atrofida boshlanadi, 70–80 emas.
4. Hozir har bir sessiyada 5 ta kasbning hammasi qatnashadi (coverage ≥ 0.5).

## 4. Cheklovlar (ochiq)
- Hajm juda kichik: 10 + 6 sessiya, bir qismi bir odamning sinov sessiyalari bo‘lishi ehtimoli bor (taxmin). Bu — real foydalanuvchilar taqsimoti emas.
- Tasodifiy taqqoslash — model, haqiqiy xulq emas.
- Natija faqat 5 ta yo‘l xaritasi tayyor kasb uchun. BL-15 kengayganda ballar qayta o‘lchanishi kerak.

## 5. Founder qarori uchun
**Qaror kerak:** T qiymati. Variantlar (ma’lumot, tavsiya emas):

| T | Discovery natijasi | Chuqur natija | Tasodifiy bosgan (discovery / chuqur) |
|---|---|---|---|
| 40 | hamma 1–4 ta oladi | 2–3 ta | 48% / 45% tavsiya oladi |
| 45 | 6/10 halol xabar | hamma 2 ta | 26% / 27% |
| 50 | 9/10 halol xabar | hamma 1 ta | 13% / 10% |

**Claude tavsiyasi: T = 50.** Sabab: tasodifiy javoblarning 87–90% iga tavsiya bermaydi, chuqur tahlil o‘tganlarning hammasiga kamida 1 ta beradi. Kamchiligi: qisqa test (discovery) natijasida deyarli hamma halol xabar oladi — bu xavf, pastda.
**Yakuniy qaror: Founder.**

**Xavf (qaror o‘rniga emas, ma’lumot uchun):** T=45 yoki 50 da qisqa testdan keyingi sahifada ko‘pchilikka "aniq yo‘nalish ko‘rinmayapti" chiqadi. Bu halol, lekin foydalanuvchi qisqa testdan keyin hech narsa olmagandek his qilishi mumkin. Qanday hal qilish (masalan, halol xabarda chuqur tahlilga taklif) — alohida product qarori; so‘ralmaguncha implement qilinmaydi.

**Aniqlashtirish kerak:** threshold qaysi sahifalarga qo‘llanadi — dastlabki natija, Career Intelligence, chuqur natija/PDF, roadmap tanlovi (hammasi yoki bir qismi)?
