import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { notFound } from "@/content/site";

export const metadata: Metadata = {
  title: notFound.title,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container width="prose" className="py-20 md:py-32">
      <p className="text-sm font-semibold text-green">404</p>
      <h1 className="mt-2 text-h2 font-bold tracking-tight md:text-h2-lg">{notFound.title}</h1>
      <p className="mt-4 text-lg text-ink-2">{notFound.body}</p>
      <div className="mt-8">
        <ButtonLink href="/" variant="secondary">
          {notFound.back}
        </ButtonLink>
      </div>
    </Container>
  );
}
