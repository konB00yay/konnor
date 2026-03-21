"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const PLACEHOLDER_PHOTOS = [
  { id: 1, alt: "Anacapri Italy", src: "/anacapri_1.jpg" },
  { id: 2, alt: "Beaver Creek Colorado Ski Lift", src: "/beavercreek.jpg" },
  { id: 3, alt: "Gasworks Park in Seattle", src: "/gasworks.jpg" },
  { id: 4, alt: "The Colisseum in Rome", src: "/rome_1.jpg" },
  { id: 5, alt: "A dome within the Vatican", src: "/vatican.jpg" },
  { id: 6, alt: "The ferry to Whidbey Island Washington", src: "/whidbeyferry.jpg" },
];

export default function PhotographyCarousel() {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % PLACEHOLDER_PHOTOS.length);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + PLACEHOLDER_PHOTOS.length) % PLACEHOLDER_PHOTOS.length);
  }, []);

  useEffect(() => {
    const t = setInterval(goNext, 5000);
    return () => clearInterval(t);
  }, [goNext]);

  return (
    <section className="w-full overflow-hidden">
      <div className="relative mx-auto max-w-4xl">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
          {PLACEHOLDER_PHOTOS.map((photo, i) => (
            <div
              key={photo.id}
              className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
              style={{
                opacity: i === index ? 1 : 0,
                transform: `translateX(${(i - index) * 100}%)`,
              }}
            >
              <Image fill={true} alt={photo.alt} src={photo.src}/>
              <div
                className="h-full w-full bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-600 dark:to-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 text-lg"
                aria-hidden
              >
                {photo.alt}
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-zinc-900/90 p-2 shadow-lg transition hover:bg-white dark:hover:bg-zinc-800"
          aria-label="Previous photo"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-zinc-900/90 p-2 shadow-lg transition hover:bg-white dark:hover:bg-zinc-800"
          aria-label="Next photo"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="mt-4 flex justify-center gap-2">
          {PLACEHOLDER_PHOTOS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-foreground"
                  : "w-2 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
