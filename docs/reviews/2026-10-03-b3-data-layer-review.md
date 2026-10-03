# B3 Data Layer — PM review hisoboti + P0 final (2026-10-03)

Hech narsa merge yoki deploy qilinmagan.

| Repo | Branch | Oxirgi commit |
|---|---|---|
| `claude-qadamio` (B3 data layer) | `claude/b3-career-catalog` | `55e99b4` |
| `qadam-loyiha-deepseek` (P0) | `claude/p0-diagnostic-fixes` | `f253281` |

---

## A. B3 Data Layer

### A1. 25 ta kasb (+ 5 planned)

Manba: `content/careers.snapshot.json` (backend `taxonomy_v1.json` v2.2 + `signals_v1.json` v1.0 dan sync skripti bilan).
Oxirgi ustun: **deep link** — bot PR #2 slug’ni qabul qiladimi (deploy’dan keyin); **bot tavsiyasi** — diagnostika natijasida bu kasb chiqishi mumkinmi.

| # | Slug | Title | Klaster | Pathway → label | Oy | Status | Signal kalitlari | Public label (backend verbatim) | Diagnostika: deep link / bot tavsiyasi |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `foundation_programming` | Foundation Programming | Dasturlash | `entry` → Boshlash uchun | 4 | active | `logical_thinking`, `problem_solving`, `persistence` | Mantiqiy fikrlash · Muammo hal qilish · Qatiyat | ✅ / ✅ |
| 2 | `frontend_development` | Frontend Development | Dasturlash | `role` → Kasb sifatida | 6 | active | `logical_thinking`, `creative_design`, `visual_logic` | Mantiqiy fikrlash · Ijodiy dizayn · Vizual mantiq | ✅ / ✅ |
| 3 | `backend_development` | Backend Development | Dasturlash | `role` → Kasb sifatida | 8 | active | `logical_thinking`, `problem_solving`, `system_design` | Mantiqiy fikrlash · Muammo hal qilish · Tizimli fikrlash | ✅ / ❌ (roadmap KB yo‘q) |
| 4 | `mobile_development` | Mobile Development | Dasturlash | `role` → Kasb sifatida | 7 | active | `logical_thinking`, `problem_solving`, `user_empathy` | Mantiqiy fikrlash · Muammo hal qilish · Empatiya | ✅ / ❌ (roadmap KB yo‘q) |
| 5 | `data_analytics` | Data Analytics | Data & AI | `role` → Kasb sifatida | 5 | active | `logical_thinking`, `analytical`, `attention_to_detail` | Mantiqiy fikrlash · Tahliliy fikrlash · Detallarga etibor | ✅ / ✅ |
| 6 | `data_science` | Data Science | Data & AI | `advanced` → Keyingi bosqich | 12 | active | `logical_thinking`, `analytical`, `math_logic` | Mantiqiy fikrlash · Tahliliy fikrlash · Matematik mantiq | ✅ / ❌ (roadmap KB yo‘q) |
| 7 | `ai_engineering` | AI Engineering | Data & AI | `advanced` → Keyingi bosqich | 12 | active | `logical_thinking`, `problem_solving`, `system_design` | Mantiqiy fikrlash · Muammo hal qilish · Tizimli fikrlash | ✅ / ❌ (roadmap KB yo‘q) |
| 8 | `devops_cloud` | DevOps / Cloud | Infra & Security | `role` → Kasb sifatida | 10 | active | `technical_interest`, `system_design`, `analytical` | Texnikaga qiziqish · Tizimli fikrlash · Tahliliy fikrlash | ✅ / ❌ (roadmap KB yo‘q) |
| 9 | `cybersecurity` | Cybersecurity | Infra & Security | `role` → Kasb sifatida | 10 | active | `analytical`, `persistence`, `attention_to_detail` | Tahliliy fikrlash · Qatiyat · Detallarga etibor | ✅ / ❌ (roadmap KB yo‘q) |
| 10 | `qa_automation` | QA / Test Automation | Infra & Security | `entry` → Boshlash uchun | 5 | active | `logical_thinking`, `problem_solving`, `attention_to_detail` | Mantiqiy fikrlash · Muammo hal qilish · Detallarga etibor | ✅ / ❌ (roadmap KB yo‘q) |
| 11 | `ui_ux_design` | UI/UX Design | Dizayn | `role` → Kasb sifatida | 6 | active | `creative_design`, `visual_logic`, `user_empathy` | Ijodiy dizayn · Vizual mantiq · Empatiya | ✅ / ✅ |
| 12 | `product_design` | Product Design | Dizayn | `advanced` → Keyingi bosqich | 10 | active | `creative_design`, `visual_logic`, `user_empathy` | Ijodiy dizayn · Vizual mantiq · Empatiya | ✅ / ❌ (roadmap KB yo‘q) |
| 13 | `graphic_design` | Graphic Design | Dizayn | `entry` → Boshlash uchun | 4 | active | `creative_design`, `visual_logic`, `attention_to_detail` | Ijodiy dizayn · Vizual mantiq · Detallarga etibor | ✅ / ❌ (roadmap KB yo‘q) |
| 14 | `motion_design` | Motion Design | Dizayn | `role` → Kasb sifatida | 6 | active | `creative_design`, `visual_logic`, `persistence` | Ijodiy dizayn · Vizual mantiq · Qatiyat | ✅ / ❌ (roadmap KB yo‘q) |
| 15 | `smm_manager` | SMM Manager | Marketing | `entry` → Boshlash uchun | 3 | active | `creative_design`, `user_empathy`, `business_sense` | Ijodiy dizayn · Empatiya · Biznes hissi | ✅ / ✅ |
| 16 | `performance_marketing` | Performance Marketing | Marketing | `role` → Kasb sifatida | 5 | active | `analytical`, `attention_to_detail`, `business_sense` | Tahliliy fikrlash · Detallarga etibor · Biznes hissi | ✅ / ❌ (roadmap KB yo‘q) |
| 17 | `seo` | SEO Specialist | Marketing | `role` → Kasb sifatida | 5 | active | `analytical`, `persistence`, `attention_to_detail` | Tahliliy fikrlash · Qatiyat · Detallarga etibor | ✅ / ❌ (roadmap KB yo‘q) |
| 18 | `content_marketing` | Content Marketing | Marketing | `entry` → Boshlash uchun | 3 | active | `creative_design`, `user_empathy`, `persistence` | Ijodiy dizayn · Empatiya · Qatiyat | ✅ / ❌ (roadmap KB yo‘q) |
| 19 | `video_content` | Video Content | Media | `entry` → Boshlash uchun | 4 | active | `creative_design`, `visual_logic`, `persistence` | Ijodiy dizayn · Vizual mantiq · Qatiyat | ✅ / ❌ (roadmap KB yo‘q) |
| 20 | `brand_strategy` | Brand Strategy | Media | `advanced` → Keyingi bosqich | 8 | active | `creative_design`, `user_empathy`, `business_sense` | Ijodiy dizayn · Empatiya · Biznes hissi | ✅ / ❌ (roadmap KB yo‘q) |
| 21 | `product_management` | Product Management | Product & Project | `advanced` → Keyingi bosqich | 12 | active | `user_empathy`, `system_design`, `business_sense` | Empatiya · Tizimli fikrlash · Biznes hissi | ✅ / ❌ (roadmap KB yo‘q) |
| 22 | `project_management` | Project Management | Product & Project | `role` → Kasb sifatida | 6 | active | `system_design`, `persistence`, `attention_to_detail` | Tizimli fikrlash · Qatiyat · Detallarga etibor | ✅ / ❌ (roadmap KB yo‘q) |
| 23 | `business_analysis` | Business Analysis | Product & Project | `role` → Kasb sifatida | 6 | active | `logical_thinking`, `analytical`, `attention_to_detail` | Mantiqiy fikrlash · Tahliliy fikrlash · Detallarga etibor | ✅ / ❌ (roadmap KB yo‘q) |
| 24 | `it_b2b_sales` | IT / B2B Sales | Business & Sales | `entry` → Boshlash uchun | 4 | active | `user_empathy`, `persistence`, `business_sense` | Empatiya · Qatiyat · Biznes hissi | ✅ / ❌ (roadmap KB yo‘q) |
| 25 | `customer_success` | Customer Success | Business & Sales | `entry` → Boshlash uchun | 4 | active | `user_empathy`, `persistence`, `attention_to_detail` | Empatiya · Qatiyat · Detallarga etibor | ✅ / ❌ (roadmap KB yo‘q) |
| 26 | `full_stack_development` (web id) | Full-Stack Development | — | — | — | **planned** | — | — | ❌ / ❌ (havola yo‘q) |
| 27 | `ai_automation` (web id) | AI Automation | — | — | — | **planned** | — | — | ❌ / ❌ (havola yo‘q) |
| 28 | `copywriting` (web id) | Copywriting | — | — | — | **planned** | — | — | ❌ / ❌ (havola yo‘q) |
| 29 | `content_creation` (web id) | Content Creation | — | — | — | **planned** | — | — | ❌ / ❌ (havola yo‘q) |
| 30 | `growth_marketing` (web id) | Growth Marketing | — | — | — | **planned** | — | — | ❌ / ❌ (havola yo‘q) |

