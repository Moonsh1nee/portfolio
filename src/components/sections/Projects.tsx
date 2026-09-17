"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";
import { projects, GITHUB_URL, type Project } from "@/lib/content";
import ProjectLightbox from "@/components/sections/ProjectLightbox";

const PREVIEW_COUNT = 2;

export default function Projects() {
  const [active, setActive] = useState<{ project: Project; index: number } | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em]">
              Избранные проекты
            </h2>
            <p className="text-muted-foreground text-xl mt-2">
              То, чем я горжусь больше всего
            </p>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Все проекты <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -12 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden"
            >
              {project.screenshots && project.screenshots.length > 0 ? (
                <div className="grid grid-cols-2 gap-0.5 h-64 bg-border">
                  {project.screenshots.slice(0, PREVIEW_COUNT).map((src, i) => {
                    const remaining = project.screenshots!.length - PREVIEW_COUNT;
                    const isLastPreview = i === PREVIEW_COUNT - 1 && remaining > 0;
                    return (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActive({ project, index: i })}
                        aria-label={`Открыть галерею ${project.title}, фото ${i + 1}`}
                        className="relative overflow-hidden cursor-zoom-in"
                      >
                        <Image
                          src={src}
                          alt={`Скриншот ${project.title}`}
                          fill
                          sizes="(min-width: 768px) 25vw, 50vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        {isLastPreview && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-1.5 text-white text-sm font-medium">
                            <Images aria-hidden="true" size={16} />+{remaining}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div
                  className={`h-64 bg-linear-to-br ${project.imageGradientClass} flex items-center justify-center text-7xl`}
                >
                  <span aria-hidden="true">{project.emoji}</span>
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${project.badgeAccentClass}`}
                  >
                    {project.badge}
                  </span>
                </div>
                {project.longDescription && (
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                  {project.tags.map((tag) => (
                    <div key={tag} className="bg-muted px-3 py-1 rounded-full">
                      {tag}
                    </div>
                  ))}
                </div>
                {(project.liveUrl || project.repoUrl) && (
                  <div className="flex gap-4 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Открыть <ArrowRight aria-hidden="true" size={14} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Код <ArrowRight aria-hidden="true" size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectLightbox
            project={active.project}
            initialIndex={active.index}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
