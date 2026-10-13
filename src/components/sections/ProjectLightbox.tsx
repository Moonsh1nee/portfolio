"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/lib/content";

const SWIPE_THRESHOLD = 50;

export default function ProjectLightbox({
  project,
  initialIndex,
  onClose,
}: {
  project: Project;
  initialIndex: number;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const swipeStart = useRef<number | null>(null);
  const [index, setIndex] = useState(initialIndex);
  // Direction of the last step (1 next, -1 previous, 0 on open) picks the side the image slides in from.
  const [dir, setDir] = useState(0);
  const shots = project.screenshots;
  const count = shots.length;
  const go = (delta: number) => {
    setDir(delta);
    setIndex((i) => (i + delta + count) % count);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const opener = document.activeElement as HTMLElement | null;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      opener?.focus();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const delta = e.key === "ArrowRight" ? 1 : -1;
      setDir(delta);
      setIndex((i) => (i + delta + count) % count);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [count]);

  const shot = shots[index];

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${project.title}: скриншоты`}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="lightbox m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-white backdrop:bg-black/90 backdrop:backdrop-blur-sm"
    >
      <div
        className="flex h-full flex-col"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onPointerDown={(e) => {
          swipeStart.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (swipeStart.current === null) return;
          const dx = e.clientX - swipeStart.current;
          swipeStart.current = null;
          if (Math.abs(dx) > SWIPE_THRESHOLD) go(dx < 0 ? 1 : -1);
        }}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p className="min-w-0 truncate text-sm">
            <span className="font-medium">{project.title}</span>
            <span className="ml-3 font-mono text-white/60 tabular">
              {index + 1} / {count}
            </span>
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="grid size-11 shrink-0 place-items-center rounded-md bg-white/10 transition-colors duration-150 hover:bg-white/20"
          >
            <X aria-hidden size={20} />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16" onClick={(e) => e.target === e.currentTarget && onClose()}>
          <div className="relative aspect-16/10 max-h-full w-full max-w-6xl touch-pan-y">
            <Image
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="100vw"
              className="animate-shot-step object-contain"
              style={{ "--shot-dir": dir } as React.CSSProperties}
              draggable={false}
            />
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Предыдущий скриншот"
                className="absolute left-2 hidden size-11 place-items-center rounded-md bg-white/10 transition-colors duration-150 hover:bg-white/20 sm:grid sm:left-4"
              >
                <ChevronLeft aria-hidden size={22} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Следующий скриншот"
                className="absolute right-2 hidden size-11 place-items-center rounded-md bg-white/10 transition-colors duration-150 hover:bg-white/20 sm:grid sm:right-4"
              >
                <ChevronRight aria-hidden size={22} />
              </button>
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 px-4 pt-3 pb-5 sm:px-6">
          <div aria-live="polite" className="max-w-3xl">
            {/* Keyed inner block re-runs the fade per shot without remounting the live region. */}
            <div key={shot.src} className="animate-fade-in">
              <p className="text-sm font-medium text-white">{shot.alt}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">{shot.note}</p>
            </div>
          </div>
          {count > 1 && (
            <div className="flex shrink-0 gap-2 sm:hidden">
              <button type="button" onClick={() => go(-1)} aria-label="Предыдущий скриншот" className="grid size-11 place-items-center rounded-md bg-white/10">
                <ChevronLeft aria-hidden size={20} />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Следующий скриншот" className="grid size-11 place-items-center rounded-md bg-white/10">
                <ChevronRight aria-hidden size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
