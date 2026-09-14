import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { ServiceIndexList } from "@/components/ServiceIndexList";

export function ServicesPreview() {
  return (
    <section className="bg-mist py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Leistungen"
            title="Unsere Leistungen auf einen Blick"
            description="Die passende Kombination richten wir individuell nach Befund und ärztlicher Verordnung aus. Alle Details, Einsatzbereiche und Preise finden Sie auf der Leistungsseite."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10">
            <ServiceIndexList basePath="/leistungen" />
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-8">
            <LinkButton href="/leistungen" variant="secondary">
              Alle Leistungen im Detail ansehen
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
