"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

/**
 * Returns a click handler for in-page anchor links of the form "/#section".
 *
 * Next.js <Link> treats "/#home" as "scroll to #home on the current route",
 * which fails on sub-pages like /privacy where that section doesn't exist —
 * the URL changes but the page never navigates home. This handler fixes that:
 *
 *  - On the homepage: smooth-scroll to the section (or top for #home).
 *  - On any other page: fall through to a normal navigation to "/#section",
 *    so the browser loads the homepage and then jumps to the section.
 */
export function useAnchorNav() {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (href: string) => (event: React.MouseEvent) => {
      // Only handle internal "/#section" links here.
      if (!href.startsWith("/#")) return;

      const id = href.slice(2); // "home", "courses", ...

      if (pathname === "/") {
        // Already home — intercept and scroll smoothly.
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
        return;
      }

      // On another route — force a real navigation to the homepage anchor.
      event.preventDefault();
      router.push(href);
    },
    [pathname, router]
  );
}
