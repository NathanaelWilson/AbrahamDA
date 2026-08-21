import Link from "next/link";
import { projects } from "@/lib/data";

const featured = projects.filter((p) =>
  ["senja-di-ufuk", "langkah-pertama"].includes(p.slug)
);

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="border-t border-line py-24 sm:py-32">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">
              02 — Portfolio
            </span>
            <h2 className="mt-4 font-display text-4xl italic sm:text-5xl">
              Featured Works
            </h2>
          </div>
        </div>

        <div className="mt-16 flex flex-col">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href="/portfolio"
              className={`group grid grid-cols-1 items-center gap-6 border-t border-line py-10 sm:grid-cols-12 sm:gap-8 ${
                i === featured.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="order-2 sm:order-none sm:col-span-3 flex items-baseline gap-4">
                <span className="font-display text-lg italic text-ink-soft">
                  0{i + 1}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-forest">
                  {project.category}
                </span>
              </div>

              <div className="order-1 sm:order-none sm:col-span-6">
                <h3 className="font-display text-3xl transition-colors group-hover:text-forest sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-ink-soft">
                  {project.description}
                </p>
              </div>

              <div className="order-3 sm:col-span-3 flex items-center justify-between sm:justify-end gap-4 text-sm text-ink-soft">
                <span>{project.client}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-forest group-hover:bg-forest group-hover:text-paper">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 rounded-full border border-ink px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors hover:border-forest hover:bg-forest hover:text-paper"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
