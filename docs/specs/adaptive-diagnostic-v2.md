# Moslashuvchan diagnostika v2 — spetsifikatsiya (qoralama)

Holat: **qoralama, tasdiqlanmagan.** Bu bot va backend ishi (`qadam-loyiha-deepseek`), saytniki emas. Kod yozishdan oldin egasi va PM qarori kerak.
Muallif: Claude Code, asoschi topshirig‘i bilan (2026-10-03).
Bog‘liq hujjatlar: `docs/telegram-deeplink-spec.md` (holat kodlari), `docs/numbers-policy.md`, `docs/backlog.md` (BL-9, BL-10).

---

## 0. Asoschi qarorlari (2026-10-03)

| # | Qaror |
|---|---|
| A1 | Har bir keyingi savol oldingi javobga qarab tanlanishi kerak (moslashuvchan oqim) |
| A2 | Savollar foydalanuvchi holatiga mos bo‘ladi: Boshlayapman / Almashtiraman / O‘smoqchiman |
| A3 | **Eng kichik yosh — 16** (10-sinf o‘quvchilari ham qamrab olinadi). 16 dan kichikka diagnostika odob bilan to‘xtatiladi |
| A4 | **Yuqori yosh chegarasi — 35** (qaror). Chegaradan kattalar to‘xtatilmaydi, ogohlantirilib davom etadi. Keyinroq 40 gacha kengaytirish ko‘rib chiqilishi mumkin — shuning uchun qiymat faqat konfiguratsiyada (`AGE_MAX`) |
| A5 | Imkoniyat cheklovlari (masalan, noutbuk yo‘q) hisobga olinadi. Foydalanuvchi to‘xtatib, keyin shu joydan davom ettira oladi |

---

## 1. Hozirgi holat (kod asosida, aniq)

