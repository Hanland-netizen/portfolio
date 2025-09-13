// Hero.tsx — subtle parallax (scroll + mouse) on the galaxy background
"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ----- Scroll parallax: move bg slightly slower than page -----
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // start when hero hits top; end when hero leaves
  });
  // move up to -80px across the hero’s scroll range (subtle)
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // ----- Mouse parallax: tiny drift based on cursor position -----
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // spring = smoother movement
  const mxSpring = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.2 });
  const mySpring = useSpring(my, { stiffness: 120, damping: 18, mass: 0.2 });

  // map -1..1 to few px shift (tweak 16 → stronger, 8 → softer)
  const xParallax = useTransform(mxSpring, [-1, 1], [12, -12]);
  const yMouseParallax = useTransform(mySpring, [-1, 1], [10, -10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;  // 0..1
    const cy = (e.clientY - rect.top) / rect.height;  // 0..1
    mx.set((cx - 0.5) * 2); // -1 .. 1
    my.set((cy - 0.5) * 2); // -1 .. 1
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] w-full overflow-hidden bg-black"
    >
      {/* Parallax background (scroll + mouse) */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: yParallax, x: xParallax }}
      >
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          // tiny extra mouse drift on the video itself
          style={{ x: xParallax, y: yMouseParallax }}
        >
          <source src="/videos/galaxy.webm" type="video/webm" />
          <source src="/videos/galaxy.mp4" type="video/mp4" />
        </motion.video>

        {/* soft bottom fade so the planet edge looks designed */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </motion.div>

      {/* (optional) readability veil */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage: `
            radial-gradient(120% 80% at 60% 40%, rgba(0,0,0,0) 35%, rgba(0,0,0,.85) 75%, rgba(0,0,0,.95) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.85) 80%, #000 100%)`,
        }}
      />

      {/* Foreground content */}
      <div className="relative z-30 px-6">
        <HeroContent />
      </div>
    </section>
  );
};
