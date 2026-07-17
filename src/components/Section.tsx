import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  id: string;
  children: ReactNode;
  /** Adds the light surface tint used to separate adjacent sections. */
  surface?: boolean;
  className?: string;
  /** Accessible name for the landmark, when no visible heading is linked. */
  labelledBy?: string;
};

export default function Section({
  id,
  children,
  surface = false,
  className = "",
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? `${id}-heading`}
      className={`scroll-mt-24 py-20 md:py-28 lg:py-32 ${
        surface ? "bg-surface" : "bg-background"
      } ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
