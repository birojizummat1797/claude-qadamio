# Jismoniy qurilma testi — B2.3 (PM item P3)

Kim bajaradi: founder yoki jamoa a’zosi, **haqiqiy telefonda**. Claude buni qila olmaydi: u faqat emulyatsiya qiladi, u esa jismoniy test o‘rnini bosmaydi.
Vaqt: bitta qurilmaga ~10 daqiqa.
Qurilmalar: kamida **2 ta Android** (bittasi arzon yoki eski bo‘lsa yaxshi; masalan, Redmi, Samsung A-seriya, Tecno). iPhone bo‘lsa — bonus.

## 1. Saytni telefonda ochish

**A. Kompyuterdan, bir xil Wi‑Fi tarmog‘ida (eng tez):**
1. Kompyuterda repo’ni klonlang va `claude/b2.3-design-dna` branch’iga o‘ting.
2. `npm install`, keyin `npm run build`, keyin `npx next start -H 0.0.0.0 -p 3000`.
3. Kompyuter IP manzilini toping (Windows: `ipconfig` → IPv4, masalan `192.168.1.25`).
4. Telefonda oching: `http://192.168.1.25:3000`. Ochilmasa, Windows Firewall’da 3000-portga ruxsat bering.

**B. Vercel preview (keyingi bosqichlar uchun ham kerak):**
vercel.com → GitHub bilan kirish → `claude-qadamio` repo’sini import qilish → Vercel har bir branch uchun preview havola beradi. `claude/b2.3-design-dna` havolasini telefonda oching.

## 2. Tekshiruv ro‘yxati (har bir qurilma uchun)

| # | Nimani tekshiramiz | Qanday | Natija (✅/❌ + izoh) |
|---|---|---|---|
| 1 | Birinchi ekran | Sahifa ochilganda skroll qilmasdan “Boshlayapman” kartochkasi to‘liq ko‘rinadimi? | |
| 2 | Matn o‘ralishi | Sarlavha, lead va kartochka matnlari so‘z o‘rtasidan bo‘linmayaptimi? `o’` belgisi to‘g‘ri chiqyaptimi? | |
| 3 | Tap target | Har bir holat kartochkasini barmoq bilan bosish oson va aniqmi? Qo‘shni kartochka tasodifan bosilmayaptimi? | |
| 4 | Kartochka balandligi | 3 ta kartochka bir xil ko‘rinadimi, matn kesilib qolmayaptimi? | |
| 5 | CTA → Telegram | Kartochka bosilganda Telegram ochiladimi va bot javob beradimi? | |
| 6 | Menyu | ☰ menyu ochiladi/yopiladimi, “Ishonch” bandi bormi, fon skroll bo‘lmayaptimi? | |
| 7 | Rang va kontrast | Quyosh ostida yoki yorqinlik past bo‘lganda kulrang matnlar o‘qiladimi? Ko‘k tugma aniq ko‘rinadimi? | |
| 8 | Midnight bloklar | “Signallarni Qadam o‘qiydi…” bloki va oxirgi to‘q qism o‘qiladimi? | |
| 9 | Skroll | Sahifa silliq skroll bo‘ladimi, gorizontal siljish yo‘qmi, sakrash yoki qotish yo‘qmi? | |
| 10 | FAQ | Savolga bosilganda ochiladimi? | |
| 11 | Shrift | Matn bir xil shriftda chiqyaptimi (Onest), “standart” shriftga almashib qolmayaptimi? | |
| 12 | Tezlik | Mobil internetda (Wi‑Fi’siz) sahifa necha soniyada ko‘rinadi (taxminan)? | |

## 3. Natija shabloni (PM’ga yuborish uchun)

```
P3 DEVICE CHECK
Qurilma 1: <model>, Android <versiya>, brauzer <Chrome/...>, ekran <taxminiy o‘lcham>
  1–12: ✅/❌ ... (❌ bo‘lsa skrinshot)
Qurilma 2: ...
Umumiy xulosa: PASS / FAIL (+ topilgan muammolar)
```

❌ chiqqan har bir band uchun skrinshot yuboring. Claude ularni tuzatadi va emulyatsiya testlariga qo‘shadi.
