import { ArrowUpRight, FileText, Send } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_TELEGRAM_HANDLE,
  CONTACT_TELEGRAM_URL,
  GITHUB_HANDLE,
  GITHUB_URL,
  PERSON,
  RESUME_DOCX_URL,
  RESUME_PDF_URL,
  VK_URL,
} from "@/lib/content";

const channels = [
  { label: "Telegram", value: `@${CONTACT_TELEGRAM_HANDLE}`, href: CONTACT_TELEGRAM_URL, external: true },
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, external: false },
  { label: "GitHub", value: GITHUB_HANDLE, href: GITHUB_URL, external: true },
  { label: "VK", value: "moonsh1ne_vk", href: VK_URL, external: true },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-border bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <h2 id="contact-title" className="max-w-[18ch] text-4xl font-semibold sm:text-5xl">
            Ищу позицию <span className="whitespace-nowrap">{PERSON.level}</span>{" "}
            <span className="whitespace-nowrap">full-stack</span> разработчика
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Рассматриваю удалённую работу или гибрид в Волгограде. Быстрее всего отвечаю в Telegram.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={CONTACT_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2.5 rounded-md bg-inverse px-5 font-medium text-inverse-foreground transition-opacity duration-150 hover:opacity-85"
            >
              <Send aria-hidden size={17} />
              Написать в Telegram
            </a>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center gap-2.5 rounded-md border border-border-strong px-5 font-medium transition-colors duration-150 hover:bg-surface-2"
            >
              <FileText aria-hidden size={17} />
              Резюме (PDF)
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Нужен Word?{" "}
            <a href={RESUME_DOCX_URL} download className="text-link underline">
              Скачать .docx
            </a>
          </p>
        </div>

        <ul className="self-end border-t border-border">
          {channels.map((channel) => (
            <li key={channel.label} className="border-b border-border">
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 py-4"
              >
                <span className="text-sm text-muted">{channel.label}</span>
                <span className="inline-flex min-w-0 items-center gap-1.5 font-medium">
                  <span className="truncate">{channel.value}</span>
                  <ArrowUpRight
                    aria-hidden
                    size={16}
                    className="shrink-0 text-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