### A2. Hamma 25 ta kasb uchun bir xil bo‘lgan ustunlar

| Ustun | Qiymat | Dalil |
|---|---|---|
| API source | `GET /api/v1/taxonomy/careers` (slug, title, cluster, months, pathway). Signallar API’da yo‘q — faqat snapshot’dan | `lib/careers.ts::loadCareerCatalog` |
| Snapshot fallback | Har doim bor; build API’ga bog‘liq emas. API xato / timeout / yaroqsiz javob → to‘liq snapshot | unit: 3 ta fallback testi |
| Salary | **Yo‘q** — snapshot’da ham, public modelda ham | unit: `salary|weight|prerequisites|boost` regex snapshot faylida yo‘q |
| Scoring weight public modelga chiqadimi | **Yo‘q.** Vazn faqat sync paytida 3 ta signalni tanlash uchun ishlatiladi (vazn ≥ 4, ko‘pi bilan 3). Natija faqat kalitlar ro‘yxati, **kanonik tartibda** — vaznlar tartibi ham ko‘rinmaydi | `lib/career-snapshot.ts::selectDisplaySignals`, unit |
| Public signal label | Backend `uz` nomi **so‘zma-so‘z** (`signalLabels`). Sayt o‘zi ibora yozmaydi | unit: 13 label aniq tenglik |
| Default tartib | Backend taxonomy tartibi (klaster → kasb). Deterministik, scoring yo‘q, “eng mos” tartib yo‘q | unit: tartib = snapshot tartibi |

