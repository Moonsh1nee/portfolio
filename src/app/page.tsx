"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-[100dvh] flex items-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(at_40%_20%,rgba(99,102,241,0.15),transparent_50%)]" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm mb-8">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Открыт к новым интересным проектам — 2026
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-[82px] font-semibold tracking-tighter leading-none mb-8">
              Привет.
              <br />Я{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Frontend
              </span>
              <br />
              разработчик.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-12">
              Создаю чистые, быстрые и продуманные интерфейсы. Next.js •
              TypeScript • современные анимации.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-medium flex items-center justify-center gap-3 text-lg hover:bg-primary/90 transition"
              >
                Посмотреть проекты
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </motion.a>

              <a
                href="#contact"
                className="px-8 py-4 border border-border hover:bg-muted rounded-2xl font-medium text-lg transition flex items-center justify-center"
              >
                Написать мне
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-6 mt-16 text-muted-foreground">
              <a
                href="https://github.com/твой-ник"
                target="_blank"
                className="hover:text-foreground transition flex items-center gap-2"
              >
                <span className="font-mono text-lg">GitHub</span>
                <ExternalLink size={20} />
              </a>

              <a
                href="https://linkedin.com/in/твой-ник"
                target="_blank"
                className="hover:text-foreground transition flex items-center gap-2"
              >
                <span className="font-medium">LinkedIn</span>
                <ExternalLink size={20} />
              </a>

              <a
                href="mailto:твой@email.com"
                className="hover:text-foreground transition flex items-center gap-2"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Декоративный rotating ring */}
        <div className="absolute bottom-12 right-8 hidden xl:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="w-72 h-72 border border-border/60 rounded-full flex items-center justify-center"
          >
            <div className="w-52 h-52 border border-border/40 rounded-full" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
