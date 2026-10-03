# Qadam.io — Benchmark tadqiqoti

Maqsad: global va mahalliy platformalardan **naqshlarni** o‘rganish, ularni ko‘chirmasdan Qadam’ning o‘z brend dizaynini topish.
Holat: tirik hujjat. Har raund shu faylga qo‘shiladi. Yakuniy brend qarorlari tadqiqot tugagach qabul qilinadi.

Usul va cheklov: tahlil founder yuborgan skrinshotlarga, asosan birinchi ekranga asoslangan. Ichki sahifalar, mobil versiya va foydalanuvchi oqimi ko‘rilmagan. Raqamlar va da’volar (masalan, “10 000+ kurs”) **tekshirilmagan**: ular platformalarning o‘z da’vosi.

---

## Raund 1 — Mahalliy va MDH ta’lim platformalari (2026-10-03)

| Platforma | Kuchli naqsh | Qadam uchun xulosa |
|---|---|---|
| **edubaza.uz** | Markazdagi hero katta yumaloq “sahna” ichida. Og‘ir sarlavha, kalit so‘z ko‘k. Qidiruv qatori + kategoriya chiplari. | Kirish nuqtasi = savol yoki qidiruv. “№1”, “47 046+” kabi tekshirib bo‘lmaydigan da’volarni **olmaymiz**. |
| **Chatla** | Pill navigatsiya. Qorong‘i fonda mahsulot oynasi (dashboard). Monospace eyebrow. Lime aksent. | Mahsulotning o‘zini ko‘rsatish ishonch beradi. Qadam’da bu “natija namunasi”, aniq “Namuna” belgisi bilan. |
| **Skillfactory** | To‘liq kenglikdagi yorqin rang bloki. Bosh harfli yirik sarlavha. “Yo‘nalishni tanlang” tugmalari. | Rangli blok ritm beradi. Chegirma va shoshiltirish ohangi Qadam tamoyillariga zid. |
| **Skillbox** | Ko‘plab kategoriya “pill”lari ikonlar bilan. “Yordam bering, tanlay olmayapman” CTA. Haqiqiy odamlar suratlari bilan muvaffaqiyat hikoyalari. | “Tanlashga yordam” — aynan Qadam’ning vazifasi. Hikoyalar faqat tasdiqlangan va roziligi olingan bo‘lsa. |
| **Osnova** | Bo‘lingan hero (shaxslar / korporativ). Kollaj vizual. Shishasimon (glass) navigatsiya. | Auditoriya bo‘yicha ajratish (B2C/B2B) kelajak fazalari uchun foydali. |

## Raund 2 — Global ta’lim va karyera platformalari (2026-10-03)

| Platforma | Kuchli naqsh | Qadam uchun xulosa |
|---|---|---|
| **Udemy** | Header’da qidiruv. Turli yoshdagi haqiqiy odamlar suratlari. Bitta aniq va’da (“Ish topish uchun ko‘nikmalar”) va bitta CTA. Sarlavhada kursiv aksent so‘z. | **Inson yuzlari** — ishonchning eng tez yo‘li. Qadam’da hozir umuman inson yo‘q, sahifa “abstrakt” ko‘rinadi. |
| **edX** | “One catalogue, **the full career arc**” — karyerani bitta yoy sifatida ko‘rsatadi. To‘q teal hero. Kartochkalarda metadata: davomiylik (hafta), daraja. Header’da EN/ES. | “Karyera yoyi” g‘oyasi Qadam’ning “Journey” konsepsiyasiga juda yaqin. Kartochka metadata naqshi B3 uchun tayyor shablon. |
| **Coursera** | Tepada auditoriya segmentlari: shaxslar / kompaniyalar / universitetlar / davlat. “**Boshlash, almashtirish yoki rivojlantirish** — karyerangizni.” Qidiruv: “Nimani o‘rganmoqchisiz?” | “Boshlash / almashtirish / o‘sish” — aynan Qadam brief’idagi 3 auditoriya. Bu eng kuchli topilma (pastga qarang). |
| **Skillshare** | Hero ichida ro‘yxatdan o‘tish paneli (Google/Facebook/Apple). Suratli katta kategoriya plitkalari. | Kirish to‘sig‘i past bo‘lishi kerak. Qadam’da buning ekvivalenti — Telegram’da bir bosish. Kategoriya plitkalari B3 katalogi uchun. |

---

## Umumiy naqshlar (9 ta platforma bo‘yicha)

