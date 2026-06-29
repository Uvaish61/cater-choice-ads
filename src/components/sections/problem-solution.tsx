"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight, Zap, Building2 } from "lucide-react";
import { problemSolutionContent } from "@/data/content";

// Pair each problem directly with its matching solution
const pairs = [
  { problem: problemSolutionContent.problems[0], solution: problemSolutionContent.solutions[3] },
  { problem: problemSolutionContent.problems[1], solution: problemSolutionContent.solutions[0] },
  { problem: problemSolutionContent.problems[2], solution: problemSolutionContent.solutions[5] },
  { problem: problemSolutionContent.problems[3], solution: problemSolutionContent.solutions[1] },
];

// Remaining solutions shown as bonus feature pills
const bonusSolutions = [
  { ...problemSolutionContent.solutions[2], icon: Zap },
  { ...problemSolutionContent.solutions[4], icon: Building2 },
];

export function ProblemSolution() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {problemSolutionContent.problemHeadline}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Most catering businesses deal with at least one of these every week — here&apos;s how we fix each one.
          </p>
        </motion.div>

        {/* Column labels */}
        <div className="hidden lg:grid grid-cols-[1fr_48px_1fr] gap-4 mb-4 px-1">
          <div className="text-center">
            <span className="inline-block bg-orange-50 text-orange-600 font-semibold px-5 py-1.5 rounded-full text-sm border border-orange-100">
              The Old Way — Frustrating
            </span>
          </div>
          <div />
          <div className="text-center">
            <span className="inline-block bg-green-50 text-green-700 font-semibold px-5 py-1.5 rounded-full text-sm border border-green-200">
              The Cater Choice Way — Simple
            </span>
          </div>
        </div>

        {/* Paired rows */}
        <div className="space-y-3">
          {pairs.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_48px_1fr] gap-3 items-stretch"
            >
              {/* Problem */}
              <div className="flex gap-3 p-5 rounded-2xl bg-orange-50/70 border border-orange-100">
                <XCircle className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{pair.problem.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{pair.problem.description}</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Mobile arrow */}
              <div className="flex lg:hidden justify-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center rotate-90">
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Solution */}
              <div className="flex gap-3 p-5 rounded-2xl bg-green-50/70 border border-green-100">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{pair.solution.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{pair.solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus solutions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 pt-8 border-t border-gray-100"
        >
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
            Plus these additional benefits
          </p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {bonusSolutions.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 p-4 rounded-2xl bg-green-50/50 border border-green-100 items-start"
              >
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
