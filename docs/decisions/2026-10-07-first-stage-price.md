# Founder qarori — birinchi bosqich mahsuloti narxi (2026-10-07)

Holat: **TASDIQLANGAN** (Founder: "hozircha faqat birinchi bosqich produktimiz narxi 119 ming etib qat’iy belgilansin").

## Qaror
- Qadam.io **birinchi bosqich mahsuloti narxi — 119 000 so‘m.**

## Hali qaror qilinmagan (tadqiqotdan va PM bilan qayta muhokamadan keyin Founder hal qiladi)
1. "Birinchi bosqich" tarkibi — aniq nima beriladi va kim o‘tkazadi.
2. Bepul pilot: ishtirokchilar soni (N) va segmentlar.
3. Pilot e’lonida 119 000 so‘m narxini aytish yoki aytmaslik.
4. Pullik cohort uchun muvaffaqiyat mezoni.

Tadqiqot: `docs/research/2026-10-07-pilot-cohort-pricing-research.md`.

## Texnik izoh (kod o‘zgartirilmadi)
- Backend’da (`qadam-loyiha-deepseek`, `qadam/backend/api/payments.py`) eski qiymat `PRICE_UZS = 39000` va `PRICE_STARS = 150` turibdi. To‘lov hozir `free_beta` (409), narx foydalanuvchiga ko‘rsatilmaydi; saytda narx yo‘q (D4).
- Narx kodda faqat to‘lov qayta yoqilganda, alohida tasdiq bilan yangilanadi (legal review va pullik cohort boshlanishidan oldin). Stars narxi alohida Founder qarori.
