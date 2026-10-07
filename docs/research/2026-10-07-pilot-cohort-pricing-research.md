# Bepul pilot va pullik cohort — tadqiqot (2026-10-07)

Holat: **TADQIQOT** — Founder va PM muhokamasi uchun. Qaror: Founder.
Aniq qaror: birinchi bosqich narxi 119 000 so‘m (`docs/decisions/2026-10-07-first-stage-price.md`).
Manbalar sifati: ko‘pi amaliyotchi bloglari va xorijiy (asosan AQSh SaaS) ma’lumotlari. O‘zbekiston bo‘yicha ma’lumot juda kam. Raqamlar maqsad emas, faqat mo‘ljal.

---

## 1. "Birinchi bosqich" nima? (PM nimani nazarda tutgan)

**Hozirgi mahsulot qatlamlari (kod va sayt bo‘yicha):**
| Qatlam | Nima beradi | Holati |
|---|---|---|
| Qisqa test | Dastlabki natija: yaqin yo‘nalishlar va signallar | Hammaga bepul (beta) |
| Chuqur tahlil | Tayyorgarlik tahlili, Career Intelligence, shaxsiy yo‘l xaritasi, PDF | Pullik bo‘lishi rejalashtirilgan; hozir `free_beta` |
| Inson qismi (yo‘q) | Natijani tushuntirish suhbati | Mavjud emas — concierge pilotda qo‘shilishi mumkin |

**PM taklifi:** pilot ishtirokchisi "o‘zi haqidagi muhim signallarni ko‘radi va keyingi professional qadamni aniqlashga yordam beradigan individual natija oladi". Bu ta’rif chuqur tahlilga mos keladi, lekin PM uning tarkibini aniq yozmagan.

**Asosiy tamoyil:** pilotda beriladigan narsa 2-cohort 119 000 so‘mga sotib oladigan narsa bilan **bir xil** bo‘lishi kerak. Aks holda to‘lov testi boshqa mahsulotni o‘lchaydi. Agar pilotda faqat bepul qisqa test berilsa, "119 000 so‘mlik" degan gap noto‘g‘ri bo‘ladi.

**Variantlar:**
| | Tarkib | Afzallik | Kamchilik |
|---|---|---|---|
| A | Faqat chuqur tahlil (bot/Mini App, avtomatik) | Ko‘p odamga yetadi, arzon | Odam natijani tushunmasa, nima uchun foydali bo‘lmaganini bilmaymiz |
| B | Chuqur tahlil + natijani tushuntirish suhbati (concierge) | Eng ko‘p o‘rganamiz; qiymat yuqori | Vaqt: 20 kishi × suhbat; 119 000 so‘mlik mahsulotga suhbat ham kiradimi — hal qilish kerak |
| C | Faqat suhbat | Tez boshlanadi | Sotiladigan mahsulot emas — test noto‘g‘ri narsani o‘lchaydi |

Claude tavsiyasi: **B**, agar 119 000 so‘mlik mahsulotga ham suhbat kirsa; kirmasa — **A** va suhbat faqat ixtiyoriy fikr-mulohaza uchun. Yakuniy qaror: Founder.

## 2. N va segmentlar

