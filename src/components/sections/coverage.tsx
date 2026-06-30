"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Truck, Clock, MapPin, ClipboardList, PackageCheck, CheckCircle2, Package } from "lucide-react";
import ukMapImg from "@/assets/images/uk-map.jpg";
import { coverageRegions } from "@/data/content";

const deliverySteps = [
  { icon: ClipboardList, title: "Place Order" },
  { icon: PackageCheck, title: "Picked & Packed" },
  { icon: Truck, title: "Dispatched" },
  { icon: CheckCircle2, title: "Delivered" },
];

export function Coverage() {
  return (
    <section className="py-[60px] sm:py-[120px] bg-[#f4fdf7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            UK Delivery
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We Deliver Across <span className="text-green-600">All of the UK</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Fast, reliable delivery to mainland UK, Scotland, Wales, and Northern Ireland.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border-2 border-green-100 shadow-lg relative">
              <Image
                src={ukMapImg}
                alt="UK delivery coverage map"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                placeholder="blur"
              />
              {/* Hue overlay — turns red dots green, leaves gray map unchanged */}
              <div className="absolute inset-0 bg-green-500 mix-blend-hue pointer-events-none" />
              {/* Pin markers */}
              {[
                { top: "20%", left: "45%", city: "Edinburgh" },
                { top: "35%", left: "35%", city: "Manchester" },
                { top: "45%", left: "48%", city: "Birmingham" },
                { top: "60%", left: "55%", city: "London" },
                { top: "50%", left: "20%", city: "Cardiff" },
              ].map((pin) => (
                <div
                  key={pin.city}
                  className="absolute group/pin cursor-pointer"
                  style={{ top: pin.top, left: pin.left }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-gray-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {pin.city}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                  </div>
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50 scale-150" />
                  {/* Dot */}
                  <div className="relative w-3 h-3 bg-green-500 group-hover/pin:bg-green-400 group-hover/pin:scale-150 rounded-full border-2 border-white shadow-md transition-transform duration-200" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Regions + delivery steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Regions grid */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Truck className="h-5 w-5 text-green-600" />
                Delivery Times by Region
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {coverageRegions.map((region) => (
                  <div
                    key={region.name}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-green-500 shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{region.name}</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      region.deliveryTime === "Next Day"
                        ? "bg-green-100 text-green-700"
                        : region.deliveryTime === "1–2 Days"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-orange-50 text-orange-600"
                    }`}>
                      {region.deliveryTime}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process steps */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                How It Works
              </h3>
              <div className="flex items-center gap-1">
                {deliverySteps.map((step, i) => (
                  <Fragment key={step.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2 flex-1"
                    >
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-green-200 flex items-center justify-center shadow-sm">
                        <step.icon className="h-5 w-5 text-green-600" />
                      </div>
                      <p className="text-xs font-semibold text-gray-700 text-center leading-tight">{step.title}</p>
                    </motion.div>
                    {i < deliverySteps.length - 1 && (
                      <div className="w-6 h-px bg-green-200 shrink-0 mb-5" />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
              <p className="text-sm font-semibold text-green-800 mb-1 flex items-center gap-1.5">
                <Package className="h-4 w-4 text-green-600 shrink-0" />
                Free delivery available
              </p>
              <p className="text-xs text-green-700">On orders over £150. See terms for full details.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
