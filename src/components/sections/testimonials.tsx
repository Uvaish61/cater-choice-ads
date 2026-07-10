"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, MapPin, Package, Users, Award, Truck } from "lucide-react";
import { testimonials, stats } from "@/data/content";

function useCountUp(target: number, duration = 1800, start = false) {
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

const statIcons = [Package, Users, Award, Truck];

function StatItem({ value, suffix, label, index }: { value: string; suffix?: string; label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/,/g, ""), 10);
  const count = useCountUp(numericValue, 1800, inView);
  const Icon = statIcons[index] ?? Package;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-1.5 text-center"
    >
      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-1">
        <Icon className="h-5 w-5 text-green-600" />
      </div>
      <p className="text-2xl font-extrabold text-gray-900 tabular-nums leading-none">
        {count.toLocaleString("en-GB")}{suffix}
      </p>
      <p className="text-xs font-medium text-gray-500">{label}</p>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="pt-10 sm:pt-16 pb-[60px] sm:pb-[120px] bg-white">
      <div className="container mx-auto px-4">

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16 p-8 bg-green-50 rounded-2xl border border-green-100"
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Customer Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-600">Trade Customers</span> Say
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-5 w-5 text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-2 text-gray-600 font-medium">4.9/5 from 800+ reviews</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 border-t-[3px] border-t-green-600 hover:shadow-xl hover:shadow-green-100/40 hover:border-green-100 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-green-100" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role} · {testimonial.company}
                  </p>
                  <p className="text-xs text-green-600 mt-0.5 flex items-center gap-1">
                    <MapPin className="h-3 w-3 shrink-0" />{testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