### A3. PM so‘ragan tekshiruvlar

| Tekshiruv | Natija | Dalil |
|---|---|---|
| 5 ta planned kasb diagnostikaga yuborilmaydi | ✅ PASS | Planned kartochkada havola yo‘q; `buildTelegramUrl` planned slug’ni hech qachon yubormaydi; unit: planned ID’lar active ro‘yxatda yo‘q |
| Public katalog scoring vaznlarini ko‘rsatmaydi | ✅ PASS | Snapshot’da vazn yo‘q; signal tartibi kanonik |
| Salary public data modelga kirmaydi | ✅ PASS | Snapshot va `CatalogCareer` turida salary maydoni yo‘q |
| Signal nomlari backend bilan exact match | ✅ PASS (izoh bilan) | Label = backend `uz`. **Lekin backend’da 2 ta imlo xatosi bor**: “Qatiyat” (to‘g‘risi Qat’iyat), “Detallarga etibor” (to‘g‘risi e’tibor) — §A4, D2 |
| API va snapshot semantik jihatdan bir xil | ⚠️ QISMAN | `QADAM_BACKEND_DATA` testi: snapshot backend JSON manbasidan qayta qurilganda **aynan bir xil**. Production API’ni bu muhitdan tekshira olmayman (manzil yo‘q). Himoya: API’dagi kasb maydonlari snapshot’dan farq qilsa, o‘sha kasb signallari yashiriladi |
| Slug’lar barqaror | ✅ PASS | unit: 25 slug ro‘yxati qotirilgan (tartibi bilan); deep link payload’lari regex va ≤64 belgi |