| Narsa | Hozir |
|---|---|
| Savollar tartibi | Qat’iy ketma-ket: keyingi = oldingi + 1 (`services/discovery_service.py::get_next_question`). Tarmoqlanish yo‘q |
| Savollar soni | Discovery: 13 ta. Chuqur diagnostika: 18 ta (9 o‘lchov × 2) |
| Yosh | So‘ralmaydi. Yosh bo‘yicha cheklov yo‘q |
| Holat (start/switch/grow) | Saytdan kelsa `meta.entry_context`ga saqlanadi (bot PR #2), lekin savollarga ta’sir qilmaydi |
| 1-savol | “Hozir hayotingizning qaysi bosqichidasiz?” — signalga ta’sir qilmaydi (`signals: {}`) |
| Qurilma (Q12), vaqt (Q11), ingliz tili (Q13) | Natijada `readiness` ko‘paytuvchilariga ta’sir qiladi (`engine/readiness.py`). Oqim davomida hech qanday reaksiya yo‘q |
| Moliya | Faqat chuqur diagnostikada: DD_Q13 “Hozir o‘rganish uchun jiddiy moliyaviy cheklovim bor” (1–5) |
| To‘xtatib davom ettirish | Texnik asosi bor: sessiya `current_q_index`ni saqlaydi, `GET /discovery/{id}` joriy savolni qaytaradi. `paused` holati va foydalanuvchiga “davom ettirish” oqimi yo‘q |
| Versiyalash | `DiscoverySession.question_version` maydoni bor — v1 va v2 parallel ishlashi mumkin |
| Kamchilik | `submit_answer` `answer_id` savolga tegishli ekanini tekshirmaydi (faqat `question_id` va 1–5 qiymatni). v2 da tuzatiladi |

---

## 2. Tamoyillar (o‘zgarmaydi)

1. **Signal savollari hamma uchun bir xil.** Fikrlash, qiziqish, qobiliyat savollari tarmoqlanmaydi. Aks holda turli odamlar turli o‘lchov bilan baholanadi va natijalar adolatsiz bo‘ladi.
2. **Tarmoqlanish faqat vaziyat savollarida.** Hozirgi ish, maqsad, imkoniyat. Bu savollarda `signals: {}` — ballga ta’sir qilmaydi, kontekst sifatida saqlanadi.
3. **Qoidalar deterministik.** Keyingi savolni AI emas, oldindan yozilgan qoida tanlaydi. Har bir yo‘l test bilan qamraladi.
4. **Boshi berk ko‘cha yo‘q.** Faqat bitta qattiq to‘xtash bor — yosh < 16. Qolgan cheklovlar ogohlantiradi va tanlov beradi.
5. **Qarorni foydalanuvchi qiladi.** “Davom etasizmi yoki keyinroq?” — har doim ikkala tugma.
6. **Ma’lumotni minimal yig‘ish.** Yosh oralig‘i so‘raladi, tug‘ilgan sana emas. Daromad miqdori so‘ralmaydi.
7. **Xotirjam ohang (Design DNA: Calm).** Qo‘rqitish, shoshiltirish, ayblash yo‘q. “Sizda … yo‘q” emas, “Hozircha … ekan”.
8. **Uzunlik chegarasi.** Bir yo‘lda ko‘pi bilan 20 ta savol (maqsad — 16, Q9). Hisob (§4): Boshlayapman 18, Almashtiraman 17–19, O‘smoqchiman 18 — hozirgi 13 tadan ~1,4 baravar uzun. Bot matnidagi “3 daqiqa — 13 savol” yangilanishi kerak. Qisqartirish varianti — Q9.

---

## 3. Oqim

```
[S0] Kirish matni (bot)
   │
[G1] Yosh oralig‘i ──── 16 dan kichik ──► [STOP-AGE] odobli to‘xtash
   │                └── chegaradan katta ─► [WARN-AGE] ogohlantirish → Davom / Chiqish
   ▼
[H1] Holat (saytdan kelgan bo‘lsa: tasdiqlash)
   │
   ├── Boshlayapman ──► [B] blok (3 savol)
   ├── Almashtiraman ─► [A] blok (3–4 savol)
   └── O‘smoqchiman ──► [O] blok (3 savol)
   ▼
[C] Yadro: signal savollari (9 ta, hamma uchun bir xil)
   ▼
[R] Imkoniyatlar: vaqt → qurilma ─► [CP-DEVICE] nazorat nuqtasi
                              → ingliz tili → o‘qish yo‘li (pul)
   ▼
[END] Yakun → natija (readiness bilan)
```

Har qanday nuqtada: **“Keyinroq davom ettiraman”** → `paused` → qaytganda shu savoldan davom (§6).

---

## 4. Savollar banki (qoralama matnlar, metodika review kerak)

`v2` ID formati: `D2_<blok>_<n>`. Mavjud v1 savollar qayta ishlatilsa, eski ID `source` maydonida saqlanadi.

### G1 — Yosh (darvoza)

**D2_G_01. Yoshingiz nechida?**

| Javob | Harakat |
|---|---|
| 15 yoki kichik | STOP-AGE |
| 16–17 | davom, `age_band=16_17` (maktab/litsey kontekst savollari) |
| 18–22 | davom |
| 23–27 | davom |
| 28–{MAX} | davom |
| {MAX+1} va katta | WARN-AGE |

`{MAX}` = konfiguratsiyadagi yuqori chegara (33 yoki 35, Q1). Oraliqlar ham konfiguratsiyadan olinadi.

### H1 — Holat

**D2_H_01. Hozir qaysi holatdasiz?** Boshlayapman · Almashtiraman · O‘smoqchiman

- Saytdan holat bilan kelgan bo‘lsa (`entry_context.state`): “Saytda «Boshlayapman»ni tanlagan edingiz. Shundaymi?” → Ha / Boshqasini tanlayman. Saytdagi tanlov faqat taklif, majburiy emas.
- `age_band=16_17` bo‘lsa ham uchala variant ko‘rinadi (16 yoshli ham ishlayotgan bo‘lishi mumkin). Tanlovni cheklamaymiz.
- v1 dagi DISC_Q01 (“hayot bosqichi”) shu savol bilan almashadi.

### B — Boshlayapman

| ID | Savol | Variantlar | Ko‘rinish sharti |
|---|---|---|---|
| D2_B_01 | Hozir nima bilan bandsiz? | Maktab (10–11-sinf) · Litsey/kollej · Bitirdim, o‘qimayapman · Talaba · Ishlayapman (boshqa sohada) | — |
| D2_B_02 | Oliy ta’limga kirishni rejalashtiryapsizmi? | Ha, aniq · Ehtimol · Yo‘q · Allaqachon talabaman | B_01 = maktab, litsey yoki bitirgan |
| D2_B_03 | Qaysi fanlar sizga yoqadi? (2 tagacha) | Matematika · Informatika · Tillar · Adabiyot · San’at/chizmachilik · Tarix/ijtimoiy fanlar · Biologiya/kimyo | — |

### A — Almashtiraman

| ID | Savol | Variantlar | Shart |
|---|---|---|---|
| D2_A_01 | Hozir qaysi sohada ishlaysiz? | Savdo/xizmat · Ta’lim · Ishlab chiqarish · Moliya/buxgalteriya · Tibbiyot · IT · Marketing/media · Boshqa · Hozir ishlamayapman | — |
| D2_A_02 | Almashtirishga nima undayapti? (2 tagacha) | Daromad · Qiziqish yo‘qolgan · O‘sish yo‘q · Ish jadvali · Soha qisqaryapti · Boshqa | A_01 ≠ ishlamayapman |
| D2_A_03 | Qachongacha yangi sohaga o‘tishingiz kerak? | 6 oy ichida · 6–12 oy · 1 yildan ko‘proq · Shoshilmayman | — |
| D2_A_04 | O‘qish paytida hozirgi ishni davom ettirasizmi? | Ha · Qisman · Yo‘q, to‘liq o‘qiyman | A_01 ≠ ishlamayapman |

- A_03 = “6 oy ichida” → natijada qisqa muddatli yo‘llar (`learning_months` kam) **izoh bilan** ko‘rsatiladi. Ranking o‘zgarmaydi, faqat tushuntirish (§7).
- v1 DD_Q14 (“Yaqin 6 oy ichida ishimni almashtirishim shart”) shu savol bilan qoplanadi.

### O — O‘smoqchiman

| ID | Savol | Variantlar | Shart |
|---|---|---|---|
| D2_O_01 | Hozirgi kasbingiz qaysi sohada? | Taxonomy klasterlari (8 ta) · Boshqa soha | — |
| D2_O_02 | Shu sohada qancha tajribangiz bor? | 1 yildan kam · 1–3 yil · 3–5 yil · 5+ yil | — |
| D2_O_03 | Qaysi tomonga o‘smoqchisiz? | Shu kasbda chuqurlashish · Yonma-yon kasbga o‘tish · Boshqaruv/jamoa rahbarligi | — |

- O_01 = taxonomy klasteri → natijada faqat **shu klaster** yo‘llari (asoschi qarori, BL-10). Boshqa soha tavsiya qilinmaydi.
- O_01 = “Boshqa soha” → “Hozirgi sohangiz Qadam metodikasida hali yo‘q. Natija umumiy bo‘ladi” degan halol izoh. Uydirma moslik ko‘rsatilmaydi.

### C — Yadro (hamma uchun bir xil)

v1 dagi signal savollari o‘zgarmaydi: DISC_Q02–DISC_Q10 (qiziqish, 6 ta likert, ish muhiti, qadriyat). Signal formulalari o‘zgarmaydi.
**Ochiq savol Q4:** DISC_Q04 (“mustaqil o‘rganish”) hozir `persistence`ga qo‘shiladi. O‘qish yo‘llari (BL-9) uchun alohida o‘lchov kerakmi? Kerak bo‘lsa, yangi signal faqat metodika review’dan keyin qo‘shiladi.

### R — Imkoniyatlar

| ID | Savol | Variantlar | Izoh |
|---|---|---|---|
| D2_R_01 | Kuniga o‘qishga qancha vaqt ajrata olasiz? | v1 DISC_Q11 | o‘zgarmaydi |
| D2_R_02 | Qaysi qurilmadan foydalanasiz? | v1 DISC_Q12 | javobdan keyin CP-DEVICE |
| D2_R_03 | Ingliz tilingiz? | v1 DISC_Q13 | o‘zgarmaydi |
| D2_R_04 | O‘qish uchun qaysi yo‘llarni ko‘rib chiqyapsiz? | Faqat bepul · Kichik xarajat bilan · Pullik kurs ham mumkin · Hali bilmayman | Daromad so‘ralmaydi. Javob o‘qish yo‘llari tavsiyasiga ketadi (BL-9) |

---

## 5. Nazorat nuqtalari va xabar matnlari

Matnlar — qoralama copy, egasi tasdiqlaydi. Ohang: “Siz”, xotirjam, ayblovsiz.

### STOP-AGE (16 dan kichik)
> Qadam’ga qiziqish bildirganingiz uchun rahmat!
> Hozircha diagnostikamiz 16 yosh va undan kattalar uchun mo‘ljallangan. Bu yoshda qiziqishlar hali tez o‘zgaradi, shuning uchun natija sizga to‘g‘ri yordam bermasligi mumkin.
> 16 yoshga to‘lganingizda sizni kutib qolamiz. Hozircha qiziqqan sohalaringiz haqida ko‘proq o‘qing va sinab ko‘ring — bu ham katta qadam.

- Tugmalar: yo‘q (faqat “Qadam haqida” havolasi).
- Saqlanadi: faqat `age_gate_stop` hodisasi (yosh oralig‘i, sana). **Javoblar, profil va sessiya yaratilmaydi.**
- Eslatma yuborilmaydi (bolalarga marketing xabari yo‘q).

### WARN-AGE (yuqori chegaradan katta)
> Metodikamiz asosan 16–{MAX} yoshdagilar tajribasiga moslangan. Natija siz uchun ham foydali bo‘lishi mumkin, lekin ba’zi tavsiyalar hayotiy tajribangizni to‘liq hisobga olmasligi mumkin.
> Davom etamizmi?

- Tugmalar: **Davom etish** · **Hozircha yo‘q**.
- Natija sahifasida bitta qator qoladi: “Metodika asosan 16–{MAX} yosh uchun moslangan.”

### CP-DEVICE (qurilma)

| R_02 javobi | Xabar | Tugmalar |
|---|---|---|
| Noutbuk / Ikkalasi | — | — |
| Faqat smartfon | “Ba’zi yo‘nalishlarni smartfonda boshlasa bo‘ladi, ba’zilariga noutbuk kerak bo‘ladi. Natijada qaysi yo‘l hozir ochiq ekanini alohida belgilaymiz.” | Davom etish |
| Hozircha yo‘q | “Hozircha qurilmangiz yo‘q ekan. Ko‘p zamonaviy kasblarni o‘rganish uchun noutbuk yoki kompyuter kerak bo‘ladi, ba’zilarini esa smartfonda boshlasa bo‘ladi. Diagnostikani davom ettiramizmi? Natijada nima hozir ochiq, nima qurilma hal bo‘lgandan keyin ochilishini ko‘rsatamiz. Xohlasangiz, hozir to‘xtatib, keyin shu joydan davom ettirishingiz mumkin.” | **Davom etish** · **Keyinroq davom ettiraman** |

- Natijada `readiness` blockeri (mavjud, `engine/readiness.py`) oddiy tilda ko‘rsatiladi: “Avval qurilma masalasini hal qiling, keyin shu yo‘l ochiladi.”
- Smartfon yetarli kasblar (taxonomy: `device: smartphone_ok` — SMM, Content Marketing, Video Content) “hozir boshlasa bo‘ladi” deb ajratiladi. Bu taxonomy faktiga tayanadi, yangi qoida emas.

### PAUSE (istalgan savolda)
> Mayli, shu joyda to‘xtatamiz. Javoblaringiz saqlandi.
> Qaytganingizda “Davom ettirish” tugmasini bosing — shu savoldan boshlaymiz.

---

## 6. Pauza va davom ettirish

| Qoida | Qiymat (taklif) |
|---|---|
| Sessiya holatlari | `active` · `paused` · `completed` · `abandoned` · `stopped_age` |
| Davom ettirish | Bot `/start` yoki “Davom ettirish” tugmasi → `paused` sessiya topiladi → joriy savol ko‘rsatiladi |
| Muddat | `paused` sessiya 30 kun saqlanadi. Keyin `abandoned`, qayta boshlash taklif qilinadi (Q5) |
| Eslatma | Faqat foydalanuvchi rozilik bersa, bitta eslatma (masalan, 7 kundan keyin). Spam yo‘q. 16–17 yoshlilarga eslatma yuborilmaydi (Q6) |
| Javobni o‘zgartirish | “Orqaga” bilan oldingi savolga qaytish mumkin. Tarmoq o‘zgarsa, endi ko‘rinmaydigan javoblar o‘chiriladi (§8.3) |

---

## 7. Natijaga ta’siri

| Kontekst | Natijada nima o‘zgaradi | Nima o‘zgarmaydi |
|---|---|---|
| Holat = O‘smoqchiman + klaster | Faqat shu klaster yo‘llari (BL-10) | Fit formulasi |
| Holat = Almashtiraman + “6 oy ichida” | Har bir yo‘l yonida “taxminan N oy” va qisqa muddatlilar uchun izoh | Tartib (ranking) |
| Holat = Boshlayapman + 16–17 | Oliy ta’lim yo‘li ham ko‘rsatiladi (BL-9) | Fit formulasi |
| Qurilma yo‘q | Blocker oddiy tilda, smartfon yo‘llari ajratiladi | Fit formulasi (readiness o‘zi hisoblaydi) |
| O‘qish yo‘li = Faqat bepul | Bepul yo‘llar birinchi ko‘rsatiladi (BL-9) | Fit formulasi |

Barcha raqamlar `docs/numbers-policy.md` qoidalariga bo‘ysunadi: foiz faqat kalibratsiyadan keyin.

---

## 8. Backend o‘zgarishlari (texnik)

### 8.1 Savol sxemasi v2
```json
{
  "id": "D2_A_02",
  "block": "switch",
  "type": "multi_choice",
  "max_choices": 2,
  "text": "Almashtirishga nima undayapti?",
  "show_if": {"all": [{"q": "D2_H_01", "in": ["switch"]}, {"q": "D2_A_01", "not_in": ["none"]}]},
  "signals": {},
  "context_key": "switch_reasons",
  "options": [{"id": "income", "label": "Daromad"}]
}
```
- `show_if` — faqat `all`/`any`, `in`/`not_in` operatorlari. Ixtiyoriy kod bajarilmaydi.
- `gate` — darvoza savollari uchun: `{"stop_if": [...], "warn_if": [...]}`.
- `checkpoint` — `CP-DEVICE` kabi nazorat nuqtasi ID’si.

### 8.2 Keyingi savol
`get_next_question(answers, bank)` — bankni tartib bilan aylanib chiqadi va `show_if` sharti bajarilgan, hali javob berilmagan **birinchi** savolni qaytaradi. Deterministik; holat faqat javoblardan tiklanadi (`current_q_index` ko‘rsatkich sifatida qoladi).

### 8.3 Javobni o‘zgartirish
Javob o‘zgarsa, `show_if` endi bajarilmaydigan savollarning javoblari o‘chiriladi. Shunda turli yo‘l javoblari aralashib ketmaydi.

### 8.4 API
- `POST /discovery/start` — `question_version="v2.0"`, `entry_context.state` → H1 tasdiqlash savoli.
- `POST /{id}/answers` — `answer_id` savolga tegishli ekani tekshiriladi (hozirgi kamchilik tuzatiladi); `gate` natijasi qaytariladi: `{"next_question", "checkpoint"?, "stopped"?}`.
- `POST /{id}/pause`, `POST /{id}/resume` — yangi.
- `GET /{id}` — `paused` holatini ham qaytaradi.
- v1 sessiyalar v1 bank bilan tugaydi (`question_version` bo‘yicha).

### 8.5 Mini App / bot UI
- `multi_choice` turi (hozir yo‘q).
- Checkpoint ekrani (xabar + 1–2 tugma).
- “Keyinroq davom ettiraman” va “Orqaga” tugmalari.
- Progress: “Savol 5 / taxminan 15” (tarmoq tufayli aniq son o‘zgaradi, shuning uchun “taxminan”).

### 8.6 Konfiguratsiya
`AGE_MIN=16`, `AGE_MAX=35`, yosh oraliqlari, `PAUSE_TTL_DAYS=30` — bitta config faylda; kodda raqam yozilmaydi.

---

## 9. Testlar

1. **Har bir yo‘l:** 3 holat × yosh oraliqlari × qurilma javoblari — avtomatik yaratilgan kombinatsiyalar; har birida savollar soni ≤ 20.
2. **Adolat testi:** har bir yo‘lda yadro (C) savollari to‘liq va bir xil tartibda.
3. **Darvoza:** “15 yoki kichik” → sessiya, javob, profil yaratilmaydi; faqat `age_gate_stop` hodisasi.
4. **WARN-AGE:** “Hozircha yo‘q” → sessiya `abandoned`; “Davom” → oqim davom etadi.
5. **CP-DEVICE:** “Keyinroq” → `paused`; `resume` → aynan keyingi savol.
6. **Javob o‘zgarishi:** holat o‘zgarsa, eski blok javoblari o‘chadi.
7. **Validatsiya:** begona `answer_id`, boshqa savolning varianti, `max_choices`dan oshish → 400.
8. **Signal regressiyasi:** bir xil yadro javoblari v1 va v2 da bir xil signal qiymatlarini beradi.
9. **v1 moslik:** eski sessiyalar v1 bank bilan yakunlanadi.
10. **Copy:** xabarlarda foiz, “kafolat”, ayblovchi so‘zlar yo‘q.

---

## 10. Bosqichlar (taklif)

| Bosqich | Ish | Hajm |
|---|---|---|
| V2.1 | Sxema + `show_if` dvigateli + yosh darvozasi + H1 + validatsiya tuzatishi | o‘rta |
| V2.2 | B/A/O bloklari + javob o‘zgarishi qoidasi | o‘rta |
| V2.3 | CP-DEVICE + pauza/davom ettirish + bot/Mini App UI | o‘rta |
| V2.4 | Natijaga ta’sir (§7) — BL-9, BL-10 bilan | katta |

Har bosqich alohida PR, testlar bilan, oldingi versiya buzilmaydi.

---

## 11. Ochiq savollar (egasi / PM)

| # | Savol | Tavsiyam |
|---|---|---|
| Q1 | Yuqori yosh chegarasi | **Hal qilindi: 35** (A4) |
| Q2 | 16–17 yoshlilar ma’lumoti: O‘zbekiston qonunchiligida voyaga yetmaganlar shaxsiy ma’lumoti uchun ota-ona roziligi talab qilinadimi? | **Yurist tekshirishi shart** — men aniq bilmayman. Javob kelguncha 16–17 uchun ma’lumot minimal, eslatma yo‘q |
| Q3 | Sayt va bot matnlarida auditoriya qanday yoziladi (“18–30” brief’da edi)? | Yangi chegara bo‘yicha yangilanadi; saytda hozir yosh raqami yo‘q |
| Q4 | “Mustaqil o‘rganish” alohida signal bo‘ladimi? | Metodika review’dan keyin (BL-11) |
| Q5 | Pauza muddati 30 kunmi? | Ha |
| Q6 | Eslatma xabari: umuman bo‘ladimi, rozilik qanday olinadi? | Faqat roziligi bilan, 18+ ga |
| Q7 | Blok savollari matni (§4) | Egasi va metodika mas’uli ko‘rib chiqadi |
| Q8 | Chuqur diagnostika (18 savol) ham tarmoqlanadimi? | Avval discovery v2, keyin chuqur diagnostika |
| Q9 | Diagnostika uzunligi | **Qayta ko‘rib chiqish kerak.** Egasi DISC_Q09–Q10 ni chuqur diagnostikaga ko‘chirishga rozi bo‘ldi, lekin tekshiruv ko‘rsatdiki, bu ikki savol signal o‘lchaydi: ularsiz bepul diagnostikada `innovation` va `attention_to_detail` **umuman o‘lchanmaydi** (`attention_to_detail` 18 ta kasbda bor, 16 tasida vazni 4–5). Oldingi tavsiyam (“bu savollar chuqur diagnostikada allaqachon bor”) signal xaritasini tekshirmasdan berilgan va xato edi. Yangi tavsiya: yadro 9 savol o‘zgarmaydi; tarmoq bloklari 2 savolgacha qisqartiriladi (B_03, A_04, O_03 olib tashlanadi), R_04 natijadan keyin so‘raladi → har yo‘lda 16–17 savol |

---

## 12. Tekshiruv: DISC_Q09–Q10 qaysi signallarni o‘lchaydi (2026-10-03)

| Signal | Bepul diagnostikada o‘lchaydigan savollar | Q09–Q10 olib tashlansa |
|---|---|---|
| `innovation` | Q09, Q10 | **o‘lchanmaydi** |
| `attention_to_detail` | Q10 (faqat “Barqarorlik” varianti, 0.5) | **o‘lchanmaydi** |
| `system_design` | Q08, Q09 | faqat Q08 |
| `user_empathy`, `business_sense`, `persistence` | Q02, Q07/Q04, Q09, Q10 | 2 ta savol qoladi |
| boshqalar | Q09–Q10 ga bog‘liq emas | o‘zgarmaydi |

Xulosa: Q09–Q10 ni ko‘chirish ballarni o‘zgartiradi (Fit/coverage), bu metodika o‘zgarishi. Shuning uchun yadro savollari tegilmaydi.
Alohida topilma (BL-11 ga): `attention_to_detail` bepul diagnostikada hozir ham juda kuchsiz o‘lchanadi — bitta variantning 0.5 hissasi. Holbuki bu signal 18 ta kasbda bor, 5 tasida eng og‘ir vazn (5) bilan.

---

## 13. Bot sinovidan keyingi qo‘shimchalar (2026-10-03)

To‘liq tafsilot: `docs/reviews/2026-10-03-bot-test-findings.md`.
- **“Boshqa (o‘zim yozaman)”** — vaziyat savollarida; signal savollarida “Bu yerda menga mosi yo‘q” (signal bermaydi). Erkin matn ballga ta’sir qilmaydi.
- **Ohang** — samimiy, qisqa, “qanchalik” shaklidagi savollar.
- **Shkala** — 5 nuqta, hammasi so‘z bilan, o‘rtada “Bilmayman”; 1–10 ga o‘tilmaydi.
