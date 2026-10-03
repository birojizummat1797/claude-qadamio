/**
 * Locale scaffolding. Only Uzbek is implemented in Phase 1; ru/en are
 * reserved so content modules and routes can grow without a rewrite.
 */

export const LOCALES = ["uz", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "uz";
export const ENABLED_LOCALES: readonly Locale[] = ["uz"];

export const OG_LOCALE: Record<Locale, string> = {
  uz: "uz_UZ",
  ru: "ru_RU",
  en: "en_US",
};
