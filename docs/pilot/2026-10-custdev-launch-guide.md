# CustDev so‘rovnomasini ishga tushirish — qadamma-qadam (2026-10)

Kerak bo‘ladigan fayllar:
- `2026-10-custdev-bonus-telegraph.txt` — bonus matni (Telegraph uchun)
- `qadam-customer-survey-form.gs.txt` — formani yaratuvchi skript

Hammasi **kompyuterda**, ~15 daqiqa. Tartib muhim: **avval bonus, keyin forma.**

---

## 1-QADAM. Bonus sahifasini yaratish (Telegraph, ~5 daqiqa)
1. Brauzerda **telegra.ph** ni oching (ro‘yxatdan o‘tish kerak emas).
2. **Title** maydoniga: `Kasb tanlashdan oldin: o‘zingizga 10 savol + bozor bo‘yicha qisqa sharh`
3. **Your name** maydoniga: `Qadam.io`
4. `2026-10-custdev-bonus-telegraph.txt` faylini **Notepad**’da oching → 1-qatordan (sarlavha) **keyingi** hamma matnni nusxalab, Telegraph’dagi asosiy maydonga joylang.
5. Xohlasangiz: "I.", "II.", "III." qatorlarini belgilab, chiqqan menyudan **H** (sarlavha) ni bosing — chiroyliroq ko‘rinadi.
6. Yuqori o‘ngdagi **PUBLISH** ni bosing.
7. Brauzer manzil satridagi havolani nusxalang (masalan, `https://telegra.ph/Kasb-tanlashdan-oldin-10-07`). **Shu havola — bonus havolasi.**
8. ⚠️ Telegraph’da keyin tahrir qilish faqat **shu brauzerda** mumkin — sahifani yopmasdan oldin havolani saqlab qo‘ying.

## 2-QADAM. Havolani skriptga qo‘yish (~1 daqiqa)
1. `qadam-customer-survey-form.gs.txt` ni **Notepad**’da oching.
2. Shu qatorni toping:
   ```
   const BONUS_LINK = '';
   ```
3. Qo‘shtirnoqlar orasiga bonus havolasini qo‘ying:
   ```
   const BONUS_LINK = 'https://telegra.ph/Kasb-tanlashdan-oldin-10-07';
   ```
   (o‘zingizning havolangiz bilan; qo‘shtirnoqlar qolsin)
4. Saqlang (`Ctrl + S`).

## 3-QADAM. Formani yaratish (Apps Script, ~3 daqiqa)
1. **script.google.com** → **Новый проект / New project**.
2. Kod oynasidagi hamma narsani o‘chiring (`Ctrl + A`, `Delete`).
3. Notepad’dagi skriptni **to‘liq** nusxalang (`Ctrl + A`, `Ctrl + C`) va joylang (`Ctrl + V`).
4. Tekshiring: **1-qatorda** `QADAM-SURVEY BOSHI`, **oxirgi qatorda** `QADAM-SURVEY OXIRI` turibdi.
5. `Ctrl + S` (saqlash).
6. Yuqoridagi funksiyalar ro‘yxatidan **`createQadamSurvey`** ni tanlang → **▷ Выполнить**.
7. Ruxsat oynalari (birinchi marta): **Проверить разрешения** → akkaunt → **Дополнительные настройки** → **Перейти на страницу … (небезопасно)** → **Разрешить**.
8. Pastdagi **Журнал выполнения**da ikki havola chiqadi:
   - **Forma (tahrirlash)** — faqat siz uchun;
   - **Forma (qatnashchilar uchun havola)** — tarqatiladigan havola.

## 4-QADAM. Tekshirish (~5 daqiqa)
1. Tahrirlash havolasini oching → **Настройки → Ответы**:
   - "Собирать адреса электронной почты" — **o‘chiq**;
   - "Ограничить одним ответом" — **o‘chiq**.
2. 👁 **Предпросмотр** bilan 3 marta sinab ko‘ring:
   - **A:** 1-savolda "18 dan kichik" → darhol "Rahmat… 18 yoshdan kattalar uchun" chiqishi kerak.
   - **B:** 4-savolda "Yo‘q", 7-savolda "Umuman sarflamadim" → 4b va 7b savollari **chiqmasligi** kerak.
   - **C:** 4-savolda "Ha", 7-savolda "1 mln so‘mgacha" → 4b va 7b **chiqishi** kerak; oxirida bonus havolasi chiqishi va ochilishi kerak.
3. Kirish qismida 🎁 bonus e’loni borligini tekshiring.
4. ⚠️ Sinov javoblarini o‘chiring: **Ответы → ⋮ → Удалить все ответы**.
5. (Tavsiya) **Ответы → Связать с Таблицами** — zaxira nusxa.

## 5-QADAM. Tarqatish
- Qatnashchilar havolasini yuboring. Matn namunasi:
  > Assalomu alaykum! Yoshlar kasb tanlashda qanday qiyinchiliklarga duch kelishini o‘rganyapmiz. 5–7 daqiqalik so‘rovnoma, oxirida foydali bonus bor 🎁 (18+): [havola]
- Javoblar yig‘ilgach: **Ответы → ⋮ → Скачать ответы (.csv)** → Claude’ga yuboring.

## Muammo bo‘lsa
- Xato xabari chiqsa — xabar va skriptning **1-qatori** skrinshotini yuboring.
- Skriptni **qayta ishga tushirmang** — har safar yangi forma yaratiladi (eski javoblar o‘chmaydi, lekin havolalar ko‘payib ketadi).