Testlar (B3 branch): lint ✅, typecheck ✅, unit **198 passed + 1 skipped** (skipped — backend sync testi, CI’da manba yo‘q; lokal ishga tushirildi: 13/13), build ✅, E2E **69 passed**, 15 skip (oldingidek).

### A4. Topilmalar — qaror kerak

| # | Topilma | Ta’siri | Tavsiyam |
|---|---|---|---|
| D1 | **Bot faqat 5 ta kasbni tavsiya qila oladi** (`data_analytics`, `foundation_programming`, `frontend_development`, `smm_manager`, `ui_ux_design`). Qolgan 20 tasi ranking’dan `no_roadmap` sababi bilan chiqariladi (`engine/ranking.py::KB_CAREERS`) | Katalogdagi “O’zimga mosligini tekshirish” tugmasi 20 ta kasb uchun va’da beradi, lekin diagnostika bu kasblarni hech qachon ko‘rsatmaydi. Asoschining “SMM” natijasi ham shu 5 tadan biri | CTA matnini neytral qilish: “Diagnostikani boshlash”. Botda 25 kasbni ranking’ga kiritish — alohida backend qaror (roadmap shabloni `roadmap_templates_v1.json` bor) |
| D2 | Backend label’larida 2 imlo xatosi | Exact match bo‘lgani uchun saytda ham xato bilan chiqadi | Backend `signals_v1.json` da tuzatish (2 qator, bot repo). Sayt sync bilan avtomatik oladi |
| D3 | Exact label’lar ot (“Mantiqiy fikrlash”), “Kimga mos bo‘lishi mumkin?” savoliga grammatik javob emas | Kartochka matni | Sarlavha + bitta qator: “Quyidagi signallari kuchli odamlarga:” + label’lar (copy `content/careers.ts` da) |
| D4 | Default tartib = backend fayl tartibi | “Editorial” tartib alohida belgilanmagan | Hozircha shunday. Egasi boshqa tartib xohlasa — slug ro‘yxati sifatida content’da |
| D5 | Bir xil signal to‘plamlari: `backend_development` = `ai_engineering`; `data_analytics` = `business_analysis` | Kartochkalar o‘xshash | Backend ma’lumoti; o‘zgartirmaymiz |
| D6 | Kasb nomlari inglizcha, klaster nomlari aralash | Til izchilligi | Backend’da o‘zbekchalashtirish (B4 yoki alohida) |
| D7 | Mini App’da signal nomlari boshqacha (`Qat'iyat`, `Detallarga e'tibor`) | Sayt va Mini App har xil yozadi | D2 tuzatilgach, Mini App ham backend label’dan olsin |
| D8 | DB taxonomy `v1.0` nomi bilan seed qilingan, JSON esa `v2.2` | Production DB eski vaznlarda bo‘lishi mumkin — tekshira olmayman | Production `/api/v1/taxonomy` versiyasini egasi/PM tekshirsin |

---

## B. P0 final — merge gate

