"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, GITHUB_URL, type Project } from "@/lib/content";
import CaseStudy from "@/components/sections/CaseStudy";
import ProjectLightbox from "@/components/sections/ProjectLightbox";
import ProjectStatusMark from "@/components/sections/ProjectStatus";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export default function Projects() {
  const [gallery, setGallery] = useState<{ project: Project; index: number } | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-title" className="pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="projects-title" className="text-4xl font-semibold sm:text-5xl">
              Проекты
            </h2>
            <p className="mt-3 max-w-xl text-lg text-muted">Четыре основные работы: что сделано и где было сложно.</p>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-link underline decoration-transparent transition-colors duration-150 hover:decoration-current"
          >
            Все репозитории на GitHub
            <ArrowUpRight aria-hidden size={15} />
          </a>
        </div>

        <div className="mt-12 space-y-16 lg:space-y-20">
          {featured.map((project) => (
            <CaseStudy key={project.slug} project={project} onOpenGallery={(index) => setGallery({ project, index })} />
          ))}
        </div>

        <h3 className="mt-24 text-2xl font-semibold">Ещё проекты</h3>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {others.map((project) => (
            <li key={project.slug} className="grid gap-5 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
              <button
                type="button"
                onClick={() => setGallery({ project, index: 0 })}
                aria-label={`Открыть скриншоты ${project.title}`}
                className="relative aspect-16/10 overflow-hidden rounded-md border border-border-strong bg-surface-2"
              >
                <Image src={project.screenshots[0].src} alt={project.screenshots[0].alt} fill sizes="(min-width: 640px) 200px, 100vw" className="object-cover object-top" />
              </button>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <ProjectStatusMark status={project.status} />
                </div>
                <p className="mt-2 leading-relaxed text-muted">{project.summary}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
                  <p className="font-mono text-xs text-muted">{project.stack.join(" · ")}</p>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-link underline decoration-transparent transition-colors duration-150 hover:decoration-current"
                    >
                      Код
                      <ArrowUpRight aria-hidden size={14} />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {gallery && (
        <ProjectLightbox
          key={gallery.project.slug}
          project={gallery.project}
          initialIndex={gallery.index}
          onClose={() => setGallery(null)}
        />
      )}
    </section>
  );
}
