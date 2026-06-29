"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tag, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import kidsMealBoxesImg from "@/assets/images/kids-meal-boxes.jpg";
import frostedCarrierBagsImg from "@/assets/images/frosted-carrier-bags.jpg";
import kraftPaperBagsImg from "@/assets/images/kraft-paper-bags.jpg";

const products = [
  {
    id: 1,
    name: "Kids Meal Activity Boxes",
    description: "Branded fun-meal boxes with built-in activity panels. Perfect for family restaurants & cafes.",
    tag: "Best Seller",
    tagColor: "bg-amber-100 text-amber-700",
    image: kidsMealBoxesImg,
    alt: "Kids meal activity boxes with animal-themed designs",
    moq: "From 100 units",
    badge: "Customisable",
  },
  {
    id: 2,
    name: "Frosted Carrier Bags",
    description: "Durable frosted plastic bags with reinforced handles. Available in multiple sizes for takeaways & retail.",
    tag: "Trade Price",
    tagColor: "bg-green-100 text-green-700",
    image: frostedCarrierBagsImg,
    alt: "White frosted plastic carrier bags with handles",
    moq: "From 500 units",
    badge: "Bulk Discount",
  },
  {
    id: 3,
    name: "Kraft Paper Bags",
    description: "Eco-friendly brown kraft paper bags — food-safe, compostable, ideal for bakeries and deli counters.",
    tag: "Eco Choice",
    tagColor: "bg-lime-100 text-lime-700",
    image: kraftPaperBagsImg,
    alt: "Brown kraft paper bags stacked",
    moq: "From 200 units",
    badge: "Eco-Friendly",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Packaging Range
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Quality Packaging at <span className="text-green-600">Trade Prices</span>
          </h2>
          <p className="text-gray-500 text-lg">
            2,500+ packaging lines in stock. From takeaway bags to branded boxes — sourced, stocked, and shipped UK-wide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                />
                <span className={cn("absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full", product.tagColor)}>
                  {product.tag}
                </span>
                <span className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 text-gray-700 border border-gray-200">
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-1.5">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-green-600 text-xs font-semibold">
                    <Tag className="h-3.5 w-3.5" />
                    {product.moq}
                  </div>
                  <a
                    href="#lead-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "bg-green-600 hover:bg-green-700 text-white text-xs font-semibold gap-1"
                    )}
                  >
                    Get Price <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            These are just 3 of our <strong className="text-gray-700">2,500+ packaging lines</strong>. Get the full catalog with trade pricing.
          </p>
          <a
            href="#lead-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-green-600 hover:bg-green-700 text-white font-semibold px-8"
            )}
          >
            Request Full Packaging Catalog <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
