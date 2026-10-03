import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  /** Anchor id; also used to label the section for assistive tech. */
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  tone?: "paper" | "surface" | "ink";
  width?: "content" | "prose";
  className?: string;
}

const tones = {
  paper: "bg-paper text-ink",
  surface: "bg-surface text-ink",
  ink: "bg-ink text-paper",
} as const;

/** Page section with consistent rhythm: 56px mobile / 96px desktop. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "paper",
  width = "content",
  className,
}: SectionProps) {
  const headingId = id && title ? `${id}-title` : undefined;
  const muted = tone === "ink" ? "text-paper/75" : "text-ink-2";

  return (
    <section id={id} aria-labelledby={headingId} className={cn("py-14 md:py-24", tones[tone], className)}>
      <Container width={width}>
        {(eyebrow || title || intro) && (
          <header className="mb-8 max-w-prose md:mb-12">
            {eyebrow && (
              <p className={cn("mb-3 text-sm font-semibold uppercase tracking-wide", tone === "ink" ? "text-paper/70" : "text-green")}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 id={headingId} className="text-h2 font-bold tracking-tight md:text-h2-lg">
                {title}
              </h2>
            )}
            {intro && <p className={cn("mt-4 text-base md:text-lg", muted)}>{intro}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
