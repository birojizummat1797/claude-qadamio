# Qadam raqamlar siyosati — taklif v0

Holat: **taklif, tasdiqlanmagan**. Mahsulot qarori — egasi va PM’niki.
Savol (asoschi, 2026-10-03): “Raqamlar muhim, agar ular haqiqat va to‘g‘ri bo‘lsa. Dalil raqam bilan kuchli bo‘ladi. Qayerda va qanday formula bilan raqam ko‘rsatamiz?”

## 1. Asosiy fikr

Asoschi haq: to‘g‘ri raqam — eng kuchli dalil. Lekin **noto‘g‘ri yoki ma’nosi tushunarsiz raqam raqamsizlikdan yomonroq**. Sababi:
1. Odam raqamga so‘zdan ko‘ra ko‘proq ishonadi. Shuning uchun xato raqam ko‘proq zarar qiladi.
2. Kasb tanlash — yillarga ta’sir qiladigan qaror. “Frontend’chilar 1500$ oladi” degan bitta raqam butun qarorni burib yuborishi mumkin.
3. Bitta uydirma raqam aniqlansa, qolgan to‘g‘ri raqamlarga ham ishonch yo‘qoladi.

Shuning uchun qoida: **raqamni taqiqlamaymiz, unga “pasport” talab qilamiz.**

## 2. Raqam pasporti (har bir public raqam uchun majburiy)

| Maydon | Misol |
|---|---|
| Qiymat va birlik | 8 500 000 so‘m/oy (gross) |
| Nimani o‘lchaydi (bir jumla) | E’londa ko‘rsatilgan oylik maosh mediani |
| Manba | hh.uz, ochiq e’lonlar |
| Davr | 2026-yil III chorak |
| Hudud | Toshkent |
| Tanlov hajmi (n) | n = 214 e’lon |
| Noaniqlik | P25–P75: 6–12 mln |
| Metod | `docs/methods/salary-v1.md` (versiyalangan) |
| Cheklov | Maosh ko‘rsatmagan e’lonlar kirmagan |
| Yangilanish | har chorakda |
| Mas’ul | ism yoki rol |

**Biror maydon bo‘sh bo‘lsa, raqam chiqmaydi.** Bu qoida kodda tekshiriladi: raqam komponenti pasportsiz render bo‘lmaydi.

## 3. Qadamdagi raqamlarning 4 turi

### A. Taksonomiya raqamlari (bizning ichki ma’lumot) — **hozir mumkin**
- Masalan: o‘rganish muddati (`learning_months`), kasblar soni.
- Shart: “taxminan” so‘zi, taxonomy versiyasi va metodika.
- Kamchilik: `learning_months` haftasiga necha soat o‘qishga asoslangani yozilmagan. **Jamoadan so‘rash kerak.** Ideal ko‘rinish: “taxminan 6 oy, haftasiga ~10 soat o‘qilsa” (oraliq bilan).

### B. Bozor raqamlari (maosh, vakansiyalar soni, talab o‘sishi) — **ma’lumotga kirish bo‘lgach**
Formulalar:

```
Maosh:       median(M)  va  oraliq [P25, P75]
             M = maosh ko‘rsatilgan e’lonlar (takrorlar olib tashlangan,
                 valyuta bir xil, gross/net ajratilgan, oraliq e’lon → o‘rta nuqta)
             Ko‘rsatish sharti: n ≥ 30 (kasb × hudud × davr uchun)

Talab:       V(t)  = davr ichidagi unikal vakansiyalar soni
             O‘sish = V(t) / V(t − 1 yil) − 1      (mavsumiylikni yo‘qotish uchun yillik taqqoslash)
             Ko‘rsatish sharti: ikkala davrda ham n ≥ 50

Ulush:       Kasb ulushi = V_kasb / V_hammasi       (mutlaq sondan ko‘ra barqarorroq)
```

Nega o‘rtacha emas, median? Maosh taqsimoti “dumli”: bir nechta 5000$ lik e’lon o‘rtachani sun’iy ko‘taradi. Median bunga chidamli.
Nega bitta raqam emas, oraliq? Bitta raqam soxta aniqlik beradi. P25–P75 “odamlarning o‘rtadagi yarmi shu oraliqda” degani — buni tushuntirish oson.

Ma’lum siljishlar (pasportda yoziladi):
- Maosh ko‘rsatgan e’lonlar barcha e’lonlarning bir qismi, xolos.
- E’londagi maosh — taklif, haqiqiy to‘lov emas.
- Toshkent ulushi juda katta. Hudud ko‘rsatilmasa, raqam chalg‘itadi.

### C. Shaxsiy diagnostika raqamlari (botda, foydalanuvchining o‘zi uchun)
Backend’da formula allaqachon bor (`engine/fit.py`):

```
Fit(c)        = Σ W·V·T / Σ W(o‘lchangan)·10 × 100
Coverage(c)   = Σ W(o‘lchangan) / Σ W(hammasi)
Confidence(c) = Coverage × o‘rtacha(T)
```

