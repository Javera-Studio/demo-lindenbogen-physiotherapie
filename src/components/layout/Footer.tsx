import Link from "next/link";
import { practice } from "@/lib/data/practice";
import { mainNav } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream-soft">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-semibold text-petrol-dark">
            {practice.shortName}
          </p>
          <p className="mt-1 text-sm text-ink-soft">{practice.claim}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {practice.street}
            <br />
            {practice.postalCode} {practice.addressLocality}
          </p>
        </div>

        <nav aria-label="Footer-Navigation">
          <p className="mb-3 text-sm font-semibold text-ink">Navigation</p>
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-soft transition-colors hover:text-petrol-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-sm font-semibold text-ink">Kontakt</p>
          <ul className="space-y-2 text-sm text-ink-soft">
            <li>
              <a href={practice.phoneHref} className="hover:text-petrol-dark">
                {practice.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${practice.email}`}
                className="break-all hover:text-petrol-dark"
              >
                {practice.email}
              </a>
            </li>
          </ul>
          <ul className="mt-4 space-y-1 text-sm text-ink-soft">
            {practice.openingHours.map((entry) => (
              <li key={entry.days}>
                {entry.days}: {entry.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/impressum" className="hover:text-petrol-dark">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-petrol-dark">
              Datenschutz
            </Link>
          </div>
          <p>
            Konzeptstudie – Praxis, Personen, Preise und Kontaktdaten sind
            fiktiv.
          </p>
        </div>
      </div>
    </footer>
  );
}
