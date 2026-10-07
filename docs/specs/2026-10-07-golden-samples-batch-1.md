# Golden sample — 1-partiya: Ma’lumotlar va AI · Tizimlar va xavfsizlik · Raqamli dizayn (2026-10-07)

Holat: **QORALAMA** — Founder tasdig‘i kerak.
Format: `docs/specs/2026-10-05-dasturlash-golden-sample.md` (Founder ma’qullagan). A qism savollari matni o‘zgartirilmadi: `docs/specs/2026-10-05-deep-v2-draft.md` 4.2–4.4.
Qaror: `docs/decisions/2026-10-07-p2-catalog-first.md` (2-bosqich).

**Umumiy qoidalar (barcha kataloglar):**
- A qism: har javob — bitta kasb signaliga +1 (o‘zi aytgan qiziqish/afzallik). "Bilmayman" — o‘lchanmagan. Vaznlar real ma’lumotgacha teng.
- Pilotda biror savol kasblarni ajratmasa (deyarli hamma bir javobni tanlasa) — o‘chiriladi.
- Amaliy topshiriqlar: 4 javob + "Bilmayman"; har biridan keyin **osonlik savoli**: Oson va qiziq · Oson, lekin zerikarli · Qiyin, lekin qiziq · Qiyin va zerikarli.
- Natijada ball emas, **dalil**: "… topshirig‘ini to‘g‘ri bajardingiz". Xato bo‘lsa salbiy xulosa yo‘q ("Bu ko‘nikma o‘rganish bilan rivojlanadi").
- Javoblar ilovada aralashtirib ko‘rsatiladi; ✔ faqat ko‘rib chiquvchilar uchun.
- Raqamlar faqat topshiriq sharti (misol), real bozor ma’lumoti emas.

---

## 1. Ma’lumotlar va sun’iy intellekt (Data analitik · AI va Data Science · Ma’lumotlar bazasi)

### 1.1. Ajratuvchi signallar
| Kasb | Signal |
|---|---|
| Data analitik | Raqamlardan ma’no topish va uni boshqalarga tushuntirish |
| AI va Data Science | Qonuniyat izlash, tajriba qilib modelni yaxshilash, bashorat |
| Ma’lumotlar bazasi | Tartib, tuzilma va saqlangan ma’lumotning ishonchliligi |

### 1.2. Savol → signal matritsasi (A qism, 11 savol; javob → kasb)
| # | Savol (qisqa) | Turi | A | B | C | D | Ishonchlilik xavfi |
|---|---|---|---|---|---|---|---|
| 1 | Qaysi savolga javob topish qiziq | Qiziqish | DA | AI | DB | DA | — |
| 2 | ChatGPT haqida nima qiziq | Qiziqish | AI | AI | DA | DB | **Trend ta’siri:** "AI" mashhur — AI javoblari ortiqcha tanlanishi mumkin; pilotda kuzatiladi |
| 3 | Rahbar qaysi topshiriqni bersa | Afzallik | DA | AI | DB | DB | — |
| 4 | Qaysi xato bezovta qiladi | Sezgirlik | DA | AI | DB | DA | — |
| 5 | Maktabdagi qaysi mavzu yaqin | O‘tmish | DA | AI | DB | AI | Baho/o‘qituvchi ta’siri — qiziqish emas, o‘tmish tajribasi; past vazn taklifi |
| 6 | Qaysi ish uslubi yoqadi | Ish uslubi | DA | AI | DB | DA | B qism bilan yaqin — takror bo‘lsa biri o‘chiriladi |
| 7 | Ijtimoiy tarmoqda nimani kuzatadi | Qiziqish (past vazn) | DA | AI | DB | AI | Qiziqish ≠ qobiliyat |
| 8 | Qaysi so‘z tasvirlaydi | O‘zini baholash | DA | AI | DB | DB | O‘zini baholash — ijtimoiy ma’qul javob xavfi |
| 9 | Kichik do‘konga yordam | Afzallik | DA | AI | DB | DB | — |
| 10 | Qaysi yutuq quvontiradi | Qadriyat | DA | AI | DB | AI | B ("shifokorga yordam") — ijtimoiy ma’qul javob xavfi |
| 11 | Qayerda ko‘proq vaqt o‘tkaza oladi | Sabr | DA | AI | DB | DA | — |

