import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPlaceholder } from "@/components/ui/MapPlaceholder";
import { ContactForm } from "@/components/ContactForm";
import { practice } from "@/lib/data/practice";

export const metadata: Metadata = {
  title: "Kontakt & Termin",
  description:
    "Kontaktieren Sie LINDENBOGEN Physiotherapie in Dresden-Plauen: Telefon, E-Mail, Öffnungszeiten und Terminanfrageformular.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream-soft to-cream py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta-dark">
              Kontakt & Termin
            </p>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-petrol-dark sm:text-5xl">
              Termin anfragen
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Nutzen Sie das Formular oder kontaktieren Sie uns direkt
              telefonisch bzw. per E-Mail. Wir melden uns zeitnah bei Ihnen
              zurück.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
            <Reveal className="space-y-8">
              <div>
                <SectionHeading title="So erreichen Sie uns" />
                <div className="mt-6 space-y-3 text-base text-ink-soft">
                  <p>
                    {practice.addressLocality} · {practice.street}
                    <br />
                    {practice.postalCode} {practice.addressLocality}
                  </p>
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
              </div>
              <MapPlaceholder />
            </Reveal>

            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
