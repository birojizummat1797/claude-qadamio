import { Container } from "@/components/layout/Container";
import { DiagnosticCTA } from "./DiagnosticCTA";

interface FinalCTAProps {
  title: string;
  body: string;
}

export function FinalCTA({ title, body }: FinalCTAProps) {
  return (
    <section aria-labelledby="final-cta-title" className="bg-paper py-14 md:py-24">
      <Container>
        <div className="rounded-[var(--radius-lg)] bg-ink px-6 py-12 text-paper md:px-14 md:py-16">
          <h2 id="final-cta-title" className="max-w-2xl text-h2 font-bold tracking-tight text-balance md:text-h2-lg">
            {title}
          </h2>
          <p className="mt-4 max-w-prose text-lg text-paper/75">{body}</p>
          <div className="mt-8">
            <DiagnosticCTA source="finalCta" size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
