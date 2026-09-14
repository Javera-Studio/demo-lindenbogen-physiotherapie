"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/nav";
import { practice } from "@/lib/data/practice";
import { LogoMark } from "@/components/layout/LogoMark";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [previousPathname, setPreviousPathname] = useState(pathname);

  if (pathname !== previousPathname) {
    setPreviousPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Zur Startseite von LINDENBOGEN Physiotherapie">
          <LogoMark className="h-[38px] w-auto sm:h-[47px] xl:h-[51px]" />
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-6 xl:flex"
        >
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-petrol-dark ${
                  active ? "text-petrol-dark" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 xl:flex">
          <Link
            href="/kontakt"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
          >
            Termin anfragen
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={practice.phoneHref}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-petrol/30 text-petrol-dark"
            aria-label={`${practice.name} anrufen`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2Z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-petrol/30 text-petrol-dark"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-line bg-white xl:hidden"
      >
        <nav aria-label="Mobile Hauptnavigation" className="flex flex-col px-5 py-3">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`min-h-12 border-b border-line/70 py-3 text-base font-medium last:border-none ${
                  active ? "text-petrol-dark" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-3 px-5 pb-5">
          <a
            href={practice.phoneHref}
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-petrol text-sm font-semibold text-petrol-dark"
          >
            Anrufen
          </a>
          <Link
            href="/kontakt"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-terracotta text-sm font-semibold text-cream"
          >
            Termin anfragen
          </Link>
        </div>
      </div>
    </header>
  );
}
