/**
 * Website → Telegram deep links. The ONLY place a bot link is built.
 * Spec: docs/telegram-deeplink-spec.md
 *
 * payload = "w1-" + sourceCode [ "-" + careerSlug ]
 * Telegram accepts [A-Za-z0-9_-], max 64 chars, in the `start` parameter.
 */

import { siteConfig } from "./config";

export const CTA_SOURCES = {
  hero: "hr",
  header: "hd",
  mobileNav: "mn",
  howItWorks: "hw",
  catalog: "ct",
  careerDetail: "cd",
  about: "ab",
  faq: "fq",
  finalCta: "fc",
  footer: "ft",
  article: "ar",
} as const;

export type CtaSource = keyof typeof CTA_SOURCES;

export const START_PAYLOAD_RE = /^w1-[a-z]{2,3}(-[a-z0-9_]{2,40})?$/;
export const TELEGRAM_START_MAX_LENGTH = 64;

const CAREER_SLUG_RE = /^[a-z0-9_]{2,40}$/;

/** Minimal career reference; the full Career model arrives in B3. */
export interface CareerRef {
  /** Backend taxonomy slug, e.g. "frontend_development". */
  slug: string;
  /** "planned" = taxonomy gap; never sent to the bot. */
  status: "active" | "planned";
}

export interface DeepLinkOptions {
  source: CtaSource;
  career?: CareerRef;
}

export function buildStartPayload({ source, career }: DeepLinkOptions): string {
  const base = `w1-${CTA_SOURCES[source]}`;
  if (!career || career.status !== "active" || !CAREER_SLUG_RE.test(career.slug)) {
    return base;
  }
  return `${base}-${career.slug}`;
}

export function buildTelegramUrl(
  options: DeepLinkOptions,
  botUrl: string = siteConfig.telegramBotUrl,
): string {
  const payload = buildStartPayload(options);
  // Defensive: never emit a payload Telegram would silently drop.
  if (!START_PAYLOAD_RE.test(payload) || payload.length > TELEGRAM_START_MAX_LENGTH) {
    return botUrl;
  }
  return `${botUrl}?start=${payload}`;
}
