"use client";

import PhotoCarousel from "@/components/PhotoCarousel";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const typingText =
  "Frontend-разработчик, создающий быстрые, красивые и масштабируемые интерфейсы с помощью современных технологий.";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="min-h-screen pt-21 flex items-center relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(99,102,241,0.12),transparent_60%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 mb-8 text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Доступен для новых проектов — 2026
              </div>
            </motion.div>

            <h1 className="text-4xl min-[300px]:text-5xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.05] font-semibold tracking-[-0.04em] mb-8">
              Привет.
              <br />Я{" "}
              <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Владислав
              </span>
              .
            </h1>

            {/* Text printing effect */}
            <div className="mb-12 relative max-w-140">
              <p className="text-xl md:text-2xl text-transparent leading-relaxed select-none">
                {typingText}
              </p>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed absolute top-0 left-0">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group px-4 sm:px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-medium flex items-center justify-center gap-3 text-lg"
              >
                Посмотреть проекты
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <a
                href="#contact"
                className="px-8 py-4 border border-border hover:bg-muted rounded-2xl font-medium text-lg flex items-center justify-center transition"
              >
                Написать мне
              </a>
            </div>
          </div>
        </div>

        {/* Big decorative element right */}
        <div className="absolute bottom-10 right-6 xl:right-12 hidden lg:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="w-80 h-80 border border-white/10 rounded-full flex items-center justify-center"
          >
            <div className="w-64 h-64 border border-white/10 rounded-full" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 hidden md:flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <div>Прокрутить</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            {/* Stacked Cards Carousel */}
            <div className="md:col-span-5">
              <PhotoCarousel />
            </div>

            {/* Текстовая часть */}
            <div className="md:col-span-7 space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] mb-6">
                  Обо мне
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Я Frontend-разработчик с более чем 4-летним опытом создания
                  современных веб-приложений. Специализируюсь на Next.js,
                  TypeScript и сложных интерфейсах с акцентом на
                  производительность и пользовательский опыт.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-muted-foreground text-sm mb-1">Опыт</div>
                  <div className="text-4xl font-semibold">4+ года</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-sm mb-1">
                    Проектов
                  </div>
                  <div className="text-4xl font-semibold">25+</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-sm mb-1">
                    Клиентов
                  </div>
                  <div className="text-4xl font-semibold">15+</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-sm mb-1">
                    Основной стек
                  </div>
                  <div className="text-4xl font-semibold">Next.js + TS</div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground max-w-2xl">
                Мне нравится не просто писать код, а создавать продукты,
                которыми приятно пользоваться. Чистая архитектура, внимание к
                деталям и плавные анимации — это то, что я привношу в каждый
                проект.
              </p>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-medium text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-all"
              >
                Посмотреть мои проекты
                <ArrowRight />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
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
            {/* Frontend */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center">
                  ⚛️
                </div>
                <h3 className="uppercase text-sm font-semibold tracking-widest text-blue-400">
                  Frontend
                </h3>
              </div>
              <div className="space-y-5">
                {[
                  { name: "Next.js", level: "Expert", progress: 95 },
                  { name: "TypeScript", level: "Expert", progress: 95 },
                  { name: "React", level: "Expert", progress: 90 },
                  { name: "Tailwind CSS", level: "Expert", progress: 95 },
                  { name: "Framer Motion", level: "Advanced", progress: 85 },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="bg-card border border-border rounded-3xl p-5 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-medium text-lg">{skill.name}</div>
                      <div className="text-xs font-medium text-blue-400">
                        {skill.level}
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Backend */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center">
                  🛠️
                </div>
                <h3 className="uppercase text-sm font-semibold tracking-widest text-emerald-400">
                  Tools & Backend
                </h3>
              </div>
              <div className="space-y-5">
                {[
                  { name: "Prisma", level: "Advanced", progress: 85 },
                  { name: "PostgreSQL", level: "Intermediate", progress: 75 },
                  { name: "Zustand", level: "Advanced", progress: 90 },
                  { name: "TanStack Query", level: "Advanced", progress: 80 },
                  { name: "Git & GitHub", level: "Expert", progress: 95 },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 + 0.15 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="bg-card border border-border rounded-3xl p-5 hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-medium text-lg">{skill.name}</div>
                      <div className="text-xs font-medium text-emerald-400">
                        {skill.level}
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Другое */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-violet-500/10 text-violet-500 rounded-2xl flex items-center justify-center">
                  ✦
                </div>
                <h3 className="uppercase text-sm font-semibold tracking-widest text-violet-400">
                  Другое
                </h3>
              </div>
              <div className="space-y-5">
                {[
                  { name: "UI/UX", level: "Advanced", progress: 80 },
                  { name: "Анимации", level: "Advanced", progress: 85 },
                  { name: "Performance", level: "Expert", progress: 90 },
                  { name: "Figma", level: "Intermediate", progress: 70 },
                  { name: "Тимворкинг", level: "Expert", progress: 95 },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 + 0.3 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="bg-card border border-border rounded-3xl p-5 hover:border-violet-500/30 transition-all group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-medium text-lg">{skill.name}</div>
                      <div className="text-xs font-medium text-violet-400">
                        {skill.level}
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em]">
                Избранные проекты
              </h2>
              <p className="text-muted-foreground text-xl mt-2">
                То, чем я горжусь больше всего
              </p>
            </div>
            <a
              href="#"
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              Все проекты <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Проект 1 */}
            <motion.div
              whileHover={{ y: -12 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden"
            >
              <div className="h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-7xl">
                🚀
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">MoonChat</h3>
                    <p className="text-muted-foreground">
                      Telegram-подобный мессенджер
                    </p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full">
                    2026
                  </span>
                </div>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <div className="bg-muted px-3 py-1 rounded-full">Next.js</div>
                  <div className="bg-muted px-3 py-1 rounded-full">
                    TypeScript
                  </div>
                  <div className="bg-muted px-3 py-1 rounded-full">
                    Socket.io
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Проект 2 */}
            <motion.div
              whileHover={{ y: -12 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden"
            >
              <div className="h-64 bg-gradient-to-br from-purple-800 to-violet-900 flex items-center justify-center text-7xl">
                📊
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">Portfolio 2026</h3>
                    <p className="text-muted-foreground">
                      Это портфолио, которое ты сейчас смотришь
                    </p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full">
                    В разработке
                  </span>
                </div>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <div className="bg-muted px-3 py-1 rounded-full">
                    Next.js 16
                  </div>
                  <div className="bg-muted px-3 py-1 rounded-full">
                    Framer Motion
                  </div>
                  <div className="bg-muted px-3 py-1 rounded-full">
                    Tailwind
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / TIMELINE SECTION */}
      <section className="py-24 md:py-32 border-t border-border">
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
            <div className="absolute left-8 top-6 bottom-6 w-px bg-border hidden md:block" />

            <div className="space-y-16">
              {/* Опыт 1 */}
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-40 flex-shrink-0">
                  <div className="inline-flex items-center text-center justify-center w-16 h-16 rounded-3xl bg-card border border-border text-xs font-semibold">
                    2024 <br />—<br /> сейчас
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-3xl p-8 md:p-10">
                  <div className="flex flex-wrap justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        Senior Frontend Developer
                      </h3>
                      <p className="text-muted-foreground">
                        Компания / Проект (или Freelance)
                      </p>
                    </div>
                    <span className="text-xs px-5 py-2.5 bg-emerald-500/10 text-emerald-400 rounded-3xl font-medium self-start">
                      Full-time
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Разработка высоконагруженных интерфейсов на Next.js 16,
                    сложная бизнес-логика, производительность и пользовательский
                    опыт.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-4 py-2 bg-muted rounded-3xl">
                      Next.js 16
                    </span>
                    <span className="text-xs px-4 py-2 bg-muted rounded-3xl">
                      TypeScript
                    </span>
                    <span className="text-xs px-4 py-2 bg-muted rounded-3xl">
                      Framer Motion
                    </span>
                    <span className="text-xs px-4 py-2 bg-muted rounded-3xl">
                      Prisma
                    </span>
                  </div>
                </div>
              </div>

              {/* Опыт 2 */}
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-40 flex-shrink-0">
                  <div className="inline-flex items-center text-center justify-center w-16 h-16 rounded-3xl bg-card border border-border text-xs font-semibold">
                    2023 <br />—<br /> 2024
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-3xl p-8 md:p-10">
                  <div className="flex flex-wrap justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        Frontend Developer
                      </h3>
                      <p className="text-muted-foreground">Компания / Проект</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Создание современных интерфейсов, работа с состоянием
                    (Zustand, TanStack Query), оптимизация производительности и
                    внедрение анимаций.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-4 py-2 bg-muted rounded-3xl">
                      React
                    </span>
                    <span className="text-xs px-4 py-2 bg-muted rounded-3xl">
                      TypeScript
                    </span>
                    <span className="text-xs px-4 py-2 bg-muted rounded-3xl">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>

              {/* Опыт 3 (можно добавить ещё) */}
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-40 flex-shrink-0">
                  <div className="inline-flex items-center text-center justify-center w-16 h-16 rounded-3xl bg-card border border-border text-xs font-semibold">
                    2022 <br />—<br /> 2023
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-3xl p-8 md:p-10">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Junior Frontend Developer
                    </h3>
                    <p className="text-muted-foreground">Первая компания</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-6">
                    Начало пути. Изучение современных инструментов, участие в
                    коммерческих проектах.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            {/* Левая колонка */}
            <div className="md:col-span-5">
              <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] mb-6">
                Давай работать вместе
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ищу интересные проекты и сотрудничество.
                <br />
                Буду рад обсудить вашу задачу.
              </p>

              <div className="mt-12 space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:your@email.com"
                    className="text-2xl font-medium hover:text-primary transition-colors"
                  >
                    your@email.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telegram</div>
                  <a
                    href="https://t.me/yourusername"
                    className="text-2xl font-medium hover:text-primary transition-colors"
                  >
                    @yourusername
                  </a>
                </div>
              </div>
            </div>

            {/* Правая колонка — форма */}
            <div className="md:col-span-7">
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                <form className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background border border-border rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Владислав"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Email или Telegram
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background border border-border rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Сообщение
                    </label>
                    <textarea
                      rows={6}
                      className="w-full bg-background border border-border rounded-3xl px-5 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-primary text-primary-foreground rounded-3xl font-medium text-lg hover:bg-primary/90 transition-all active:scale-[0.98]"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Логотип и копирайт */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-2xl">
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
              <a href="#about" className="hover:text-primary transition-colors">
                Обо мне
              </a>
              <a
                href="#skills"
                className="hover:text-primary transition-colors"
              >
                Навыки
              </a>
              <a
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                Проекты
              </a>
              <a
                href="#experience"
                className="hover:text-primary transition-colors"
              >
                Опыт
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Контакт
              </a>
            </div>

            {/* Социальные сети */}
            <div className="flex gap-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Telegram
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
