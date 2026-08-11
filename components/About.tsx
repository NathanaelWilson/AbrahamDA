const DETAILS = [
  { label: "Role", value: "Music Composer & Sound Designer" },
  { label: "Domisili", value: "Jakarta, Indonesia" },
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
            Tentang
          </h2>
        </div>

        <div className="sm:col-span-8">
          <p className="font-display text-2xl leading-relaxed sm:text-3xl">
            Musik, bagi saya, adalah{" "}
            <em className="text-forest not-italic border-b border-forest">
              instruksi untuk merasakan
            </em>{" "}
            — bukan pelengkap di atas cerita, melainkan struktur tak
            terlihat yang menuntun bagaimana cerita itu dijalani.
          </p>
          <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">
            Saya bekerja lintas medium — dari scoring untuk iklan dan film,
            merancang identitas bunyi untuk brand, hingga memproduksi karya
            musik personal. Setiap proyek dimulai dari satu pertanyaan
            sederhana: rasa apa yang ingin disampaikan.
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
