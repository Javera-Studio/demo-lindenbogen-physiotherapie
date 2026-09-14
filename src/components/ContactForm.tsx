"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/data/services";

const inputClasses =
  "min-h-12 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-base text-ink placeholder:text-ink-soft/70 focus-visible:border-petrol";

const labelClasses = "text-sm font-medium text-ink";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Demo-Formular: es werden bewusst keine Daten übermittelt oder gespeichert.
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      {/* Honeypot-Feld: für echte Nutzer unsichtbar, hält einfache Bots ab */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Bitte freilassen</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={labelClasses}>
            Vor- und Nachname
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={labelClasses}>
            Telefonnummer
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className={labelClasses}>
          E-Mail
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="insurance" className={labelClasses}>
            Versicherungsart
          </label>
          <select id="insurance" name="insurance" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Bitte wählen
            </option>
            <option value="gesetzlich">Gesetzlich versichert</option>
            <option value="privat">Privat versichert</option>
            <option value="selbstzahler">Selbstzahler</option>
          </select>
        </div>
        <fieldset className="flex flex-col gap-1.5">
          <legend className={labelClasses}>Rezept vorhanden?</legend>
          <div className="flex min-h-12 items-center gap-5">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="prescription" value="ja" required className="h-4 w-4" />
              Ja
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="prescription" value="nein" required className="h-4 w-4" />
              Nein
            </label>
          </div>
        </fieldset>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className={labelClasses}>
          Gewünschte Leistung
        </label>
        <select id="service" name="service" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Bitte wählen
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClasses}>
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClasses} min-h-32 resize-y py-3`}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0"
        />
        <label htmlFor="privacy" className="text-sm text-ink-soft">
          Ich habe die{" "}
          <a href="/datenschutz" className="font-medium text-petrol-dark hover:text-petrol">
            Datenschutzhinweise
          </a>{" "}
          zur Kenntnis genommen.
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-petrol px-6 py-3 text-base font-semibold text-cream transition-colors hover:bg-petrol-dark sm:w-auto"
      >
        Termin anfragen
      </button>

      <div role="status" aria-live="polite">
        {submitted ? (
          <p className="rounded-xl bg-sage-soft px-4 py-3 text-sm font-medium text-petrol-dark">
            Dies ist eine Konzeptstudie. Es werden keine Daten übermittelt.
          </p>
        ) : null}
      </div>
    </form>
  );
}
