# Dasturlash katalogi — "golden sample" v0.1 (2026-10-05)

Holat: **QORALAMA** — metodologiya v0.1 asosida. Real sinov va Founder tasdig‘idan keyin boshqa 8 katalogga standart bo‘ladi.
Asos: `docs/methodology/qadam-metodologiyasi-v0.1.md`, `docs/specs/2026-10-05-deep-v2-draft.md` (A qism, 4.1 — Founder ma’qullagan namuna, matnlari o‘zgartirilmadi).

## 1. Kasblar va ularni ajratuvchi signallar
Signallar **kasblarni bir-biridan ajratadi** (eski versiyadagi kabi umumiy "sabr", "diqqat" emas).

| Kasb | Ajratuvchi signal |
|---|---|
| Frontend | Ko‘rinadigan natijaga (ekran, ko‘rinish, qulaylik) qiziqish |
| Backend | Ko‘rinmas tizim va ma’lumot mantiqiga qiziqish |
| Mobil | Telefonda, qo‘lda ishlatiladigan mahsulotga qiziqish |
| QA / test | Xato va sifatni izlashga moyillik |

## 2. Savol → signal matritsasi (A qism, 11 savol)
Har javob — bitta kasb signaliga +1 (qiziqish/afzallik dalili, **o‘zi aytgan**). "Bilmayman" — o‘lchanmagan. Vaznlar real ma’lumotgacha teng (PM tavsiyasi).
Qaror qoidasi: pilotda biror savol kasblarni ajratmasa (deyarli hamma bir javobni tanlasa) — **o‘chiriladi**.

| # | Savol | Turi | A→ | B→ | C→ | D→ | Ishonchlilik xavfi |
|---|---|---|---|---|---|---|---|
| 1 | Sayt yoki ilovaning qaysi qismi sizni ko‘proq qiziqtiradi? | Qiziqish (sohaning qaysi qismi) | Frontend | Backend | Mobil | QA / test | **Kasbni aytib qo‘yadi** — javoblar kasb ta’rifiga yaqin (PM 5-band). Pilotda kuzatiladi; kerak bo‘lsa faoliyatga asoslab qayta yoziladi |
| 2 | Ish kuningiz qaysi biri bilan o‘tsa, xursand bo‘lardingiz? | Qiziqish (kundalik ish) | Frontend | Backend | Mobil | QA / test | — |
| 3 | Qaysi maqtov sizni ko‘proq quvontirardi? | Qadriyat (qaysi maqtov) | Frontend | Backend | Mobil | QA / test | — |
| 4 | Qaysi kamchilik sizni ko‘proq bezovta qiladi? | Sezgirlik (nima bezovta qiladi) | Frontend | Backend | Mobil | QA / test | — |
| 5 | Qaysi vazifani o‘z zimmangizga olardingiz? | Afzallik (vazifa tanlash) | Frontend | Backend | Mobil | QA / test | C (taksi ilovasi) mobil ekanini ochiq ko‘rsatadi — qabul qilsa bo‘ladi |
| 6 | Qanday ishlash sizga yaqinroq? | Ish uslubi (domen ichida) | Frontend | Backend | Mobil | QA / test | B qism (ish uslubi) bilan mazmunan yaqin — takror bo‘lsa, bittasi o‘chiriladi |
| 7 | Qaysi birini o‘rganish sizga qiziqroq? | Qiziqish (o‘rganish) | Frontend | Backend | Mobil | QA / test | — |
| 8 | Do‘stingiz ilova yaratmoqchi. Siz qaysi qismini olardingiz? | Afzallik (jamoadagi rol) | Frontend | Backend | Mobil | QA / test | — |
| 9 | Qaysi yangilik sizni ko‘proq sevintirardi? | Qadriyat (qaysi natija) | Frontend | Backend | Mobil | QA / test | B (million odam) — obro‘ga intilish tufayli tanlanishi mumkin (ijtimoiy ma’qul javob xavfi) |
| 10 | Qaysi birida sabringiz ko‘proq yetadi? | Sabr qayerda yetadi (domen ichida) | Frontend | Backend | Mobil | QA / test | — |
| 11 | Ijtimoiy tarmoqlarda qanday sahifa va bloglarni ko‘proq kuzatasiz? | Qiziqish — ijtimoiy tarmoq (past vazn) | Frontend | Backend | Mobil | QA / test | Qiziqish ≠ qobiliyat; past vazn (PM 13-band) |

## 3. Amaliy topshiriqlar (dalil turi: **bajargan**)
Har topshiriqda 4 javob + "Bilmayman". Har topshiriqdan keyin **osonlik savoli**:
> Bu siz uchun qanday bo‘ldi? — Oson va qiziq · Oson, lekin zerikarli · Qiyin, lekin qiziq · Qiyin va zerikarli

