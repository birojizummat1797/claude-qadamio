# Roadmap KB — raqamli va faktik da’volar auditi (2026-10-03)

PM topshirig‘i: Roadmap KB’dagi barcha raqamli da’volarni topish; har biri uchun manba, sana, geografiya, sample va metod borligini tekshirish; dalilsizlarini faktik da’vo sifatida ishlatmaslik.

**Natija: KB’ning hech bir yozuvida manba, sana, geografiya, sample yoki metod maydoni yo‘q.** Shuning uchun hech bir raqam “dalillangan fakt” sifatida ko‘rsatilmaydi.

| Kategoriya | Ma’nosi | Harakat |
|---|---|---|
| statistic / market | Bozor yoki natija statistikasi (“Rejectlar — 90%”, “10 ariza → 1 offer”) | **o‘chirildi** |
| outcome / experience | Natija yoki vaqt va’dasi (“7 kunda o‘tadi”, “→ 1-2 yil”) | **raqamsiz qayta yozildi** |
| salary | Maosh oralig‘i | **o‘chirildi** (data passport yo‘q) |
| plan | Qadam’ning reja tavsiyasi: vaqt byudjeti, maqsad soni (“30 daqiqa”, “3-5 ta loyiha”) | qoladi — bu fakt emas, rejaning o‘zi |
| meta | Versiya, sana, URL, ko‘nikma nomi (HTML5) | qoladi |

Qamrov: foydalanuvchiga chiqadigan uchta fayl — `roadmap_kb_v2.json`, `roadmap_kb_v1.json`, `roadmap_templates_v1.json`. `part_a` / `part_b` faqat kasblar ro‘yxati uchun o‘qiladi, matni chiqmaydi.
Mexanizm: `qadam/backend/data/kb_claims_audit_v1.json` (ko‘rib chiqilgan ro‘yxat) → `engine/public_output.py` (Mini App, PDF, API). KB faylining o‘zi o‘zgartirilmagan.
Testlar: har bir audit yozuvi KB’da bor; KB’da auditdan o‘tmagan `%`, nisbat yoki pul da’vosi qolmagan; tayyor roadmap’larda audit qilingan da’vo yo‘q.
Audit ko‘lamidan tashqari: raqamsiz baholovchi gaplar (masalan, “CSS’da chalkashish — normal”). Bular editorial review uchun alohida.

Jami unikal raqamli satr: 260 — plan: 225, meta: 12, salary: 8, statistic: 6, outcome: 5, experience: 3, market: 1

