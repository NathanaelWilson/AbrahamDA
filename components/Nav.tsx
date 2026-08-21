"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MENU_LINKS = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/portfolio", label: "Portfolio", id: null },
  { href: "/#contact", label: "Contact", id: "contact" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      setMenuOpen(false);
      if (pathname !== "/") return;
      e.preventDefault();
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference">
        <nav className="container-x flex items-center justify-between py-6 text-paper">
          <Link href="/" className="font-display italic text-lg tracking-tight">
            Abraham Da
          </Link>
          <div className="hidden sm:flex items-center gap-8 text-sm uppercase tracking-[0.15em]">
            <Link
              href="/#about"
              onClick={scrollToSection("about")}
              className="hover:opacity-60 transition-opacity"
            >
              About
            </Link>
            <Link href="/portfolio" className="hover:opacity-60 transition-opacity">
              Portfolio
            </Link>
            <Link
              href="/#contact"
              onClick={scrollToSection("contact")}
              className="hover:opacity-60 transition-opacity"
            >
              Contact
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            className="sm:hidden text-sm uppercase tracking-[0.15em]"
          >
            Menu
          </button>
        </nav>
      </header>

      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[60] mix-blend-normal flex flex-col bg-paper transition-all duration-300 ease-out sm:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-x flex items-center justify-between py-6 text-ink">
          <span className="font-display italic text-lg tracking-tight">
            Abraham Da
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-sm uppercase tracking-[0.15em]"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          {MENU_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={
                link.id ? scrollToSection(link.id) : () => setMenuOpen(false)
              }
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={`font-display text-5xl italic text-forest transition-all duration-300 ease-out ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
