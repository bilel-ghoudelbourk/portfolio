import { ReactNode } from "react";
import { Container } from "@/components/container";

export function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {subtitle ? <p className="text-muted mt-3 max-w-2xl text-base sm:text-lg">{subtitle}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
