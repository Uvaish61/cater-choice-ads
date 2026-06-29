"use client";

import { motion } from "framer-motion";
import {
  Package, SprayCan, Wheat, Coffee,
  Snowflake, CookingPot, Sandwich, Droplets, Milk, Pizza
} from "lucide-react";
import { categories } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  snowflake: Snowflake,
  flask: FlaskConical,
  sandwich: Sandwich,
  package: Package,
  droplets: Droplets,
  wheat: Wheat,
  coffee: Coffee,
  sparkles: Sparkles,
  milk: Milk,
  pizza: Pizza,
};

export function Categories() {
  return (
    <section className="py-20 sm:py-28 bg-[#f4fdf7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Product Range
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            10,000+ Products Across <span className="text-green-600">8 Categories</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Everything your catering business needs, from one trusted supplier.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Package;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative group p-5 rounded-2xl border-2 ${cat.color} bg-white cursor-pointer shadow-sm hover:shadow-xl hover:shadow-green-200/50 transition-all duration-300`}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-white shadow-sm border border-gray-100">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 hidden sm:block">
                  {cat.description}
                </p>
                <div className="mt-3">
                  <span className="inline-block text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                    {cat.itemCount} items
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          Can&apos;t find what you need?{" "}
          <button
            onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
            className="text-green-600 font-semibold hover:underline"
          >
            Ask our team — we&apos;ll source it for you.
          </button>
        </motion.p>
      </div>
    </section>
  );
}
