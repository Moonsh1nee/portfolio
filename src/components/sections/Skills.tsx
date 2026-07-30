"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] mb-4">
            Навыки и технологии
          </h2>
          <p className="text-muted-foreground text-xl">
            Инструменты, с которыми я работаю каждый день
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  aria-hidden="true"
                  className={`w-8 h-8 rounded-2xl flex items-center justify-center ${category.iconWrapperClass}`}
                >
                  {category.icon}
                </div>
                <h3
                  className={`uppercase text-sm font-semibold tracking-widest ${category.accentClass}`}
                >
                  {category.title}
                </h3>
              </div>
              <div className="space-y-5">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 + categoryIndex * 0.15 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className={`bg-card border border-border rounded-3xl p-5 transition-all group ${category.hoverBorderClass}`}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-medium text-lg">{skill.name}</div>
                      <div className={`text-xs font-medium ${category.accentClass}`}>
                        {skill.level}
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-linear-to-r ${category.gradientClass} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