Muvozanat: DA 15 · AI 15 · DB 14 javob (farq ≤ 1).

### 1.3. Amaliy topshiriqlar (dalil: **bajargan**)
**T1. Foizni to‘g‘ri hisoblash** (ayniqsa Data analitik)
> Do‘kon yanvarda 200 ta, fevralda 250 ta mahsulot sotdi. Savdo necha foizga oshdi?
- A) 25% ✔
- B) 50%
- C) 20%
- D) 250%
- E) Bilmayman

**T2. Bog‘liqlik ≠ sabab** (Data analitik, AI va Data Science)
> Muzqaymoq ko‘p sotilgan kunlarda suvda cho‘kish holatlari ham ko‘p bo‘ladi. Qaysi xulosa to‘g‘riroq?
- A) Muzqaymoq cho‘kishga sabab bo‘ladi
- B) Ikkalasiga ham issiq havo sabab bo‘lishi mumkin ✔
- C) Cho‘kish holatlari muzqaymoq savdosini oshiradi
- D) Bu ikki narsa o‘rtasida hech qanday aloqa bo‘lishi mumkin emas
- E) Bilmayman

**T3. Qonuniyatni topish** (ayniqsa AI va Data Science)
> Bot har kuni oldingi kundan 2 baravar ko‘p xabar olyapti: 3, 6, 12, 24, … Keyingi kuni nechta xabar keladi?
- A) 48 ✔
- B) 36
- C) 30
- D) 26
- E) Bilmayman

**T4. Takror yozuvni topish** (ayniqsa Ma’lumotlar bazasi)
> Mijozlar ro‘yxati:
> 1) Ali Valiyev, +998 90 111 22 33
> 2) Vali Aliyev, +998 91 222 33 44
> 3) ALI VALIYEV, +998901112233
> 4) Hasan Karimov, +998 93 333 44 55
> Qaysi ikki qator bitta odam bo‘lishi ehtimoli bor?
- A) 1 va 3 ✔
- B) 1 va 2
- C) 2 va 4
- D) 3 va 4
- E) Bilmayman

### 1.4. "O‘rgan va bajar"
**Mini-dars (30 soniya):**
> **Mediana** — raqamlarni kichigidan kattasiga terib chiqqanda o‘rtada turgan son.
> Masalan: 9, 2, 5 → tartib bilan: 2, 5, 9 → mediana **5**.

**O1.** 7, 1, 4 sonlarining medianasi qancha?
- A) 4 ✔ · B) 1 · C) 7 · D) 12 · E) Bilmayman

**O2.** 5 ta do‘konning bir kunlik savdosi (mln so‘m): 3, 4, 4, 5, 50. Odatdagi do‘konning savdosini qaysi raqam yaxshiroq ko‘rsatadi?
- A) Mediana — 4 ✔
- B) O‘rtacha — 13.2
- C) Eng katta — 50
- D) Eng kichik — 3
- E) Bilmayman

O2 — yangi tushunchani hayotiy vaziyatda qo‘llash (bitta juda katta son o‘rtachani buzadi).

---

## 2. Tizimlar, tarmoq va xavfsizlik (Tizim va tarmoq ma’muri · DevOps / Cloud · Kiberxavfsizlik)

### 2.1. Ajratuvchi signallar
| Kasb | Signal |
|---|---|
| Tizim va tarmoq ma’muri | Qurilma va tarmoqni qo‘l bilan sozlash, buzilganini tez tuzatish |
| DevOps / Cloud | Takroriy ishni avtomatlashtirish, tizimni ko‘p odamga chidaydigan qilish |
| Kiberxavfsizlik | Xavfni payqash, hushyorlik, himoya |

