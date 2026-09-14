"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "Обо мне", href: "#about" },
  { label: "Навыки", href: "#skills" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакт", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const activeSectionId = useActiveSection(
    navLinks.map((link) => link.href.slice(1))
  );

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

  // Закрытие по Esc + фокус-трап внутри мобильного меню
  useEffect(() => {
    if (!open) return;

    const menu = mobileMenuRef.current;
    const focusableElements = menu?.querySelectorAll<HTMLElement>("a[href]");
    const firstFocusable = focusableElements?.[0];
    const lastFocusable = focusableElements?.[focusableElements.length - 1];

    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      if (e.key !== "Tab" || !firstFocusable || !lastFocusable) return;

      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Возврат фокуса на кнопку-тоггл при закрытии меню
  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (!open && wasOpenRef.current) {
      toggleButtonRef.current?.focus();
    }
    wasOpenRef.current = open;
  }, [open]);

  useEffect(() => {
    // Runs exactly once on mount to avoid an SSR/client theme-icon hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="w-9 h-9 rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-2xl shadow-md"
            >
              V
            </div>
            <span className="font-semibold text-2xl tracking-[-0.04em]">
              Vladislav
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = activeSectionId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-foreground/90 hover:text-foreground transition-colors pt-1 pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all duration-400 ${
                    isActive ? "text-foreground after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-2xl hover:bg-muted hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label={
                mounted
                  ? theme === "dark"
                    ? "Переключить на светлую тему"
                    : "Переключить на тёмную тему"
                  : "Переключить тему"
              }
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun aria-hidden="true" size={20} />
                ) : (
                  <Moon aria-hidden="true" size={20} />
                ))}
            </button>

            <button
              ref={toggleButtonRef}
              onClick={() => setOpen(!open)}
              className="md:hidden p-3 rounded-2xl hover:bg-muted hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <X aria-hidden="true" size={24} />
              ) : (
                <Menu aria-hidden="true" size={24} />
              )}
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
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="navigation"
            aria-label="Мобильное меню"
            className="fixed top-0 right-0 bottom-0 w-72 bg-background border-l border-border z-50 md:hidden shadow-2xl"
          >
            <div className="flex flex-col px-6 py-8 gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
