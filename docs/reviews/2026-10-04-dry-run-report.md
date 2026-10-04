# PM uchun hisobot — recompute dry run (2026-10-04)

## 1. Acceptance sequence — hammasi PASS

| # | Tekshiruv | Natija |
|---|---|---|
| 1 | #12 merge (#10 + #11 + #12 birga) | ✅ |
| 2 | Backend qo‘lda deploy | ✅ |
| 3 | Production smoke (gate endpoint, fake auth → 401 hamma joyda, to‘lov endpointlari 3 ta, 25/25, parity, v0 → 410, maosh yo‘q) | ✅ |
| 4a | 17 yosh (va 16) → block, qayta ochilganda rozilik yana so‘raldi (hech narsa saqlanmagan) | ✅ telefon, 2-akkaunt |
| 4b | 18 yosh → normal kirish | ✅ telefon |
| 4c | 40 yosh → ogohlantirish + davom | ✅ telefon |
| 4d | 20 va 60 yosh, bir xil javob → bir xil natija | ✅ avtomatik test (telefonda ikki akkaunt bilan bir xil javob amaliy emas) |
| 5 | `profile` endpoint orqali yosh bypass | ✅ production openapi: `POST /api/v1/profile` `age` qabul qilmaydi + test |
| 6 | `/privacy` va bot privacy flow | ✅ telefon |
| + | Restart paytida yuborilgan `/start` javobsiz qolmaydi (`drop_pending_updates=False`) | ✅ telefon: restart → darhol `/start` → javob keldi |

Telefon testida topilgan 2 ta kamchilik tuzatildi va deploy qilindi (PR #13): 35+ "Keyinroq" endi rozilik hisoblanmaydi (ogohlantirish qayta chiqadi); privacy matni yumshatildi — "Ma’lumotlaringiz faqat natijangizni tayyorlash uchun ishlatiladi va boshqa maqsadlarda hech kimga berilmaydi." O‘chirish va’dasi yo‘q.

Topilma: Render’da eski loyihaga tegishli `qadam-backend-v2` + `qadam-db` (muddati tugagan bepul Postgres) bor; Qadam bazasi — Neon, ta’sir yo‘q. Tavsiya: eski servisni suspend qilish (bepul 750 soat umumiy).

## 2. Dry run qanday ishga tushirildi

Render Shell bepul tarifda yo‘q. Shuning uchun GitHub Actions (qo‘lda ishga tushiriladi, PR #14):
- `--apply` workflow’da yo‘q, skript read-only rejimda `--apply`ni rad etadi;
- `QADAM_DB_READ_ONLY=1` → PostgreSQL har bir tranzaksiyani read-only qiladi (haqiqiy Postgres 16’da sinalgan: yozish `ReadOnlySQLTransactionError` bilan rad etildi);
- natija faqat umumiy sonlar; baza manzili GitHub secret’da, logda yashirin; ishlatilgandan keyin o‘chiriladi.

## 3. Natija (production, read-only, `applied: false`)

| | Discovery | Deep diagnostic | Jami |
|---|---|---|---|
| Yakunlangan sessiyalar | 10 | 6 | 16 |
| O‘zgaradigan sessiyalar | 7 | 3 | 10 |
| O‘zgaradigan signal qiymatlari | 44 | 30 | 74 |
| — 10 dan katta saqlangan (eski overflow) | 2 | 3 | 5 |
| — formula siljishi | 42 | 27 | 69 |
| &nbsp;&nbsp;yuqoriga / pastga | 42 / 0 | 18 / 9 | |
| &nbsp;&nbsp;≤0.5 / 0.5–1 / 1–2 / >2 ball | 0 / 12 / 14 / 16 | 3 / 9 / 8 / 7 | |
| &nbsp;&nbsp;o‘rtacha / maksimal siljish | 2.0 / 5.06 | 1.66 / 4.5 | |
| raqam → "o‘lchanmagan" | 0 | 0 | 0 |
| "o‘lchanmagan" → raqam | 0 | 0 | 0 |

## 4. Talqin

- **Sabab bitta va tushunarli.** Eski formula `o‘rtacha(v·w)` edi: vazn < 1 bo‘lsa qiymat sun’iy pasayardi, vazn > 1 bo‘lsa 10 dan oshardi. Yangi formula `Σ(v·w)/Σw` — doim [0, 10].
- **Discovery’da hammasi yuqoriga:** discovery vaznlarining 60% i < 1 (0.3–0.8), 14% i > 1. Ya’ni eski saqlangan qiymatlar muntazam **past** bo‘lgan; yangi qiymat javoblarni to‘g‘ri aks ettiradi.
- **Deep’da ikki tomonga:** vaznlar aralash (0.3–1.5) — kichik vaznli signallar ko‘tariladi, katta vaznlilar tushadi; 3 ta qiymat 10 dan oshgan.
- **"O‘lchanmagan ≠ zaif" bo‘yicha toza:** hech bir saqlangan raqam "o‘lchanmagan"ga yoki aksincha o‘zgarmaydi.
- **Hajm kichik:** jami 16 ta yakunlangan sessiya; ularning ko‘pchiligi sinov sessiyalari bo‘lishi mumkin (taxmin — ID’lar chiqarilmagan).

## 5. Bilmaganlarimiz (ochiq aytamiz)

- Dry run **kasblar tartibi** (top yo‘nalishlar) o‘zgarishini o‘lchamaydi — faqat signal qiymatlarini. `--apply`dan keyin eski sessiyani Mini App’da qayta ochgan foydalanuvchi boshqacha tartib ko‘rishi mumkin.
- Allaqachon yuborilgan PDF’lar o‘zgarmaydi (ular Telegram’da qolgan).

## 6. Tavsiya va sizdan qaror

**Tavsiyam: `--apply` qilish** — saqlangan qiymatlar hozir noto‘g‘ri (5 tasi 10 dan katta, discovery muntazam past), yangi qiymatlar esa invariant testlar bilan himoyalangan formula bo‘yicha. Lekin bu sizning qaroringiz.

Variantlar:
1. `--apply` hozir (backup → apply → shu dry run’ni qayta ishga tushirib `sessions_changed: 0` ni tasdiqlash).
2. Avval kasblar tartibi o‘zgarishini ham o‘lchaydigan dry run (aggregate, read-only), keyin qaror.
3. Apply qilmaslik — eski sessiyalar eski holida qoladi (ular hozir ham `strip_unsupported` filtridan o‘tadi).

`--apply` uchun alohida yozma tasdig‘ingiz kerak. Apply ham GitHub Actions orqali bo‘lsa, alohida (read-only bo‘lmagan) workflow kerak bo‘ladi — uni ham tasdig‘ingizdan keyin yozaman.
