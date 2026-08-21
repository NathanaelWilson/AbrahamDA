"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { categories, type Project } from "@/lib/data";
import VideoModal from "./VideoModal";

const SIZE_CLASS: Record<Project["size"], string> = {
  lg: "sm:col-span-4 sm:row-span-2",
  md: "sm:col-span-4 sm:row-span-1",
  sm: "sm:col-span-2 sm:row-span-1",
};

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      active === "Semua"
        ? projects
        : projects.filter((p) => p.category === active),
    [active, projects]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
              active === cat
                ? "border-forest bg-forest text-paper"
                : "border-line text-ink-soft hover:border-forest hover:text-forest"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-8 sm:[grid-auto-flow:dense] sm:auto-rows-[220px]">
        {filtered.map((project) => (
          <button
            key={project.slug}
            onClick={() => setSelected(project)}
            className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-xl bg-ink text-left ${SIZE_CLASS[project.size]}`}
          >
            <Image
              src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
              alt={project.title}
              fill
              unoptimized
              className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

            <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-paper/40 text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              ▶
            </span>

            <div className="relative p-5 text-paper">
              <p className="text-[11px] uppercase tracking-[0.15em] text-paper/60">
                {project.category} · {project.year}
              </p>
              <h3 className="mt-1 font-display text-xl italic sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-paper/60">{project.client}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <VideoModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
