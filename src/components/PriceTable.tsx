import { selfPayPrices } from "@/lib/data/pricing";

export function PriceTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-surface">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm sm:text-base">
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
  );
}
