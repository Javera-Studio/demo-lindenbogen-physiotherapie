import { practice } from "@/lib/data/practice";

export const whatsappDefaultMessage =
  "Hallo LINDENBOGEN Physiotherapie, ich möchte gerne einen Termin anfragen.";

export function whatsappHref(message: string = whatsappDefaultMessage) {
  return `https://wa.me/${practice.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
