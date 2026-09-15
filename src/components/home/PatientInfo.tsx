import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/lib/data/faq";

export function PatientInfo() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Gut vorbereitet"
            title="Patienteninformationen"
            description="Antworten auf die häufigsten Fragen rund um Rezept, Versicherung, Vorbereitung und Erreichbarkeit."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8">
            <Accordion items={faqItems} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