### 2.2. Savol → signal matritsasi
| # | Savol (qisqa) | Turi | A | B | C | D | Ishonchlilik xavfi |
|---|---|---|---|---|---|---|---|
| 1 | Qaysi vaziyatda "qahramon" | Qadriyat | TM | DO | KX | KX | "Xakerni to‘xtatish" — filmlar ta’sirida romantik tanlov xavfi |
| 2 | Qaysi videoni oxirigacha ko‘radi | Qiziqish | TM | DO | KX | TM | — |
| 3 | Qaysi topshiriqni oladi | Afzallik | TM | DO | KX | DO | — |
| 4 | Qaysi xavotir tanish | Sezgirlik | TM | DO | KX | KX | — |
| 5 | Do‘stlar qanday yordam so‘raydi | O‘tmish | TM | DO | KX | TM | O‘tmishdagi xatti-harakat — eng kuchli savollardan biri |
| 6 | Qaysi ish tartibi mos | Ish uslubi | TM | DO | KX | DO | B qism bilan yaqin |
| 7 | Ijtimoiy tarmoqda nimani kuzatadi | Qiziqish (past vazn) | TM | DO | KX | KX | Qiziqish ≠ qobiliyat |
| 8 | Qaysi ta’rif mos | O‘zini baholash | TM | DO | KX | TM | Ijtimoiy ma’qul javob xavfi |
| 9 | Qaysi natija quvontiradi | Qadriyat | TM | DO | KX | DO | — |
| 10 | Nimani o‘rganish qiziq | Qiziqish | TM | DO | KX | TM | — |
| 11 | Tunda "Tizimda muammo" xabari | Birinchi reaksiya | TM | DO | KX | KX | — |

Muvozanat: TM 15 · DO 14 · KX 15 javob (farq ≤ 1).

### 2.3. Amaliy topshiriqlar
**T1. Muammoni qayerdan izlash** (ayniqsa Tizim va tarmoq ma’muri)
> Uyda noutbukda internet ishlamayapti, lekin telefon xuddi shu Wi-Fi’da bemalol ishlayapti. Muammo qayerda bo‘lishi ehtimoli ko‘proq?
- A) Noutbukning o‘zida ✔
- B) Internet provayderida
- C) Routerda
- D) Butun shahar internetida
- E) Bilmayman

**T2. Firibgarlik xabari** (ayniqsa Kiberxavfsizlik)
> SMS keldi: "Kartangiz bloklandi! Tiklash uchun SMS-kodni shu havolaga kiriting: bank-tiklash-uz.top". Eng to‘g‘ri harakat qaysi?
- A) Havolaga kirmasdan, bankning rasmiy raqamiga o‘zim qo‘ng‘iroq qilaman ✔
- B) Kartam ishlashi uchun kodni tezda kiritaman
- C) Havolani do‘stlarimga yuborib, ular ham tekshirib ko‘rsin deyman
- D) Kodni javob SMS’da yuboraman
- E) Bilmayman

**T3. Ishonchli parol** (Kiberxavfsizlik)
> Qaysi parol eng ishonchli?
- A) 12345678
- B) Ali1995
- C) qovun-Tosh-7!yomg‘ir ✔
- D) password
- E) Bilmayman

**T4. Avtomatlashtirish o‘zini qachon oqlaydi** (ayniqsa DevOps / Cloud)
> Har kuni qo‘lda qilinadigan ish 10 daqiqa oladi. Uni avtomatlashtirish uchun bir marta 5 soat ishlash kerak. Taxminan necha kundan keyin avtomatlashtirish o‘zini oqlaydi?
- A) 30 kun ✔
- B) 5 kun
- C) 50 kun
- D) 300 kun
- E) Bilmayman

