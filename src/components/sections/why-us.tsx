"use client";

import { motion } from "framer-motion";
import { Zap, Tag, UserCheck, RefreshCw, Headphones, Award } from "lucide-react";
import { features } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  tag: Tag,
  "user-check": UserCheck,
  "refresh-cw": RefreshCw,
  headphones: Headphones,
  award: Award,
};

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Why Cater Choice
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built for <span className="text-green-600">Catering Businesses</span>
          </h2>
          <p className="text-gray-500 text-lg">
            We&apos;ve spent 15 years perfecting the wholesale supply experience for UK hospitality businesses.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Zap;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group p-7 rounded-2xl border border-gray-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all duration-300"
              >
                <div className="mb-5">
                  <div className="inline-flex p-3.5 rounded-2xl bg-green-50 group-hover:bg-green-100 transition-colors">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-16 text-sm text-gray-400"
        >
          {["ISO 9001 Certified", "HACCP Compliant", "BRC Approved", "FSA Registered", "15 Years Trading"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="font-medium text-gray-600">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
