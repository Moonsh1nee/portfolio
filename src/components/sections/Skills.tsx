import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-border py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-12">
          <div>
            <h2 id="skills-title" className="text-4xl font-semibold sm:text-5xl">
              Навыки
            </h2>
            <p className="mt-3 text-lg text-muted">Технологии, на которых сделаны проекты выше.</p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {skillGroups.map((group, i) => (
              <div key={group.title} className="border-t border-border-strong pt-4">
                <h3 className={`text-sm font-medium ${i === 0 ? "text-foreground" : "text-muted"}`}>{group.title}</h3>
                <ul className="mt-4 space-y-2.5 text-base">
                  {group.items.map((item) => (
                    <li key={item} className={i === 0 ? "font-medium" : undefined}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
