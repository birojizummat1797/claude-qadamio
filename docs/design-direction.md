# Qadam.io — Design Direction v1 (yakuniy taklif)

Muallif: Claude (Lead Product Engineer). Holat: founder va PM qarori kutilmoqda.
Asos: 11 ta platforma tahlili (`docs/research/benchmarks.md`), brand palitra v1.1 (`docs/brand-color-system.md`), B2.1 va B2.2 prototiplari.

---

## 1. Bir jumlada

**Qadam — kasb tanlash uchun “career intelligence”: signallarni Qadam o‘qiydi, qarorni inson qiladi.**
Vizual til: yorug‘, sokin, lekin dadil. Og‘ir sarlavhalar, bitta ko‘k aksent, chuqur Midnight bloklar, mahsulotning o‘zi ko‘rinadi, inson markazda.

## 2. Pozitsiya: kim bilan yonma-yon, kimdan farqli

| Guruh | Misollar | Ularning markazi | Qadam’ning farqi |
|---|---|---|---|
| Ta’lim marketplace’lari | Udemy, Coursera, edX, Skillshare, Skillbox, Skillfactory, edubaza, Osnova | **Kurs**: “Nimani o‘rganmoqchisiz?” | Markazda **inson va uning holati**: “Hozir qaysi holatdasiz?” Ta’lim keyingi bosqich. |
| HR / talent intelligence | Eightfold, SeekOut | **Kompaniya** qaror qiladi, AI yordam beradi | Xuddi shu ishonch tili, lekin B2C: **qarorni o‘zingiz qilasiz**. |

Eightfold’dan olinadigan asosiy saboq: AI’ni “qaror qiluvchi” emas, “signal o‘quvchi” sifatida ko‘rsatish. Bu Qadam brief’idagi tamoyil bilan to‘liq mos keladi va bozorda ishonch quradigan til ekani isbotlangan.

## 3. Yakuniy dizayn tamoyillari

1. **Inson birinchi, katalog keyin.** Hero’dagi kirish “holat” orqali bo‘ladi, kurs qidiruvi orqali emas.
2. **Mahsulotni ko‘rsat, va’da berma.** Natija namunasi oynasi (Chatla, Eightfold, edX naqshi) doim aniq “Namuna” belgisi bilan chiqadi. Raqam va foiz yo‘q.
3. **Ishonch — alohida bo‘lim.** Eightfold “Trust”ni asosiy menyuga chiqargan. Qadam’da “Ishonch” bo‘limi: metodika, maxfiylik, mustaqillik.
4. **Bitta tipografik imzo.** Onest ExtraBold, zich sarlavhalar va **bitta ko‘k kalit so‘z**. Kursiv va gradient matn ishlatilmaydi.
5. **Ritm: yorug‘ → chuqur → yorug‘.** Paper/Surface asosiy fon. Midnight ikki joyda: mahsulot namunasi va yakuniy zona. Bitta to‘liq ko‘k blok (“Nega Qadam”).
6. **Kam rang, aniq rol.** Ko‘k — harakat. Midnight — chuqurlik. Clay — faqat dekor. Spark — “keyingi qadam” nuqtasi. Gradientlar yo‘q.
7. **Shoshiltirmaslik.** Chegirma, taymer, “1 kun qoldi” bannerlari yo‘q. Tepa banner faqat halol e’lonlar uchun.
8. **Haqiqiy odamlar, faqat rozilik bilan.** Stok suratlar foydalanuvchi qiyofasida ko‘rsatilmaydi.

## 4. Homepage tuzilishi (B2.2 asosida, takomillashtirilgan)

