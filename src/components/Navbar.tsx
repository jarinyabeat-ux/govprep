"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import FacebookButton from "./FacebookButton";
import { EXTERNAL_LINK_PROPS, NAV_ITEMS, SITE } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape, and lock background scroll while open.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "border-line bg-white/85 backdrop-blur-xl"
          : "border-transparent bg-white"
      }`}
    >
      <Container>
        <nav
          aria-label="เมนูหลัก"
          className="flex h-16 items-center justify-between gap-4 md:h-20"
        >
          {/* Logo */}
          <a
            href="#home"
            className="group flex shrink-0 items-center gap-2.5"
            aria-label={`${SITE.name} — กลับไปยังหน้าแรก`}
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={40}
              height={40}
              aria-hidden="true"
              className="size-9 rounded-full object-cover ring-1 ring-line transition-transform duration-300 group-hover:scale-105 md:size-10"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-[0.95rem] font-bold text-ink md:text-base">
                {SITE.logoLine1}
              </span>
              <span className="text-[0.7rem] font-normal text-muted md:text-xs">
                {SITE.logoLine2}
              </span>
            </span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? EXTERNAL_LINK_PROPS : {})}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[0.95rem] font-normal text-muted transition-colors duration-200 hover:bg-surface hover:text-ink"
                >
                  {item.label}
                  {item.external ? (
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <FacebookButton
              size="sm"
              label="ติดตาม Facebook"
              className="hidden sm:inline-flex"
            />

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
              className="grid size-10 place-items-center rounded-lg border border-line text-ink transition-colors hover:bg-surface lg:hidden"
            >
              {isOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external ? EXTERNAL_LINK_PROPS : {})}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-normal text-ink transition-colors hover:bg-surface"
                    >
                      {item.label}
                      {item.external ? (
                        <ExternalLink className="size-4 text-muted" aria-hidden="true" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
              <FacebookButton size="md" className="mt-3 w-full sm:hidden" />
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
