"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/** Intrinsic dimensions of public/headshot.jpeg */
const HEADSHOT_WIDTH = 800;
const HEADSHOT_HEIGHT = 800;

/** Same motion timing as FadeInText (1.5s fade + slight rise). */
export default function HeroHeadshotBackground() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-end pr-0 sm:pr-4 md:pr-8 lg:pr-12"
      initial={{ opacity: 100, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Right-anchored: sits in the right half / margin, not centered behind the headline */}
      <div className="relative max-h-[min(100dvh,800px)] w-full max-w-[800px] shrink-0 md:translate-x-[min(12vw,120px)] lg:translate-x-[min(18vw,200px)]">
        <Image
          src="/headshot.jpeg"
          alt=""
          width={HEADSHOT_WIDTH}
          height={HEADSHOT_HEIGHT}
          priority
          sizes="(max-width: 800px) 100vw, 800px"
          className="h-auto w-full max-h-[min(100dvh,800px)] object-contain"
        />
        {/* Scrim sized to the image only */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/75 via-background/45 to-background/90 dark:from-background/85 dark:via-background/55 dark:to-background/95"
          aria-hidden
        />
      </div>
    </motion.div>
  );
}