Natijada ball emas, **dalil** ko‘rsatiladi: "Shart bo‘yicha hisoblash topshirig‘ini to‘g‘ri bajardingiz". Xato bo‘lsa — hech qanday salbiy xulosa yo‘q ("Bu ko‘nikma o‘rganish bilan rivojlanadi").

**T1. Shart bo‘yicha hisoblash** (mantiqiy fikrlash — barcha kasblar uchun)
> Do‘konda qoida: xarid 100 000 so‘mdan oshsa, 10% chegirma beriladi. Xaridor 120 000 so‘mlik narsa oldi. U qancha to‘laydi?
- A) 108 000 so‘m ✔
- B) 110 000 so‘m
- C) 12 000 so‘m
- D) 120 000 so‘m
- E) Bilmayman

**T2. Xatoni topish** (diqqat — ayniqsa QA)
> Ilovadagi savatcha: "3 ta mahsulot: 20 000, 15 000 va 5 000 so‘m. Jami: 45 000 so‘m". Bu yerda xato bormi?
- A) Ha, jami 40 000 so‘m bo‘lishi kerak ✔
- B) Ha, mahsulot 4 ta bo‘lishi kerak
- C) Ha, 5 000 so‘mlik mahsulot bo‘lishi mumkin emas
- D) Xato yo‘q
- E) Bilmayman

**T3. Tizim qoidasini o‘ylash** (ko‘rinmas mantiq — ayniqsa Backend)
> Ro‘yxatdan o‘tishda "Tug‘ilgan yilingiz" so‘raladi. Bugun 2026-yil. Qaysi qiymatni tizim **qabul qilmasligi** kerak?
- A) 1985
- B) 1998
- C) 2001
- D) 2030 ✔
- E) Bilmayman

**T4. Foydalanuvchi uchun tartib** (ko‘rinish mantig‘i — ayniqsa Frontend/Mobil)
> Ro‘yxatdan o‘tish sahifasi uchun qaysi tartib foydalanuvchiga eng qulay?
- A) Ism → Telefon → Parol → "Ro‘yxatdan o‘tish" tugmasi ✔
- B) Tugma → Parol → Ism → Telefon
- C) Parol → Tugma → Telefon → Ism
- D) Telefon → Tugma → Ism → Parol
- E) Bilmayman

## 4. "O‘rgan va bajar" (salohiyat — o‘rganish tezligi)

**Mini-dars (30 soniya):**
> Robotga yangi buyruq o‘rgatamiz: **TAKRORLA**.
> Masalan: **TAKRORLA 3 marta: [1 qadam yur]** — robot 3 qadam yuradi.

**O1.** TAKRORLA 2 marta: [2 qadam oldinga, 1 qadam orqaga]. Robot boshlang‘ich joyidan necha qadam oldinda bo‘ladi?
- A) 2 ✔ · B) 3 · C) 4 · D) 6 · E) Bilmayman

**O2.** TAKRORLA 3 marta: [ TAKRORLA 2 marta: [1 qadam yur] ]. Robot jami necha qadam yuradi?
- A) 3 · B) 5 · C) 6 ✔ · D) 9 · E) Bilmayman

O‘lchanadi: to‘g‘rilik, vaqt, darsni qayta ochdimi. O2 — yangi qoidani murakkabroq vaziyatda qo‘llash (o‘rganish chuqurligi).

## 5. Ishonchlilik uchun
- Topshiriqlarda tasodifiy javob ehtimoli 1/4; 6 ta topshiriqning hammasi tasodifan to‘g‘ri chiqishi juda kam — natija "dalil" bo‘lib xizmat qiladi, lekin bitta to‘g‘ri javob hali dalil emas (til zinapoyasi, 1-pog‘ona: ≥ 2 to‘g‘ri).
- Juda tez javoblar (chegara pilotdan) — ishonchlilik belgisi.

## 6. Real sinov (5–10 kishi) — savollar
1. Bu savolni qanday tushundingiz? (o‘z so‘zingiz bilan)
2. Nega aynan shu javobni tanladingiz?
3. Qaysi javoblar bir-biriga o‘xshab qoldi?
4. "To‘g‘ri javob"ni qidirdingizmi?
5. Topshiriqlar qiyin/oson/qo‘rqinchli bo‘ldimi?
6. Natijada o‘zingizni tanidingizmi? Noto‘g‘ri deb bilgan joy bormi?
7. Mini-darsni tushundingizmi?

## 7. Ochiq savollar (Founder)
- Topshiriqlar soni (hozir 4 + 2) va qiyinligi — pilotdan keyin.
- Matritsadagi xavfli savollar (1, 6, 9) — pilotgacha qoldiramizmi yoki hozir qayta yozamizmi?
