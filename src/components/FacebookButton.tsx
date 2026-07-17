import { Facebook } from "lucide-react";
import { EXTERNAL_LINK_PROPS, SITE } from "@/data/site";

type Variant = "primary" | "secondary" | "onDark";
type Size = "sm" | "md" | "lg";

type FacebookButtonProps = {
  variant?: Variant;
  size?: Size;
  label?: string;
  className?: string;
};

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-soft hover:bg-primary-hover hover:shadow-lift",
  secondary:
    "border border-line bg-white text-ink shadow-soft hover:border-primary hover:text-primary",
  onDark: "bg-white text-primary shadow-lift hover:bg-primary-soft",
};

const SIZES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

/**
 * The single component used for every "Follow Facebook" action on the site,
 * so the destination and the external-link safety attributes can never drift.
 */
export default function FacebookButton({
  variant = "primary",
  size = "md",
  label = "ติดตาม Facebook",
  className = "",
}: FacebookButtonProps) {
  return (
    <a
      href={SITE.facebook}
      {...EXTERNAL_LINK_PROPS}
      aria-label={`${label} — เปิดเพจ ${SITE.shortName} ในแท็บใหม่`}
      className={`inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      <Facebook className="size-[1.15em] shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
