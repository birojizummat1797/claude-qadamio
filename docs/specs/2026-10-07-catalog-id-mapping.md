# 9×25 katalog → texnik ID va yo‘l xaritasi holati (2026-10-07)

Holat: **TAKLIF** — 4-bosqichda (kodga o‘tkazish) Founder tasdiqlaydi.
Manbalar: `docs/decisions/2026-10-05-catalog-9x25.md`; production taksonomiyasi (`qadam-loyiha-deepseek` main, `taxonomy_v1.json`); `roadmap_kb_v2.json`; `docs/specs/roadmaps-v3/`.

Tuzatish: 9×25 katalogda roadmap’i bor kasblar 4 ta (Frontend, Data analitik, UI/UX, SMM). Demak yangi yo‘l xaritasi **21 ta** kerak (avval "20" deb yozilgan edi).

| Katalog | Kasb | ID (taklif) | Hozirgi taksonomiyada | Yo‘l xaritasi |
|---|---|---|---|---|
| Dasturlash | Frontend dasturchi | `frontend_development` | bor | v2 (mavjud) |
| | Backend dasturchi | `backend_development` | bor | v3 qoralama |
| | Mobil dasturchi | `mobile_development` | bor | v3 qoralama |
| | QA / test | `qa_automation` | bor (infra_security klasterida) | v3 qoralama |
| Ma’lumotlar va AI | Data analitik | `data_analytics` | bor | v2 (mavjud) |
| | AI va Data Science | `data_science` | bor (+ `ai_engineering` alohida) | v3 qoralama |
| | Ma’lumotlar bazasi mutaxassisi | `database_specialist` | **yangi** | v3 qoralama |
| Tizimlar va xavfsizlik | Tizim va tarmoq ma’muri | `system_network_admin` | **yangi** | v3 qoralama |
| | DevOps / Cloud | `devops_cloud` | bor | v3 qoralama |
| | Kiberxavfsizlik | `cybersecurity` | bor | v3 qoralama |
| Raqamli dizayn | UI/UX dizayner | `ui_ux_design` | bor | v2 (mavjud) |
| | Grafik dizayner | `graphic_design` | bor | v3 qoralama |
| Raqamli marketing | SMM menejer | `smm_manager` | bor | v2 (mavjud) |
| | Target marketolog | `performance_marketing` | bor | v3 qoralama |
| | SEO mutaxassisi | `seo` | bor | v3 qoralama |
| Kontent va media | Video va motion | `video_motion` | **yangi** (`video_content` + `motion_design` birlashadi) | v3 qoralama |
| | Kontent va kopirayting | `content_copywriting` | **yangi** (`content_marketing` o‘rniga) | v3 qoralama |
| Mahsulot va loyiha | Product menejer | `product_management` | bor | v3 qoralama |
| | Loyiha menejeri | `project_management` | bor | v3 qoralama |
| | Biznes-analitik | `business_analysis` | bor | v3 qoralama |
| Sotuv va mijozlar | Sotuv menejeri | `sales_manager` | **yangi** (`it_b2b_sales` o‘rniga) | v3 qoralama |
| | Customer Success | `customer_success` | bor | v3 qoralama |
| Moliya va raqamli ofis | Buxgalter | `accountant` | **yangi** | v3 qoralama |
| | Fintech mutaxassisi | `fintech_specialist` | **yangi** | v3 qoralama |
| | Excel / Sheets | `spreadsheet_specialist` | **yangi** | v3 qoralama |

Katalogdan chiqadigan eski ID’lar (Founder qarori 2026-10-05 bo‘yicha): `foundation_programming` (Dasturlash katalogining boshlang‘ich bosqichi sifatida saqlanadi), `product_design`, `ai_engineering`, `motion_design`, `video_content`, `content_marketing`, `brand_strategy` (2-bosqichga), `it_b2b_sales`. Eski natijalar buzilmasligi uchun ularni o‘chirish emas, "katalogdan tashqari" deb belgilash taklif qilinadi — 4-bosqichda hal qilinadi.

**Klaster ID taklifi:** yangi 9 katalog uchun `software`, `data_ai`, `infra_security`, `design_creative`, `digital_marketing`, `content_media`, `product_project`, `business_sales`, `finance_office` (yangi). `qa_automation` Dasturlash katalogiga ko‘chadi.
