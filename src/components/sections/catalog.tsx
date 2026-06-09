"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const catalogHighlights = [
  "10,000+ products with full trade pricing",
  "New arrivals & seasonal specials",
  "Volume discount tiers clearly listed",
  "Product specifications & pack sizes",
  "Allergen & nutritional information",
  "Delivery & terms of trade",
];

export function Catalog() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl grid lg:grid-cols-2">
            {/* Left — green gradient panel */}
            <div className="gradient-green p-10 sm:p-14 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-xl" />
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex p-4 bg-white/20 rounded-2xl mb-6">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                    Download Our <br />Free Trade Catalog
                  </h2>
                  <p className="text-green-100 text-base leading-relaxed mb-8">
                    Get instant access to our complete 2024 product catalog with full trade pricing and volume discounts.
                  </p>
                  <a
                    href={COMPANY.catalogUrl}
                    download
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-6 text-base shadow-lg w-full sm:w-auto"
                    )}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Free Catalog
                  </a>
                  <p className="text-green-200 text-xs mt-4">
                    PDF · 8MB · No email required · Instant download
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right — highlights */}
            <div className="bg-gray-50 p-10 sm:p-14 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">What&apos;s inside:</h3>
                <p className="text-gray-500 text-sm mb-7">Everything you need to make informed buying decisions.</p>
                <ul className="space-y-3.5">
                  {catalogHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-5 bg-green-50 rounded-2xl border border-green-100">
                  <p className="text-sm font-semibold text-green-800 mb-1">💡 Pro tip</p>
                  <p className="text-xs text-green-700 leading-relaxed">
                    Send the catalog to your chef or kitchen manager — they can use it to build your standing order list.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
