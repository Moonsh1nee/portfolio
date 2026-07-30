"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const typingText =
  "Frontend-разработчик, создающий быстрые, красивые и масштабируемые интерфейсы с помощью современных технологий.";

export default function Hero() {
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
              <ArrowRight
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform"
              />
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
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-6 xl:right-12 hidden lg:block"
      >
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
        aria-hidden="true"
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
  );
}
