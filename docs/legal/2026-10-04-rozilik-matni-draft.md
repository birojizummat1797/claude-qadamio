# Rozilik matni — LOYIHA (yurist tekshirmagan)

Sana: 2026-10-04 · Holat: egasi (Nemo) va PM ko‘rib chiqishi uchun · Yurist tekshiruvi: **yo‘q**
Bog‘liq: `docs/specs/2026-10-04-age-gate-and-profile.md`, `docs/legal/2026-10-04-maxfiylik-siyosati-draft.md`

## 1. Mini App — birinchi ekran (savollardan oldin)

**Sarlavha:** Boshlashdan oldin

**Matn:**
> Assalomu alaykum, {ism}!
>
> Natijangizni tayyorlash uchun Qadam quyidagilarni saqlaydi:
> • Telegram’dagi ismingiz va foydalanuvchi nomingiz
> • yoshingiz
> • savollarga bergan javoblaringiz va ularning tahlili
>
> Nima uchun: sizga natija va yo‘l xaritasini ko‘rsatish, yosh chegarasiga rioya qilish va xizmatni yaxshilash uchun.
>
> Va’damiz:
> • ma’lumotlaringizni sotmaymiz va reklama uchun bermaymiz;
> • ismingiz va yoshingiz natijangizga ta’sir qilmaydi — natija faqat javoblaringizga asoslanadi;
> • istalgan payt botda /malumotlarim buyrug‘i orqali ma’lumotlaringizni ko‘rishingiz va o‘chirishingiz mumkin.
>
> Batafsil: [Maxfiylik siyosati]

**Tugmalar:** [Roziman, davom etaman] · [Yo‘q, rahmat]

**"Yo‘q, rahmat" bosilsa:**
> Tushunarli, {ism}. Hech narsa saqlanmadi. Fikringiz o‘zgarsa, /start ni bosing.

## 2. To‘lov ekrani (skrinshot yuklashdan oldin, qo‘shimcha qator)

> To‘lovni tekshirish uchun skrinshotingiz admin’ga Telegram orqali yuboriladi. Skrinshotda karta raqamingizning faqat oxirgi 4 raqami ko‘rinsin — qolganini yashirishingiz mumkin.

(Oxirgi gap — xavfsizlik maslahati: to‘liq karta raqami bizga kerak emas.)

## 3. Bot — /privacy javobi

> 🔒 Maxfiylik
>
> Qadam ismingiz (Telegram’dan), yoshingiz va javoblaringizni faqat sizga natija tayyorlash uchun saqlaydi. Sotmaymiz, reklama uchun bermaymiz. Ism va yosh natijaga ta’sir qilmaydi.
>
> Ma’lumotlaringizni ko‘rish yoki o‘chirish: /malumotlarim
> To‘liq matn: [Maxfiylik siyosati havolasi]

## 4. Eslatmalar (ichki, foydalanuvchiga ko‘rinmaydi)

- Rozilik qayd etiladi: `consent_version` + `consented_at`.
- "Roziman" bosilmaguncha hech qanday savol ko‘rsatilmaydi va hech narsa saqlanmaydi.
- 16–17 yoshlilar uchun ota-ona roziligi masalasi ochiq (spec D2) — yurist javobidan keyin bu ekranga qo‘shimcha qator kerak bo‘lishi mumkin.
- Matndagi va’dalar kodda bajarilishi shart (spec R1, R4, `/malumotlarim`). Bajarilmagan va’da yozilmaydi: shuning uchun bu matn faqat o‘sha funksiyalar tayyor bo‘lgach chiqariladi.
