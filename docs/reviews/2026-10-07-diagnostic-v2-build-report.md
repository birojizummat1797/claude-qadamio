# Diagnostika v2 (9×25) — bajarilgan ish hisoboti (2026-10-07, tun)

Holat: **QORALAMA — Founder ko‘rib chiqishi va sinovi kerak.** Hech narsa merge yoki deploy qilinmadi.
Asos: Founder: "davom et va iloji boricha to‘liq tugataver keyin kunduzi nasib qilsa test qilamiz"; `docs/decisions/2026-10-07-p2-catalog-first.md`.

## 1. Nima qilindi
| Bosqich | Natija | Joyi |
|---|---|---|
| 2 | 8 katalog uchun amaliy topshiriqlar (4 tadan), "O‘rgan va bajar" (dars + 2 savol), signal matritsalari | `docs/specs/2026-10-07-golden-samples-batch-1.md`, `…-batch-2.md` |
| 3 | 21 ta yangi yo‘l xaritasi (qoralama), avtomatik tekshiruv bilan | `docs/specs/roadmaps-v3/` |
| 3 | 25 kasb → texnik ID jadvali | `docs/specs/2026-10-07-catalog-id-mapping.md` |
| 4 | Backend: ma’lumot fayli, hisoblash qoidalari, `/api/v2` endpointlari, yangi jadval, testlar | `qadam-loyiha-deepseek`, branch `claude/diagnostic-v2-9x25` |
| 4 | Mini App: `/v2` sahifasi (qisqa test → chuqur tahlil → natija → yo‘l xaritasi) | o‘sha branch, `qadam-miniapp/app/v2` |
| 4 | Bot: `/v2test` — faqat adminlar uchun sinov tugmasi | o‘sha branch |

**Tekshiruvlar:**
- Backend: 508 test o‘tdi (avvalgi 464 + 44 yangi), yangi fayllarda ruff toza.
- Mini App: `next build` o‘tdi.
- To‘liq oqim lokal backend bilan brauzerda boshidan oxirigacha sinab ko‘rildi (qisqa test → chuqur tahlil → natija → yo‘l xaritasi).

## 2. Asosiy tamoyillar (kodda)
- Savol matnlari Founder ko‘rgan spec’lardan **avtomatik** olinadi (`scripts/build_diagnostic_v2_data.py`). Qo‘lda ko‘chirilmagan, shuning uchun matn farqi bo‘lmaydi.
- Natijada **ball, foiz yo‘q** — faqat dalil gaplari ("… topshirig‘ini to‘g‘ri bajardingiz"). Xato javobdan salbiy xulosa chiqmaydi.
- "Bilmayman" = o‘lchanmagan. U ball qo‘shmaydi va ayirmaydi.
- To‘g‘ri javoblar va kasb belgilari foydalanuvchiga yuborilmaydi (testlar bilan tekshirilgan).
- Javoblar tartibi har safar aralashtiriladi, "Bilmayman" doim oxirida.
- 18+ tekshiruvi har bir v2 endpointda.
- **Eski (v1) oqim o‘zgarmagan.** v2 asosiy menyuga ulanmagan: kirish faqat `/v2test` (admin) orqali.
- Har savolga ketgan vaqt saqlanadi (keyin "juda tez javob" — ishonchlilik tekshiruvi uchun).

## 3. Kunduzi qanday sinaymiz
Telegram ichida sinash uchun branchni deploy qilish kerak. **Bu sening tasdig‘ing bilan bo‘ladi.**
1. O‘zgarish qo‘shimcha (additive): yangi jadval `diagnostic_v2_results`, yangi endpointlar, yangi sahifa. Eski oqimga tegilmagan.
2. Tasdiqlasang: PR ochaman → merge → Render (backend) va Vercel (Mini App) deploy.
3. Botga `/v2test` yozasan (`ADMIN_IDS` da bo‘lishing kerak) → "Diagnostika v2 (sinov)" tugmasi.
4. Sinov ro‘yxati:
   - qisqa test natijasi o‘zingga mosmi;
   - chuqur tahlilda savollar tushunarlimi;
   - topshiriqlar qiyin yoki osonmi;
   - natija sahifasi va yo‘l xaritasi.
5. Topilgan har bir kamchilikni yoz — tuzataman.

## 4. Sen hal qilishing kerak bo‘lgan masalalar (Claude takliflari)
| # | Masala | Hozir kodda (taklif) |
|---|---|---|
| 1 | Chuqur tahlilda "aniq kasb" qoidasi | 1-kasb ≥ 4 tanlov va ulushi 2-kasbdan yuqori; teng — ikkalasi; kam — halol xabar |
| 2 | Qisqa test "aniq emas" chiqsa | Halol xabar + 9 yo‘nalishdan birini **o‘zi tanlab** chuqur tahlilni sinash imkoni |
| 3 | Ikki yo‘nalish teng chiqsa | A qism 6 + 5 savol; amaliy topshiriq va dars — **1-yo‘nalishdan** |
| 4 | Savollar tartibi | A → ish uslubi → sharoit → 4 topshiriq (har biridan keyin "oson/qiyin") → dars + 2 savol |
| 5 | Yo‘l xaritalari | 21 ta yangi xarita "qoralama" belgisi bilan ko‘rsatiladi |
| 6 | To‘lov | v2 hozir to‘lovsiz (sinov). 119 000 so‘m faqat to‘lov yoqilganda, alohida tasdiq bilan |

## 5. Ma’lum cheklovlar (ochiq aytaman)
- **Qisqa test real odamlarda hali sinalmagan.** Pilot 1 CSV kelmagan. Simulyatsiya faqat tuzilmani tekshiradi.
- **v2 uchun PDF hali yo‘q** — natija faqat ekranda.
- **Yo‘l xaritalaridagi manba havolalari tekshirilmagan:** bu sessiyada tarmoq yopiq edi. Sinovda bosib ko‘rish kerak.
- **Har savolga ketgan vaqt hozircha faqat saqlanadi**, natijaga ta’sir qilmaydi. Chegarani pilotdan keyin belgilaymiz.
- **Ba’zi savollar "ishonchlilik xavfi" bilan belgilangan** (golden sample fayllarida). Pilotda kasblarni ajratmasa, o‘chiriladi.
- **9×25 faqat raqamli kasblar.** Boshqa sohaga mos odam halol "aniq emas" javobini oladi.

## 6. Founder tasdig‘i va merge (2026-10-08)
- Founder: deploy uchun "ha".
- PR: https://github.com/birojizummat1797/qadam-loyiha-deepseek/pull/19 — `main`ga merge qilindi (`e9a320f`). Vercel preview build — muvaffaqiyatli.
- Qolgan: Render’da backend’ni qo‘lda deploy qilish (Founder), keyin botda `/v2test`.
