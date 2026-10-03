# “Ishonch” sahifasi — tuzilma (PM qarori D-3)

Holat: tuzilma va kontent savollari. Sahifa B5 da quriladi. Har bir javob backend va jamoa bilan tekshirilgan **faktlarga** asoslanishi shart.
Tamoyil: bu sahifa shunchaki Privacy/Security emas. U Qadam qanday fikrlashini ochiq tushuntiradi.

| # | Bo‘lim | Savol | Hozir ma’lum faktlar (audit asosida) | Tasdiqlash kerak |
|---|---|---|---|---|
| 1 | Qadam nimani tahlil qiladi | Qaysi ma’lumotlar asosida? | Diagnostika javoblari signallarga aylantiriladi (`engine/signals.py`). Signallar kasb talablari bilan taqqoslanadi (`engine/fit.py`, `ranking.py`). | Signal ro‘yxati va oddiy tilda tavsifi |
| 2 | Qadam nimani bilmaydi | Cheklovlar | Tizim faqat javoblar va taksonomiya ma’lumotini biladi. Mehnat bozori prognozi yoki shaxsiy hayot sharoitining hammasini bilmaydi. | Jamoa ro‘yxati |
| 3 | Dalil yetarli bo‘lmasa | Nima qiladi? | Backend’da “missing signal ≠ zero” tamoyili va `evidence_state` / `coverage` maydonlari bor (`models.py`). | Foydalanuvchiga qanday ko‘rsatilishi (UI) |
| 4 | AI qayerda ishlatiladi | AI qaror qiladimi? | Ballar va tartib deterministik engine’da hisoblanadi. AI (OpenRouter) faqat izoh va shaxsiylashtirish yozadi: “AI assists; controlled system logic decides”. AI javobi sxemadan o‘tmasa, deterministik fallback ishlaydi (`ai/personalizer.py`). Bu modul v0 `api/diagnostic.py` oqimida chaqiriladi. | v1 oqimlarida (discovery, career intelligence) AI ishlatiladimi; modelni foydalanuvchiga nomlash kerakmi |
| 5 | Qarorni kim qiladi | — | **“Signallarni Qadam o‘qiydi. Qarorni siz qilasiz.”** | — |
| 6 | Ma’lumotlardan foydalanish | Saqlash, uchinchi tomonlar, o‘chirish | Bot matni: “Javoblaringiz faqat tahlil uchun ishlatiladi. Uchinchi shaxslarga ruxsatsiz uzatilmaydi.” | Saqlash muddati, o‘chirish so‘rovi, AI provayderga nima yuboriladi, rozilik oqimi |
| 7 | Monetizatsiya tavsiyani buzadimi | Pay-to-rank bormi? | Brief tamoyili: tavsiyalar reklama yoki komissiya evaziga tartiblanmaydi. | Biznes tasdig‘i va hozirgi shartnomalar |
| 8 | Tushuntirish (explainability) | “Nega aynan shu?” | Natijada sabablar ko‘rsatiladi (premium oqim). | Bepul natijada sabab ko‘rsatiladimi (B2 dan ochiq savol) |
| 9 | Inson nazorati | Kim tekshiradi? | Taksonomiya versiyalangan (v2.2), jamoa yangilaydi. | Metodika review jarayoni |
| 10 | Savol va shikoyat | Bog‘lanish | Bot: /help | Rasmiy kanal |

Ochiq xavf: 4- va 6-bandlar AI provayderga yuboriladigan ma’lumotlarga bog‘liq. Bu tasdiqlanmaguncha sahifa nashr qilinmasligi kerak.
