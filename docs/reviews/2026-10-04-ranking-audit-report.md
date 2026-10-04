# PM uchun acceptance report — ranking audit (Variant 2), 2026-10-04

**Rejim:** production DB, READ-ONLY (`default_transaction_read_only=on`; skript `QADAM_DB_READ_ONLY=1`siz ishlamaydi). Hech qanday write / migration / apply yo‘q. `--apply` bajarilmadi.
**Usul:** har bir yakunlangan sessiya uchun production’dagi aynan o‘sha kod yo‘llari bilan reyting ikki marta qurildi — saqlangan (eski formula) qiymatlar bilan va `--apply` saqlaydigan (yangi formula) qiymatlar bilan. Taxonomy, sharoit (constraints) va reyting kodi bir xil; farq faqat signal qiymatlarida.
**Reytingda qatnashadigan kasblar:** yo‘l xaritasi tayyor 5 ta (Top-5 = to‘liq tartib).

## 1. Natija — jadval

| Yuza (production’da qayerda ko‘rinadi) | Sessiya | O‘zgarmagan | Tartib o‘zgargan | Top-1 o‘zgargan | Maks. siljish |
|---|---|---|---|---|---|
| Career Intelligence (discovery signallari) | 10 | 4 | 6 | **2** | 2 pozitsiya |
| Chuqur tahlil natijasi / PDF (merge) | 6 | 3 | 3 | **0** | 3 pozitsiya |
| Roadmap (disc + deep) | 6 | 3 | 3 | **0** | 2 pozitsiya |

**Boshqa deterministik output — hammasi o‘zgarmagan (0):**
- evidence level / context status yorliqlari: 0
- excluded (no-match, insufficient coverage): 0
- umumiy confidence: 0
- bo‘sh natijaga aylangan / bo‘shdan chiqqan: 0
- missing signals (har kasb uchun): 0

**`unmeasured ≠ weak` invariant:** 16 ta signal to‘plami tekshirildi — **0 buzilish**. O‘lchangan signallar to‘plami o‘zgarmaydi; "rivojlantirish mumkin" ro‘yxatida o‘lchanmagan signal yo‘q.

## 2. Kasblar bo‘yicha siljish (barcha sessiyalar bo‘yicha)

| Kasb | Career Intelligence ↑/↓ | Deep natija ↑/↓ | Roadmap ↑/↓ |
|---|---|---|---|
| Data Analytics | 3 / 0 | 3 / 0 | 3 / 0 |
| Frontend Development | 3 / 1 | 0 / 3 | 0 / 3 |
| UI/UX Design | 0 / 4 | 0 / 3 | 0 / 3 |
| Foundation Programming | 0 / 3 | — | — |
| SMM Manager | 1 / 1 | — | — |

## 3. O‘zgargan sessiyalar — oldingi → yangi Top-5

Career Intelligence:
- **D1:** smm, ui_ux, frontend, foundation, data → smm, **frontend**, ui_ux, **data**, foundation
- **D2:** smm, ui_ux, frontend, foundation, data → smm, ui_ux, frontend, **data**, foundation
- **D3 (Top-1):** ui_ux, smm, frontend, foundation, data → **frontend**, ui_ux, smm, foundation, data
- **D5:** foundation, ui_ux, smm, frontend, data → foundation, **frontend**, smm, ui_ux, data
- **D6:** smm, ui_ux, frontend, foundation, data → smm, ui_ux, **data**, frontend, foundation
- **D7 (Top-1):** ui_ux, smm, frontend, foundation, data → **smm**, ui_ux, frontend, foundation, data

Chuqur tahlil natijasi (P1, P2, P3 — Top-1 hammasida SMM, o‘zgarmagan):
- **P1:** smm, ui_ux, frontend, foundation, data → smm, **data**, ui_ux, foundation, frontend
- **P2, P3:** smm, ui_ux, frontend, data, foundation → smm, **data**, ui_ux, frontend, foundation
- Roadmap’da P1–P3 bir xil yo‘nalish: data ↑2, ui_ux ↓1, frontend ↓1.

(D4 — tartib o‘zgarmagan, faqat dastlabki natijadagi signal tartibi o‘zgargan.)

## 4. Talqin: o‘zgarish kutilganmi yoki regressiyami?

