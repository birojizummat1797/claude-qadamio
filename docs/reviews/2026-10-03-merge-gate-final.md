# Merge oldidan final check — holat (2026-10-03)

Hech narsa merge yoki deploy qilinmagan.

| Repo | Branch | Oxirgi commit | Testlar |
|---|---|---|---|
| `qadam-loyiha-deepseek` (P0) | `claude/p0-diagnostic-fixes` | `bd9064a` | **289 / 289**. Bot PR #2 bilan birga — konflikt yo‘q. Mini App `tsc` + `next build` ✅ |
| `claude-qadamio` (B3 data layer) | `claude/b3-career-catalog` | `cf76718` | unit **199 + 1 skip**, E2E **69**, build ✅ |

Belgilar: ✅ bajarildi · 🟡 tayyor, lekin production yoki inson kerak · ❌ bajarilmadi.

## B3 — 10 band

| # | Talab | Holat | Nima qilindi / nima qoldi |
|---|---|---|---|
| 1 | 25 active + 5 planned | ✅ | Snapshot: 25 active (slug’lar testda qotirilgan). Planned 5 ta — faqat nom, havola yo‘q, diagnostikaga yuborilmaydi. Yakuniy tasdiq — PM |
| 2 | API ↔ snapshot parity production’da | 🟡 | `node scripts/production-check.ts https://<backend>`: 25 kasb maydonlari va production vaznlaridan qayta hisoblangan signallar solishtiriladi. Lokal backend’da sinaldi. **Production backend manzili kerak** — bu muhitdan unga kira olmayman |
| 3 | DB versiyasi `v1.0` vs `v2.2` | 🟡 | O‘sha skriptning 1-tekshiruvi. Label `v1.0` bo‘lsa, 2–3-tekshiruvlar mazmun bir xilmi-yo‘qmi ko‘rsatadi. Production manzili kerak |
| 4 | Signal typo’lari | ✅ | Backend `signals_v1.json`: “Qat’iyat”, “Detallarga e’tibor”. Sayt snapshot’i qayta sinxronlandi |
| 5 | Web / Mini App / PDF label’lari bitta manbadan | ✅ | Web: snapshot `signalLabels` (sync + ixtiyoriy backend sync testi). Mini App: `lib/signal-labels.json` — backend’ning aynan nusxasi; 3 ta lokal xarita o‘chirildi. PDF: `signals_v1.json` dan o‘qiydi. Test: Mini App nusxasi = backend, PDF = backend |
| 6 | CTA → “Diagnostikani boshlash” | ✅ | `content/careers.ts`; test va’da so‘zlarini taqiqlaydi |
| 7 | 20 ta no-roadmap kasbga tavsiya va’dasi yo‘q | ✅ | Sayt: katalog matnida “diagnostika ko‘rsatadi” yo‘q. Bot: “25 ta yo‘nalish” / “5 ta yo‘nalish” va’dalari olib tashlandi. Mini App natija sahifalarida: “Hozircha natijada faqat yo‘l xaritasi tayyor bo‘lgan yo‘nalishlar ko‘rib chiqiladi.” Test bilan |
| 8 | Roadmap KB raqamli da’volari auditi | ✅ | `docs/reviews/2026-10-03-kb-claims-audit.md`: 260 satr, **hech birida manba yo‘q**. 7 ta statistika/bozor da’vosi o‘chirildi, 8 ta natija/vaqt va’dasi raqamsiz qayta yozildi, 8 ta maosh o‘chirildi; 225 ta reja ko‘rsatmasi qoldi |
| 9 | Eski DB natijalari strategiyasi | ✅ (taklif + skript) | §C |
| 10 | V0 endpoint’lari | ✅ | `/diagnostic/stage1`, `/stage2`, `/dev-unlock` → **410 Gone**. Eski hisobotlar faqat o‘qish uchun (report, summary, PDF). Mini App v0 sahifalari `/discovery` ga yo‘naltiradi |

## P0 — production tekshiruvlari

| Tekshiruv | Holat | Izoh |
|---|---|---|
| Production smoke | 🟡 | `production-check.ts` deploy’dan keyin ishga tushiriladi (deploy belgilarini ham tekshiradi: `/compare` yo‘q, v0 → 410, v1 PDF bor, public taxonomy’da maosh yo‘q). Eski kodda 4 ta FAIL beradi — farqni ushlaydi |
| Real Telegram → Mini App → diagnostika → natija → roadmap → PDF | 🟡 | Odam telefonda qilishi kerak — §D. Avtomatik ekvivalenti full-flow testi ✅ |
| `/compare` yo‘qligi | ✅ | Kodda o‘chirilgan, guard test bor; production’da — skript 4a |
| Maosh va foiz yo‘qligi | ✅ | Testlar: backend, AI, PDF snapshot, bot, Mini App manba skaneri |
| Fit ≠ Readiness | ✅ | Funksiyalar bir-birining ma’lumotini qabul qilmaydi (test); UI’da alohida: dalil darajasi va sharoit |
| Constraint ≠ past qobiliyat | ✅ | To‘siqlar faqat sharoit sifatida ko‘rsatiladi (“Qurilma kerak bo‘ladi”). Natija topilmasa: “Bu qobiliyatingiz haqida emas”. AI prompt’ida ham shu qoida |

