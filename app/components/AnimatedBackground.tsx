"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  // stars (fixed positions)
  const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    size: (i % 3) + 1,
    delay: (i % 10) * 0.2,
    duration: 2 + (i % 4),
  }));

  // bubbles (random-ish, floating)
  const bubbles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    left: `${(i * 13 + 7) % 100}%`,
    size: 60 + (i % 5) * 25,
    delay: i * 0.6,
    duration: 8 + (i % 5) * 2,
    opacity: 0.08 + (i % 4) * 0.03,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft glow blobs */}
      <div className="absolute -top-52 left-[10%] h-[520px] w-[520px] rounded-full bg-violet-500/35 blur-[160px]" />
      <div className="absolute -top-44 right-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/25 blur-[170px]" />
      <div className="absolute -bottom-56 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-pink-400/25 blur-[180px]" />

      {/* moon */}
      <motion.div
        className="absolute right-[8%] top-[14%] h-28 w-28 rounded-full bg-white/10 blur-[0px] ring-1 ring-white/20"
        animate={{ y: [0, -10, 0], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-white/5 to-transparent" />
        <div className="absolute left-5 top-6 h-6 w-6 rounded-full bg-white/10" />
        <div className="absolute left-14 top-16 h-3 w-3 rounded-full bg-white/10" />
        <div className="absolute left-12 top-8 h-4 w-4 rounded-full bg-white/10" />
      </motion.div>

      {/* twinkling stars */}
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size, opacity: 0.6 }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* floating bubbles */}
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute bottom-[-120px] rounded-full border border-white/15 bg-white/5 backdrop-blur"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
          }}
          animate={{ y: [-40, -1200], x: [0, 20, -10, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
