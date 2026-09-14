"use client";

import PhotoCarousel from "@/components/PhotoCarousel";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
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
                Я full-stack разработчик, который доводит продукты в одиночку
                — от интерфейса на Next.js и TypeScript до бэкенда, базы
                данных и деплоя на собственный сервер. За плечами один
                коммерческий фриланс-проект и несколько полноценных
                pet-продуктов, каждый из которых собран, задеплоен и
                поддерживается самостоятельно.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-muted-foreground text-sm mb-1">
                  Формат
                </div>
                <div className="text-2xl font-semibold">
                  Соло, от идеи до прода
                </div>
              </div>
              <div>
                <div className="text-muted-foreground text-sm mb-1">
                  Подход
                </div>
                <div className="text-2xl font-semibold">
                  Full-stack: UI, БД, инфраструктура
                </div>
              </div>
              <div>
                <div className="text-muted-foreground text-sm mb-1">
                  На проде
                </div>
                <div className="text-2xl font-semibold">
                  getgrip.ru — свой VPS
                </div>
              </div>
              <div>
                <div className="text-muted-foreground text-sm mb-1">
                  Основной стек
                </div>
                <div className="text-2xl font-semibold">Next.js + TS</div>
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
              <ArrowRight aria-hidden="true" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