**Topilmalar:**
- Concierge MVP uchun standart son yo‘q. Amaliyotchi qo‘llanmalari 5–50 kishi oralig‘ini aytadi, chegara — 1–3 kishi qo‘lda xizmat qila oladimi. ([Koji](https://www.koji.so/docs/concierge-mvp-guide), [eChai](https://echai.ventures/startingup/validate-idea/what-is-a-concierge-or-wizard-of-oz-mvp-and-when-should-i-use-one))
- Muhimi son emas, **to‘g‘ri ilk foydalanuvchi**. Steve Blank’ning "earlyvangelist" mezonlari: muammosi bor; muammosini biladi; faol yechim izlayapti; vaqtinchalik yechim yasagan; pul topa oladi. ([Salim Virani](https://www.salimvirani.com/earlyvangelist/), [Startup Owner’s Manual](https://libcat.ru/knigi/priklyucheniya/unrecognised/632002-20-steve-blank-the-startup-owner-s-manual.html))
- Bizning so‘rovnomadagi "issiq" guruh bu mezonlarga mos keladi. Ular faol izlagan, kursga pul sarflagan (vaqtinchalik yechim + budjet) va natijadan qoniqmagan (`2026-10-07-custdev-wave0-analysis.md`, 5-bo‘lim).
- PMF o‘lchovi (Sean Ellis, 40% "juda afsuslanaman") barqaror foiz uchun taxminan **30+ javob** talab qiladi. 20 kishida natija faqat yo‘nalish ko‘rsatadi. ([PM Toolkit](https://pmtoolkit.ai/calculators/pmf-score), [Stackmatix](https://www.stackmatix.com/blog/sean-ellis-pmf-survey))

**PM taklifi va xavf:** 20 kishi 8 segmentdan olinsa, har segmentda 2–3 kishi bo‘ladi. Bunda hech bir segment haqida xulosa chiqarib bo‘lmaydi.

**Variantlar:**
| | Tarkib |
|---|---|
| PM | 20 kishi, 8 xil vaziyatdan teng |
| Claude | ~10–12 kishi "earlyvangelist" profilidan + ~8–10 kishi turli vaziyatlardan |
| Tor | 20 kishi faqat bitta segmentdan |

Har qanday variantda: **faqat 18+**. Arizada yosh, holat va "so‘nggi 12 oyda nima qildingiz / nimaga pul sarfladingiz" savollari bo‘ladi. "Faqat 20 o‘rin" degan gap haqiqiy bo‘lishi kerak — soxta tanqislik ishonchni buzadi.

## 3. Pilot e’lonida narxni aytish

**Topilmalar:**
- **"Bepul" alohida ta’sir qiladi.** "Bepul" oddiy arzon narx emas. U odamlarni nomutanosib ravishda o‘ziga tortadi, ba’zan kamroq qimmatli variantga ham. ([Shampanier, Mazar, Ariely 2007, Marketing Science](https://people.duke.edu/~dandan/webfiles/PapersPI/Zero%20as%20a%20Special%20Price.pdf)) → Bepul pilotga ehtiyoji yo‘q odamlar ham keladi. Saralash (2-bo‘lim) shuning uchun kerak.
- **E’lon qilingan narx odamning ichki narx tasavvurini o‘zgartiradi**, lekin faqat **ishonarli** bo‘lsa. Ishonarsiz narx teskari ta’sir qiladi. ([reference price tadqiqoti (SAGE)](https://journals.sagepub.com/doi/full/10.1002/dir.20118), [ASA](https://www.asa.org.uk/static/uploaded/7d3a284d-651f-494f-954b9c2d1a0e25fc.pdf))
- **Founding member / beta amaliyoti:** kelgusi narxni va ilk foydalanuvchilar uchun shartni ochiq aytish tavsiya etiladi; noaniqlik keyin norozilik keltiradi. ([Kinde](https://kinde.com/learn/billing/pricing/anchor-pricing-how-to-set-early-prices-without-locking-yourself-in/), [Membership.io](https://membership.io/blog/founding-member-pricing))
- Qarama-qarshi fikr ham bor: ba’zilar beta’da arzonlashtirish emas, yuqori narx qo‘yishni tavsiya qiladi, chunki bu faqat jiddiy foydalanuvchilarni qoldiradi. ([Wildfire Labs](https://wildfirelabs.substack.com/p/price-like-apple-scale-like-slack)) Bular asosan amaliyotchi fikri; nazorat ostidagi tadqiqot topilmadi.

**Variantlar:**
| | Nima deyiladi | Afzallik | Xavf |
|---|---|---|---|
| A (PM) | "Narxi 119 000 so‘m; pilot ishtirokchilari uchun bepul" | Halol; qiymat tasavvuri; keyin narx kutilmagan bo‘lmaydi | Narx 2-cohortda haqiqatan olinishi shart, aks holda chalg‘ituvchi |
| B | Narx aytilmaydi | Oddiy | "Bepul" qadrsizlanadi; keyin narx kutilmagan bo‘ladi |
| C | Narx faqat pilot oxirida aytiladi | Natijaga ta’sir qilmaydi | Odam o‘zini aldangandek his qilishi mumkin |

Claude tavsiyasi: **A**, chunki narx endi Founder qarori bilan aniq va haqiqiy. Yuridik tekshiruv qilinmagan: O‘zbekiston reklama qonunchiligida "qiymati X" iborasi bo‘yicha talablar tekshirilmadi.

## 4. Muvaffaqiyat mezoni

**Topilmalar:**
- **Mezon test boshlanishidan oldin yoziladi.** Alberto Savoia’ning XYZ formulasi: "Y guruhning kamida X% i Z ni qiladi". Bunda gap emas, xatti-harakat o‘lchanadi. ([Product Compass](https://www.productcompass.pm/p/how-to-build-the-right-product-with))
- **Mo‘ljal raqamlar (AQSh SaaS, bizga to‘g‘ridan-to‘g‘ri mos emas):** karta talab qilinmagan sinovdan pullikka o‘tish ~18–25%; karta talab qilinganda ~49–60%; freemium ~5%. Manbalar vendor ma’lumotlari. ([Crazy Egg / First Page Sage](https://www.crazyegg.com/blog/free-to-paid-conversion-rate/), [Visionary Marketing](https://visionary-marketing.co.uk/blog/saas-free-trial-conversion-statistics-2026))
- Signal kuchi: **real to‘lov > xarid niyati ("119 000 so‘mga olasizmi?") > "qiziq"**.

**Founder to‘ldiradigan shablon (raqamlarni Claude qo‘ymaydi):**
- Cohort 1 (bepul): "Boshlagan __ kishidan kamida __ tasi oxirigacha boradi."
- Cohort 1: "Oxirigacha borganlardan kamida __ tasi natija keyingi qadamini aniqlashga yordam berdi deydi."
- Cohort 2 (119 000 so‘m): "Taklifni ko‘rgan __ kishidan kamida __ tasi to‘laydi."
- To‘xtash chegarasi: "__ dan kam bo‘lsa — qiymat taklifi va segment qayta ko‘riladi."

## 5. Bozor narxlari (mo‘ljal)
| Joy | Xizmat | Narx | Izoh |
|---|---|---|---|
| Toshkent | Onlayn kasbga yo‘naltirish testi (Osnova Edu) | 9 900 so‘m | [osnovaedu.uz](https://osnovaedu.uz/kasbga-yonaltirish) |
| Toshkent | Psixolog, kasbga yo‘naltirish (bolalar/o‘smirlar), 1 soat (Smartline) | 400 000 so‘m | [smartline.uz](https://smartline.uz/uz/xizmatlar/bolalar-va-osmirlar-psixologiyasi/), sahifa eski bo‘lishi mumkin |
| Olmaota | Kattalar uchun kasbga yo‘naltirish, 60 daqiqa | ~20 000 tenge | [repetitors.info](https://alm.repetitors.info/repetitor/proforientaciya/) |
| Astana | Kasbga yo‘naltirish, 1 soat | 5 000–25 000 tenge | [profi.kz](https://profi.kz/repetitor/psihologia/proforientaciya/price/) |
| Rossiya | Individual konsultatsiya 2–3 soat | 22 000 rubl | [ProfGid](https://www.profguide.io/article/o-stoimosti-proforientacii.html) |

O‘qish: 119 000 so‘m arzon onlayn test va inson konsultatsiyasi orasida turadi. Valyuta kurslari bo‘yicha qayta hisoblash qilinmadi. O‘zbekistonda kattalar uchun kasb tanlash konsultatsiyasining narxi topilmadi.

## 6. Bog‘liqliklar va xavflar
- **To‘lov hozir o‘chiq** (`free_beta`). Legal review’dan keyin yoqilishi kerak. 2-cohort shungacha boshlana olmaydi.
- **Kim nomidan to‘lov qabul qilinadi** (yuridik shaxs, soliq) — Founder aniqlashi kerak.
- **Va’da matni:** "potensialni aniqlaymiz" emas, "yo‘nalishlarni dalillar asosida ko‘rish va keyingi qadam" (metodologiya LOCK).
- **CustDev alohida:** bepul pilot so‘rovnoma bonusiga qo‘shilmaydi (Founder, PM va Claude kelishgan).