## Bu bosqichda topilgan va tuzatilgan muhim narsalar

1. **O‘zimning xatoim:** `58bbe42` dagi pul filtri rekursiv edi. Kasb blokining ichidagi bitta qatorda pul bo‘lsa, **butun kasbni** (SMM Manager) PDF’dan va eski hisobotdan o‘chirib yuborardi. PDF snapshot testi bu xatoni “to‘g‘ri” deb yozib olgan edi. `f3deb68` da tuzatildi: endi faqat o‘sha qator olib tashlanadi. Regression test qo‘shildi, snapshot qayta yaratildi.
2. **Xavfsizlik:** `/diagnostic/dev-unlock` to‘lovsiz “paid” belgisini qo‘yardi va faqat `ENV != "development"` bilan himoyalangan edi. Default qiymat `"development"` — ya’ni production’da `ENV` o‘rnatilmagan bo‘lsa, ochiq edi. Endi 410.
3. **PDF asosiy yo‘lda:** `POST /api/v1/deep-diagnostic/{id}/pdf` va Mini App natija sahifasida “PDF hisobotni botga yuborish” tugmasi.

## C. Eski natijalar — strategiya

| Ma’lumot | Muammo | Yechim |
|---|---|---|
| `discovery_signals`, `deep_diagnostic_signals` | Eski formula: qiymat 10 dan katta bo‘lishi mumkin | Javoblar saqlangan → `python scripts/recompute_signals.py` (default — faqat hisobot) → backup → `--apply`. Deterministik, hech narsa taxmin qilinmaydi. Test: topadi, dry-run yozmaydi, `--apply` tuzatadi, qayta ishga tushirilsa 0 |
| Mini App / PDF chiqishi | Eski qiymatlar | Fit kirishni `[0,10]` ga cheklaydi; UI raqam ko‘rsatmaydi |
| v0 `test_results` (hisobot + saqlangan AI matni) | Eski engine; AI matnida foiz bo‘lishi mumkin | Qayta hisoblanmaydi (engine nafaqada). O‘qish uchun ochiq, `strip_unsupported` filtrlaydi. Saqlangan AI matni o‘zgartirilmaydi — ochiq xavf |
| Taxonomy DB | Label `v1.0`, JSON `v2.2` | `production-check.ts` 1–3 natijasiga qarab: mazmun farq qilsa, DB’ni JSON’dan qayta seed qilish (yangi versiya yozuvi, eski versiya o‘chirilmaydi) |

Tartib: backup → recompute dry run → natijani ko‘rib chiqish → `--apply` → `production-check.ts`.

## D. Real telefon tekshiruvi (Nemo yoki jamoa, deploy’dan keyin)

1. Telegram’da botni ochish → `/start`. Matnda “Sizga mos”, “25 ta”, foiz yo‘qligini tekshirish.
2. Mini App → Diagnostika → 13 savol → natija: foiz yo‘q; “Ma’lumot yetarli / qisman” belgisi; “faqat yo‘l xaritasi tayyor bo‘lgan yo‘nalishlar” izohi.
3. Premium (test hisob) → 18 savol → natija sahifasi: foiz yo‘q; sharoit so‘z bilan (masalan, “Qurilma kerak bo‘ladi”).
4. Bitta yo‘nalish → roadmap: maosh bloki yo‘q; “Rejectlar — 90%” kabi gaplar yo‘q.
5. “PDF hisobotni botga yuborish” → PDF chatga keladi; ichida foiz, maosh, “eng mos” yo‘q; A NUQTA, B NUQTA, “Birinchi 3 qadam” bor.
6. Eski `/stage1` havolasi (agar saqlangan bo‘lsa) → `/discovery` ga o‘tadi.

## E. Men qila olmagan narsalar (ochiq)

- Production backend va DB’ga kira olmayman (manzil yo‘q; bu muhitdan `vercel.app` ham yopiq). 2-, 3-band va smoke uchun backend manzili kerak — manzil berilsa, skriptni men ishga tushirib ko‘raman.
- Real Telegram oqimini telefonda o‘tkaza olmayman.
- Production log’larini ko‘ra olmayman (`/compare` va v0 ga real trafik bor-yo‘qligi).
- KB’dagi raqamsiz baholovchi gaplar va saqlangan eski AI matnlari editorial review talab qiladi.
