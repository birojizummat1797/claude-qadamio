/**
 * Privacy-respecting analytics abstraction.
 *
 * - Only the events below exist; props are limited to non-personal context.
 * - No provider is wired yet (D8). Adapters: "none" (default in production)
 *   and "console" (default in development).
 * - track() never throws and is a no-op on the server.
 */

import { siteConfig, type AnalyticsAdapterName } from "./config";

export const ANALYTICS_EVENTS = [
  "page_view",
  "hero_cta_click",
  "how_it_works_view",
  "career_category_view",
  "career_detail_view",
  "diagnostic_cta_click",
  "telegram_redirect",
  "pricing_view",
  "faq_expand",
  "content_view",
] as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[number];

export interface AnalyticsProps {
  /** Placement or page, e.g. "hero", "/yonalishlar". */
  source?: string;
  /** Public career slug. */
  slug?: string;
  /** Public cluster id. */
  cluster?: string;
  /** Public item id (FAQ question id, article slug). */
  item?: string;
}

export type AnalyticsAdapter = (event: AnalyticsEvent, props: AnalyticsProps) => void;

const ALLOWED_PROP_KEYS: readonly (keyof AnalyticsProps)[] = ["source", "slug", "cluster", "item"];
const MAX_PROP_LENGTH = 120;

/** Drops unknown keys and non-string or oversized values. */
export function sanitizeProps(props: unknown): AnalyticsProps {
  const out: AnalyticsProps = {};
  if (!props || typeof props !== "object") return out;
  for (const key of ALLOWED_PROP_KEYS) {
    const value = (props as Record<string, unknown>)[key];
    if (typeof value === "string" && value.length > 0 && value.length <= MAX_PROP_LENGTH) {
      out[key] = value;
    }
  }
  return out;
}

const adapters: Record<AnalyticsAdapterName, AnalyticsAdapter> = {
  none: () => {},
  console: (event, props) => {
    console.info("[analytics]", event, props);
  },
};

let activeAdapter: AnalyticsAdapter = adapters[siteConfig.analytics];

/** For tests and for wiring a real provider later. */
export function setAnalyticsAdapter(adapter: AnalyticsAdapter): void {
  activeAdapter = adapter;
}

export function track(event: AnalyticsEvent, props?: AnalyticsProps): void {
  if (typeof window === "undefined") return;
  if (!ANALYTICS_EVENTS.includes(event)) return;
  try {
    activeAdapter(event, sanitizeProps(props));
  } catch {
    // Analytics must never break the page.
  }
}
