# Kasb va sohalar katalogi — joylashuv tahlili (2026-10-04)

Manba: `qadam-loyiha-deepseek/qadam/backend/data/taxonomy_v1.json` (v2.2), production DB (read-only taxonomy audit, run #5, branch `claude/taxonomy-audit`), roadmap KB, veb-sayt `content/careers.ts`.
Bu — tahlil va tavsiya. Qaror: Founder.

## 1. Katalog qayerlarda turibdi

| # | Joy | Nima bor | Holat |
|---|---|---|---|
| 1 | Backend fayl `taxonomy_v1.json` | 8 soha, 25 kasb (v2.2) | Asosiy manba |
| 2 | Production DB (reyting shu yerdan o‘qiydi) | 8 soha, 25 kasb (v1.0 deb belgilangan) | **Fayl bilan 100% bir xil** (25/25, farq 0). Xavf: DB bir marta to‘ldirilgan — keyingi fayl o‘zgarishlari avtomatik o‘tmaydi |
| 3 | Roadmap KB | 5 kasb | Faqat shu 5 tasi tavsiya qilinadi |
| 4 | `roadmap_templates_v1.json` | 8 soha bo‘yicha shablon | 1 bilan mos |
| 5 | Veb-sayt `content/careers.ts` | 25 kasb (1-ning nusxasi) + 11 rejalashtirilgan (sohasiz) | Hali ommaga ko‘rsatilmaydi (`/yonalishlar` yo‘q) |
| 6 | Mini App | Katalog yo‘q | Faqat natijada kasb ko‘rinadi |

## 2. Hozirgi joylashuv va baho

✅ to‘g‘ri · ⚠️ munozarali · ❌ noto‘g‘ri joyda · **[R]** — yo‘l xaritasi tayyor (tavsiya qilinadi)

| Soha (hozirgi nom) | Kasb | Baho | Izoh |
|---|---|---|---|
| Dasturlash | Foundation Programming **[R]** | ⚠️ | Kasb emas, boshlang‘ich bosqich. Joyi to‘g‘ri, nomi chalg‘itadi |
| Dasturlash | Frontend Development **[R]** | ✅ | |
| Dasturlash | Backend Development | ✅ | |
| Dasturlash | Mobile Development | ✅ | |
| Data & AI | Data Analytics **[R]** | ✅ | |
| Data & AI | Data Science | ✅ | |
| Data & AI | AI Engineering | ✅ | |
| Infra & Security | DevOps / Cloud | ✅ | |
| Infra & Security | Cybersecurity | ✅ | |
| Infra & Security | QA / Test Automation | ❌ | Dasturiy ta’minotni test qiladi, xatolarni dasturchilarga beradi (O*NET 15-1253). Joyi — Dasturlash |
| Dizayn | UI/UX Design **[R]** | ✅ | |
| Dizayn | Product Design | ✅ | UI/UX bilan farqi tushuntirilishi kerak |
| Dizayn | Graphic Design | ✅ | |
| Dizayn | Motion Design | ✅ | |
| Marketing | SMM Manager **[R]** | ✅ | |
| Marketing | Performance Marketing | ✅ | |
| Marketing | SEO Specialist | ✅ | |
| Marketing | Content Marketing | ⚠️ | Kontent ikki sohaga bo‘lingan (Marketing va Media) |
| Media | Video Content | ✅ | |
| Media | Brand Strategy | ❌ | Strategik marketing ishi (biznes hissi, advanced). Joyi — Marketing |
| Product & Project | Product Management | ✅ | |
| Product & Project | Project Management | ✅ | |
| Product & Project | Business Analysis | ⚠️ | Data bilan chegarada; hozirgi joyi qabul qilsa bo‘ladi |
| Business & Sales | IT / B2B Sales | ✅ | |
| Business & Sales | Customer Success | ✅ | |

Jami: 25 kasbdan **20 ✅, 3 ⚠️, 2 ❌**.

## 3. Umumiy muammolar

1. **Nomlar:** 25 kasbning hammasi inglizcha; 8 sohadan 4 tasi inglizcha ("Data & AI", "Infra & Security", "Product & Project", "Business & Sales").
2. **Muvozanat:** tavsiya qilinadigan 5 kasb faqat 4 sohadan (Dasturlash 2, Data 1, Dizayn 1, Marketing 1). Qolgan 4 soha (Infra, Media, Product, Sotuv) natijada hech qachon chiqmaydi.
3. **Media sohasi:** Brand Strategy ko‘chsa, unda bitta kasb qoladi (Video Content).
4. **Rejalashtirilgan 11 kasbning sohasi yo‘q:** buxgalter, fintech, Excel/Sheets hozirgi 8 sohaning hech biriga to‘g‘ri tushmaydi.
5. **Jarayon xavfi:** production DB fayldan bir marta to‘ldirilgan. Kelajakda faylni o‘zgartirsak (masalan, QA’ni ko‘chirsak), DB’ni alohida yangilash kerak — aks holda sayt va natija bir-biriga zid bo‘ladi.

## 4. Rejalashtirilgan kasblar uchun joy taklifi

| Kasb | Taklif soha |
|---|---|
| Full-Stack Development | Dasturlash |
| AI Automation | Data & AI |
| Copywriting, Content Creation | Media / kontent |
| Growth Marketing | Marketing |
| Sotuv menejeri | Sotuv |
| Tizim va tarmoq ma’muri | Infra (tizim va tarmoq) |
| Ma’lumotlar bazasi mutaxassisi | Data (yoki Infra) |
| Excel va Google Sheets mutaxassisi | Yangi: Moliya va raqamli ofis |
| Buxgalter, Fintech mutaxassisi | Yangi: Moliya va raqamli ofis |

## 5. Tavsiyalar (Claude)

1. **Darhol ko‘chirish (2 ta):** QA → Dasturlash; Brand Strategy → Marketing. Reytingga ta’sir qilmaydi (reyting kasb bo‘yicha), faqat katalog ko‘rinishi.
2. **Nomlarni o‘zbekchalashtirish** — oldingi tahlildagi 9 soha taklifi bilan birga, bitta qaror sifatida.
3. **Foundation Programming** nomi: masalan, "Dasturlash asoslari (boshlang‘ich)".
4. **Media + Content Marketing:** "Media va kontent" ga birlashtirish yoki Content Marketing’ni Media’ga ko‘chirish — Founder qarori.
5. **Jarayon:** taksonomiya o‘zgarganda DB’ni yangilaydigan tekshirilgan yo‘l (versiya + audit) — o‘zgartirishdan oldin.

Hammasi `/yonalishlar` sahifasi qurilishidan oldin hal qilinsa, ikki marta ish qilinmaydi.
