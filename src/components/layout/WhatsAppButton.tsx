import { whatsappHref } from "@/lib/whatsapp";

/**
 * Sticky Kontakt-Button, auf allen Seiten sichtbar. Die WhatsApp-Nummer ist
 * wie alle Kontaktdaten dieser Konzeptstudie fiktiv (siehe practice.ts).
 * In den Markenfarben gehalten (Terrakotta), passend zu den übrigen
 * Termin-CTAs der Website.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Über WhatsApp kontaktieren (öffnet in neuem Tab)"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-cream shadow-[0_10px_28px_-8px_rgba(20,52,51,0.45)] transition-transform hover:scale-105 hover:bg-terracotta-dark focus-visible:outline-2 sm:bottom-7 sm:right-7"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.36.66 4.56 1.8 6.44L4 29l7.76-1.74A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.64 28 15S22.64 3 16.02 3Zm0 21.6a9.5 9.5 0 0 1-4.86-1.34l-.35-.21-4.6 1.03 1.02-4.48-.23-.37A9.52 9.52 0 1 1 25.5 15a9.5 9.5 0 0 1-9.48 9.6Zm5.35-7.13c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.15-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.71.23 1.35.19 1.86.12.57-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
      </svg>
    </a>
  );
}
