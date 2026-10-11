import { ArrowUpRight, Send, FileText } from "lucide-react";
import WindowFrame from "@/components/WindowFrame";
import { CONTACT_TELEGRAM_URL, GITHUB_URL, PERSON, RESUME_PDF_URL } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip pt-28 pb-8 sm:pt-32 md:pb-12">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <div>
          <h1 className="animate-rise text-[clamp(2.75rem,7vw,5rem)] leading-[0.98] font-semibold tracking-[-0.04em]">
            {PERSON.name}
          </h1>

          <p className="animate-rise mt-6 max-w-136 text-lg leading-relaxed text-muted sm:text-xl [animation-delay:40ms]">
            <span className="text-foreground">
              {PERSON.role}, <span className="whitespace-nowrap">{PERSON.level}</span>.
            </span>{" "}
            Делаю веб-продукты целиком: интерфейс на Next.js и TypeScript, API на NestJS и FastAPI, база данных и
            деплой.
          </p>

          <p className="animate-rise mt-5 flex flex-wrap items-center gap-x-2 text-sm [animation-delay:80ms]">
            <span aria-hidden className="size-2 rounded-full bg-accent" />
            <span className="font-medium">Открыт к предложениям</span>
            <span className="basis-full pl-4 text-muted sm:basis-auto sm:pl-0">
              <span aria-hidden className="hidden sm:inline">· </span>
              {PERSON.location}, {PERSON.workFormat}
            </span>
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3 [animation-delay:120ms]">
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
              className="inline-flex h-12 items-center gap-2.5 rounded-md border border-border-strong bg-surface px-5 font-medium transition-colors duration-150 hover:bg-surface-2"
            >
              <FileText aria-hidden size={17} />
              Резюме (PDF)
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-1 px-2 font-medium text-muted transition-colors duration-150 hover:text-foreground"
            >
              GitHub
              <ArrowUpRight aria-hidden size={16} />
            </a>
          </div>

          <ul className="animate-rise mt-10 flex max-w-136 flex-wrap gap-x-6 gap-y-1 border-t border-border pt-5 text-sm text-muted [animation-delay:160ms]">
            <li>1 коммерческий проект</li>
            <li>5 собственных продуктов</li>
            <li>Веб, мобайл, бэкенд</li>
          </ul>
        </div>

        <div aria-hidden className="relative mx-auto w-full max-w-xl pb-14 lg:max-w-none lg:pb-20">
          <WindowFrame
            src="/projects/hero-sift.webp"
            alt=""
            label="Sift — оценка вакансии"
            priority
            sizes="(min-width: 1024px) 520px, 90vw"
            className="animate-frame-in w-[88%] [animation-delay:120ms]"
          />
          <WindowFrame
            src="/projects/muiraje-3.webp"
            alt=""
            label="Muiraje — карточка товара"
            sizes="(min-width: 1024px) 420px, 70vw"
            className="animate-frame-in absolute right-0 bottom-0 w-[56%] [animation-delay:200ms]"
          />
        </div>
      </div>
    </section>
  );
}
