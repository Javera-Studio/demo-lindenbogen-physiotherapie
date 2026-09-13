import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/data/services";

export function ServicesPreview() {
  return (
    <section className="bg-cream-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Leistungen"
            title="Unsere Behandlungen im Überblick"
            description="Sechs zentrale Leistungen – die passende Kombination richten wir individuell nach Befund und ärztlicher Verordnung aus."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
