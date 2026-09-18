"use client";

import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const photos = [
  { id: 1, src: "/about/vladislav-1.jpg" },
  { id: 2, src: "/about/vladislav-2.jpg" },
  { id: 3, src: "/about/vladislav-3.jpg" },
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
            <Image
              src={photo.src}
              alt="Владислав"
              fill
              sizes="380px"
              priority={isActive}
              draggable={false}
              className="object-cover pointer-events-none"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
