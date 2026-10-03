/**
 * Career catalog copy (B3). Data comes from content/careers.snapshot.json;
 * this file holds only the words around it.
 * Spec: docs/reviews/2026-10-03-b3-proposal.md
 */

import type { PathwayType } from "@/lib/career-snapshot";

// Signal wording is NOT written here: the public label is the backend label
// verbatim (`signalLabels` in careers.snapshot.json, from signals_v1.json) —
// PM direction 2026-10-03 “signal nomlari backend bilan exact match”.

/** PM decision D1: backend pathway values are never shown by their technical name. */
export const pathwayLabels: Readonly<Record<PathwayType, string>> = {
  entry: "Boshlash uchun",
  role: "Kasb sifatida",
  advanced: "Keyingi bosqich",
};

/** Visitor situation in the catalog URL (`?holat=`), mirrors the homepage hero. */
export const catalogStates = {
  start: { param: "boshlayapman", label: "Boshlayapman" },
  switch: { param: "almashtiraman", label: "Almashtiraman" },
  grow: { param: "osmoqchiman", label: "O’smoqchiman" },
} as const;

export interface PlannedCareer {
  /** Website-only id. NOT a backend slug and never sent to the bot. */
  id: string;
  title: string;
  status: "planned";
}

/** In the brief, not yet in the backend taxonomy (audit §9.1). No cluster, months or signals are assumed. */
export const plannedCareers: readonly PlannedCareer[] = [
  { id: "full_stack_development", title: "Full-Stack Development", status: "planned" },
  { id: "ai_automation", title: "AI Automation", status: "planned" },
  { id: "copywriting", title: "Copywriting", status: "planned" },
  { id: "content_creation", title: "Content Creation", status: "planned" },
  { id: "growth_marketing", title: "Growth Marketing", status: "planned" },
];

export function formatLearningMonths(months: number): string {
  return `taxminan ${months} oy`;
}

export function formatResultCount(count: number): string {
  return `${count} ta yo’nalish`;
}

export const catalogCopy = {
  eyebrow: "Yo’nalishlar",
  title: "Qaysi yo’nalishlar bor?",
  intro:
    "Qadam metodikasidagi yo’nalishlar. Har birida kasb talablaridan olingan signallar bor. Qaysi biri sizga yaqinligini diagnostika ko’rsatadi.",
  allLabel: "Hammasi",
  stateLabel: "Hozir qaysi holatdasiz?",
  clusterLabel: "Soha",
  pathwayNote: "Yo’l turi kasbga qaysi bosqichdan kirilishini bildiradi, sizning darajangizni emas.",
  learningNote: "O’rganish muddati — Qadam taksonomiyasidagi taxminiy baho. Vaqt va tajribaga qarab o’zgaradi.",
  signalsTitle: "Kimga mos bo’lishi mumkin?",
  signalsLead: "Quyidagi signallari kuchli odamlarga:",
  signalsNote: "Bu ro’yxat kasb talablaridan olingan. Sizga baho emas.",
  ctaLabel: "O’zimga mosligini tekshirish",
  stateNotes: {
    start: "Boshlash uchun belgilangan yo’nalishlar.",
    switch:
      "Soha almashtirish uchun alohida belgi yo’q, shuning uchun barcha yo’nalishlar ko’rsatiladi. Qaysi biri sizga yaqinligini diagnostika ko’rsatadi.",
    grow: "O’sish yo’li hozirgi sohangiz ichida ko’rsatiladi.",
  },
  growClusterPrompt: "Hozirgi sohangiz qaysi?",
  otherClustersLabel: "Boshqa sohalarni ham ko’rish",
  emptyTitle: "Bu tanlovda yo’nalish yo’q.",
  resetLabel: "Filtrni tozalash",
  planned: {
    title: "Tayyorlanmoqda",
    badge: "Tayyorlanmoqda",
    note: "Bu yo’nalish Qadam metodikasiga hali qo’shilmagan.",
  },
} as const;
