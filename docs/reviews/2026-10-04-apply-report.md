# PM uchun hisobot — signal recompute `--apply` (2026-10-04)

**Holat: BAJARILDI, barcha tekshiruvlar o‘tdi.** Tasdiqlangan 8 bosqichli ketma-ketlik bo‘yicha.
Workflow: `Recompute APPLY (one-time, audited)`, run #1 (id 37226714810), commit `e12aa70` (`main`), 2026-10-04 19:02–19:04 UTC.

## 1. Backup
| | |
|---|---|
| Neon branch | `pre-apply-2026-10-04` |
| ID | `br-quiet-frog-b2901oqa` |
| Yaratilgan | 2026-10-05 00:01 (Toshkent, UTC+5) = 2026-10-04 19:01 UTC — apply’dan (19:03 UTC) oldin |
| Yaratgan | Founder (qo‘lda) |

## 2. Pre-apply snapshot (read-only)
- sha256 (shifrlanmagan JSON): `7949e93729a4a571c4d49fd04575d78e628330a40e72b6d51da4dcaa16e731ff`
- Tarkibi: discovery 10 sessiya (o‘zgaradigan 7), deep 6 sessiya (o‘zgaradigan 3), 22 reyting yuzasi (eski + kutilgan).
- AES-256 (openssl, pbkdf2, 200 000 iteratsiya) bilan shifrlangan; artifact `pre-apply-snapshot-encrypted` (ID 11311319991), 90 kun saqlanadi. Kalit faqat Founder’da. Shifrlanmagan nusxa job oxirida o‘chirildi.

## 3. Apply (bitta tranzaksiya, REPEATABLE READ)
- `applied: true`, `sessions_applied: 10` (snapshot’dagi 7 + 3 bilan mos).
- `rows_written: 130` — shu 10 sessiyaning barcha signal qatorlari qayta yozildi; ulardan 74 tasining qiymati o‘zgargan (dry run hisobotidagi 44 + 30), qolganlari bir xil qiymat bilan qayta yozilgan.
- Tranzaksiya ichida: har sessiya uchun drift tekshiruvi (snapshot’dan keyin o‘zgarmaganmi), read-back (yozilgan = kutilgan), barcha jadvallar sonining oldin/keyin solishtiruvi (boshqa jadvalga tegilmagan). Har biri o‘tdi, keyin commit.

## 4. Post-apply dry run (read-only)
`applied: false`, `sessions_changed: 0`, `signals_changed: 0`, `stored_values_above_10: 0` — discovery va deep alohida ham 0.

## 5. Snapshot bilan solishtirish (verify, read-only)
Haqiqiy qiymatlar **snapshot’dagi kutilgan qiymatlar** bilan solishtirildi (hozirgi-vs-hozirgi emas).

| Tekshiruv | Natija |
|---|---|
| `passed` | ✅ true, `problems: []` |
| Tekshirilgan sessiyalar / yuzalar | 16 / 22 |
| Reyting: kutilgan = haqiqiy (Career Intelligence, deep natija, roadmap) | ✅ |
| Evidence / context / excluded / confidence / missing o‘zgarmagan | ✅ |
| `unmeasured ≠ weak` | ✅ |
| `concurrent_activity_rows` (apply paytida boshqa yozuvlar) | `{}` — yo‘q |

## 6. Tarixiy PDF’lar
O‘zgarmagan. PDF’lar bazada saqlanmaydi — faqat Telegram orqali yuborilgan fayllar; apply ularga tegmaydi.

## 7. Eski natija qayta ochilganda
- Server yuzalari (roadmap, PDF qayta yaratish, Career Intelligence API) natijani har safar saqlangan signallardan qayta hisoblaydi → endi **yangi** reyting ko‘rinadi (ranking auditdagi o‘zgarishlar: CI’da 2 ta sessiyada Top-1, deep’da Top-1 o‘zgarmagan).
- Mini App natijani faqat ochiq oyna xotirasida (sessionStorage) ushlaydi; eski natijani qayta ochadigan sahifa yo‘q.
- Reyting snapshot’i saqlanmaydi → BL-17 (natija versiyalash) backlog’da.

## 8. Qaytarish (kerak bo‘lsa)
Neon branch `br-quiet-frog-b2901oqa` dan restore — faqat Founder qarori bilan. Hozir bunga sabab yo‘q.

## Keyingi qadam
BL-14 (tavsiyalar soni): read-only threshold audit → Founder chegara qiymatini tasdiqlaydi → kod.
