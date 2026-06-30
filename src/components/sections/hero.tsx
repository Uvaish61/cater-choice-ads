"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Truck, BadgePercent, ShieldCheck, UtensilsCrossed, Package, BadgeDollarSign, ArrowRight, BookOpen } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroContent } from "@/data/content";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HeroForm } from "@/components/sections/hero-form";

const iconMap = {
  truck: Truck,
  tag:   BadgePercent,
  award: ShieldCheck,
  chef:  UtensilsCrossed,
  check: Package,
  user:  BadgeDollarSign,
};

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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Hero background photo — UK food warehouse / produce market */}
      <Image
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&q=80&auto=format&fit=crop"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Left overlay: fully opaque on left (text readable), fades right (photo shows through) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/40 z-[1]" />
      {/* Bottom vignette so phone bar reads cleanly */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/35 to-transparent z-[1]" />

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div className="space-y-8">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <Badge className="bg-green-100 text-green-800 border-green-200 text-sm px-4 py-1.5 font-medium">
              {heroContent.badge}
            </Badge>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-gray-900 text-balance">
              {heroContent.headline}{" "}
              <span className="text-green-600 drop-shadow-sm">{heroContent.headlineAccent}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 max-w-lg leading-relaxed">
              {heroContent.subheadline}
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="group bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold px-8 py-6 text-base shadow-xl shadow-green-300/50 hover:shadow-green-400/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                <BadgePercent className="mr-2 h-5 w-5" />
                {heroContent.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-[#25D366] hover:bg-[#20BD5C] active:bg-[#1aab52] text-white font-bold px-8 py-6 text-base shadow-xl shadow-green-300/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                )}
              >
                <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {heroContent.whatsappCta}
              </a>
            </div>
            <a
              href={COMPANY.catalogUrl}
              download
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-2 border-green-400 text-green-700 hover:bg-green-600 hover:text-white hover:border-green-600 font-bold px-8 py-6 text-base w-fit transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              )}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              {heroContent.secondaryCta}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {heroContent.trustBadges.map((badge) => {
                const Icon = iconMap[badge.icon as keyof typeof iconMap] ?? Package;
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

        {/* Right — lead capture form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="relative"
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5, type: "spring", stiffness: 200 }}
            className="absolute -top-5 left-4 z-10 flex items-center gap-2.5 bg-white border border-green-100 rounded-full pl-2.5 pr-4 py-1.5 shadow-lg shadow-green-100/60"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-gray-800">10,000+ Products Available</span>
          </motion.div>

          <HeroForm />
        </motion.div>
      </div>

      {/* Phone bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-green-700/90 backdrop-blur-sm text-white py-3 px-4 text-center text-sm"
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
