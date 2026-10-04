# PM uchun so‘rov — 2026-10-04

Assalomu alaykum. Oxirgi javobingizdan (deploy ruxsati: backup → deploy → smoke → telefon → B3 → dry run) beri qilingan ishlar va sizdan kutilayotgan qarorlar.

## 1. Bajarildi (production)

- **Backup → deploy → smoke:** bajarildi. Production tekshiruvi: API↔snapshot 25/25 PASS, signal parity PASS, compare o‘chirilgan, v0 → 410, maosh yo‘q, PDF endpoint bor, soxta auth → 401. DB taxonomy yorlig‘i hali `v1.0` (ma’lum, bloklamaydi).
- **Incident:** deploydan keyin bot javob bermay qoldi. Sabab: eski instance o‘chayotganda `delete_webhook` qilgan. Webhook qo‘lda tiklandi; doimiy tuzatish — PR #4.
- **Telefon testi:** PASS (bot, Mini App, PDF ishlaydi). Topilmalar:
  1. Bosh sahifada "8 savol", aslida 13 → PR #5.
  2. "Rivojlantirish mumkin" o‘lchanmagan signallarni zaiflik sifatida ko‘rsatgan → PR #5.
  3. Roadmap "why" matni hukm ohangida → PR #9.
  4. Chuqur diagnostika eski likert yorliqlari bilan (kutilgan, diagnostic v2).
- **B3 data layer** veb-saytga merge qilindi (faqat data layer; `/yonalishlar` sahifasi yo‘q — sizning ko‘rib chiqishingizni kutadi).

## 2. Yangi PR’lar (hech biri merge qilinmagan; hammasi birga sinalgan: to‘qnashuv yo‘q, 396 test)

| PR | Mazmun | Turi |
|---|---|---|
| #4 | Shutdown’da webhook o‘chirilmaydi | incident fix |
| #5 | O‘lchanmagan ≠ zaif; "13 savol" | telefon testi fix |
| #6 | `auth.py` dev-mode fail-closed (siz aytgan keyingi PR) | xavfsizlik |
| #7 | To‘lov holat mashinasi: rad etish/tasdiqlash/qayta yuborish/bekor qilish; v0 to‘lov endpointlari o‘chirildi | bug + xavfsizlik |
| #8 | Webhook secret: ochiq default yo‘q, zaif bo‘lsa bot ishga tushmaydi | xavfsizlik |
| #9 | Roadmap matnlari: foydalanuvchi haqida hukm/va’da yo‘q | matn |

PR #7 da topilgan jiddiy xatolar: tasdiqdan keyin rad etish kirishni yopmagan; ikki marta tasdiqlash ikki marta ruxsat bergan; `log` aniqlanmagani sabab admin’ga yetkazishda xato bo‘lsa 500; `/stars/confirm` mijoz so‘zi bilan "to‘langan" qilgan (v1 ruxsat bermagan, lekin endpoint o‘chirildi).

PR #8: kodda default secret ochiq yozilgan edi. Agar Render’da sozlanmagan bo‘lsa, soxta update orqali admin "Tasdiqlash" callback’ini yuborish mumkin edi. Deploydan oldin egasi yangi secret qo‘yadi (yo‘riqnoma tayyor).

**Yangi funksiya yo‘q** — hammasi tuzatish, xavfsizlik va matn.

## 3. Hujjatlar (faqat loyiha, kod yo‘q)

- Yosh chegarasi, ism, rozilik spetsifikatsiyasi — `docs/specs/2026-10-04-age-gate-and-profile.md`
- Rozilik matni va maxfiylik siyosati loyihalari — `docs/legal/` (yurist tekshirmagan)
- Deploy kuni yo‘riqnomasi — `docs/plans/2026-10-04-deploy-day-runbook.md`

Audit topilmasi: ism, yosh, joy hozir saqlanmaydi; yosh so‘ralmaydi, shuning uchun 16+ qoidasini bajarib bo‘lmaydi va 16 yoshdan kichik ham to‘lov sahifasiga yeta oladi.

## 4. Kutilmoqda

- **`recompute_signals.py` dry run** — egasi Render Shell’da ishga tushiradi; natijani sizga yuboramiz. `--apply` faqat sizning ruxsatingiz bilan.

## 5. Sizdan qarorlar

1. **PR #4–#9 ni deploy qilishga ruxsat** (tartib: secret → #8 → #5 → #6 → #7 → #9 → bot restart → telefon tekshiruvi).
2. **Yosh chegarasi spetsifikatsiyasini dry rundan keyin amalga oshirishga ruxsat** — yoki uni P0 deb hisoblab, oldinroq? (Voyaga yetmaganlar to‘lov sahifasiga yetishi mumkinligi sabab.)
3. **35+ yosh:** ogohlantirib davom ettirish (tavsiya) yoki to‘xtatish?
4. **16–17 yosh:** yurist javobigacha (a) 16+ + ota-ona tasdig‘i, 18 dan kichikdan to‘lov olinmaydi, yoki (b) vaqtincha 18+?
5. **To‘lov qabul qilish:** yuridik maqom (o‘zini o‘zi band / YaTT) aniqlanguncha chuqur tahlilni bepul beta qilish kerakmi? Egasi bu hafta soliq organidan aniqlaydi.
6. **`/yonalishlar` sahifasi (B4)** — qachon ko‘rib chiqasiz?

Rahmat.
