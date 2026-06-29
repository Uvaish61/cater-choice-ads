"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Download,
  Loader2,
  Mail,
  Phone,
  BookOpen,
  Tag,
  Layers,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
});

type FormValues = z.infer<typeof schema>;

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
  {
    icon: Truck,
    title: "UK Delivery Zones & Timelines",
    desc: "Next-day, 48-hour and regional delivery schedule explained",
  },
];

export function Catalog() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "catalog" }),
      });
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      // Trigger PDF download after a short delay so the success UI renders first
      setTimeout(() => downloadRef.current?.click(), 300);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-green-900 relative overflow-hidden">
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

      {/* Hidden auto-download link */}
      <a
        ref={downloadRef}
        href={COMPANY.catalogUrl}
        download
        className="hidden"
        aria-hidden
      />

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

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Everything You Need to{" "}
              <span className="text-green-300">Source Smarter</span>
            </h2>

            <p className="text-green-200 text-base leading-relaxed mb-10">
              Our complete 2024 trade catalog — used by 5,000+ UK catering businesses to plan orders, compare pricing, and reduce supply costs.
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
                    <item.icon className="h-4.5 w-4.5 text-green-300 h-[18px] w-[18px]" />
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

          {/* Right — gated form card */}
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

              <div className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="inline-flex p-4 bg-green-50 rounded-full mb-4">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Your download has started!
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      The PDF is downloading now. Our team will also be in touch to help with your order.
                    </p>
                    <a
                      href={COMPANY.catalogUrl}
                      download
                      className="inline-flex items-center gap-2 text-green-700 text-sm font-semibold hover:underline"
                    >
                      <Download className="h-4 w-4" />
                      Click here if the download didn&apos;t start
                    </a>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Download Complete Product Catalog
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Enter your details below to get instant access.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="cat-email" className="text-sm font-medium text-gray-700">
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                          <Input
                            id="cat-email"
                            type="email"
                            placeholder="you@restaurant.co.uk"
                            className={cn(
                              "h-11 pl-9 rounded-xl border-gray-200 focus-visible:ring-green-500",
                              errors.email && "border-red-300"
                            )}
                            {...register("email")}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="cat-phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                          <Input
                            id="cat-phone"
                            type="tel"
                            placeholder="+44 7700 000000"
                            className={cn(
                              "h-11 pl-9 rounded-xl border-gray-200 focus-visible:ring-green-500",
                              errors.phone && "border-red-300"
                            )}
                            {...register("phone")}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs">{errors.phone.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={submitting}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-xl shadow-md shadow-green-100 cursor-pointer mt-2"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Preparing download...
                          </>
                        ) : (
                          <>
                            <Download className="mr-2 h-4 w-4" />
                            Download Complete Product Catalog
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="mt-5 flex items-start gap-2 text-xs text-gray-400">
                      <ShieldCheck className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
                      No spam — we&apos;ll only use your details to send trade offers and product updates. Unsubscribe anytime.
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
