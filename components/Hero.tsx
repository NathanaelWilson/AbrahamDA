import Waveform from "./Waveform";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-32 pb-10">
      {/* faint oversized waveform, decorative */}
      <Waveform
        color="var(--forest)"
        className="pointer-events-none absolute left-1/2 top-[38%] w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.06] sm:opacity-[0.08]"
      />

      <div className="container-x relative">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink-soft">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-forest" />
          Available for new scores — 2026
        </p>

        <h1 className="font-display leading-[0.75] text-[clamp(3rem,11vw,9rem)]">
          Abraham
          <br />
          <span className="italic font-light text-forest text-[clamp(2.5rem,10vw,8rem)]">D. A.</span>
        </h1>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-lg text-ink-soft">
            Music Composer &amp; Sound Designer — 
            <span className="italic">Where every story finds its sound</span>
          </p>
          <a
            href="#portfolio"
            className="group inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-sm uppercase tracking-[0.15em] transition-colors hover:border-forest hover:text-forest"
          >
            Hear the Work
            <span className="transition-transform group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