### 2.4. "O‘rgan va bajar"
**Mini-dars (30 soniya):**
> Zaxira nusxaning **3-2-1 qoidasi**: muhim ma’lumotning **3** nusxasi bo‘lsin, ular **2** xil qurilmada (masalan, kompyuter va fleshka) tursin va **1** tasi boshqa joyda (boshqa binoda yoki internetdagi bulutda) saqlansin.

**O1.** Rasmlaringiz faqat telefoningizda: asl papkada va shu telefondagi yana bir papkada. Bu 3-2-1 qoidasiga mosmi?
- A) Yo‘q — hammasi bitta qurilmada ✔
- B) Ha — 2 ta nusxa yetarli
- C) Ha — papkalar har xil
- D) Faqat rasmlar ko‘p bo‘lsa mos
- E) Bilmayman

**O2.** Qaysi holat 3-2-1 qoidasiga to‘liq mos?
- A) Kompyuterda asl fayl + fleshkada nusxa + bulutda nusxa ✔
- B) Kompyuterda 3 xil papkada 3 nusxa
- C) Kompyuterda asl fayl + fleshkada 2 nusxa
- D) Bulutda 3 nusxa
- E) Bilmayman

---

## 3. Raqamli dizayn (UI/UX dizayner · Grafik dizayner)

### 3.1. Ajratuvchi signallar
| Kasb | Signal |
|---|---|
| UI/UX dizayner | Odam qayerda qiynalishini ko‘rish, jarayonni qulay qilish ("avval qulay") |
| Grafik dizayner | Rang, shrift, obraz — vizual go‘zallik va tanilish |

### 3.2. Savol → signal matritsasi
Har savolda A, B → UI/UX; C, D → Grafik (22/22 javob, muvozanatli).

| # | Savol (qisqa) | Turi | Ishonchlilik xavfi |
|---|---|---|---|
| 1 | Instagram/Pinterest’da nimani saqlaydi | Qiziqish (ijtimoiy tarmoq, past vazn) | Qiziqish ≠ qobiliyat |
| 2 | Ilova jahlni chiqarsa nima o‘ylaydi | Sezgirlik | — |
| 3 | Qaysi buyurtmani oladi | Afzallik | — |
| 4 | Bolalikda nima qilgan | O‘tmish | O‘tmish xatti-harakati — kuchli |
| 5 | Qaysi maqtov yoqadi | Qadriyat | — |
| 6 | Ishning qaysi bosqichi yoqadi | Ish jarayoni | — |
| 7 | Nima tasvirlaydi | O‘zini baholash | Ijtimoiy ma’qul javob xavfi |
| 8 | Qaysi natija sevintiradi | Qadriyat | 5-savolga mazmunan yaqin — takror bo‘lsa biri o‘chiriladi |
| 9 | Qaysi dasturni o‘rganadi | Qiziqish | Dastur nomlari (Figma, Photoshop) — eshitganini tanlash xavfi |
| 10 | Kichik biznesga nima taklif qiladi | Afzallik | — |
| 11 | Qayerda sabri yetadi | Sabr | — |

**Diqqat (Founder uchun):** bu katalogda har savolda javob tartibi bir xil (A, B — UI/UX; C, D — Grafik). Ilovada aralashtirish majburiy, aks holda odam "birinchi ikki javob" odati bilan natijani buzadi.

### 3.3. Amaliy topshiriqlar
**T1. Qadamlarni qisqartirish** (ayniqsa UI/UX)
> Ilovada kartaga pul o‘tkazish: 1) ilovani ochish → 2) "To‘lovlar" → 3) "O‘tkazmalar" → 4) "Kartaga" → 5) karta raqami → 6) summa → 7) tasdiqlash. Qaysi o‘zgarish foydalanuvchiga eng ko‘p yordam beradi?
- A) Bosh sahifaga "Kartaga o‘tkazish" tugmasini qo‘yish — 2–4-qadamlar bitta bosishga aylanadi ✔
- B) Tugmalar rangini yorqinroq qilish
- C) Tasdiqlash qadamini olib tashlash
- D) Har qadam oldiga raqam yozib qo‘yish
- E) Bilmayman

