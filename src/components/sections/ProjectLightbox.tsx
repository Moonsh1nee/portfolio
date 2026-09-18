"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowRight, ZoomIn, KeyRound } from "lucide-react";
import type { Project } from "@/lib/content";

export default function ProjectLightbox({
  project,
  initialIndex,
  onClose,
}: {
  project: Project;
  initialIndex: number;
  onClose: () => void;
}) {
  const images = project.screenshots ?? [];
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);

  const goTo = (next: number) => {
    setZoomed(false);
    setIndex((next + images.length) % images.length);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — подробнее`}
      className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Закрыть"
        className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
      >
        <X aria-hidden="true" size={22} />
      </button>

      <div
        className="w-full max-w-6xl max-h-full grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image carousel */}
        <div className="relative">
          <div
            className={`relative w-full h-[45vh] md:h-[70vh] rounded-2xl overflow-hidden bg-card border border-white/10 ${
              zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={() => setZoomed((z) => !z)}
          >
            {images.length > 0 && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[index]}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={images[index]}
                    alt={`Скриншот ${project.title} ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className={`transition-transform duration-300 ${
                      zoomed ? "object-contain scale-150" : "object-contain scale-100"
                    }`}
                  />
                </motion.div>
              </AnimatePresence>
            )}

            {!zoomed && (
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs text-white/80 bg-black/50 px-3 py-1.5 rounded-full pointer-events-none">
                <ZoomIn aria-hidden="true" size={14} />
                Увеличить
              </div>
            )}
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(index - 1);
                }}
                aria-label="Предыдущее фото"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <ChevronLeft aria-hidden="true" size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(index + 1);
                }}
                aria-label="Следующее фото"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <ChevronRight aria-hidden="true" size={20} />
              </button>

              <div className="flex items-center justify-center gap-2 mt-4">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(i);
                    }}
                    aria-label={`Фото ${i + 1} из ${images.length}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project info */}
        <div className="text-white max-h-[70vh] overflow-y-auto pr-1">
          <div className="flex items-center gap-3 mb-3">
            <span aria-hidden="true" className="text-3xl">
              {project.emoji}
            </span>
            <h3 className="text-3xl font-semibold tracking-[-0.03em]">{project.title}</h3>
          </div>
          <span
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-5 ${project.badgeAccentClass}`}
          >
            {project.badge}
          </span>
          <p className="text-white/70 text-base leading-relaxed mb-4">{project.description}</p>
          {project.longDescription && (
            <p className="text-white/60 text-sm leading-relaxed mb-6">{project.longDescription}</p>
          )}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">
                {tag}
              </span>
            ))}
          </div>
          {project.demoCredentials && (
            <div className="flex items-center gap-2 text-sm text-white/70 bg-white/10 px-4 py-2.5 rounded-2xl mb-6 w-fit">
              <KeyRound aria-hidden="true" size={15} className="shrink-0" />
              <span>
                Демо-доступ: <span className="font-medium text-white">{project.demoCredentials.email}</span>
                {" / "}
                <span className="font-medium text-white">{project.demoCredentials.password}</span>
              </span>
            </div>
          )}
          <div className="flex gap-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-white/70 transition-colors"
              >
                Открыть <ArrowRight aria-hidden="true" size={14} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                Код <ArrowRight aria-hidden="true" size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