| Fayl | JSON yo‘li | Matn | Kategoriya | Manba / sana / geografiya / sample / metod | Harakat |
|---|---|---|---|---|---|
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/challenges/*` | Rejectlar — 90% normal | statistic | yo‘q | o‘chirildi |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/constraints/*/*` | MVP tushunchasi — 20% funksiya, 80% qiymat | statistic | yo‘q | o‘chirildi |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/constraints/*/*` | 10 ta ariza → 1 offer — normal | statistic | yo‘q | o‘chirildi |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/challenges/*` | Rejectlar — 90% | statistic | yo‘q | o‘chirildi |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/constraints/*/*` | 10 ariza → 1 offer | statistic | yo‘q | o‘chirildi |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/constraints/*/*` | 10 murojaat → 1 mijoz | statistic | yo‘q | o‘chirildi |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/constraints/*/*` | Mahalliy bozor: 3-6 mln | market | yo‘q | o‘chirildi |
| roadmap_kb_v2 | `careers/data_analytics/b_point/next_step` | Data Science yoki Analytics Engineer → 1-2 yil | outcome | yo‘q | qayta yozildi → “Data Science yoki Analytics Engineer” |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/constraints/*/*` | Har kuni 30 daqiqa kod yozish — 7 kunda o'tadi | outcome | yo‘q | qayta yozildi → “Har kuni 30 daqiqa kod yozish” |
| roadmap_kb_v2 | `careers/frontend_development/b_point/next_step` | Middle Frontend (React/Vue chuqur) → 1-2 yil | outcome | yo‘q | qayta yozildi → “Middle Frontend (React/Vue chuqur)” |
| roadmap_kb_v2 | `careers/smm_manager/b_point/outcomes/*` | Freelance mijozlar (3-5 ta) | outcome | yo‘q | qayta yozildi → “Freelance mijozlar” |
| roadmap_kb_v2 | `careers/ui_ux_design/b_point/next_step` | Product Designer → 1-2 yil | outcome | yo‘q | qayta yozildi → “Product Designer” |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/challenges/*` | 2-haftada 'qiyin' hissi — bu normal | experience | yo‘q | qayta yozildi → “Boshida 'qiyin' hissi bo'lishi mumkin” |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/challenges/*` | Bir masalani 2 soat yechish — normal | experience | yo‘q | qayta yozildi → “Bir masalaga uzoq vaqt ketishi mumkin” |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/challenges/*` | Async/Promise — 4-hafta qiyin | experience | yo‘q | qayta yozildi → “Async/Promise mavzusi qiyin bo'lishi mumkin” |
| roadmap_kb_v2 | `careers/data_analytics/b_point/junior_salary_uzs` | 4-7 mln so'm | salary | yo‘q | o‘chirildi (salary, passport yo‘q) |
| roadmap_kb_v2 | `careers/data_analytics/b_point/remote_salary_usd` | $500-1200/oy | salary | yo‘q | o‘chirildi (salary, passport yo‘q) |
| roadmap_kb_v2 | `careers/foundation_programming/b_point/junior_salary_uzs` | 3-6 mln so'm | salary | yo‘q | o‘chirildi (salary, passport yo‘q) |
| roadmap_kb_v2 | `careers/foundation_programming/b_point/remote_salary_usd` | $300-600/oy | salary | yo‘q | o‘chirildi (salary, passport yo‘q) |
| roadmap_kb_v2 | `careers/frontend_development/b_point/junior_salary_uzs` | 4-8 mln so'm | salary | yo‘q | o‘chirildi (salary, passport yo‘q) |
| roadmap_kb_v2 | `careers/frontend_development/b_point/remote_salary_usd` | $500-1500/oy | salary | yo‘q | o‘chirildi (salary, passport yo‘q) |
| roadmap_kb_v2 | `careers/smm_manager/b_point/remote_salary_usd` | $300-1000/oy | salary | yo‘q | o‘chirildi (salary, passport yo‘q) |
| roadmap_kb_v2 | `careers/ui_ux_design/b_point/junior_salary_uzs` | 3-7 mln so'm | salary | yo‘q | o‘chirildi (salary, passport yo‘q) |
| roadmap_kb_v1 | `careers/foundation_programming/roadmap/first_steps/*` | Bepul kursni boshlash (CS50) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/foundation_programming/roadmap/milestones/*` | 10 masala | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/foundation_programming/roadmap/phases/*/actions/*` | Kuniga 1 soat | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/foundation_programming/roadmap/phases/*/actions/*` | 3-5 mini-loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/foundation_programming/roadmap/phases/*/period` | 0-1 oy | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/foundation_programming/roadmap/phases/*/period` | 1-3 oy | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/foundation_programming/roadmap/phases/*/period` | 3-6 oy | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/frontend_development/roadmap/first_steps/*` | HTML+CSS 2 hafta | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/frontend_development/roadmap/first_steps/*` | JS ES6+ | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/frontend_development/roadmap/phases/*/actions/*` | 3-5 sayt | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/frontend_development/roadmap/phases/*/actions/*` | 2-3 SPA | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/frontend_development/roadmap/phases/*/actions/*` | 3-4 loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/frontend_development/roadmap/phases/*/period` | 0-2 oy | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/frontend_development/roadmap/phases/*/period` | 2-4 oy | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/frontend_development/roadmap/phases/*/period` | 4-6 oy | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/smm_manager/roadmap/first_steps/*` | Canva 5-10 post | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/smm_manager/roadmap/phases/*/actions/*` | 1 real mijoz | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/smm_manager/roadmap/phases/*/actions/*` | 30 kun reja | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/smm_manager/roadmap/phases/*/actions/*` | 3-5 mijoz | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/ui_ux_design/roadmap/phases/*/actions/*` | 5-10 mashq | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/ui_ux_design/roadmap/phases/*/actions/*` | 1-2 loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/ui_ux_design/roadmap/phases/*/actions/*` | 3-4 case study | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/first_3_actions/*` | Excel'ni ochib, pivot jadval bilan tanishish (bugun, 20 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/first_3_actions/*` | Kaggle akkaunt ochish (bugun, 10 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/first_3_actions/*` | Birinchi SQL query yozish (bugun, 30 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/constraints/*/*` | 100 qatordan boshlash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 30 daqiqa: Excel chuqur o'rganish (pivot, lookup) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 30 daqiqa: SQL nima — video | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 30 daqiqa: Kaggle akkaunt ochish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 30 daqiqa: Excel formula + pivot | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 60 daqiqa: SQL query yozish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 30 daqiqa: Dataset bilan amaliyot | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 60 daqiqa: Tableau yoki Power BI mashqi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 60 daqiqa: Statistik tushunchalar | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 60 daqiqa: Dashboard loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 120 daqiqa: Loyiha bilan ishlash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 30 daqiqa: Python pandas asoslari | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 30 daqiqa: Portfolio yozish (case study) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 60 daqiqa: SQL/Python mashqi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 60 daqiqa: Portfolio polish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/daily_focus/*` | 60 daqiqa: Ariza va LinkedIn | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/graduate_by` | 3-4 real loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/graduate_criteria/*` | 10+ SQL query mashqi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/graduate_criteria/*` | Kaggle'da 2-3 dataset tahlil | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/graduate_criteria/*` | Tableau yoki Power BI'da 3+ dashboard | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/graduate_criteria/*` | 3-4 portfolio loyiha (GitHub + Tableau Public) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/signs_right/*` | 3-4 portfolio loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/data_analytics/stages/*/signs_right/*` | 10+ ariza | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/b_point/next_step` | Yo'nalish tanlash (Frontend/Backend/Mobile) → Stage 5 | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/b_point/outcomes/*` | GitHub'da 3-5 ta loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/first_3_actions/*` | VS Code va Python'ni o'rnatish (bugun, 30 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/first_3_actions/*` | Birinchi 'Hello World' dasturini yozish va ishga tushirish (bugun, 15 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/first_3_actions/*` | GitHub akkaunt ochish va birinchi repo yaratish (bugun, 15 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/milestones/*/milestone` | 50+ qator kod yozildi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/constraints/*/*` | Ertalab 1 soat yoki kechqurun 1 soat | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/constraints/*/*` | Kuniga 1 masala — 8 haftada 56 masala | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/constraints/*/*` | Har kuni 1 yangi algoritm o'rganish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/constraints/*/*` | Haftada 1 loyiha — 8 haftada 8 loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 30 daqiqa: Python yoki JS haqida video | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 30 daqiqa: VS Code o'rnatish va sozlash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 30 daqiqa: Birinchi 'Hello World' | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 30 daqiqa: GitHub akkaunt ochish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 20 daqiqa: Yangi tushunchani o'rganish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 40 daqiqa: Kod yozish mashqi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 20 daqiqa: Xatolarni tuzatish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 40 daqiqa: Amaliy mini-loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 30 daqiqa: Yangi algoritm o'rganish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 60 daqiqa: 1-2 masala yechish (LeetCode Easy) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 30 daqiqa: Kodni GitHub'ga yuklash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 30 daqiqa: Loyiha rejasini o'ylash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 120 daqiqa: Kod yozish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 30 daqiqa: GitHub'ga push | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 60 daqiqa: Yo'nalish bo'yicha chuqur bilim | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 60 daqiqa: Portfolio yaxshilash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_focus/*` | 60 daqiqa: Junior vakansiyalarga ariza | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_hours` | 1-2 soat | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_hours` | 2 soat | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/daily_hours` | 2-3 soat | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/graduate_by` | 3-5 ta real loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/graduate_criteria/*` | Kuniga 1 soat o'rganish odat | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/graduate_criteria/*` | 20+ ta kichik mashq bajarildi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/graduate_criteria/*` | 50+ LeetCode Easy masala yechildi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/graduate_criteria/*` | 3-5 ta loyiha GitHub'da | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/graduate_criteria/*` | Kamida 2 tasi live (deploy) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/graduate_criteria/*` | Portfolio 4+ loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/graduate_criteria/*` | 10+ ariza yuborilgan | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/graduate_criteria/*` | 1+ texnik suhbat o'tkazilgan | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/signs_right/*` | 50+ qator kod yozishim mumkin | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/signs_right/*` | LeetCode'da 50+ masala yechildi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/signs_right/*` | 3+ loyiha GitHub'da | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/signs_right/*` | 10+ ariza yuborildi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/signs_wrong/*` | Qaysi tildan boshlashni 5 kundan ko'p o'ylash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/foundation_programming/stages/*/signs_wrong/*` | Bitta loyihani 3 oy qilish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/first_3_actions/*` | VS Code + Live Server o'rnatish (bugun, 15 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/first_3_actions/*` | Birinchi HTML sahifani yozish va brauzerda ochish (bugun, 30 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/first_3_actions/*` | GitHub Pages'ga deploy qilib ko'rish (bugun, 30 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/constraints/*/*` | 3-4 loyiha + case study | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 30 daqiqa: VS Code va brauzer sozlash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 30 daqiqa: Figma akkaunt | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 30 daqiqa: HTML teglar | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 30 daqiqa: Birinchi sahifa | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 30 daqiqa: Yangi teg/atribut | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 60 daqiqa: Mashq — sahifa qurish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 30 daqiqa: Mobile moslashtirish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 30 daqiqa: Sintaksis mashqi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 90 daqiqa: DOM bilan ishlash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 60 daqiqa: Kichik loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 60 daqiqa: Yangi konseptsiya | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 120 daqiqa: Komponent yozish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 60 daqiqa: API integratsiya | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 60 daqiqa: Algoritmik mashq | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_focus/*` | 60 daqiqa: Ariza + networking | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/daily_hours` | 3 soat | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/graduate_criteria/*` | 3+ statik sayt GitHub'da | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/graduate_criteria/*` | JS ES6+ sintaksisi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/graduate_criteria/*` | 3-5 loyiha (weather, todo, calculator) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/graduate_criteria/*` | 3+ React loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/graduate_criteria/*` | Portfolio 4+ loyiha (Vercel'da) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/graduate_criteria/*` | 1+ texnik suhbat | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/signs_right/*` | 3+ statik sahifa qurildi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/signs_right/*` | 5+ ariza yuborildi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/calendar_30d/*/days/*` | Sh: 10 post tayyor | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/calendar_30d/*/days/*` | Sh: 10 post copy | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/calendar_30d/*/days/*` | Sh: 30 kunlik reja | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/first_3_actions/*` | Canva akkaunt ochish (bugun, 5 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/first_3_actions/*` | 3 ta raqib sahifani tahlil qilish (bugun, 30 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/first_3_actions/*` | Birinchi 3 ta postni tayyorlash (bugun, 45 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/milestones/*/milestone` | 10 post tayyor | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/milestones/*/milestone` | 30 kunlik reja | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/milestones/*/milestone` | 3+ mijoz portfolio | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 30 daqiqa: SMM asoslari | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 30 daqiqa: Canva o'rganish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 60 daqiqa: Kontent tahlil | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 30 daqiqa: Dizayn asoslari | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 30 daqiqa: Copywriting | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 60 daqiqa: Post tayyorlash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 30 daqiqa: Instagram/TikTok | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 30 daqiqa: Telegram | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 60 daqiqa: Kontent post | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 30 daqiqa: Mijoz aloqa | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 60 daqiqa: Kontent | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 60 daqiqa: Analytics | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 60 daqiqa: Portfolio | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/daily_focus/*` | 60 daqiqa: Ariza | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/graduate_by` | 10+ post | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/graduate_by` | 30-kunlik kontent reja | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/graduate_by` | 1+ real mijoz portfolio | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/graduate_criteria/*` | 10+ kontent tayyorlangan | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/graduate_criteria/*` | 3+ platformada post | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/graduate_criteria/*` | 3+ case study | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/graduate_criteria/*` | Portfolio 5+ case study | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/graduate_criteria/*` | 10+ ariza/murojaat | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/graduate_criteria/*` | 3-5 mijoz | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/signs_right/*` | 3+ sahifa tahlil qildim | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/signs_right/*` | 10+ post tayyor | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/smm_manager/stages/*/signs_right/*` | 1+ mijoz | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/calendar_30d/*/days/*` | Sh: 5 ekran mashqi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/calendar_30d/*/days/*` | Sh: Case study #1 | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/first_3_actions/*` | Figma akkaunt ochish (bugun, 5 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/first_3_actions/*` | Dribbble'dan 10 ta dizayn saqlash (bugun, 20 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/first_3_actions/*` | Birinchi mobil ekran dizayn (bugun, 40 daqiqa) | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/milestones/*/milestone` | 10+ ekran portfolio | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/constraints/*/*` | 5 ta do'st bilan intervyu | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 30 daqiqa: Figma o'rnatish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 60 daqiqa: Mashhur dizaynlarni tahlil | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 30 daqiqa: Birinchi ekran | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 60 daqiqa: Figma mashqi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 60 daqiqa: Dizayn nazariyasi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 30 daqiqa: Mashhur saytlar tahlil | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 60 daqiqa: User flow | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 60 daqiqa: Wireframe | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 60 daqiqa: Prototype | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 120 daqiqa: Case study yozish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 60 daqiqa: Figma polish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 60 daqiqa: Real mijoz loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 60 daqiqa: Design challenge | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/daily_focus/*` | 60 daqiqa: Networking | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/graduate_by` | 5-10 ekran dizayn | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/graduate_by` | 3-4 case study | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/graduate_criteria/*` | 5-10 UI mashqi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/graduate_criteria/*` | 1-2 case study | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/graduate_criteria/*` | 1+ real loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/graduate_criteria/*` | 1+ design test | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/signs_right/*` | 5+ dizayn saqlandi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/signs_right/*` | 3-4 chuqur case study | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v2 | `careers/ui_ux_design/stages/*/signs_right/*` | 1+ real mijoz | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/business_sales/phases/*/actions/*` | 50 cold email | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/business_sales/phases/*/proof` | 3-5 bitim | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/content_media/phases/*/actions/*` | 10 qisqa video | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/content_media/phases/*/actions/*` | 5-7 portfolio loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/content_media/phases/*/proof` | 10 video | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/content_media/phases/*/proof` | 3-5 video portfolio | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/data_ai/phases/*/actions/*` | 5 ta dataset tahlil | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/data_ai/phases/*/actions/*` | 3 ta loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/data_ai/phases/*/actions/*` | 10+ ariza | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/data_ai/phases/*/proof` | 3 ta dashboard | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/design_creative/phases/*/actions/*` | 5-10 UI mashqi | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/design_creative/phases/*/actions/*` | 2-3 loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/design_creative/phases/*/actions/*` | 3-4 case study | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/design_creative/phases/*/proof` | 2 case study | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/design_creative/phases/*/proof` | 4 portfolio case | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/digital_marketing/phases/*/actions/*` | 10 post tayyorlash | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/digital_marketing/phases/*/actions/*` | 2-3 raqib tahlil | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/digital_marketing/phases/*/actions/*` | 3-5 mijoz | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/digital_marketing/phases/*/proof` | 10 post portfolio | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/digital_marketing/phases/*/proof` | 1 real mijoz | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/digital_marketing/phases/*/proof` | 3-5 case study | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/digital_marketing/phases/*/proof` | Offer yoki 5+ mijoz | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/infra_security/phases/*/actions/*` | 10 ta komanda o'rganish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/infra_security/phases/*/actions/*` | 3 ta container loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/infra_security/phases/*/milestone` | K8s cluster | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/infra_security/phases/*/proof` | Portfolio 4 loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/product_project/phases/*/actions/*` | 3 ta mahsulot tahlil | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/product_project/phases/*/proof` | 1 real loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/actions/*` | Kuniga 1-2 soat mashq | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/actions/*` | 5-10 kichik masala yechish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/actions/*` | 3-5 mini-loyiha | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/actions/*` | 10+ ariza yuborish | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/period` | 0-30 kun | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/period` | 1-3 oy | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/period` | 3-6 oy | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/period` | 6-12 oy | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/proof` | GitHub'da birinchi 3 ta repo | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/proof` | 3 ta loyiha GitHub'da | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_templates_v1 | `templates/software/phases/*/proof` | 4-5 loyiha portfolio | plan | yo‘q | qoladi (Qadam reja tavsiyasi) |
| roadmap_kb_v1 | `careers/foundation_programming/resources/*/name` | CS50 | meta | yo‘q | qoladi (fakt emas) |
| roadmap_kb_v1 | `careers/foundation_programming/resources/*/url` | https://cs50.harvard.edu/x/ | meta | yo‘q | qoladi (fakt emas) |
| roadmap_kb_v1 | `version` | v1.1 | meta | yo‘q | qoladi (fakt emas) |
| roadmap_kb_v2 | `careers/foundation_programming/resources/*/name` | CS50 (Harvard) | meta | yo‘q | qoladi (fakt emas) |
| roadmap_kb_v2 | `careers/foundation_programming/resources/*/url` | https://cs50.harvard.edu/x/ | meta | yo‘q | qoladi (fakt emas) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/skills_gained/*` | HTML5 | meta | yo‘q | qoladi (fakt emas) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/skills_gained/*` | CSS3 | meta | yo‘q | qoladi (fakt emas) |
| roadmap_kb_v2 | `careers/frontend_development/stages/*/skills_gained/*` | JavaScript ES6+ | meta | yo‘q | qoladi (fakt emas) |
| roadmap_kb_v2 | `created_at` | 2026-09-21 | meta | yo‘q | qoladi (fakt emas) |
| roadmap_kb_v2 | `note` | QADAM Roadmap KB v2.0 — ACQ-style, 5 ta to'liq career | meta | yo‘q | qoladi (fakt emas) |
| roadmap_kb_v2 | `version` | v2.0 | meta | yo‘q | qoladi (fakt emas) |
| roadmap_templates_v1 | `version` | v1.0 | meta | yo‘q | qoladi (fakt emas) |
