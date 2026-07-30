"use client";

import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em]">
            Опыт и путь
          </h2>
          <p className="text-muted-foreground text-xl mt-3 md:mt-0">
            Как я развивался как разработчик
          </p>
        </div>

        <div className="relative">
          {/* Вертикальная линия */}
          <div
            aria-hidden="true"
            className="absolute left-8 top-6 bottom-6 w-px bg-border hidden md:block"
          />

          <div className="space-y-16">
            {experience.map((entry) => {
              const [periodFrom, periodTo] = entry.period.split(" — ");

              return (
                <div
                  key={entry.role + entry.period}
                  className="relative flex flex-col md:flex-row gap-8 md:gap-12"
                >
                  <div className="md:w-40 shrink-0">
                    <div className="inline-flex items-center text-center justify-center w-16 h-16 rounded-3xl bg-card border border-border text-xs font-semibold">
                      {periodFrom} <br />—<br /> {periodTo}
                    </div>
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-3xl p-8 md:p-10">
                    <div className="flex flex-wrap justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold">{entry.role}</h3>
                        <p className="text-muted-foreground">{entry.place}</p>
                      </div>
                      {entry.employmentType && (
                        <span className="text-xs px-5 py-2.5 bg-emerald-500/10 text-emerald-400 rounded-3xl font-medium self-start">
                          {entry.employmentType}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {entry.description}
                    </p>
                    {entry.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-4 py-2 bg-muted rounded-3xl"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