**T2. Xato xabari** (ayniqsa UI/UX)
> Foydalanuvchi parolni noto‘g‘ri kiritdi. Qaysi xabar eng yaxshi?
- A) "Xato 401"
- B) "Parol noto‘g‘ri. Qayta urinib ko‘ring yoki "Parolni unutdim"ni bosing" ✔
- C) "Siz xato qildingiz!"
- D) Hech qanday xabar chiqmaydi, sahifa yangilanadi
- E) Bilmayman

**T3. O‘qilishi oson rang** (ayniqsa Grafik)
> Qaysi juftlikda matn eng oson o‘qiladi?
- A) Oq fonda sariq matn
- B) Oq fonda qora matn ✔
- C) Ko‘k fonda binafsha matn
- D) Qizil fonda yashil matn
- E) Bilmayman

**T4. Eng muhimini ajratish** (ayniqsa Grafik)
> Konsert afishasi tayyorlanyapti. Undagi qaysi ma’lumot eng katta va ko‘zga tashlanadigan bo‘lishi kerak?
- A) Konsert nomi yoki ijrochi ✔
- B) Bosmaxona manzili
- C) Homiylar ro‘yxati
- D) Zalda o‘zini tutish qoidalari
- E) Bilmayman

### 3.4. "O‘rgan va bajar"
**Mini-dars (30 soniya):**
> **Yaqinlik qoidasi:** bir-biriga tegishli narsalar yonma-yon turadi, tegishli bo‘lmaganlar orasida bo‘sh joy qoldiriladi. Shunda ko‘z nimani nima bilan birga o‘qishni o‘zi tushunadi.

**O1.** Formada "Ism" yozuvi qayerda turishi kerak?
- A) Ism yoziladigan maydonning yonida ✔
- B) Ikki maydon o‘rtasida, ikkalasidan teng masofada
- C) Sahifaning eng tepasida, alohida
- D) "Yuborish" tugmasining yonida
- E) Bilmayman

**O2.** Onlayn do‘kon kartochkasida: rasm, nom, narx, "Savatga" tugmasi va "Yetkazib berish shartlari". Yaqinlik qoidasiga ko‘ra qaysi joylashuv to‘g‘ri?
- A) Nom va narx yonma-yon; "Yetkazib berish shartlari" bo‘sh joy bilan alohida ajratilgan ✔
- B) Hamma narsa orasida bir xil masofa
- C) Narx kartochka eng pastida, shartlar yonida
- D) Nom rasmdan uzoqda, tugma yonida
- E) Bilmayman

---

## 4. O‘zim tekshirgan narsalar
- To‘g‘ri javoblar qayta hisoblandi: 50/200 = 25%; 3→6→12→24→48; 5 soat = 300 daqiqa, 300/10 = 30 kun; (3+4+4+5+50)/5 = 13.2; 1, 4, 7 → mediana 4.
- Har katalogning topshiriqlari o‘ziga xos (boshqa katalog qolipi emas); kasb nomi va jargon yo‘q, "mediana" va "3-2-1" faqat mini-darsda tushuntiriladi.
- Matritsadagi javob → kasb bog‘lanishi `deep-v2-draft.md` dagi belgilar bilan bir xil.

## 5. Founder uchun savollar
1. Topshiriqlar matni va qiyinligi ma’qulmi (har katalogda 4 + 2)?
2. "Ishonchlilik xavfi" belgilangan savollar (Data: 2, 5, 8, 10; Tizimlar: 1, 8; Dizayn: 7, 8, 9) — pilotgacha qoldiramizmi yoki hozir qayta yozamizmi?
3. Keyingi partiya: Raqamli marketing · Kontent va media · Mahsulot va loyiha boshqaruvi.