1. **Og‘ir, yirik sarlavha.** Hammasida bor. Ko‘pchilikda bitta “imzo” uslubi ham bor: edX — kursiv, Udemy — kursiv aksent so‘z, Skillfactory — bosh harflar. → Qadam’ga ham bitta tipografik imzo kerak. Hozirgi variant — ko‘k kalit so‘z.
2. **Kirish = savol yoki qidiruv.** 9 tadan 6 tasida hero’da qidiruv yoki “nimani xohlaysiz?” bor. → Qadam’da qidiruv emas, **holat savoli** bo‘lishi kerak (6-band).
3. **Haqiqiy odamlar.** Udemy, Skillbox, Osnova, Coursera, Skillshare. → Qadam’da yo‘q. Bu eng katta vizual bo‘shliq.
4. **Kartochka metadata.** edX: davomiylik, daraja. Coursera: provayder, tur, reyting. → B3 yo‘nalish kartochkalari uchun shablon. Backend’da bor ma’lumot: `learning_months`, `pathway_type`, klaster. Maosh yo‘q.
5. **Qorong‘i yoki to‘yingan hero bloklari** (edX, Coursera, Chatla). → B2.2’dagi Midnight “Natija namunasi” bloki shu naqshga mos.
6. **Auditoriya segmentatsiyasi** (Coursera, edX/Udemy Business, Osnova). → Kelajak fazalari: universitetlar, kompaniyalar. Hozircha faqat shaxslar.
7. **Shoshiltirish bannerlari** (“1 kun qoldi”, “-55%”, promo kod) — Udemy, edX, Skillbox, Skillfactory. → **Qadam ishlatmaydi**: “No manipulation” tamoyili. Tepa banner faqat halol e’lonlar uchun.
8. **AI yordamchi** (edX Xpert, Coursera ✦). → Qadam’da bu Telegram bot. Lekin brief bo‘yicha Qadam “shunchaki AI chatbot” sifatida ko‘rsatilmaydi.

## Eng muhim topilma: hamma kursdan boshlaydi, Qadam insondan

Barcha 9 platforma **katalog yoki marketplace**. Ularning birinchi savoli: “Nimani o‘rganmoqchisiz?”
Qadam’ning birinchi savoli boshqacha bo‘lishi kerak: **“Hozir qaysi holatdasiz?”**

Coursera’dagi “boshlash / almashtirish / rivojlantirish” naqshi Qadam brief’idagi auditoriyaga to‘g‘ridan-to‘g‘ri mos keladi:

| Holat | Brief’dagi auditoriya |
|---|---|
| Endi boshlayapman | yo‘nalishini bilmaydigan 18–30 yoshlilar, diplomli lekin kasbsizlar |
| Kasbimni almashtirmoqchiman | karyera o‘zgartiruvchilar, IT’ga o‘tmoqchilar |
| O‘smoqchiman | ishlayotgan, lekin yo‘lidan shubhalanuvchilar |

Bu Qadam’ni marketplace’lardan vizual va ma’no jihatidan ajratadi: **markazda kurs emas, inson va uning holati**.

## Qadam uchun takliflar (founder qarori kerak, hali kodlanmagan)

1. **Hero kirishi:** B2.2’dagi 5 ta savol chipi o‘rniga yoki ular bilan birga 3 ta holat kartochkasi — “Boshlayapman / Almashtiraman / O‘saman”.
2. **Inson tasvirlari strategiyasi:**
   - Stok suratlar foydalanuvchi sifatida ko‘rsatilmaydi (uydirma ijtimoiy isbot bo‘lib qoladi).
   - Variantlar: (a) roziligi olingan haqiqiy o‘zbek yoshlari bilan fotosessiya; (b) illyustratsiya tizimi; (c) avval (b), keyin (a).
3. **Tipografik imzo:** ko‘k kalit so‘z saqlanadimi yoki ikkinchi uslub qo‘shiladimi (masalan, kursiv)?
4. **B3 kartochka shabloni:** edX uslubida metadata — o‘rganish muddati (taxminan), yo‘l turi, klaster.
5. **Shoshiltirish naqshlari ishlatilmaydi.** Buni brand guideline’ga qoida sifatida yozib qo‘yish.

---

## Raund 3 — Karyera, HR va personal growth (keyingi)

Founder rejasi bo‘yicha. Taklif etilgan ro‘yxat (founder o‘zgartiradi):

| Guruh | Platformalar | Nimani o‘rganamiz |
|---|---|---|
| Karyera qarori | 80,000 Hours, CareerExplorer (Sokanu), My Next Move (O*NET) | Kasb tanlash metodikasini qanday tushuntirishadi; ishonch va shaffoflik |
| Yo‘l xaritasi | roadmap.sh | Roadmap vizualizatsiyasi (Qadam roadmap’i uchun) |
| HR / ish bozori | LinkedIn, hh.uz, Glassdoor | Kasb sahifalari, ko‘nikmalar, maosh ma’lumotining manba bilan berilishi |
| Personal growth | Duolingo, BetterUp, Headspace | Progress, motivatsiya, “keyingi qadam” hissi, ohang |
| Ehtiyot misol | 16Personalities | “Shaxsiyat testi” estetikasi — brief bo‘yicha **qochish kerak** bo‘lgan yo‘nalish |

Har bir raund uchun bir xil format: kuchli naqsh, xavf va Qadam uchun xulosa.
