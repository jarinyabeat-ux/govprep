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
  // The Facebook button is always Facebook-blue with white text, on every
  // background — that is the brand cue and what the page owner asked for.
  primary:
    "bg-facebook text-white shadow-soft hover:bg-facebook-hover hover:shadow-lift",
  secondary:
    "bg-facebook text-white shadow-soft hover:bg-facebook-hover hover:shadow-lift",
  onDark:
    "bg-facebook text-white shadow-lift hover:bg-facebook-hover",
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
