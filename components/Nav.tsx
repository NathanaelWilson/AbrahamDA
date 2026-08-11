import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference">
      <nav className="container-x flex items-center justify-between py-6 text-paper">
        <Link
          href="/"
          className="font-display italic text-lg tracking-tight"
        >
          Abraham Da
        </Link>
        <div className="hidden sm:flex items-center gap-8 text-sm uppercase tracking-[0.15em]">
          <Link href="/#about" className="hover:opacity-60 transition-opacity">
            About
          </Link>
          <Link href="/portfolio" className="hover:opacity-60 transition-opacity">
            Portfolio
          </Link>
          <Link href="/#contact" className="hover:opacity-60 transition-opacity">
            Contact
          </Link>
        </div>
        <Link
          href="/#contact"
          className="sm:hidden text-sm uppercase tracking-[0.15em]"
        >
          Menu
        </Link>
      </nav>
    </header>
  );
}
