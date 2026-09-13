import { LinkButton } from "@/components/ui/Button";
import { Service } from "@/lib/data/services";

export function ServiceDetailCard({ service }: { service: Service }) {
  return (
    <article
      id={service.slug}
      className="scroll-mt-24 rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      <h2 className="font-serif text-2xl text-petrol-dark sm:text-3xl">
        {service.name}
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">
        {service.description}
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-ink">Typische Einsatzbereiche</p>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">
            {service.areas.map((area) => (
              <li key={area} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                {area}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-ink">Behandlungsdauer</p>
            <p className="text-sm text-ink-soft">{service.duration}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {service.prescription ? (
              <span className="rounded-full bg-petrol-soft px-3 py-1 text-xs font-medium text-petrol-dark">
                Auf Rezept möglich
              </span>
            ) : null}
            {service.selfPay ? (
              <span className="rounded-full bg-terracotta-soft px-3 py-1 text-xs font-medium text-terracotta-dark">
                Selbstzahlerleistung nach Vereinbarung
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <LinkButton href="/kontakt" variant="secondary">
          Termin für {service.name} anfragen
        </LinkButton>
      </div>
    </article>
  );
}
