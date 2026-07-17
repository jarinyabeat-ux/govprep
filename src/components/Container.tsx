import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

/** Centres content in the 1280px shell with responsive gutters. */
export default function Container({
  as: Tag = "div",
  children,
  className = "",
}: ContainerProps) {
  return <Tag className={`shell ${className}`}>{children}</Tag>;
}
