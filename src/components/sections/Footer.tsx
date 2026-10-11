import { PERSON } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {PERSON.name}
        </p>
        <p>Next.js, статический экспорт на GitHub Pages</p>
      </div>
    </footer>
  );
}
