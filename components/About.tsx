const DETAILS = [
  { label: "Role", value: "Music Composer & Sound Designer" },
  { label: "Domicile", value: "Tangerang, Indonesia" },
  { label: "Email", value: "hello@abrahamda.com" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 sm:py-32">
      <div className="container-x grid grid-cols-1 gap-12 sm:grid-cols-12">
        <div className="sm:col-span-4">
          <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            01 — About
          </span>
          <h2 className="mt-4 font-display text-4xl italic sm:text-5xl">
            About
          </h2>
        </div>

        <div className="sm:col-span-8">
          <p className="font-display text-2xl leading-relaxed sm:text-3xl">
            Music has always been{" "}
            <em className="text-forest italic border-b border-forest">
              the language I trust most.
            </em>{" "}
            Over the years, composing for film, stage, and interactive media has taught me 
            that the best scores don't just support a story — they become part of how it's remembered.
          </p>
          <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">
            Every project starts the same way: listening closely, then finding the sound that belongs there, and nowhere else.
          </p>

          <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {DETAILS.map((d) => (
              <div key={d.label}>
                <dt className="text-xs uppercase tracking-[0.15em] text-ink-soft">
                  {d.label}
                </dt>
                <dd className="mt-2 text-base">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
