"use client";

import { motion, PanInfo } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const photos = [
  { id: 1, gradient: "from-indigo-500 to-violet-600" },
  { id: 2, gradient: "from-purple-500 to-fuchsia-600" },
  { id: 3, gradient: "from-blue-500 to-cyan-600" },
  { id: 4, gradient: "from-violet-500 to-pink-600" },
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Автоплей
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    } else if (info.offset.x > 80) {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div
      className="relative h-[460px] w-full max-w-[380px] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {photos.map((photo, index) => {
        const offset = (index - currentIndex + photos.length) % photos.length;
        const isActive = index === currentIndex;

        return (
          <motion.div
            key={photo.id}
            className="absolute inset-0 rounded-3xl overflow-hidden border border-border shadow-2xl cursor-grab active:cursor-grabbing"
            style={{
              zIndex: photos.length - offset,
              rotate: isActive ? 0 : (offset - 2) * 10,
            }}
            animate={{
              scale: isActive ? 1 : 0.9 - offset * 0.06,
              y: isActive ? 0 : offset * 25,
              opacity: offset > 3 ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <div
              className={`w-full h-full bg-gradient-to-br ${photo.gradient} flex items-center justify-center text-white`}
            >
              {/* Позже сюда можно поставить <Image src={...} /> */}
              <div className="text-8xl opacity-20">📷</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
