export function MapPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Kartenausschnitt Dresden-Plauen mit dem Standort von LINDENBOGEN Physiotherapie (Platzhalter, keine echte Kartenintegration)"
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-cream-soft sm:aspect-[16/10] ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="400" height="300" fill="var(--color-cream-soft)" />
        <g stroke="var(--color-line)" strokeWidth="1.5" opacity="0.9">
          <path d="M0 60 H400" />
          <path d="M0 140 H400" />
          <path d="M0 220 H400" />
          <path d="M70 0 V300" />
          <path d="M180 0 V300" />
          <path d="M300 0 V300" />
        </g>
        <path
          d="M0 100 C 100 40, 220 180, 400 90"
          stroke="var(--color-sage)"
          strokeWidth="10"
          fill="none"
          opacity="0.55"
        />
        <path
          d="M40 300 C 120 220, 160 260, 220 120 S 340 40, 400 60"
          stroke="var(--color-petrol)"
          strokeWidth="6"
          fill="none"
          opacity="0.45"
        />
        <circle cx="200" cy="150" r="9" fill="var(--color-terracotta)" />
        <circle cx="200" cy="150" r="16" fill="var(--color-terracotta)" opacity="0.25" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-petrol-dark/90 px-4 py-3 text-cream sm:px-5">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">LINDENBOGEN Physiotherapie</p>
          <p className="truncate text-xs text-cream/80">Dresden-Plauen</p>
        </div>
        <span className="shrink-0 rounded-full border border-cream/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-cream/90">
          Kartenplatzhalter
        </span>
      </div>
    </div>
  );
}
