# Savol va javob matni — real foydalanuvchi sinovi (PM 6-band)

Maqsad: yangi savol shakli (“qanchalik …”) va 5 nuqtali so‘zli shkala (“Umuman yoqmaydi … Juda yoqadi”, o‘rtada “Bilmayman”) odamlarga hozirgisidan tushunarliroqmi — shuni tekshirish. Bu **sinov**, natijani biz hal qilmaymiz; final matn PM va egasi qarori bilan.

## 1. Kimlar bilan

- 5–7 kishi, 16–35 yosh (biz qabul qilgan chegara). Imkon qadar har xil holatda: maktab yoki litsey, talaba, ishlayotgan, kasb almashtirmoqchi.
- Jamoa a’zolari emas. Qadam’ni avval ko‘rmagan odam yaxshiroq.
- 16–17 yoshlilar: ota-ona roziligi bilan va shaxsiy ma’lumot yozmasdan (yuridik tekshiruv hali tugamagan).

## 2. Nima kerak

- Telefon yoki qog‘oz, har biriga ~15 daqiqa.
- Ikkita varaq (A va B). Ishtirokchilarning yarmi avval A ni, qolgan yarmi avval B ni ko‘radi — tartib natijaga ta’sir qilmasligi uchun.

### A — hozirgi variant
1. Murakkab muammolarni yechish menga zavq beradi. — *Umuman yo‘q · Kam · O‘rtacha · Ko‘p · To‘liq ha*
2. Yangi narsani o‘zim mustaqil o‘rganishga odatlanganman. — *(xuddi shu)*
3. Raqamlar, statistikalar va formulalar bilan ishlash menga oson. — *(xuddi shu)*
4. Odamlarning muammolarini tinglab, ularga yordam berish yoqadi. — *(xuddi shu)*

### B — taklif
1. Qiyin masala yechish sizga qanchalik yoqadi? — *Umuman yoqmaydi · Unchalik yoqmaydi · Bilmayman · Yoqadi · Juda yoqadi*
2. Yangi narsani o‘zingiz o‘rganib olish sizga qanchalik oson? — *Umuman oson emas · Unchalik oson emas · Bilmayman · Oson · Juda oson*
3. Raqamlar bilan ishlash sizga qanchalik oson? — *(2-savoldagidek)*
4. Odamlarga yordam berish sizga qanchalik yoqadi? — *(1-savoldagidek)*

Matnlar `docs/reviews/2026-10-03-bot-test-findings.md` §4.2–4.3 dan olingan. Signal ma’nosi o‘zgarmaydi.

## 3. Sinov tartibi (har bir ishtirokchi)

1. **Kirish (1 daqiqa):** “Biz sizni emas, savollarimizni sinayapmiz. To‘g‘ri yoki noto‘g‘ri javob yo‘q.”
2. **Javob berish:** ishtirokchi har bir savolga ovoz chiqarib fikrlab javob beradi (“O‘ylaganingizni aytib boring”). Biz aralashmaymiz.
3. **Har bir savoldan keyin 2 ta savol:**
   - “Bu savol nimani so‘rayapti deb tushundingiz? O‘z so‘zingiz bilan ayting.”
   - “Javob tanlash qiyin bo‘ldimi? Qaysi variantlar orasida ikkilandingiz?”
4. **Oxirida:**
   - “A va B dan qaysi biri tushunarliroq edi? Nega?”
   - “‘Bilmayman’ variantini qachon tanlardingiz?”
   - “Qaysi savol rasmiy yoki sovuq tuyuldi?”

## 4. Nimani yozib olamiz (jadval)

| Ishtirokchi | Yosh oralig‘i | Holat | Savol | A yoki B | Tushunishi to‘g‘rimi (ha / qisman / yo‘q) | Ikkilangan variantlar | Izoh |
|---|---|---|---|---|---|---|---|

Ism, telefon yoki boshqa shaxsiy ma’lumot **yozilmaydi**. Faqat “1-ishtirokchi” kabi raqam.

## 5. Natijani qanday baholaymiz

- **Tushunish:** har bir savol uchun “ha” javoblari soni (A va B alohida).
- **Ikkilanish:** qaysi javob variantlari chalkashtirildi (masalan, “O‘rtacha” va “Bilmayman”).
- **Afzallik:** nechta kishi A ni, nechtasi B ni tushunarliroq dedi.
- Bu kichik sifat sinovi (5–7 kishi). Natija **yo‘nalish** beradi, statistik isbot emas. Foiz bilan hisobot berilmaydi — faqat “7 kishidan 5 tasi” kabi.

## 6. Keyin

Natijalar jadvali bilan PM’ga: qaysi matn qoladi, qaysi biri qayta yoziladi. Final matn faqat PM va egasi tasdig‘idan keyin diagnostika v2 spetsifikatsiyasiga kiradi.
