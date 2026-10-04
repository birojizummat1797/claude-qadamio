# Deploy kuni yo‘riqnomasi — PR #4–#9 (Nemo uchun)

Sana: 2026-10-04 · Vaqt: ~20 daqiqa · Kerak: telefon yoki kompyuter, Render’ga kirish, Telegram.
Repo: `birojizummat1797/qadam-loyiha-deepseek`

Hammasi birga sinab ko‘rilgan: to‘qnashuv yo‘q, 396 test o‘tdi, Mini App typecheck toza.

| PR | Nima qiladi |
|---|---|
| #4 (PR #8 ichida) | Deploydan keyin bot "o‘lib qolmaydi" |
| #5 | O‘lchanmagan signal "zaif tomon" deb ko‘rsatilmaydi; "13 savol" |
| #6 | Server sozlamasi yo‘qolsa ham begona odam "sinov foydalanuvchisi" bo‘lib kira olmaydi |
| #7 | To‘lov: rad etish / tasdiqlash / qayta yuborish to‘g‘ri va tushunarli |
| #8 | Webhook secret: soxta "Tasdiqlash" bosishning oldi olinadi |
| #9 | Roadmap matnlari: hukm va va’da o‘rniga xolis tavsif |

---

## 1-qadam. Yangi WEBHOOK_SECRET qo‘yish (merge’dan OLDIN, majburiy)

Nega: eski kodda secret o‘rniga ochiq so‘z turardi. Yangi kod zaif secret bilan ishga tushmaydi — bu ataylab qilingan himoya.

1. Telefonda istalgan "parol generatori"ni och (masalan, brauzerda "password generator" deb qidir).
   - Uzunlik: **48**
   - Faqat **harflar va raqamlar** (belgilar — `!@#` — o‘chirilgan bo‘lsin)
2. Chiqqan parolni nusxala. **Hech kimga yuborma, menga ham, skrinshot ham qilma.**
3. Render → **qadam-bot-rppk** servisi → chap menyuda **Environment**.
4. `WEBHOOK_SECRET` qatorini top → **Edit** → eski qiymat o‘rniga yangisini qo‘y → **Save changes**.
   - Agar `WEBHOOK_SECRET` umuman yo‘q bo‘lsa → **Add Environment Variable**: Key = `WEBHOOK_SECRET`, Value = yangi parol.
5. Render o‘zi qayta deploy qiladi (2–4 daqiqa). Tugagach Telegram’da botga `/start` yoz.
   - ✅ Javob keldi → 2-qadamga o‘t.
   - ❌ Javob kelmadi → menga yoz, boshqa hech narsa qilma.

## 2-qadam. "Tayyorman" deb menga yoz

Men PR’larni shu tartibda merge qilaman: **#8 → #5 → #6 → #7 → #9**. Render va Vercel o‘zlari deploy qiladi (~5 daqiqa).

## 3-qadam. Botni bir marta Restart qilish

Nega: eski bot versiyasi oxirgi marta o‘chayotganda webhook’ni o‘chirib ketishi mumkin (bu oxirgi marta — #4 shuni tuzatadi).

1. Render → **qadam-bot-rppk** → deploy **Live** bo‘lganini kut.
2. Yuqori o‘ngda **Manual Deploy** yonidagi menyu → **Restart service**.
3. 1–2 daqiqadan keyin botga `/start` yoz → javob kelishi kerak.

## 4-qadam. Telefonda tekshirish (5 daqiqa)

| # | Nima qilasan | Kutilgan natija |
|---|---|---|
| 1 | `/start` | Salomlashuv keladi |
| 2 | Mini App bosh sahifasi | "13 savol" yozuvi |
| 3 | Premium sahifasi | "yoki 150 Stars" va "5-10 daqiqada" yozuvlari **yo‘q** |
| 4 | Ikkinchi akkaunt yoki do‘stdan: kichik skrinshot yuborish | Admin chatga rasm + 2 tugma keladi |
| 5 | Admin: **❌ Rad etish** | Foydalanuvchiga "To‘lov tasdiqlanmadi" + "Skrinshotni qayta yuborish" tugmasi |
| 6 | Foydalanuvchi premium sahifasini ochadi | "Oldingi to‘lov tasdiqlanmadi" + qayta yuborish tugmasi |
| 7 | Qayta yuborish → admin **✅ Tasdiqlash** | "To‘lovingiz tasdiqlandi" + "Chuqur tahlilni boshlash" |
| 8 | Admin yana o‘sha tugmani bossa (agar ko‘rinsa) | "allaqachon tasdiqlangan" — ikkinchi marta hech narsa berilmaydi |
| 9 | Roadmap sahifasi | "Bu yo‘nalish haqida"; "Sizning …ingiz muvaffaqiyat keltiradi" yozuvi **yo‘q** |

Natijani menga yoz yoki skrinshot yubor (karta raqami ko‘rinmasin).

## Biror narsa noto‘g‘ri bo‘lsa

- Bot javob bermayapti → Render → qadam-bot-rppk → **Logs** → oxirgi 20 qatorni menga yubor (`BOT_TOKEN` yoki parol ko‘rinsa, o‘sha qismini o‘chirib yubor).
- `Bot not started: WEBHOOK_SECRET ...` yozuvi → 1-qadam bajarilmagan yoki parol 32 belgidan qisqa.
- Qaytarish (rollback): Render → servis → **Events** → oldingi muvaffaqiyatli deploy → **Rollback**. Vercel’da: Deployments → oldingisi → **Promote to Production**.

## Eslatma

- Secret’ni almashtirish foydalanuvchilarga ko‘rinmaydi va hech qanday ma’lumot yo‘qolmaydi.
- Yangi secret faqat Render’da turadi. Uni hech qayerga yozma, kodga ham qo‘yilmaydi.
