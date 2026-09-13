import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { TeamCard } from "@/components/TeamCard";
import { team } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Praxis & Team",
  description:
    "Lernen Sie LINDENBOGEN Physiotherapie in Dresden-Plauen kennen: Inhaberin Jana Richter, das Team und die modernen Praxisräume.",
};

export default function PraxisTeamPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream-soft to-cream py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta-dark">
              Praxis & Team
            </p>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-petrol-dark sm:text-5xl">
              Persönlich betreut statt Fließbandbehandlung
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              LINDENBOGEN ist bewusst als kleine, inhabergeführte Praxis
              angelegt. Ein überschaubares Team, klare Zuständigkeiten und
              genug Zeit pro Termin – das ist unsere Haltung zu guter
              Physiotherapie.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <PlaceholderImage
                finalSrc="/images/praxis-behandlungsraum.webp"
                alt="Heller, moderner Behandlungsraum bei LINDENBOGEN Physiotherapie"
                aspect="4/5"
                tone="sage"
              />
            </Reveal>
            <Reveal delay={80}>
              <PlaceholderImage
                finalSrc="/images/praxis-trainingsbereich.webp"
                alt="Moderne Trainingsfläche mit Geräten für Krankengymnastik am Gerät"
                aspect="4/5"
                tone="petrol"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream-soft py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Unsere Haltung"
                title="Individuelle Behandlung statt Standardprogramm"
                description="Jede Behandlung beginnt mit einem persönlichen Gespräch. Wir nehmen uns Zeit für Ihren Befund, erklären unsere Einschätzung verständlich und planen die Therapie gemeinsam mit Ihnen – mit dem Ziel, dass Fortschritte auch im Alltag spürbar bleiben."
              />
            </Reveal>
            <Reveal delay={80}>
              <PlaceholderImage
                finalSrc="/images/praxis-behandlungsraum.webp"
                alt="Inhaberin Jana Richter im Gespräch mit einer Patientin über den Behandlungsplan"
                aspect="4/5"
                tone="terracotta"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Team" title="Die Menschen hinter LINDENBOGEN" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.slug} delay={index * 70}>
                <div className="flex h-full flex-col">
                  <TeamCard member={member} />
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-soft py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <PlaceholderImage
                finalSrc="/images/team-gruppenfoto.webp"
                alt="Gemeinsames Teamfoto von LINDENBOGEN Physiotherapie in den Praxisräumen"
                aspect="16/10"
                tone="sage"
              />
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading
                eyebrow="Kleine Teamstruktur"
                title="Bewusst überschaubar"
                description="Ein kleines Team bedeutet kurze Wege, klare Ansprechpartner und Kontinuität über den gesamten Behandlungsverlauf hinweg – ohne wechselnde Bezugspersonen bei jedem Termin."
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
