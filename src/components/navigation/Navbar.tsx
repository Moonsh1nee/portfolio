"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Блокировка скролла страницы при открытом меню
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Закрытие по Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-2xl shadow-md">
              V
            </div>
            <span className="font-semibold text-2xl tracking-[-0.04em]">
              Vladislav
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            <a
              href="#about"
              className="relative text-foreground/90 hover:text-foreground transition-colors pt-1 pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all duration-400"
            >
              Обо мне
            </a>
            <a
              href="#skills"
              className="relative text-foreground/90 hover:text-foreground transition-colors pt-1 pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all duration-400"
            >
              Навыки
            </a>
            <a
              href="#projects"
              className="relative text-foreground/90 hover:text-foreground transition-colors pt-1 pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all duration-400"
            >
              Проекты
            </a>
            <a
              href="#contact"
              className="relative text-foreground/90 hover:text-foreground transition-colors pt-1 pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all duration-400"
            >
              Контакт
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-2xl hover:bg-muted hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {mounted &&
                (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-3 rounded-2xl hover:bg-muted hover:scale-110 active:scale-95 transition-all duration-200"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu + Overlay */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Menu content */}
          <div className="fixed top-0 right-0 bottom-0 w-72 bg-background border-l border-border z-50 md:hidden shadow-2xl">
            <div className="flex flex-col px-6 py-8 gap-6 text-lg font-medium">
              <a href="#about" onClick={() => setOpen(false)} className="py-2">
                Обо мне
              </a>
              <a href="#skills" onClick={() => setOpen(false)} className="py-2">
                Навыки
              </a>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="py-2"
              >
                Проекты
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="py-2"
              >
                Контакт
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
