/**
 * Shared content shapes. Content modules satisfy these types;
 * components receive them as props.
 */

export interface SectionCopy {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
}

export interface JourneyStep {
  question: string;
  caption: string;
}

export interface ProblemItem {
  /** The user's own question, shown as a quote. */
  question: string;
  /** How Qadam approaches it — calm, no promises. */
  answer: string;
}

export interface ProcessStep {
  title: string;
  body: string;
}

export interface ComparisonRow {
  common: string;
  qadam: string;
}

export type TrustIcon = "method" | "evidence" | "precision" | "privacy" | "independence" | "review";

export interface TrustItem {
  icon: TrustIcon;
  title: string;
  body: string;
}

export interface FaqItem {
  /** Stable id for analytics and anchors. */
  id: string;
  question: string;
  answer: string;
}

/* ─── Social proof ─────────────────────────────────────────────
   Only verified items may be published. The `verified: true` literal
   forces an explicit decision for every entry. Nothing is invented. */

export interface Testimonial {
  verified: true;
  quote: string;
  author: string;
  context?: string;
  /** Written consent reference (internal). */
  consentRef: string;
}

export interface Stat {
  verified: true;
  value: string;
  label: string;
  /** Where the number comes from and as of when. */
  source: string;
  asOf: string;
}

export interface Partner {
  verified: true;
  name: string;
  logoSrc: string;
  href?: string;
}

export interface SocialProofData {
  testimonials: readonly Testimonial[];
  stats: readonly Stat[];
  partners: readonly Partner[];
}
