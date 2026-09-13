import { selfPayPrices } from "@/lib/data/pricing";

export function PriceTable() {
  return (
    <div>
      {/* Mobil: gut scanbare Karten statt schwer lesbarer Desktop-Tabelle */}
      <ul className="grid gap-3 sm:hidden">
        {selfPayPrices.map((item) => (
          <li
            key={`${item.label}-${item.duration}`}
            className="rounded-2xl border border-line bg-surface p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-medium text-ink">{item.label}</span>
              <span className="shrink-0 font-serif text-lg text-petrol-dark">
                {item.price}
              </span>
            </div>
            <p className="mt-1 text-sm text-ink-soft">{item.duration}</p>
          </li>
        ))}
      </ul>

      {/* Ab sm: kompakte Tabelle */}
      <div className="hidden overflow-x-auto rounded-2xl border border-line bg-surface sm:block">
        <table className="w-full border-collapse text-left text-sm sm:text-base">
          <caption className="sr-only">
            Unverbindliche Musterpreise für Selbstzahlerleistungen dieser
            Konzeptstudie
          </caption>
          <thead>
            <tr className="border-b border-line bg-cream-soft text-ink">
              <th scope="col" className="px-5 py-3.5 font-semibold">
                Leistung
              </th>
              <th scope="col" className="px-5 py-3.5 font-semibold">
                Dauer
              </th>
              <th scope="col" className="px-5 py-3.5 text-right font-semibold">
                Preis
              </th>
            </tr>
          </thead>
          <tbody>
            {selfPayPrices.map((item) => (
              <tr key={`${item.label}-${item.duration}`} className="border-b border-line last:border-none">
                <td className="px-5 py-3.5 text-ink">{item.label}</td>
                <td className="px-5 py-3.5 text-ink-soft">{item.duration}</td>
                <td className="px-5 py-3.5 text-right font-medium text-petrol-dark">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
