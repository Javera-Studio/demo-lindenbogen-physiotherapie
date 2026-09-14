/**
 * Inline gerenderte Wortmarke statt Referenz auf /logo-lindenbogen.svg als
 * <img>/next/image: Ein extern eingebundenes SVG wird als eigenständige
 * Bildressource gerendert und hat dabei KEINEN Zugriff auf die per
 * next/font geladenen Webfonts der Seite – der Text würde auf den
 * SVG-internen Fallback (Times New Roman/System-Sans) zurückfallen.
 * Inline im DOM gerenderte SVG-<text>-Elemente teilen sich dagegen den
 * Font-Kontext des Dokuments, weshalb hier direkt auf die CSS-Variablen
 * --font-serif/--font-sans der Seite verwiesen wird.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 60"
      role="img"
      aria-labelledby="logo-title logo-desc"
      className={className}
    >
      <title id="logo-title">LINDENBOGEN Physiotherapie Dresden-Plauen</title>
      <desc id="logo-desc">
        Eine reduzierte Bogenmarke in Terrakotta und Petrol neben dem
        Praxisnamen.
      </desc>

      <g fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 46 A34 34 0 0 1 76 46" stroke="var(--color-terracotta)" strokeWidth="6" />
        <path
          d="M18 46 C26 28 40 22 54 26 C62 28 68 34 74 42"
          stroke="var(--color-petrol-dark)"
          strokeWidth="3.2"
        />
        <path d="M8 46 H76" stroke="var(--color-petrol-dark)" strokeWidth="2.4" />
      </g>

      <text
        x="92"
        y="34"
        fill="var(--color-petrol-dark)"
        style={{ font: "600 34px var(--font-serif), 'Times New Roman', serif" }}
        letterSpacing="1.6"
      >
        LINDENBOGEN
      </text>
      <text
        x="93"
        y="50"
        fill="var(--color-ink-soft)"
        style={{ font: "600 10.5px var(--font-sans), Arial, sans-serif" }}
        letterSpacing="2.1"
      >
        PHYSIOTHERAPIE DRESDEN-PLAUEN
      </text>
    </svg>
  );
}
