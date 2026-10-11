import Image from "next/image";
import { PERSON, education, languages } from "@/lib/content";

const facts = [
  { label: "Город", value: PERSON.location },
  { label: "Формат", value: "Удалёнка или гибрид" },
  { label: "Образование", value: "ВолГУ, информационная безопасность" },
  { label: "Языки", value: languages },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
        <div className="relative mx-auto aspect-4/5 w-full max-w-[320px] overflow-hidden rounded-lg border border-border-strong bg-surface-2">
          <Image
            src="/about/vladislav.webp"
            alt="Владислав Акимов"
            fill
            sizes="(min-width: 768px) 320px, 80vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-2xl">
          <h2 id="about-title" className="text-4xl font-semibold sm:text-5xl">
            Обо мне
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed">
            <p>
              Я full-stack разработчик из Волгограда, учусь в ВолГУ на направлении «{education.program}». С 2024 года делаю веб-продукты целиком — от схемы базы данных и API до
              интерфейса, тестов и деплоя.
            </p>
            <p className="text-muted">
              Первый коммерческий проект — интернет-магазин, который я полгода вёл один: от вёрстки нестандартного
              дизайна до сервера и поддержки. Сейчас ищу команду, где смогу расти до уверенного middle: ревью кода,
              продуктовые задачи и ответственность за фичу от начала до конца.
            </p>
          </div>

          <dl className="mt-10 grid gap-x-10 gap-y-5 border-t border-border pt-8 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1 font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
