/**
 * Site configuration — the only place that reads environment variables.
 *
 * NEXT_PUBLIC_* values are inlined at build time only when referenced
 * literally as `process.env.NEXT_PUBLIC_X`, so `rawEnv` lists them by name.
 * Parsing is a pure function so it can be unit-tested.
 */

export const DEFAULT_TELEGRAM_BOT_URL = "https://t.me/kelajakkailkqadam_bot";
export const DEFAULT_SITE_URL = "https://qadam.io";

export type AnalyticsAdapterName = "none" | "console";

export interface SiteConfig {
  /** Canonical bot link, no query string, no trailing slash. */
  telegramBotUrl: string;
  /** Public origin, no trailing slash. */
  siteUrl: string;
  showPricing: boolean;
  analytics: AnalyticsAdapterName;
}

export interface RawEnv {
  NEXT_PUBLIC_TELEGRAM_BOT_URL?: string;
  NEXT_PUBLIC_SITE_URL?: string;
  NEXT_PUBLIC_SHOW_PRICING?: string;
  NEXT_PUBLIC_ANALYTICS?: string;
  NODE_ENV?: string;
}

// Telegram usernames: 5–32 chars, letters/digits/underscore, start with a letter.
const TELEGRAM_URL_RE = /^https:\/\/t\.me\/([A-Za-z][A-Za-z0-9_]{4,31})\/?$/;

export function parseTelegramBotUrl(value: string | undefined): string {
  const match = value?.trim().match(TELEGRAM_URL_RE);
  return match ? `https://t.me/${match[1]}` : DEFAULT_TELEGRAM_BOT_URL;
}

export function parseSiteUrl(value: string | undefined): string {
  if (!value?.trim()) return DEFAULT_SITE_URL;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.hostname !== "localhost" && url.hostname !== "127.0.0.1") {
      return DEFAULT_SITE_URL;
    }
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function parseConfig(env: RawEnv): SiteConfig {
  const analytics = env.NEXT_PUBLIC_ANALYTICS?.trim();
  return {
    telegramBotUrl: parseTelegramBotUrl(env.NEXT_PUBLIC_TELEGRAM_BOT_URL),
    siteUrl: parseSiteUrl(env.NEXT_PUBLIC_SITE_URL),
    showPricing: env.NEXT_PUBLIC_SHOW_PRICING?.trim() === "true",
    analytics:
      analytics === "console" || analytics === "none"
        ? analytics
        : env.NODE_ENV === "development"
          ? "console"
          : "none",
  };
}

const rawEnv: RawEnv = {
  NEXT_PUBLIC_TELEGRAM_BOT_URL: process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SHOW_PRICING: process.env.NEXT_PUBLIC_SHOW_PRICING,
  NEXT_PUBLIC_ANALYTICS: process.env.NEXT_PUBLIC_ANALYTICS,
  NODE_ENV: process.env.NODE_ENV,
};

export const siteConfig: SiteConfig = parseConfig(rawEnv);
