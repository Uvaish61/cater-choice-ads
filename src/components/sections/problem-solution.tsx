"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";
import { problemSolutionContent } from "@/data/content";

const pairs = [
  { problem: problemSolutionContent.problems[0], solution: problemSolutionContent.solutions[3] },
  { problem: problemSolutionContent.problems[1], solution: problemSolutionContent.solutions[0] },
  { problem: problemSolutionContent.problems[2], solution: problemSolutionContent.solutions[5] },
  { problem: problemSolutionContent.problems[3], solution: problemSolutionContent.solutions[1] },
];

const trustBadges = ["ISO 9001 Certified", "HACCP Compliant", "BRC Approved", "FSA Registered", "15 Years Trading"];

// Vertical stagger per row [problem-card marginTop, solution-card marginTop]
// Intentionally non-uniform so the rhythm feels chosen, not generated
const rowStagger: [number, number][] = [
  [0, 10],
  [8, 0],
  [0, 9],
  [10, 0],
];

// Bezier path alternates curve direction row-by-row
const curvePaths = [
  "M4,24 C22,6 58,42 76,24",
  "M4,24 C22,42 58,6 76,24",
  "M4,24 C22,6 58,42 76,24",
  "M4,24 C22,42 58,6 76,24",
];

export function ProblemSolution() {
  return (
    <section
      className="py-[60px] sm:py-[120px] relative overflow-hidden"
      style={{
        backgroundColor: "#fafaf9",
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.052) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="container mx-auto px-4 max-w-5xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            {problemSolutionContent.problemHeadline}
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Most catering businesses deal with at least one of these every week — here&apos;s how we fix each one.
          </p>
        </motion.div>

        {/* Column labels — desktop only */}
        <div className="hidden lg:flex mb-5 items-center">
          <div className="flex-1 text-center">
            <span className="inline-block bg-orange-50 text-orange-700 font-semibold px-5 py-1.5 rounded-full text-sm border border-orange-200">
              The Old Way — Frustrating
            </span>
          </div>
          <div className="w-20 shrink-0" />
          <div className="flex-1 text-center">
            <span className="inline-block bg-green-50 text-green-700 font-semibold px-5 py-1.5 rounded-full text-sm border border-green-200">
              The Cater Choice Way — Simple
            </span>
          </div>
        </div>

        {/* Paired rows */}
        <div className="space-y-3">
          {pairs.map((pair, i) => {
            const [probOffset, solOffset] = rowStagger[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex flex-col lg:flex-row lg:items-start gap-3 lg:gap-0"
              >
                {/* Problem card */}
                <div
                  className="flex-1 flex gap-3.5 p-5 rounded-2xl border border-orange-200 shadow-sm"
                  style={{
                    marginTop: probOffset,
                    backgroundColor: "#fff7ed",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0"
                    style={{ boxShadow: "0 0 16px 2px rgba(234,88,12,0.26)" }}
                  >
                    <XCircle className="h-6 w-6 text-orange-500" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-sm mb-1">{pair.problem.title}</p>
                    <p className="text-xs text-stone-500 leading-relaxed">{pair.problem.description}</p>
                  </div>
                </div>

                {/* Desktop curved arrow */}
                <div className="hidden lg:flex items-center justify-center w-20 shrink-0 self-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                  >
                    <svg
                      viewBox="0 0 80 48"
                      width="80"
                      height="48"
                      aria-hidden="true"
                      style={{ overflow: "visible" }}
                    >
                      <defs>
                        <linearGradient
                          id={`arrow-grad-${i}`}
                          x1="4" y1="0" x2="76" y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#ea580c" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                        <marker
                          id={`arrowhead-${i}`}
                          markerWidth="8"
                          markerHeight="7"
                          refX="7"
                          refY="3.5"
                          orient="auto"
                        >
                          <polygon points="0 0, 8 3.5, 0 7" fill="#16a34a" />
                        </marker>
                      </defs>
                      <path
                        d={curvePaths[i]}
                        stroke={`url(#arrow-grad-${i})`}
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        markerEnd={`url(#arrowhead-${i})`}
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Mobile arrow — S-curve pointing downward */}
                <div className="flex lg:hidden justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 + 0.2 }}
                  >
                    <svg
                      viewBox="0 0 32 30"
                      width="32"
                      height="30"
                      aria-hidden="true"
                      style={{ overflow: "visible" }}
                    >
                      <defs>
                        <linearGradient
                          id={`mob-grad-${i}`}
                          x1="0" y1="3" x2="0" y2="27"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#ea580c" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                        <marker
                          id={`mob-tip-${i}`}
                          markerWidth="6"
                          markerHeight="6"
                          refX="3"
                          refY="5.5"
                          orient="auto"
                        >
                          <polygon points="0 0, 6 0, 3 6" fill="#16a34a" />
                        </marker>
                      </defs>
                      <path
                        d="M16,3 C8,11 24,19 16,27"
                        stroke={`url(#mob-grad-${i})`}
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        markerEnd={`url(#mob-tip-${i})`}
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Solution card */}
                <div
                  className="flex-1 flex gap-3.5 p-5 rounded-2xl border border-green-200 shadow-sm"
                  style={{
                    marginTop: solOffset,
                    backgroundColor: "#f0fdf4",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0"
                    style={{ boxShadow: "0 0 16px 2px rgba(22,163,74,0.26)" }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-600" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-sm mb-1">{pair.solution.title}</p>
                    <p className="text-xs text-stone-500 leading-relaxed">{pair.solution.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 pt-8 border-t border-stone-200 flex flex-wrap justify-center items-center gap-4"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-stone-600">{badge}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
