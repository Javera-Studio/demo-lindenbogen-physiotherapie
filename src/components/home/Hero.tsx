import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const trustItems = [
  "Alle Kassen & privat",
  "Zeitnahe Termine",
  "Persönliche Betreuung",
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-cream-soft to-cream">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta-dark">
            Physiotherapie in Dresden-Plauen
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] text-petrol-dark sm:text-5xl lg:text-[3.4rem]">
            Wieder beweglich. Wieder im Alltag.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Individuelle Physiotherapie mit Zeit, moderner Behandlung und
            einem klaren Blick auf Ihre persönlichen Ziele.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/kontakt" variant="primary">
              Termin anfragen
            </LinkButton>
            <LinkButton href="/leistungen" variant="secondary">
              Leistungen ansehen
            </LinkButton>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-ink"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 shrink-0 text-sage"
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

        <PlaceholderImage
          finalSrc="/images/hero-aktive-physiotherapie.webp"
          alt="Physiotherapeutin begleitet einen Patienten bei einer aktiven, kontrollierten Bewegungsübung in einer hellen, modernen Praxis"
          aspect="16/10"
          tone="petrol"
        />
      </Container>
    </section>
  );
}
