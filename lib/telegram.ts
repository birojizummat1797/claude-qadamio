/**
 * Website → Telegram deep links. The ONLY place a bot link is built.
 * Spec: docs/telegram-deeplink-spec.md
 *
 * v1: "w1-" + sourceCode [ "-" + careerSlug ]
 * v2: "w2-" + sourceCode + "-" + stateCode [ "-" + careerSlug ]   (visitor situation)
 * v1 is emitted whenever there is no state, so existing links never change.
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
  problems: "pq",
} as const;

export type CtaSource = keyof typeof CTA_SOURCES;

/** Visitor situation (homepage hero cards) → spec v2 state code. Mirrors backend/entry_context.py. */
export const ENTRY_STATES = {
  start: "bs",
  switch: "al",
  grow: "os",
} as const;

export type EntryState = keyof typeof ENTRY_STATES;

export const START_PAYLOAD_RE = /^(?:w1-[a-z]{2,3}|w2-[a-z]{2,3}-(?:bs|al|os))(-[a-z0-9_]{2,40})?$/;
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
  /** Visitor situation; switches the payload to spec v2. */
  state?: EntryState;
}

export function buildStartPayload({ source, career, state }: DeepLinkOptions): string {
  const base = state && state in ENTRY_STATES
    ? `w2-${CTA_SOURCES[source]}-${ENTRY_STATES[state]}`
    : `w1-${CTA_SOURCES[source]}`;
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
