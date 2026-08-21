export default function Footer() {
  return (
    <footer className="bg-ink text-paper/50">
      <div className="container-x flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-8 text-xs uppercase tracking-[0.15em]">
        <span>© {new Date().getFullYear()} Abraham Da</span>
        <span>Composer &amp; Sound Designer — Tangerang, Indonesia</span>
      </div>
    </footer>
  );
}