| Gate | Holat | Dalil |
|---|---|---|
| Testlar | ✅ **279 / 279** | `pytest qadam/tests` |
| P0 + bot PR #2 birga | ✅ **353 / 353**, konflikt yo‘q | vaqtinchalik worktree’da merge + test |
| Mini App build | ✅ | `tsc --noEmit` 0 xato, `next build` ✅ |
| Full-flow test | ✅ | bot → discovery → deep → career intelligence → roadmap → PDF; eski `main` ustida yiqiladi |
| Foizlar olib tashlangani | ✅ | `test_no_percentages.py` (backend, AI, PDF, bot, Mini App manba skaneri) |
| Formula invarianti | ✅ | `test_signal_invariants.py` (200 tasodifiy oqim + ekstremal + eski DB qiymatlari) |
| Readiness hardcode yo‘q | ✅ | 4 joy tuzatilgan; full-flow: `constraints == foydalanuvchi javobi` |
| `compare` dependency audit | ✅ | Ikkala repo, barcha branch’lar: 0 chaqiruvchi (faqat eski patch skripti `qadam-batch4.py` — endpoint’ning o‘zini yaratgan). Marshrut umuman ishlamagan: `/compare` → `get_career_detail` (isbotlangan). Endpoint o‘chirildi, guard test qo‘shildi. Production log’larini ko‘ra olmayman |
| PDF regression | ✅ | `test_pdf_snapshot.py` + `snapshots/pdf_report_v1.html`: foiz, maosh, “eng mos”, xom kasr yo‘q; dalil izohi (“Bu tavsiya, hukm emas — qarorni siz qilasiz.”); A NUQTA / B NUQTA / Birinchi 3 qadam saqlangan; haqiqiy PDF bayt |
| Maosh olib tashlangani | ✅ | Manbasida (roadmap engine), PDF (eski hisobotlar ham), report/roadmap/career detail javoblari, public `/api/v1/taxonomy`, Mini App (`IncomeSection` o‘chirildi). Roadmap matni ichidagi pul iboralari ham filtrlanadi (“Mahalliy bozor: 3-6 mln” topildi) |

### P0 final diff (`origin/main..claude/p0-diagnostic-fixes`)

38 fayl, +1445 / −543. 9 commit:

| Commit | Mazmun |
|---|---|
| `6358173` | Formula `Σ(v·w)/Σw`, `[0,10]` |
| `6ca16bd` | Readiness faqat foydalanuvchi javobidan |
| `f6ad6a3` | Backend/AI/PDF/bot — foiz va hukmsiz |
| `6807849` | Mini App — dalil darajasi va to‘siqlar |
| `dacb064` | Full-flow regression |
| `a9a429a` | Manbasiz maosh olib tashlandi |
| `58bbe42` | PDF snapshot + matndagi pul iboralari |
| `f253281` | `compare` endpoint o‘chirildi (audit bilan) |

Asosiy fayllar: `engine/signals.py`, `engine/fit.py`, `engine/readiness.py`, `engine/ranking.py`, `engine/levels.py` (yangi), `engine/public_output.py` (yangi), `services/context_service.py` (yangi), `ai/personalizer.py`, `pdf_report.py`, `api/v1/*` (deep, career intelligence, roadmap, taxonomy), `bot/handlers/start.py`, Mini App 9 fayl.

### Ma’lum xavflar

1. Formula o‘zgargani uchun bir xil javobga fit va tartib o‘zgaradi (kutilgan).
2. Eski DB yozuvlari: signal qiymati 10 dan katta bo‘lishi mumkin (fit cheklaydi, UI ko‘rsatmaydi). Eski saqlangan AI izohlarida foiz bo‘lishi mumkin — ular qayta yozilmaydi.
3. Roadmap KB’dagi boshqa raqamli da’volar (masalan, “10 murojaat → 1 mijoz”) data passport’siz — editorial review kerak, avtomatik filtrlanmadi.
4. V0 yo‘l (`/api/diagnostic/stage1|2`) hali ham buzilgan (`min_coverage` xatosi). Mini App asosiy yo‘li uni ishlatmaydi. PDF v1 ga ulash — keyingi ish (PM Q2).
5. Mini App uchun avtomatik UI testi yo‘q (build + manba skaneri + qo‘lda skrinshot).
6. Bot va Mini App bir vaqtda deploy qilinishi kerak.
