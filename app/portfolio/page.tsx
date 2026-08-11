import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import Waveform from "@/components/Waveform";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio — Abraham Da",
  description: "Kumpulan karya scoring, iklan, video, dan podcast oleh Abraham Da.",
};

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
        <Waveform
          color="var(--forest)"
          className="pointer-events-none absolute -right-16 top-16 w-[70%] max-w-none opacity-[0.07]"
        />
        <div className="container-x relative">
          <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            Portfolio
          </span>
          <h1 className="mt-4 font-display text-5xl italic sm:text-7xl">
            Karya &amp; Kolaborasi
          </h1>
          <p className="mt-6 max-w-lg text-ink-soft">
            Kumpulan proyek scoring, sound design, dan produksi musik.
            Klik pada tiap karya untuk memutar video.
          </p>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-x">
          <PortfolioGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}
