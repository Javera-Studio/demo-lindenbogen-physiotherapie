"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/nav";
import { practice } from "@/lib/data/practice";

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
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl font-semibold tracking-wide text-petrol-dark sm:text-2xl">
            {practice.shortName}
          </span>
          <span className="text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft sm:text-xs">
            {practice.claim}
          </span>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-7 lg:flex"
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

        <div className="hidden shrink-0 lg:flex">
          <Link
            href="/kontakt"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
          >
            Termin anfragen
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
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
        className="border-t border-line bg-cream lg:hidden"
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
