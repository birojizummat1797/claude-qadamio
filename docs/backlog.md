# Backlog

| ID | Vazifa | Manba | Holat |
|---|---|---|---|
| BL-1 | **Qadam Brand Migration — Mini App.** Mini App’ni `#6366F1` indigo’dan Qadam brand system’ga ko‘chirish: palitra v1.1, Onest, Design DNA. Maqsad: WEB → BRAND SYSTEM → MINI APP bir xil vizual tilda. | PM, B2.3 review (R6) | Rejada, B2.3 merge blocker emas |
| BL-2 | **“Ishonch” sahifasi (/ishonch).** Tuzilmasi: `docs/ishonch-page-outline.md`. AI provider data flow va privacy/consent modeli tasdiqlangandan keyin B5 scope’ida ochiladi. **Hozir publish qilinmaydi.** | PM, D-3 / B2.3 review | Bloklangan: tasdiq kutilmoqda |
| BL-3 | Mini App UI’da `entry_state`dan foydalanish (masalan, holatga mos kirish matni). Ma’lumot sessiyada allaqachon saqlanadi. | P1 (spec v2) | G‘oya |
| BL-4 | Illyustratsiya tizimi (D-5, illustration-first). | PM, D-5 | Rejada |
| BL-5 | Logo review (alohida kichik review). | PM, B2.1 | Rejada |
| BL-6 | **Real device matrix before production release.** P3 covered 2 × Redmi 13 (Android 16) only. Before public launch: at least one older/low-end Android (e.g. Android 10–12, 2–3 GB RAM), one iPhone (Safari), one tablet; repeat `docs/qa/device-test-protocol.md`. | PM, B2.3 merge review | Release blocker (not a merge blocker) |
| BL-7 | **Backend public career projection.** `/api/v1/taxonomy/careers` ga vaznsiz `display_signals: string[]` qo‘shish; `GET /api/v1/taxonomy` dan signal vaznlari, prerequisites va maoshni public javobdan olib tashlash (audit §9.6). B3 vaqtincha sync skripti bilan ishlaydi. | B3 proposal Q3 | Taklif, alohida backend PR |
| BL-8 | **Raqamlar siyosati (N0–N3).** `docs/numbers-policy.md`: raqam pasporti, bozor ma’lumoti manbasi, botda coverage faktlari, fit kalibratsiyasi. | Asoschi, 2026-10-03 | Taklif, egasi qarori kutilmoqda |
