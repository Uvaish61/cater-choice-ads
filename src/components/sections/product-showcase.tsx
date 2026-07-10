"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import pittaBreadImg from "@/assets/images/pitta-bread.jpg";
import kraftCarrierBagImg from "@/assets/images/kraft-carrier-bag.jpg";
import pepperoniImg from "@/assets/images/pepperoni.jpg";
import orangeSquashImg from "@/assets/images/orange-squash.jpg";

const products = [
  {
    id: 1,
    name: "Large White Pitta Bread",
    category: "Bakery Products",
    tagColor: "bg-amber-100 text-amber-700",
    image: pittaBreadImg,
    alt: "6 flame-baked large white pitta bread pack",
    itemCount: "350+ bakery lines",
  },
  {
    id: 2,
    name: "Orange Squash, Double Strength",
    category: "Beverages",
    tagColor: "bg-sky-100 text-sky-700",
    image: orangeSquashImg,
    alt: "Bottle of double strength orange squash",
    itemCount: "600+ beverage lines",
  },
  {
    id: 3,
    name: "Kraft Carrier Bags",
    category: "Packaging",
    tagColor: "bg-lime-100 text-lime-700",
    image: kraftCarrierBagImg,
    alt: "Brown kraft paper carrier bag with handles",
    itemCount: "2,500+ packaging lines",
  },
  {
    id: 4,
    name: "Turkey & Beef Pepperoni",
    category: "Pizza Supplies",
    tagColor: "bg-red-100 text-red-700",
    image: pepperoniImg,
    alt: "Sliced turkey and beef pepperoni tray",
    itemCount: "200+ pizza lines",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-[60px] sm:py-[120px] bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            From The Warehouse
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Products, <span className="text-green-600">Real Stock</span>
          </h2>
          <p className="text-gray-500 text-lg">
            A small taste of what&apos;s actually on our shelves — across just a few of our 10,000+ product lines.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 border-t-[3px] border-t-green-600 shadow-sm hover:shadow-xl hover:shadow-green-100/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                />
                <span className={cn("absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full", product.tagColor)}>
                  {product.category}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-base leading-tight mb-1.5">{product.name}</h3>
                <p className="text-green-600 text-xs font-semibold">{product.itemCount}</p>
              </div>
            </motion.div>
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
            These are just 4 of our <strong className="text-gray-700">10,000+ products</strong>.{" "}
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
