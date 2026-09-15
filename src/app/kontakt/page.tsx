import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPlaceholder } from "@/components/ui/MapPlaceholder";
import { ArchMark } from "@/components/ui/ArchMark";
import { ContactForm } from "@/components/ContactForm";
import { practice } from "@/lib/data/practice";
import { whatsappHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontakt & Termin",
  description:
    "Kontaktieren Sie LINDENBOGEN Physiotherapie in Dresden-Plauen: Telefon, E-Mail, Öffnungszeiten und Terminanfrageformular.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-white py-14 sm:py-20">
        <Container className="flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center">
            <ArchMark className="h-9 w-auto sm:h-10" />
            <p className="mt-4 mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta-dark">
              Kontakt & Termin
            </p>
            <h1 className="max-w-xl text-balance font-serif text-4xl leading-tight text-petrol-dark sm:text-5xl">
              Termin anfragen
            </h1>
            <p className="mt-5 max-w-[820px] text-base leading-relaxed text-ink-soft sm:text-lg">
              Nutzen Sie das Formular oder kontaktieren Sie uns direkt
              telefonisch bzw. per E-Mail. Wir melden uns zeitnah bei Ihnen
              zurück.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist pb-16 sm:pb-24">
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
                    <a
                      href={whatsappHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-dark hover:text-terracotta"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 32 32"
                        className="h-4 w-4 shrink-0"
                        fill="currentColor"
                      >
                        <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.36.66 4.56 1.8 6.44L4 29l7.76-1.74A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.64 28 15S22.64 3 16.02 3Zm0 21.6a9.5 9.5 0 0 1-4.86-1.34l-.35-.21-4.6 1.03 1.02-4.48-.23-.37A9.52 9.52 0 1 1 25.5 15a9.5 9.5 0 0 1-9.48 9.6Zm5.35-7.13c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.15-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.71.23 1.35.19 1.86.12.57-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
                      </svg>
                      oder direkt über WhatsApp chatten
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
