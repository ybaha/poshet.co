"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BOOKING_URL, navLinks } from "@/data/studio";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./button-link";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled || open
          ? "bg-studio-canvas/85 shadow-[0_1px_0_rgb(14_40_93/0.08)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-5 md:h-[76px] md:px-8 lg:px-10">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-[15px] font-medium tracking-[-0.01em] text-studio-navy/75 transition-colors hover:bg-studio-navy/5 hover:text-studio-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-studio-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={BOOKING_URL}
            external
            className="hidden !min-h-11 sm:inline-flex"
          >
            Book a call
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-studio-navy transition-colors hover:bg-studio-navy/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-studio-blue lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="animate-fade-in border-t border-studio-line bg-studio-canvas px-5 pb-6 pt-3 md:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-studio-line/70 py-4 font-display text-2xl font-medium tracking-[-0.03em] text-studio-navy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href={BOOKING_URL} external className="mt-6 w-full">
            Book a call
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
