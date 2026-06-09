"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/content";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ value, label, suffix, index }: { value: string; label: string; suffix?: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/,/g, ""), 10);
  const count = useCountUp(numericValue, 2000, inView);

  const formattedCount = count.toLocaleString("en-GB");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-8"
    >
      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
        {formattedCount}
        {suffix && <span className="text-green-300">{suffix}</span>}
      </div>
      <p className="text-green-100 font-medium text-base sm:text-lg">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-20 sm:py-24 gradient-green relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Trusted Across the UK
          </h2>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Numbers that reflect our commitment to quality and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-green-500/40 divide-y lg:divide-y-0 border border-green-500/40 rounded-3xl overflow-hidden bg-green-700/30 backdrop-blur-sm max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-green-200 text-sm mt-8"
        >
          ★★★★★ Rated 4.9/5 by verified trade customers
        </motion.p>
      </div>
    </section>
  );
}