**Kutilgan — eski formuladagi muntazam (javobga bog‘liq bo‘lmagan) bias olib tashlanmoqda.**

Eski formula `o‘rtacha(v·w)` har bir signalni o‘sha signalni o‘lchaydigan savollar vazniga ko‘paytirib yuborardi. Natijada kasbning bahosi foydalanuvchi javobidan tashqari, **savollar vaznlari dizayniga** ham bog‘liq bo‘lib qolgan. Har bir kasb uchun bu "eski/yangi koeffitsient" (signal vaznlari bo‘yicha o‘rtacha):

| Kasb | Discovery | Deep | Eski formula bu kasbni… |
|---|---|---|---|
| Data Analytics | **0.76** | **0.73** | eng ko‘p pasaytirgan (attention_to_detail vazni 0.5/0.4, business_sense 0.82/0.53) |
| Foundation Programming | 0.87 | 0.89 | o‘rtacha |
| Frontend Development | 0.87 | 0.91 | o‘rtacha |
| UI/UX Design | 0.88 | 0.93 | kam pasaytirgan (creative_design 1.1, user_empathy 1.0–1.25) |
| SMM Manager | **0.93** | **0.94** | eng kam pasaytirgan |

Ya’ni eski formulada Data Analytics bir xil javoblarda ham sun’iy ravishda pastda, SMM va UI/UX esa nisbatan yuqorida edi. Audit aynan shuni ko‘rsatdi: Data Analytics faqat ko‘tariladi (9/9), UI/UX faqat tushadi (10/10). Bu tasodifiy shovqin emas, aynan bias tuzatilishining izi. (Eski saqlangan natijalarda Data Analytics 10 ta sessiyaning 6 tasida oxirgi o‘rinda edi.)

Qo‘shimcha dalil: eski qiymatlar bo‘yicha dastlabki natijada 10 ta sessiyaning 6 tasida "rivojlantirish mumkin" ro‘yxati sun’iy ravishda to‘lgan (masalan, "Mantiqiy fikrlash, Vizual mantiq, Tahliliy fikrlash"); yangi qiymatlarda ularning ko‘pchiligi bo‘sh. Bu ham eski formula foydalanuvchini asossiz ravishda "past" ko‘rsatganini tasdiqlaydi. (Dastlabki natija saqlanmaydi — apply uni o‘zgartirmaydi; bu faqat eski formula zararini ko‘rsatuvchi dalil.)

## 5. Xavflar (ochiq aytamiz)

- **Top-1 2 ta sessiyada o‘zgaradi** (Career Intelligence: UI/UX → Frontend; UI/UX → SMM). Bu foydalanuvchilar Mini App’da eski natijani qayta ochsa, boshqa birinchi yo‘nalishni ko‘radi. Yuborilgan PDF’lar o‘zgarmaydi.
- **Hajm juda kichik:** 10 + 6 sessiya. Takrorlanuvchi bir xil Top-5 naqshlari (D1/D2/D6; P1–P3) ularning bir qismi bir xil odamning sinov sessiyalari ekanini ko‘rsatadi (taxmin — ID’lar chiqarilmagan).
- Chuqur tahlilda Top-1 hech qayerda o‘zgarmaydi.

## 6. Acceptance xulosasi

| Mezon | Holat |
|---|---|
| Read-only, write yo‘q | ✅ |
| Evidence/context/excluded/confidence o‘zgarishi | ✅ 0 |
| Bo‘sh natija yoki no-match holati o‘zgarishi | ✅ 0 |
| `unmeasured ≠ weak` | ✅ 0 buzilish |
| Siljishlar mantiqan tushuntiriladimi | ✅ ha — eski formula bias’i (koeffitsientlar jadvali) |
| Xavfli/regressiv o‘zgarish | ❌ topilmadi |

**Tavsiya:** `--apply` qilish ketma-ketligi bilan: **backup → `--apply` → qayta dry run (`sessions_changed: 0`) → ranking audit qayta (old = new)**.
Apply GitHub Actions orqali bo‘lsa, alohida (read-only bo‘lmagan) workflow kerak; u faqat yozma tasdig‘ingizdan keyin yoziladi va qo‘lda, bir martalik ishga tushiriladi.

Qaror sizniki.
