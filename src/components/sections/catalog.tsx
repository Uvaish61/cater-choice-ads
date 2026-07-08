"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Download,
  BookOpen,
  Tag,
  Layers,
} from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Toast } from "@/components/shared/toast";
import { cn } from "@/lib/utils";

const whatsInside = [
  {
    icon: BookOpen,
    title: "10,000+ Products with Trade Prices",
    desc: "Full price list — no hidden costs, no minimum spend surprises",
  },
  {
    icon: Layers,
    title: "Category-Wise Product List",
    desc: "20+ categories from frozen foods to packaging and cleaning",
  },
  {
    icon: Tag,
    title: "Bulk Pricing Tiers & Volume Discounts",
    desc: "See exactly how much you save as your order size grows",
  },
];

export function Catalog() {
  const [showToast, setShowToast] = useState(false);

  return (
    <section className="py-[60px] sm:py-[120px] bg-green-900 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-800/60 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-green-800/60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

          {/* Left — what's inside */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-green-700 text-green-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              Free Download · No Sign-up Required
            </span>

            <h2 className="text-4xl font-bold text-white leading-tight mb-4">
              Everything You Need to{" "}
              <span className="text-green-300">Source Smarter</span>
            </h2>

            <p className="text-green-200 text-base leading-relaxed mb-10">
              All 10,000+ products, trade pricing tiers, and UK delivery schedules in one PDF.
            </p>

            <ul className="space-y-5">
              {whatsInside.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-green-800 border border-green-700 flex items-center justify-center">
                    <item.icon className="h-[18px] w-[18px] text-green-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{item.title}</p>
                    <p className="text-green-300 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Catalog meta */}
            <div className="mt-10 flex flex-wrap gap-4">
              {["PDF Format", "8MB", "Updated 2024", "Instant Download"].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-green-300 text-xs font-medium border border-green-700 rounded-full px-3 py-1"
                >
                  <CheckCircle className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — direct download card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Card top bar */}
              <div className="bg-green-50 border-b border-green-100 px-8 py-5 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                  <Download className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Free Trade Catalog</p>
                  <p className="text-xs text-gray-500">10,000+ products · PDF · 8MB</p>
                </div>
              </div>

              {/* Product photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80&auto=format&fit=crop"
                  alt="Trade catalog products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    2024 Edition · 10,000+ Products
                  </span>
                </div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Download Complete Product Catalog
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Get instant access to our full 2024 trade catalog — no sign-up required.
                </p>
                <button
                  type="button"
                  onClick={() => setShowToast(true)}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-xl shadow-md shadow-green-100"
                  )}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Free Catalog
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <Toast
        message="We will share the updated catalogue with you soon."
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
