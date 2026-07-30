import { socialLinks } from "@/lib/content";

const navLinks = [
  { label: "Обо мне", href: "#about" },
  { label: "Навыки", href: "#skills" },
  { label: "Проекты", href: "#projects" },
  { label: "Опыт", href: "#experience" },
  { label: "Контакт", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Логотип и копирайт */}
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="w-9 h-9 rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-2xl"
            >
              V
            </div>
            <div>
              <span className="font-semibold text-2xl tracking-tight">
                Vladislav
              </span>
              <p className="text-xs text-muted-foreground">
                © 2026 • Все права защищены
              </p>
            </div>
          </div>

          {/* Навигация */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Социальные сети */}
          <div className="flex gap-6 text-muted-foreground">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
