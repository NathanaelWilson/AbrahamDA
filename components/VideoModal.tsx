"use client";

import { useEffect } from "react";
import type { Project } from "@/lib/data";

export default function VideoModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 sm:p-10"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 text-paper">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-paper/60">
              {project.category} · {project.client} · {project.year}
            </p>
            <h3 className="font-display text-2xl italic">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:border-forest hover:bg-forest"
          >
            ✕
          </button>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="mt-4 max-w-xl text-sm text-paper/70">
          {project.description}
        </p>
      </div>
    </div>
  );
}
