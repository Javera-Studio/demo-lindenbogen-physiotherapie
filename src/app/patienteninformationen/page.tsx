import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Patienteninformationen",
  description:
    "Häufige Fragen rund um Ihren Termin bei LINDENBOGEN Physiotherapie in Dresden-Plauen: Rezept, Versicherung, Vorbereitung und Erreichbarkeit.",
};

export default function PatienteninformationenPage() {
  return (
    <>
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta-dark">
              Patienteninformationen
            </p>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-petrol-dark sm:text-5xl">
              Gut vorbereitet zu Ihrem Termin
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um
              Rezept, Versicherung, Vorbereitung und Erreichbarkeit.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-14 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading title="Häufige Fragen" />
          </Reveal>
          <div className="mt-8">
            <Accordion items={faqItems} />
          </div>
          <Reveal delay={100}>
            <div className="mt-10">
              <LinkButton href="/kontakt" variant="primary">
                Termin anfragen
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
