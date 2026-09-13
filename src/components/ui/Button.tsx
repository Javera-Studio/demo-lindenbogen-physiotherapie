import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "inverse";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-petrol text-cream hover:bg-petrol-dark active:bg-petrol-dark",
  secondary:
    "bg-transparent text-petrol border border-petrol hover:bg-petrol-soft",
  ghost:
    "bg-transparent text-ink border border-line hover:bg-cream-soft",
  // Terrakotta-CTA, z. B. für den primären Hero-Call-to-Action auf dunklem Grund.
  accent:
    "bg-terracotta text-cream hover:bg-terracotta-dark active:bg-terracotta-dark",
  // Helle Outline-Variante für dunkle (Petrol-)Hintergründe, z. B. Hero.
  inverse:
    "bg-transparent text-cream border border-cream/60 hover:bg-cream/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 min-h-12 text-[0.95rem] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2";

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  variant?: Variant;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
