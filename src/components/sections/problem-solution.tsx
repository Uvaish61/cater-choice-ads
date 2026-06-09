"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";
import { problemSolutionContent } from "@/data/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function ProblemSolution() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {problemSolutionContent.problemHeadline}
          </h2>
          <p className="text-gray-500 text-lg">
            Most catering businesses deal with at least one of these frustrating supplier problems every week.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {/* Problems column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-center mb-8">
              <span className="inline-block bg-red-50 text-red-600 font-semibold px-5 py-2 rounded-full text-sm border border-red-100">
                The Old Way — Frustrating
              </span>
            </div>
            {problemSolutionContent.problems.map((problem) => (
              <motion.div
                key={problem.title}
                variants={fadeUp}
                className="flex gap-4 p-5 rounded-2xl bg-red-50/60 border border-red-100 hover:bg-red-50 transition-colors"
              >
                <XCircle className="h-6 w-6 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{problem.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-center mb-8">
              <span className="inline-block bg-green-50 text-green-700 font-semibold px-5 py-2 rounded-full text-sm border border-green-200">
                The Cater Choice Way — Simple
              </span>
            </div>
            {problemSolutionContent.solutions.map((solution) => (
              <motion.div
                key={solution.title}
                variants={fadeUp}
                className="flex gap-4 p-5 rounded-2xl bg-green-50/60 border border-green-100 hover:bg-green-50 transition-colors"
              >
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{solution.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
