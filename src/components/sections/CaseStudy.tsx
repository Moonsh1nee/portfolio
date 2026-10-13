"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Expand, Info, Lock } from "lucide-react";
import type { Project } from "@/lib/content";
import ProjectStatusMark from "@/components/sections/ProjectStatus";

export default function CaseStudy({
  project,
  onOpenGallery,
}: {
  project: Project;
  onOpenGallery: (index: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const current = project.screenshots[index];

  return (
    // Three grid children so the title leads on mobile (title → image → details),
    // while on desktop the image spans both rows of the left column.
    <article
      aria-labelledby={`${project.slug}-title`}
      className="grid gap-x-12 gap-y-6 border-t border-border pt-10 lg:grid-cols-[1.2fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-y-0 lg:pt-14"
    >
      <div className="flex min-w-0 flex-wrap items-center gap-3 lg:col-start-2 lg:row-start-1">
        <h3 id={`${project.slug}-title`} className="text-3xl font-semibold">
          {project.title}
        </h3>
        <ProjectStatusMark status={project.status} />
        {project.period && <span className="font-mono text-xs text-muted tabular">{project.period}</span>}
      </div>

      <div className="min-w-0 lg:col-start-1 lg:row-span-2 lg:row-start-1">
        <button
          type="button"
          onClick={() => onOpenGallery(index)}
          className="group relative block w-full overflow-hidden rounded-lg border border-border-strong bg-surface-2 text-left shadow-(--shadow-frame)"
          aria-label={`Открыть скриншоты ${project.title} во весь экран`}
        >
          <span className="relative block aspect-16/10">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="animate-shot-in object-cover object-top transition-transform duration-200 ease-out group-hover:scale-[1.015]"
            />
          </span>
          <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-md bg-black/65 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            <Expand aria-hidden size={13} />
            Во весь экран
          </span>
        </button>

        <div
          className="-mx-4 mt-3 flex snap-x scroll-px-4 gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label={`Скриншоты ${project.title}`}
        >
          {project.screenshots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              aria-label={shot.alt}
              className={`relative aspect-16/10 w-20 shrink-0 snap-start overflow-hidden rounded-md border transition-[border-color,box-shadow] duration-150 sm:w-24 ${
                i === index
                  ? "border-foreground ring-1 ring-foreground"
                  : "border-border hover:border-border-strong"
              }`}
            >
              <Image src={shot.src} alt="" fill sizes="96px" className="object-cover object-top" />
            </button>
          ))}
        </div>
      </div>

      <div className="min-w-0 lg:col-start-2 lg:row-start-2">
        <p className="text-lg leading-relaxed lg:mt-4">{project.summary}</p>

        <ul className="mt-6 space-y-3.5">
          {project.highlights.map((item) => (
            <li key={item} className="relative pl-5 leading-relaxed text-muted">
              <span aria-hidden className="absolute top-[0.7em] left-0 h-px w-2.5 bg-border-strong" />
              {item}
            </li>
          ))}
        </ul>

        {project.statusNote && (
          <p className="mt-6 flex gap-2.5 rounded-md bg-surface-2 px-3.5 py-3 text-sm leading-relaxed text-muted">
            <Info aria-hidden size={16} className="mt-0.5 shrink-0" />
            {project.statusNote}
          </p>
        )}

        <p className="mt-6 font-mono text-xs leading-relaxed text-muted">{project.stack.join(" · ")}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 text-sm font-medium">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1 text-link underline decoration-transparent transition-colors duration-150 hover:decoration-current"
            >
              Код на GitHub
              <ArrowUpRight aria-hidden size={15} />
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center gap-1.5 text-muted">
              <Lock aria-hidden size={14} />
              Код приватный
            </span>
          )}
          <button
            type="button"
            onClick={() => onOpenGallery(0)}
            className="min-h-11 text-muted transition-colors duration-150 hover:text-foreground"
          >
            Все скриншоты ({project.screenshots.length})
          </button>
        </div>
      </div>
    </article>
  );
}
