"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CheckCircle, Truck, Tag, UserCheck, Phone, Download, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroContent } from "@/data/content";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = { check: CheckCircle, truck: Truck, tag: Tag, user: UserCheck };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-[90vh] gradient-hero flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-green-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-green-50/80 blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div className="space-y-8">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <Badge className="bg-green-100 text-green-800 border-green-200 text-sm px-4 py-1.5 font-medium">
              {heroContent.badge}
            </Badge>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 text-balance">
              {heroContent.headline}{" "}
              <span className="text-green-600">{heroContent.headlineAccent}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
              {heroContent.subheadline}
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-green-200 group cursor-pointer"
              onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Phone className="mr-2 h-5 w-5" />
              {heroContent.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
            </Button>
            <a
              href={COMPANY.catalogUrl}
              download
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-green-300 text-green-700 hover:bg-green-50 font-semibold px-8 py-6 text-base"
              )}
            >
              <Download className="mr-2 h-5 w-5" />
              {heroContent.secondaryCta}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {heroContent.trustBadges.map((badge) => {
                const Icon = iconMap[badge.icon as keyof typeof iconMap] ?? CheckCircle;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 bg-white rounded-xl border border-gray-100 px-3 py-2.5 shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-green-600 shrink-0" />
                    <span className="text-xs font-medium text-gray-700">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {["R", "H", "C", "M"].map((initial) => (
                  <div key={initial} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {initial}
                  </div>
                ))}
              </div>
              <span>
                <strong className="text-gray-900">5,000+</strong> UK businesses trust us
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right — hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center">
              <div className="text-center text-white/80 space-y-3 p-8">
                <div className="text-6xl font-bold text-white">🏭</div>
                <p className="text-xl font-semibold text-white">Cater Choice Warehouse</p>
                <p className="text-sm opacity-60">Replace with: /public/images/warehouse.webp</p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 left-4 bg-white rounded-2xl p-3 shadow-xl border border-gray-100"
            >
              <p className="text-xs text-gray-500">In Stock</p>
              <p className="text-2xl font-bold text-green-600">10,000+</p>
              <p className="text-xs text-gray-500">Products</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-4 right-4 bg-white rounded-2xl p-3 shadow-xl border border-gray-100"
            >
              <p className="text-xs text-gray-500">Delivery</p>
              <p className="text-2xl font-bold text-green-600">48hr</p>
              <p className="text-xs text-gray-500">UK-wide</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Phone bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-green-700 text-white py-3 px-4 text-center text-sm"
      >
        Call us now:{" "}
        <a href={`tel:${COMPANY.phone}`} className="font-bold underline underline-offset-2 hover:text-green-200 transition-colors">
          {COMPANY.phone}
        </a>
        {" "}— Mon–Fri 8am–6pm
      </motion.div>
    </section>
  );
}
