import { education, experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="experience-title" className="text-4xl font-semibold sm:text-5xl">
          Опыт
        </h2>

        <ol className="mt-12">
          {experience.map((entry) => (
            <li
              key={entry.period}
              className="grid gap-3 border-t border-border py-8 md:grid-cols-[220px_1fr] md:gap-10"
            >
              <p className="font-mono text-sm text-muted tabular">{entry.period}</p>
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold">{entry.role}</h3>
                <p className="mt-1 text-muted">{entry.place}</p>
                <p className="mt-4 leading-relaxed">{entry.description}</p>
                <p className="mt-4 font-mono text-xs text-muted">{entry.stack.join(" · ")}</p>
              </div>
            </li>
          ))}
          <li className="grid gap-3 border-y border-border py-8 md:grid-cols-[220px_1fr] md:gap-10">
            <p className="font-mono text-sm text-muted tabular">{education.period}</p>
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold">{education.program}</h3>
              <p className="mt-1 text-muted">{education.place}</p>
              <p className="mt-4 leading-relaxed">{education.note}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
