"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  CONTACT_TELEGRAM_URL,
  GITHUB_URL,
  PERSON,
  RESUME_PDF_URL,
  navLinks,
} from "@/lib/content";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const activeId = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    // Theme is only known on the client; gate the icon to avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) toggleRef.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;

    document.body.style.overflow = "hidden";
    const focusables = () =>
      [toggleRef.current, ...(panelRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? [])].filter(
        (el): el is HTMLElement => el !== null
      );
    focusables()[1]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") return setOpen(false);
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onResize = () => window.matchMedia("(min-width: 768px)").matches && setOpen(false);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const isDark = resolvedTheme === "dark";

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" className="text-base font-semibold tracking-[-0.01em]" onClick={() => setOpen(false)}>
          {PERSON.name}
        </a>

        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm">
            {navLinks.map((link) => {
              const active = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active ? "location" : undefined}
                    className={`rounded-md px-3 py-2 transition-colors duration-150 hover:text-foreground ${
                      active ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={mounted ? (isDark ? "Включить светлую тему" : "Включить тёмную тему") : "Переключить тему"}
            className="grid size-10 place-items-center rounded-md text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-foreground"
          >
            {mounted && (isDark ? <Sun aria-hidden size={18} /> : <Moon aria-hidden size={18} />)}
          </button>
          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-md bg-inverse px-3.5 py-2 text-sm font-medium text-inverse-foreground transition-opacity duration-150 hover:opacity-85 sm:inline-flex"
          >
            <FileText aria-hidden size={16} />
            Резюме
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-10 place-items-center rounded-md transition-colors duration-150 hover:bg-surface-2 md:hidden"
          >
            {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
          </button>
        </div>
      </div>

    </header>
      {open && (
        <div
          ref={panelRef}
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background md:hidden"
        >
          <nav aria-label="Мобильная навигация" className="px-4 pt-4 pb-10">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <a href={link.href} onClick={() => setOpen(false)} className="block py-4 text-2xl font-medium tracking-[-0.02em]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <a
                href={CONTACT_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-inverse px-4 py-3.5 text-center font-medium text-inverse-foreground"
              >
                Написать в Telegram
              </a>
              <a href={RESUME_PDF_URL} target="_blank" rel="noopener" className="rounded-md border border-border-strong px-4 py-3.5 text-center font-medium">
                Резюме (PDF)
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="py-2 text-center text-muted">
                GitHub
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
