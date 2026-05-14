"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Решаем hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            T
          </div>
          <span className="font-semibold text-2xl tracking-tighter">
            Твоё Имя
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a
            href="#about"
            className="hover:text-primary transition-colors duration-200"
          >
            Обо мне
          </a>
          <a
            href="#skills"
            className="hover:text-primary transition-colors duration-200"
          >
            Навыки
          </a>
          <a
            href="#projects"
            className="hover:text-primary transition-colors duration-200"
          >
            Проекты
          </a>
          <a
            href="#contact"
            className="hover:text-primary transition-colors duration-200"
          >
            Контакт
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-xl hover:bg-muted transition-colors"
            aria-label="Переключить тему"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )
            ) : (
              <div className="w-5 h-5" /> // placeholder
            )}
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden p-3">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
