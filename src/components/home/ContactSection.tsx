import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { MapPlaceholder } from "@/components/ui/MapPlaceholder";
import { practice } from "@/lib/data/practice";

export function ContactSection() {
  return (
    <section className="bg-mist py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <SectionHeading eyebrow="Kontakt" title="Wir freuen uns auf Sie" />
            <div className="mt-6 space-y-4 text-base text-ink-soft">
              <p>{practice.addressLocality} · {practice.street}</p>
              <p>
                <a href={practice.phoneHref} className="font-medium text-petrol-dark hover:text-petrol">
                  {practice.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${practice.email}`} className="font-medium text-petrol-dark hover:text-petrol">
                  {practice.email}
                </a>
              </p>
              <div>
                {practice.openingHours.map((entry) => (
                  <p key={entry.days}>
                    {entry.days}: {entry.hours}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/kontakt" variant="primary">
                Termin anfragen
              </LinkButton>
              <LinkButton href={practice.phoneHref} variant="secondary">
                Jetzt anrufen
              </LinkButton>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <MapPlaceholder />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