| # | Bo‘lim | Fon | Manba naqsh | Holat |
|---|---|---|---|---|
| 1 | Header: pill menyu, faol bo‘lim Mist’da, pill CTA ↗ | Paper | Chatla, edubaza | ✅ B2.2 |
| 2 | Hero: badge, katta sarlavha (bitta ko‘k so‘z), lead | Surface sahna | edubaza, SeekOut | ✅ B2.2 |
| 2a | **Yangi:** 3 ta holat kartochkasi: *Boshlayapman / Kasbimni almashtiraman / O‘smoqchiman* | Hero ichida | Coursera, SeekOut | ⏳ taklif |
| 2b | Savol chiplari (hozirgi 5 ta) — holat kartochkalari ostida yoki “Tanish savollar”ga ko‘chiriladi | — | edubaza, Eightfold | ⏳ qaror |
| 3 | **Qadam natijasi namunasi**. Yangi shior: “Signallarni Qadam o‘qiydi. Qarorni siz qilasiz.” | Midnight | Chatla, Eightfold | ✅ blok bor, ⏳ shior |
| 4 | Tanish savollar (6 ta) | Surface | — | ✅ |
| 5 | Qadam yo‘li (zinapoya / timeline) | Paper | edX “career arc” | ✅ |
| 6 | Qanday ishlaydi (6 bosqich) | Surface | — | ✅ |
| 7 | Nega Qadam: zanjir va taqqoslash | To‘liq ko‘k | Skillfactory | ✅ |
| 8 | Ishonch / tamoyillar → alohida sahifaga havola | Paper | Eightfold “Trust” | ⏳ menyuga qo‘shish |
| 9 | Natijalar va fikrlar: halol bo‘sh holat | Surface | — | ✅ |
| 10 | FAQ | Paper | — | ✅ |
| 11 | Yakuniy CTA + footer | Midnight | Chatla | ✅ |

Taklif etilgan menyu: **Qanday ishlaydi · Yo‘nalishlar · Ishonch · Qadam haqida · FAQ**. “Bosh sahifa” menyudan olib tashlanadi, chunki logo shu vazifani bajaradi.

## 5. Palitra qoidasiga tuzatish (PM tasdig‘i kerak)

v1.1 qoidasi: “Midnight faqat Final CTA + footer + bitta urg‘u elementi.”
Taklif: **Midnight sahifada ko‘pi bilan 2 zonada**: (1) mahsulot namunasi, (2) yakuniy CTA + footer. **To‘liq ko‘k blok sahifada ko‘pi bilan 1 ta.** Ko‘k ulushi ~10% dan ~15% ga ko‘tariladi. Sabab: tahlil qilingan barcha kuchli platformalarda yorug‘ va to‘q bloklar navbatlashib keladi. Bu ritm sahifani “hujjat” emas, “mahsulot” qilib ko‘rsatadi.

## 6. Nimalar olinmaydi (aniq ro‘yxat)

- Gradient fonlar va gradient tugmalar (Eightfold).
- Shoshiltirish va chegirma bannerlari (Udemy, edX, Skillbox, Skillfactory).
- Tekshirilmagan da’volar: “№1”, “10 000+ kurs”, “33% tezroq” (edubaza, Coursera, Eightfold).
- Mukofot bannerlari: faqat haqiqiy va tekshiriladigan mukofot bo‘lsa.
- Stok suratlarni foydalanuvchi sifatida ko‘rsatish (Udemy, Skillbox uslubida).
- “AI hammasini hal qiladi” ohangi va chatbot’ni mahsulot markaziga qo‘yish.

## 7. Ochiq qarorlar

| # | Savol | Variantlar | Claude tavsiyasi |
|---|---|---|---|
| D-1 | Hero kirishi | (a) 3 holat kartochkasi; (b) 5 savol chipi; (c) ikkalasi | **(c)**: kartochkalar asosiy, chiplar ikkinchi qatorda |
| D-2 | Shior “Signallarni Qadam o‘qiydi. Qarorni siz qilasiz.” | qabul / tahrir / rad | qabul. Brief bilan to‘liq mos va bozor tili isbotlangan |
| D-3 | Menyuda “Ishonch” bo‘limi | qabul / rad | qabul |
| D-4 | Midnight 2 zona + 1 ko‘k blok | qabul / v1.1 qoidasida qolish | qabul |
| D-5 | Inson tasvirlari | (a) fotosessiya; (b) illyustratsiya; (c) avval b, keyin a | **(c)** |
| D-6 | Shrift Onest | qabul / IBM Plex’ga qaytish | qabul |
| D-7 | Merge qilinadigan branch | B2.1 (sokin) / B2.2 (dadil) + D-1…D-4 tuzatishlari | **B2.2 + tuzatishlar** |

## 8. Keyingi qadamlar (qarordan keyin)

1. B2.3: D-1…D-6 bo‘yicha qabul qilinganlarni B2.2 branch’iga kiritish. To‘liq testlar, 320/390/1280 va Android skrinshotlari.
2. PM final review va merge.
3. B3 Career Catalog: edX/Coursera kartochka naqshi, backend taksonomiyasi, maoshsiz.
4. Alohida task’lar: Mini App palitra migratsiyasi; logo review; illyustratsiya yo‘nalishi.
