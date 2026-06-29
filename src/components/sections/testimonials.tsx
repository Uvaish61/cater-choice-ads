"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section className="py-[60px] sm:py-[120px] bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Customer Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-600">Trade Customers</span> Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-5 w-5 text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-2 text-gray-600 font-medium">4.9/5 from 800+ reviews</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-green-100/40 hover:border-green-100 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-green-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role} · {testimonial.company}
                  </p>
                  <p className="text-xs text-green-600 mt-0.5 flex items-center gap-1">
                    <MapPin className="h-3 w-3 shrink-0" />{testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider font-medium">Trusted by businesses like</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {["Premier Inn", "Wetherspoons", "Nando's", "Costa Coffee", "NHS", "Holiday Inn"].map((brand) => (
              <span key={brand} className="text-gray-300 font-bold text-sm sm:text-base uppercase tracking-wider hover:text-gray-400 transition-colors">
                {brand}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">*Illustrative examples — replace with actual client logos</p>
        </motion.div>
      </div>
    </section>
  );
}
