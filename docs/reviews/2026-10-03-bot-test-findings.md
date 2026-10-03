# Bot sinovi: topilmalar (2026-10-03)

Manba: asoschi va 2 ta yaqin kishi botni real sinab ko‘rdi; kod `qadam-loyiha-deepseek` (PR #2 branch, natija/ball kodi `main` bilan bir xil) tekshirildi.
Holat: **topilmalar, tuzatish qilinmagan.** Bot va Mini App kodiga tegilmagan, deploy qilinmagan.

## 1. Foydalanuvchi fikrlari

| # | Fikr | Kim | Javob |
|---|---|---|---|
| U1 | Ba’zi savollarda menga mos variant yo‘q edi | yaqinlar | §4.1 — “Boshqa (o‘zim yozaman)” |
| U2 | Savollar o‘ta rasmiy | yaqinlar | §4.2 — ohang |
| U3 | Chuqur diagnostikadagi “Kam / O‘rtacha / Ko‘p” variantlari to‘g‘rimi, 1–10 yoki 1–5 yaxshi emasmi? | asoschi | §4.3 |
| U4 | Natijada hali ham “100%” ko‘rinadi | asoschi | §2 |
| U5 | Taxminan 7 daqiqa ketdi | asoschi | §3 |

## 2. “100%” qayerdan chiqadi (kod asosida)

Sayt (B1–B2.3) foiz va “100% mos” da’volarini olib tashlagan. **Bot va Mini App hech qachon o‘zgartirilmagan** — ular saytdan alohida loyiha va bu ish rejasiga kirmagan. Shuning uchun foizlar joyida.

Foiz ko‘rinadigan joylar:

| Joy | Nima |
|---|---|
| `qadam-miniapp/app/preliminary/page.tsx:130` | `{fit}%` — bepul natija |
| `qadam-miniapp/app/teaser/page.tsx:111,132` | signal `score × 100 %`, `{fit}%` |
| `qadam-miniapp/app/report/[id]`, `career-intelligence` | `{readiness}%` |
| `backend/ai/personalizer.py:133` | “… eng mos keladi (Fit: X%, Readiness: Y%)” |
| `backend/pdf_report.py:74,98` | PDF’da `fit%`, `Ready %` |

**Hisob-kitob xatosi (tekshirilgan, simulyatsiya bilan):**
Signal qiymati `[0, 10]` oralig‘ida bo‘lishi kerak (`engine/fit.py` shunga tayanadi), lekin u `o‘rtacha(v × w)` deb hisoblanadi (`discovery_service.py`, `deep_diagnostic_service.py`):
- `w > 1` bo‘lsa, qiymat 10 dan oshadi. Hamma javob “To‘liq ha” bo‘lsa: bepul diagnostikada `technical_interest = 11.25`, chuqur diagnostikada `technical_interest = 15`, `user_empathy = 12.5`, `innovation = 12`. Natijada signal chizig‘i (`value/10 × 100%`) 100% dan oshadi.
- `w < 1` bo‘lsa, eng yuqori javob ham eng yuqori qiymat bermaydi: “To‘liq ha” → `logical_thinking = 6.33`.
- To‘g‘ri formula — vaznli o‘rtacha: `qiymat = Σ(v·w) / Σw`. U doim `[0, 10]` ichida qoladi.

Bu metodika o‘zgarishi: barcha fit qiymatlari o‘zgaradi. Egasi va PM qarori, alohida backend PR va testlar kerak (BL-12).

## 3. Davomiylik

Asoschi: bepul (13) + chuqur (18) = **31 savol ~7 daqiqada**, ya’ni bir savolga ~13–14 soniya. Demak bepul qism uchun “3 daqiqa — 13 savol” va’dasi realistik. Muammo emas.

## 3b. Asoschining real natijasi

Natija: **SMM — moslik 100%, tayyorlik 70%.** Asoschi buni tushunmadi.
- “Moslik” (`fit`) — javoblar kasb uchun muhim deb belgilangan signallarga qanchalik yaqinligini bildiruvchi **indeks**. Bu ehtimol ham, kafolat ham emas. Lekin “100%” yozuvi “aynan shu kasb” degan hukm kabi o‘qiladi.
- §2 dagi xato tufayli signal qiymatlari 10 dan oshishi mumkin, fit esa hech qayerda cheklanmagan (`min(100, …)` yo‘q). Shuning uchun 100 yoki undan yuqori qiymat chiqishi mumkin. Aynan asoschi javoblarini tiklab bo‘lmaydi, shuning uchun bu holatda aynan shu xato sabab bo‘lganini **aniq aytib bo‘lmaydi**.
- “Tayyorlik” (`readiness`) = 100 × qurilma × ingliz tili × vaqt ko‘paytuvchilari (`engine/readiness.py`). 70% — hozirgi sharoit (masalan, ingliz tili darajasi yoki kunlik vaqt) talabdan biroz pastligini bildiradi.
- **Qo‘shimcha xato:** kasblarni solishtirish endpoint’i (`api/v1/career_intelligence.py`, ~165-qator) foydalanuvchining haqiqiy sharoitini emas, qotirilgan qiymatlarni ishlatadi: `{"device": "laptop", "english": "b1", "time": "2_3h"}`. U yerdagi tayyorlik foizi foydalanuvchiga tegishli emas.
- Xulosa: asoschi tushunmagan bo‘lsa, foydalanuvchilar ham tushunmaydi. Bu BL-13 (foiz o‘rniga daraja va oddiy izoh) uchun real dalil.

## 4. Diagnostika v2 ga qo‘shimchalar

### 4.1 “Boshqa (o‘zim yozaman)”
- Faqat **vaziyat savollarida** (holat bloklari, hozirgi soha, sabab). Matn maydoni, ko‘pi bilan 120 belgi.
- Signal savollarida (likert) qo‘shilmaydi: erkin matnni ballga aylantirish uchun AI yoki qo‘lda tahlil kerak — bu deterministik tamoyilga zid.
- Signal o‘lchaydigan tanlov savollarida (DISC_Q02, Q09, Q10) “Bu yerda menga mosi yo‘q” varianti qo‘shiladi. U signal bermaydi (o‘sha signal shu savoldan o‘lchanmagan hisoblanadi) va soxta javob tanlashga majbur qilmaydi.
- Erkin matnlar faqat metodika review uchun yig‘iladi. Qaysi variantlar ko‘p yozilsa, ular keyingi versiyada ro‘yxatga qo‘shiladi. Shaxsiy ma’lumot so‘ralmaydi; matn natijaga ta’sir qilmaydi.

### 4.2 Ohang: rasmiy → samimiy, lekin hurmatli
Qoida: “Siz”, qisqa gap, kundalik so‘z, bitta fikr — bitta savol. Ma’no (o‘lchanadigan signal) o‘zgarmaydi; har bir qayta yozilgan savol metodika review’dan o‘tadi.

| Hozir | Taklif |
|---|---|
| Hozir hayotingizning qaysi bosqichidasiz? | Hozir nima bilan bandsiz? |
| Murakkab muammolarni yechish menga zavq beradi. | Qiyin masalani yechsam, xursand bo‘laman. |
| Yangi narsani o‘zim mustaqil o‘rganishga odatlanganman. | Yangi narsani ko‘pincha o‘zim o‘rganib olaman. |
| Raqamlar, statistikalar va formulalar bilan ishlash menga oson. | Raqamlar bilan ishlash menga qiyin emas. |
| Ko‘p qismli tizimlarni (masalan, sayt tuzilmasi, jarayon) tasavvur qila olaman. | Biror narsa qanday qismlardan tuzilganini tez tasavvur qilaman. |
| Siz uchun ishda eng muhim narsa? | Ishda siz uchun eng muhimi nima? |

### 4.3 Javob shkalasi: “Kam / O‘rtacha / Ko‘p” yoki 1–10?

Hozirgi shkala (Mini App, `LIKERT`): **Umuman yo‘q · Kam · O‘rtacha · Ko‘p · To‘liq ha.**

Tadqiqotlar nima deydi:
- **Preston & Colman (2000):** 2–4 nuqtali shkalalar ishonchlilikda zaif; 7 gacha yaxshilanadi; 10 dan ko‘p bo‘lsa, takroriy ishonchlilik pasayadi. Respondentlar 10 nuqtalini yoqtirgan, lekin sifat 7 atrofida eng yaxshi.
- **Krosnick & Presser (2010):** har bir nuqtasi **so‘z bilan nomlangan** shkala faqat raqamli shkaladan aniqroq — har kim “7” ni o‘zicha tushunadi. Bir qutbli savollar uchun 5 nuqta, ikki qutbli uchun 7 nuqta tavsiya qilinadi.
- **O*NET Interest Profiler (AQSh Mehnat vazirligi):** 5 nuqtali, hammasi so‘z bilan: Strongly Dislike · Dislike · Unsure · Like · Strongly Like.
- **Mahalliy tajriba:** O‘zbek tilidagi shkala tadqiqotini topmadim — bu bo‘yicha aniq gapira olmayman.

Xulosa va tavsiya:
1. **1–10 ga o‘tish tavsiya etilmaydi.** Telefonda 10 ta tugma tor, raqamning ma’nosi har kimda har xil, ishonchlilik 5–7 dan yaxshi emas.
2. **5 nuqta qoladi, lekin savol va yorliq bir-biriga mos bo‘ladi.** Hozirgi muammo nuqtalar sonida emas, **aralashganida**: savol — tasdiq (“Men … qila olaman”), javob esa miqdor (“Kam / Ko‘p”) va rozilik (“To‘liq ha”) aralash.
3. Krosnick & Presser “roziman / rozi emasman” formatidan ham ehtiyot bo‘lishni maslahat beradi: odamlar ko‘pincha “ha”ga moyil bo‘ladi (acquiescence). Yaxshiroq yo‘l — **savolning o‘zini “qanchalik” shaklida berish** va javobni shu o‘lchovda nomlash. Bu U2 (rasmiy ohang) muammosini ham yechadi:

| Hozir | Taklif |
|---|---|
| “Murakkab muammolarni yechish menga zavq beradi.” + Kam/Ko‘p | “Qiyin masala yechish sizga qanchalik yoqadi?” |
| Umuman yo‘q · Kam · O‘rtacha · Ko‘p · To‘liq ha | **Umuman yoqmaydi · Unchalik yoqmaydi · Bilmayman · Yoqadi · Juda yoqadi** |

   Har bir savol turi uchun yorliqlar o‘sha savolga mos tanlanadi (“yoqadi”, “oson”, “tez-tez” kabi), lekin har doim 5 nuqta va o‘rtada “Bilmayman”.
4. O‘rta nuqta “O‘rtacha” emas, “Bilmayman” — O*NET’dagi “Unsure” kabi; “o‘rtacha” va “bilmayman” boshqa-boshqa narsa.
5. Raqam 1–5 ichki qiymat bo‘lib qoladi (`LIKERT_TO_10` o‘zgarmaydi), foydalanuvchiga faqat so‘z ko‘rinadi.

Manbalar:
- Preston, C. C., & Colman, A. M. (2000). *Optimal number of response categories in rating scales.* Acta Psychologica, 104, 1–15.
- Krosnick, J. A., & Presser, S. (2010). *Question and Questionnaire Design.* Handbook of Survey Research. https://web.stanford.edu/dept/communication/faculty/krosnick/docs/2010/2010%20Handbook%20of%20Survey%20Research.pdf
- O*NET Interest Profiler reference manual: https://services.onetcenter.org/reference/mnm/ip/ip_questions

## 5. Tavsiya etilgan tartib

| # | Ish | Qayerda | Kim hal qiladi |
|---|---|---|---|
| 1 | Mini App, bot matni va PDF’dan foizlarni olib tashlash, daraja (kuchli/o‘rtacha/ma’lumot yetarli emas) ko‘rsatish | Mini App + backend | egasi/PM (BL-13) |
| 2 | Signal formulasini vaznli o‘rtachaga tuzatish | backend | egasi/PM, metodika (BL-12) |
| 3 | Shkala yorliqlari | Mini App | egasi |
| 4 | Ohang va “Boshqa” | diagnostika v2 | egasi + metodika review |
