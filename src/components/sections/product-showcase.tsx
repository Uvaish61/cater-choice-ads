"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import pittaBreadImg from "@/assets/images/pitta-bread.jpg";
import kraftCarrierBagImg from "@/assets/images/kraft-carrier-bag.jpg";
import pepperoniImg from "@/assets/images/pepperoni.jpg";
import orangeSquashImg from "@/assets/images/orange-squash.jpg";
import thermalRollImg from "@/assets/images/thermal-roll.jpg";
import elephantAttaImg from "@/assets/images/elephant-atta.jpg";
import tunaChunksImg from "@/assets/images/tuna-chunks.jpg";
import duplicateBookImg from "@/assets/images/duplicate-book.jpg";

interface ProductShot {
  name: string;
  image: StaticImageData;
  alt: string;
}

// Grouped by category — a category with more than one photo auto-rotates within a single card
const categoryGroups: {
  category: string;
  tagColor: string;
  itemCount: string;
  shots: ProductShot[];
}[] = [
  {
    category: "Bakery Products",
    tagColor: "bg-amber-100 text-amber-700",
    itemCount: "350+ bakery lines",
    shots: [
      { name: "Large White Pitta Bread", image: pittaBreadImg, alt: "6 flame-baked large white pitta bread pack" },
      { name: "Elephant Atta, 25kg", image: elephantAttaImg, alt: "25kg bag of Elephant fine white chapatti flour" },
    ],
  },
  {
    category: "Beverages",
    tagColor: "bg-sky-100 text-sky-700",
    itemCount: "600+ beverage lines",
    shots: [
      { name: "Orange Squash, Double Strength", image: orangeSquashImg, alt: "Bottle of double strength orange squash" },
    ],
  },
  {
    category: "Packaging",
    tagColor: "bg-lime-100 text-lime-700",
    itemCount: "2,500+ packaging lines",
    shots: [
      { name: "Kraft Carrier Bags", image: kraftCarrierBagImg, alt: "Brown kraft paper carrier bag with handles" },
      { name: "Thermal Till Rolls", image: thermalRollImg, alt: "Roll of thermal receipt paper" },
    ],
  },
  {
    category: "Pizza Supplies",
    tagColor: "bg-red-100 text-red-700",
    itemCount: "200+ pizza lines",
    shots: [
      { name: "Turkey & Beef Pepperoni", image: pepperoniImg, alt: "Sliced turkey and beef pepperoni tray" },
    ],
  },
  {
    category: "Tinned & Ambient",
    tagColor: "bg-cyan-100 text-cyan-700",
    itemCount: "Ambient & tinned range",
    shots: [
      { name: "Tuna Chunks in Brine", image: tunaChunksImg, alt: "Catering tin of tuna chunks in brine" },
    ],
  },
  {
    category: "Catering Essentials",
    tagColor: "bg-violet-100 text-violet-700",
    itemCount: "Till & stationery supplies",
    shots: [
      { name: "Duplicate Order Books", image: duplicateBookImg, alt: "Preema duplicate order book, pack of 5" },
    ],
  },
];

function ProductCard({ group, delay }: { group: (typeof categoryGroups)[number]; delay: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (group.shots.length < 2) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % group.shots.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [group.shots.length]);

  const shot = group.shots[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="snap-start shrink-0 w-[240px] sm:w-[260px] bg-white rounded-2xl overflow-hidden border border-gray-100 border-t-[3px] border-t-green-600 shadow-sm hover:shadow-xl hover:shadow-green-100/50 transition-shadow duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={shot.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={shot.image}
              alt={shot.alt}
              fill
              className="object-cover"
              sizes="260px"
            />
          </motion.div>
        </AnimatePresence>

        <span className={cn("absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full", group.tagColor)}>
          {group.category}
        </span>

        {group.shots.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {group.shots.map((s, i) => (
              <span
                key={s.name}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === active ? "w-4 bg-white" : "w-1.5 bg-white/60"
                )}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-1.5">{shot.name}</h3>
        <p className="text-green-600 text-xs font-semibold">{group.itemCount}</p>
      </div>
    </motion.div>
  );
}

export function ProductShowcase() {
  return (
    <section className="py-[60px] sm:py-[120px] bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            From The Warehouse
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Products, <span className="text-green-600">Real Stock</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg whitespace-nowrap">
            Just a glimpse of our 10,000+ products across 20+ categories.
          </p>
        </motion.div>

        <div className="w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 px-6 sm:px-10">
          {categoryGroups.map((group, i) => (
            <ProductCard key={group.category} group={group} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            These are just a few of our <strong className="text-gray-700">10,000+ products</strong>, spanning{" "}
            <strong className="text-gray-700">20+ categories</strong> — from frozen foods to packaging and cleaning.{" "}
            <a
              href="#lead-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-green-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              Get a quote <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
