import { services } from "@/lib/data/services";

/**
 * Kompaktes, nummeriertes Leistungsverzeichnis. `basePath` steuert, ob die
 * Links auf derselben Seite springen (Leistungsseite, basePath="") oder auf
 * die Leistungsseite verweisen (Startseite, basePath="/leistungen").
 */
export function ServiceIndexList({ basePath = "" }: { basePath?: string }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <li key={service.slug}>
          <a
            href={`${basePath}#${service.slug}`}
            className="group flex h-full items-start gap-3 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-petrol hover:bg-petrol-soft/50"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 shrink-0 font-serif text-lg text-terracotta-dark/70"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-ink group-hover:text-petrol-dark">
                {service.name}
              </span>
              <span className="mt-0.5 line-clamp-1 block text-xs text-ink-soft">
                {service.shortDescription}
              </span>
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-soft transition-colors group-hover:text-petrol-dark"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </li>
      ))}
    </ol>
  );
}
