"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";

/**
 * Returns a click handler for in-page anchor links of the form "/#section".
 *
 * Next.js <Link> treats "/#home" as "scroll to #home on the current route",
 * which fails on sub-pages like /privacy where that section doesn't exist —
 * the URL changes but the page never actually navigates home.
 *
 *  - On the homepage: intercept and smooth-scroll to the section (top for #home).
 *  - On any other page: do a real browser navigation to the homepage anchor via
 *    window.location, which reliably loads "/" and then jumps to the section.
 *    (router.push with a hash does not reliably change the route here.)
 */
export function useAnchorNav() {
  const pathname = usePathname();

  return useCallback(
    (href: string) => (event: React.MouseEvent) => {
      // Only handle internal "/#section" links.
      if (!href.startsWith("/#")) return;

      const id = href.slice(2); // "home", "courses", ...

      if (pathname !== "/") {
        // On another route (e.g. /privacy): force a real navigation home.
        event.preventDefault();
        window.location.href = id === "home" ? "/" : href;
        return;
      }

      // Already on the homepage — intercept and scroll smoothly.
      event.preventDefault();
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", "/");
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, "", href);
        }
      }
    },
    [pathname]
  );
}
