"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Users, Award, Truck, Star } from "lucide-react";
import { stats } from "@/data/content";

function useCountUp(target: number, duration = 2200, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Cubic ease-out: fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

const statIcons = [Package, Users, Award, Truck];

function StatCard({
  value,
  label,
  suffix,
  index,
}: {
  value: string;
  label: string;
  suffix?: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numericValue = parseInt(value.replace(/,/g, ""), 10);
  const count = useCountUp(numericValue, 2200, inView);
  const formattedCount = count.toLocaleString("en-GB");
  const Icon = statIcons[index] ?? Package;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-sm hover:bg-white/[0.12] transition-colors duration-300"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] rounded-full bg-gradient-to-r from-transparent via-green-300/70 to-transparent" />

      {/* Icon */}
      <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 shadow-inner">
        <Icon className="h-7 w-7 text-green-300" strokeWidth={1.75} />
      </div>

      {/* Count */}
      <div className="text-5xl sm:text-6xl font-extrabold text-white leading-none mb-1 tabular-nums">
        {formattedCount}
        {suffix && (
          <span className="text-green-300 text-4xl sm:text-5xl">{suffix}</span>
        )}
      </div>

      {/* Label */}
      <p className="text-green-200/80 font-medium text-sm sm:text-base mt-3 leading-snug max-w-[140px]">
        {label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a5c38 0%, #2d8653 100%)",
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />

      {/* Radial glow at center */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(45,134,83,0.4),transparent)]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-green-300/80 font-semibold text-xs uppercase tracking-widest mb-3">
            By the numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Trusted Across the UK
          </h2>
          <p className="text-green-200/70 text-lg max-w-xl mx-auto">
            Numbers that reflect our commitment to quality and reliability.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Star rating */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mt-12 text-green-200/60 text-sm"
        >
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
            ))}
          </span>
          <span>Rated 4.9/5 by verified trade customers</span>
        </motion.div>
      </div>
    </section>
  );
}