Muhim ma’no farqi:
- **Fit = 72** — “kasb talablari profilingizga 72 ballik moslik indeksi”. Bu **“72% ehtimol bilan muvaffaqiyat qozonasiz” degani EMAS.**
- Vaznlar (W) ekspert tomonidan belgilangan (“RIASEC + industry asosida”). Ular real natijalar bilan hali tekshirilmagan (kalibrlanmagan).
- Shu sababli foiz ko‘rinishi ma’nosidan ko‘ra kuchliroq ishonch uyg‘otadi. Bu — soxta aniqlik.

**Hozir halol ko‘rsatsa bo‘ladigan raqamlar** — foydalanuvchining o‘z ma’lumoti haqidagi faktlar:
- “13 signaldan 9 tasi o‘lchandi”
- “Bu kasb bo‘yicha xulosa 4 ta javobga tayanadi”

Bular tekshiriladigan, aniq faktlar. Ular xulosa qanchalik mustahkam ekanini ochiq ko‘rsatadi. Bu “Evidence-led” tamoyiliga to‘liq mos.

Fit’ni daraja bilan ko‘rsatish (kuchli / o‘rtacha / ma’lumot yetarli emas) — hozirgi dizayn — to‘g‘ri yo‘l. Foizga o‘tish sharti — **kalibratsiya**:
1. Foydalanuvchi roziligi bilan natijani kuzatish: 3–6 oydan keyin o‘sha yo‘nalishda davom etyaptimi, mamnunmi.
2. Har bir fit darajasi uchun haqiqiy natija ulushini hisoblash (reliability jadvali).
3. Xato o‘lchovi: Brier score = o‘rtacha (bashorat − natija)².
4. Bashorat va haqiqat yaqin bo‘lsagina “ehtimol” so‘zi bilan raqam chiqadi. Masalan: “shu darajadagi foydalanuvchilarning taxminan 6/10 tasi…”, n bilan.

### D. Mahsulot natijalari (foydalanuvchilar soni, “X kishi ishga kirdi”) — **faqat haqiqiy DB’dan**
- Manba — o‘zimizning `events` / `users` jadvallari. Sana va ta’rif yoziladi (“diagnostikani oxirigacha o‘tgan”, “ro‘yxatdan o‘tgan” emas).
- Natija da’volari (“ishga kirdi”) — faqat tasdiqlangan holatlar va rozilik bilan.
- Hozir hech biri ko‘rsatilmaydi (CLAUDE.md qoidasi).

## 4. Ma’lumot manbalari (holati)

| Manba | Nima beradi | Holat |
|---|---|---|
| hh.uz | E’lonlar, e’londagi maosh, hudud, tajriba | HeadHunter’ning rasmiy API’si bor (OAuth). hh.uz uchun rasmiy kirish shartlari **tekshirilmagan** (bu konteynerdan api.hh.ru yopiq). Scraping — foydalanish shartlari xavfi bor; tavsiya etilmaydi. Eng toza yo‘l — rasmiy API yoki hamkorlik |
| stat.uz / siat.stat.uz | Rasmiy mehnat bozori statistikasi (ish o‘rinlari, choraklik maosh) | Ochiq. Lekin kasb darajasida (masalan, “Frontend”) bo‘linma yo‘q (taxminim, tekshirish kerak) → umumiy kontekst uchun yaraydi |
| Paylab Uzbekistan | Kasb bo‘yicha maosh foizlari (P10–P90) | Ochiq ko‘rinadi, lekin o‘zi xabar qilingan so‘rovnoma ma’lumoti. Uchinchi tomon manbasi sifatida havola bilangina |
| O‘quv markazlari / ish beruvchilar | Bitiruvchilar natijasi, haqiqiy maosh | Hamkorlik shartnomasi kerak |
| Qadam foydalanuvchilari | Diagnostika va natijalar | O‘zimizniki. Rozilik va maxfiylik siyosati kerak (`/ishonch` bilan bog‘liq) |
| `taxonomy_v1.json` → `salary_uzs` / `salary_usd` | Maosh oraliqlari | **Yaroqsiz:** manba noaniq, n yo‘q, `salary_usd` buzilgan (audit §9.2). Ishlatilmaydi |

## 5. Bosqichlar

| Bosqich | Nima | Shart |
|---|---|---|
| **N0 — hozir** | A-turi (taxminan, versiya bilan). Botda: coverage faktlari (“13 dan 9 tasi o‘lchandi”) | Metodika izohi |
| **N1** | Ma’lumot kirishi: rasmiy API yoki hamkorlik, ETL, pasport sxemasi, metod hujjati | Egasining qarori + huquqiy tekshiruv |
| **N2** | B-turi public: maosh oralig‘i, talab dinamikasi — faqat pasport bilan | n chegaralari bajarilgan, ichki review |
| **N3** | C-turi ehtimollar | Kalibratsiya natijasi (yuqoridagi 4 qadam) |

## 6. Egasi hal qilishi kerak bo‘lgan savollar
1. Pasport talabi (§2) qabul qilinadimi?
2. n chegaralari: maosh uchun 30, talab uchun 50 — qabul qilinadimi?
3. Botda coverage faktlarini ko‘rsatish (N0) — bot/Mini App backlog’iga qo‘shilsinmi?
4. Bozor ma’lumoti uchun qaysi yo‘l: hh rasmiy API, hamkorlik yoki ikkalasi?
5. `learning_months` metodikasini kim beradi?
