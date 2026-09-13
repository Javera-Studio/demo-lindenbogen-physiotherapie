import Link from "next/link";
import { Service } from "@/lib/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-[0_12px_32px_-16px_rgba(31,74,73,0.35)] sm:p-7">
      <h3 className="font-serif text-xl text-petrol-dark sm:text-2xl">
        {service.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
        {service.shortDescription}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {service.areas.slice(0, 2).map((area) => (
          <li
            key={area}
            className="rounded-full bg-sage-soft px-3 py-1 text-xs font-medium text-petrol-dark"
          >
            {area}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
        <span className="inline-flex items-center gap-1.5">
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="8" cy="8" r="6.2" />
            <path d="M8 4.5V8l2.6 1.5" strokeLinecap="round" />
          </svg>
          {service.duration}
        </span>
        {service.prescription && service.selfPay ? (
          <span>Auf Rezept oder als Selbstzahlerleistung</span>
        ) : service.prescription ? (
          <span>Auf Rezept möglich</span>
        ) : (
          <span>Selbstzahlerleistung</span>
        )}
      </div>

      <Link
        href={`/leistungen#${service.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-dark hover:text-terracotta"
      >
        Mehr erfahren
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
