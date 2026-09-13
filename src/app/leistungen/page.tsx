import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ServiceDetailCard } from "@/components/ServiceDetailCard";
import { PriceTable } from "@/components/PriceTable";
import { LinkButton } from "@/components/ui/Button";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description:
    "Physiotherapeutische Leistungen von LINDENBOGEN in Dresden-Plauen: Krankengymnastik, Manuelle Therapie, Lymphdrainage, KGG, Sportphysiotherapie und CMD-Behandlung – inklusive transparenter Musterpreise.",
};

export default function LeistungenPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream-soft to-cream py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta-dark">
              Leistungen & Preise
            </p>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-petrol-dark sm:text-5xl">
              Leistungen, die zu Ihrem Befund passen
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Welche Behandlung für Sie sinnvoll ist, hängt von Ihrer
              ärztlichen Verordnung, dem individuellen Befund und Ihren
              persönlichen Zielen ab. Die folgende Übersicht zeigt unsere
              Leistungen und deren typische Einsatzbereiche.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <PlaceholderImage
                finalSrc="/images/behandlung-manuelle-therapie.webp"
                alt="Physiotherapeutin führt eine manuelle Behandlungstechnik an Schulter und Arm eines Patienten durch"
                aspect="3/2"
                tone="terracotta"
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Jede Leistung kann grundsätzlich auf ärztliche Verordnung
                  oder – nach vorheriger Absprache – als
                  Selbstzahlerbehandlung in Anspruch genommen werden.
                </p>
                <p>
                  Bei Fragen zur passenden Leistung sprechen Sie uns gerne
                  an – wir beraten Sie vor der Terminvereinbarung.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream-soft py-14 sm:py-16">
        <Container>
          <Reveal>
            <SectionHeading title="Unsere Leistungen im Detail" />
          </Reveal>
          <div className="mt-10 space-y-6">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 50}>
                <ServiceDetailCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Preise" title="Transparent informiert" />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-serif text-xl text-petrol-dark">
                  Gesetzlich Versicherte
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  Bei gesetzlich Versicherten erfolgt die Abrechnung
                  entsprechend der ärztlichen Verordnung und den geltenden
                  Vergütungsvereinbarungen. Sofern keine Befreiung vorliegt,
                  fällt in der Regel die gesetzliche Zuzahlung an. Diese
                  setzt sich aus 10 Euro je Verordnung und 10 Prozent der
                  Behandlungskosten zusammen.
                </p>
              </div>
            </Reveal>
            <Reveal delay={70}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-serif text-xl text-petrol-dark">
                  Privatversicherte
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  Privatversicherte erhalten vor Beginn der Behandlung eine
                  transparente Honorarvereinbarung. Die Erstattung richtet
                  sich nach dem individuell abgeschlossenen
                  Versicherungstarif.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-10">
              <h3 className="font-serif text-xl text-petrol-dark sm:text-2xl">
                Selbstzahlerleistungen – Musterpreise
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-ink-soft sm:text-base">
                Die folgenden Beträge sind unverbindliche Musterpreise
                dieser fiktiven Konzeptpraxis.
              </p>
              <div className="mt-5">
                <PriceTable />
              </div>
              <p className="mt-4 text-xs italic text-ink-soft">
                Die genannten Preise dienen ausschließlich der Darstellung
                innerhalb dieser Konzeptstudie und sind keine realen
                Angebote.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
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
