import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const trustItems = ["Persönliche Betreuung", "Zeitnahe Termine", "Moderne Praxisräume"];

/**
 * Bildfläche statt Vollflächen-Hintergrund: Das Quellfoto ist 1586×992px
 * (Seitenverhältnis ≈ 1,6:1); beide Köpfe liegen bei ca. 5–10 % von oben und
 * horizontal zwischen ca. 44 % und 72 % der Bildbreite. Ein 4:5-Rahmen zeigt
 * die volle Bildhöhe verlustfrei (kein vertikaler Beschnitt, Köpfe behalten
 * ihren natürlichen Freiraum nach oben) und beschneidet nur seitlich – die
 * object-position-X von 58 % zentriert exakt das Band der beiden Köpfe im
 * Rahmen, ohne zu zoomen oder zu verzerren.
 */
function HeroPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 24%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 24%)",
        }}
      >
        <Image
          src="/images/hero-aktive-physiotherapie.webp"
          alt="Physiotherapeutin begleitet einen Patienten bei einer aktiven, kontrollierten Bewegungsübung in einer hellen, modernen Praxis"
          fill
          priority
          sizes="(min-width: 1024px) 480px, 80vw"
          className="object-cover"
          style={{ objectPosition: "58% top" }}
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-petrol-dark">
      <Container className="relative grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_1.28fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta">
            Physiotherapie in Dresden-Plauen
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-[3.2rem]">
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

        <div className="order-1 lg:order-2">
          <HeroPhoto />
        </div>
      </Container>
    </section>
  );
}
