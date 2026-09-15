import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AiLabel } from "@/components/ui/AiLabel";

const trustItems = ["Persönliche Betreuung", "Zeitnahe Termine", "Moderne Praxisräume"];

/**
 * Bildfläche statt Vollflächen-Hintergrund: Das Quellfoto ist 1586×992px
 * (Seitenverhältnis ≈ 1,6:1); beide Köpfe liegen bei ca. 5–10 % von oben und
 * horizontal zwischen ca. 44 % und 72 % der Bildbreite.
 *
 * Ab lg füllt die Bildfläche ihre gesamte Grid-Spalte (linke Kante bleibt an
 * Ort und Stelle, nur die rechte Kante wandert bis zum Container-Rand) und
 * übernimmt per lg:h-full die Höhe der Textspalte (CSS Grid stretcht die
 * Bildfläche automatisch auf die von der Textspalte vorgegebene Zeilenhöhe –
 * dadurch endet die Bildunterkante exakt auf Höhe der letzten
 * Vertrauenspunkte, ganz ohne fest codierten Pixelwert). Die resultierende
 * Breite/Höhe liegt nah am Quell-Seitenverhältnis, object-cover beschneidet
 * dadurch nur noch minimal; object-position-X 58 % hält weiterhin beide
 * Köpfe sicher im sichtbaren Bereich, "top" verhindert vertikalen Beschnitt
 * von oben, falls die Spalte einmal etwas breiter als hoch ausfällt.
 */
function HeroPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:h-full lg:max-w-none">
      <div
        className="relative aspect-[9/10] w-full overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-full"
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
        <AiLabel />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-petrol-dark">
      {/* Container zentriert den Grid-Inhalt vertikal innerhalb der
          kompakten, an Header/Trust-Bar angepassten Hero-Höhe. flex+justify
          (statt align-items auf dem Grid) verteilt zusätzlichen Freiraum
          zuverlässig ober- und unterhalb des Inhalts. */}
      <Container className="relative flex flex-col justify-center py-10 sm:py-12 lg:min-h-[clamp(500px,calc(100svh-240px),620px)] lg:py-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.28fr] lg:items-stretch lg:gap-14">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta">
              Physiotherapie in Dresden-Plauen
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-[3.2rem]">
              Bewegung beginnt mit Vertrauen.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/90 sm:text-lg">
              Individuelle Physiotherapie, bei der wir uns Zeit für Sie, Ihre
              Beschwerden und Ihre persönlichen Ziele nehmen.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/kontakt" variant="accent">
                Termin anfragen
              </LinkButton>
              <LinkButton href="/leistungen" variant="inverse">
                Leistungen ansehen
              </LinkButton>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
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
        </div>
      </Container>
    </section>
  );
}
