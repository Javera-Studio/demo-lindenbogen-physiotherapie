import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const trustItems = ["Alle Kassen", "Privatpatienten", "Selbstzahler"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-petrol-dark">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-aktive-physiotherapie.webp"
          alt="Physiotherapeutin begleitet einen Patienten bei einer aktiven, kontrollierten Bewegungsübung in einer hellen, modernen Praxis"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mobil: vertikaler Verlauf, Text liegt unten über dem Bild */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-petrol-dark via-petrol-dark/85 to-petrol-dark/20 md:hidden"
      />
      {/* Desktop: horizontaler Verlauf, Bild bleibt zu ca. drei Vierteln sichtbar */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(100deg, var(--color-petrol-dark) 0%, var(--color-petrol-dark) 26%, rgba(20,52,51,0.62) 44%, rgba(20,52,51,0) 66%)",
        }}
      />

      <Container className="relative flex min-h-[76svh] items-end pb-14 md:min-h-[74vh] md:items-center md:pb-0">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta">
            Physiotherapie in Dresden-Plauen
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-[3.4rem]">
            Bewegung beginnt mit Vertrauen.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/90 sm:text-lg">
            Individuelle Physiotherapie mit Zeit, fachlicher Klarheit und
            einem Behandlungsplan, der zu Ihrem Alltag passt.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/kontakt" variant="accent">
              Termin anfragen
            </LinkButton>
            <LinkButton href="/leistungen" variant="inverse">
              Leistungen ansehen
            </LinkButton>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-cream/90"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 shrink-0 text-terracotta"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
