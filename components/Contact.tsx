import Waveform from "./Waveform";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/abraham_da02" },
  { label: "YouTube", href: "https://youtube.com/@abrahamda" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abrahamda" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden bg-forest pt-20 pb-8 text-paper sm:py-35"
    >
      <Waveform
        color="var(--paper)"
        className="pointer-events-none absolute -right-10 bottom-0 h-40 w-[60%] opacity-[0.08]"
      />

      <div className="container-x relative">
        <span className="text-xs uppercase tracking-[0.2em] text-paper/60">
          03 — Contact
        </span>

        <h2 className="mt-4 max-w-2xl font-display text-4xl italic leading-none sm:text-6xl">
          Let's Make Something 
          <br />
          <span className="italic"> Sound Right.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-paper/60">
              Email
            </p>
            <a
              href="mailto:hello@abrahamda.com"
              className="mt-3 block text-lg hover:opacity-70"
            >
              hello@abrahamda.com
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-paper/60">
              Telepon / WhatsApp
            </p>
            <a
              href="https://wa.me/6281234567890"
              className="mt-3 block text-lg hover:opacity-70"
            >
              +62 812-3263-5957
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-paper/60">
              Sosial
            </p>
            <div className="mt-3 flex flex-col gap-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:opacity-70"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-16 text-xs uppercase tracking-[0.15em] text-paper/50">
          Based in Tangerang — sound travels anywhere
        </p>
      </div>
    </section>
  );
}
