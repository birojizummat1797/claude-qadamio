import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "paper" | "surface" | "midnight" | "primary";

interface SectionProps {
  /** Anchor id; also used to label the section for assistive tech. */
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  tone?: Tone;
  width?: "content" | "prose";
  /** Center the header (showcase-style sections). */
  align?: "start" | "center";
  className?: string;
}

const tones: Record<Tone, string> = {
  paper: "bg-paper text-fg",
  surface: "bg-surface text-fg",
  midnight: "zone-dark bg-midnight text-on-midnight",
  // Full-bleed Qadam Blue block: white text 6.33:1. Focus ring switches to light blue.
  primary: "zone-dark bg-primary text-on-primary",
};

const eyebrowTone: Record<Tone, string> = {
  paper: "text-primary",
  surface: "text-primary",
  midnight: "text-on-midnight-muted",
  primary: "text-on-primary",
};

const introTone: Record<Tone, string> = {
  paper: "text-fg-muted",
  surface: "text-fg-muted",
  midnight: "text-on-midnight-muted",
  primary: "text-on-primary",
};

/** Page section with consistent rhythm: 64px mobile / 112px desktop. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "paper",
  width = "content",
  align = "start",
  className,
}: SectionProps) {
  const headingId = id && title ? `${id}-title` : undefined;
  const centered = align === "center";

  return (
    <section id={id} aria-labelledby={headingId} className={cn("py-16 md:py-28", tones[tone], className)}>
      <Container width={width}>
        {(eyebrow || title || intro) && (
          <header className={cn("mb-10 md:mb-14", centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
            {eyebrow && (
              <p
                className={cn(
                  "mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase",
                  eyebrowTone[tone],
                )}
              >
                <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 id={headingId} className="text-h2 font-extrabold text-balance md:text-h2-lg">
                {title}
              </h2>
            )}
            {intro && <p className={cn("mt-5 text-base md:text-lg", introTone[tone])}>{intro}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
