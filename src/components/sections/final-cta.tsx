"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { finalCtaContent } from "@/data/content";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full border border-white/30"
            >
              🎉 Join 5,000+ Happy Trade Customers
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              {finalCtaContent.headline}
            </h2>
            <p className="text-green-100 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
              {finalCtaContent.subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href={`tel:${COMPANY.phone}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-green-700 hover:bg-green-50 font-bold px-10 py-6 text-base shadow-xl"
              )}
            >
              <Phone className="mr-2 h-5 w-5" />
              {finalCtaContent.primaryCta}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/50 bg-white/10 text-white hover:bg-white/20 font-bold px-10 py-6 text-base backdrop-blur-sm"
              )}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {finalCtaContent.secondaryCta}
            </a>
            <Button
              size="lg"
              className="bg-green-800 hover:bg-green-900 text-white font-bold px-10 py-6 text-base shadow-xl cursor-pointer border border-white/20"
              onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              {finalCtaContent.tertiaryCta}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-green-200 text-sm">
            {["No minimum order", "Trade account in 24 hours", "Free delivery over £150"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="text-green-300">✓</span> {item}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-white/20">
            <p className="text-green-200 text-sm">
              Questions? Call us:{" "}
              <a href={`tel:${COMPANY.phone}`} className="text-white font-bold hover:underline">
                {COMPANY.phone}
              </a>
              {" "}· Mon–Fri 8am–6pm
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
