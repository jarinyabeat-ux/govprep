"use client";

import Link from "next/link";
import { useAnchorNav } from "@/lib/useAnchorNav";

type FooterLink = { label: string; href: string };

/** Footer menu links that point at homepage sections ("/#courses" etc.). */
export default function FooterNav({ links }: { links: FooterLink[] }) {
  const onAnchorClick = useAnchorNav();

  return (
    <ul className="mt-4 flex flex-col gap-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            onClick={onAnchorClick(link.href)}
            className="text-[0.925rem] text-muted transition-colors hover:text-primary-ink"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
