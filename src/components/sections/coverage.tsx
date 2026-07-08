"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Truck, Clock, ClipboardList, PackageCheck, CheckCircle2, Package } from "lucide-react";
import ukMapImg from "@/assets/images/uk-map-clean.png";
import warehouseIsometricImg from "@/assets/images/warehouse-isometric.jpg";

const deliverySteps = [
  { icon: ClipboardList, title: "Place Order" },
  { icon: PackageCheck, title: "Picked & Packed" },
  { icon: Truck, title: "Dispatched" },
  { icon: CheckCircle2, title: "Delivered" },
];

export function Coverage() {
  return (
    <section className="py-[60px] sm:py-[120px] bg-[#f4fdf7] relative overflow-hidden">
      {/* Background vector — warehouse illustration, faded to a texture behind the content. Reveals left-to-right, like Hero's photo. */}
      <Image
        src={warehouseIsometricImg}
        alt=""
        fill
        className="object-cover object-center opacity-[0.2] grayscale"
        style={{
          maskImage: "linear-gradient(to right, transparent, black)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
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

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-2 border-green-100 shadow-lg hover:shadow-2xl hover:shadow-green-200/60 hover:border-green-300 transition-all duration-500 relative bg-white">
              <Image
                src={ukMapImg}
                alt="UK delivery coverage map"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 90vw, 460px"
              />
              {/*
                Positions derived from geographic coordinates.
                Source image is a 1254×1254 square with the UK shape baked in, and the
                container is square too, so the image fills it edge-to-edge (no letterbox) —
                the raw lat/lng fractions map 1:1 onto container percentages.
                Bounds: lat_max=59.46, lat_range=9.47, lng_min=−9.41, lng_range=12.89
                top%  = ((59.46 − lat) / 9.47) × 100
                left% = (lng + 9.41) / 12.89 × 100
              */}
              {[
                { top: "37.07%", left: "48.3%", city: "Edinburgh",   tip: "below" },
                { top: "38%",    left: "40%",   city: "Glasgow",     tip: "below" },
                { top: "47.33%", left: "60.5%", city: "Newcastle",   tip: "above" },
                { top: "59.73%", left: "61%",   city: "Leeds",       tip: "right" },
                { top: "63.2%",  left: "55.6%", city: "Manchester",  tip: "left"  },
                { top: "64%",    left: "49.8%", city: "Liverpool",   tip: "left"  },
                { top: "64.27%", left: "61.6%", city: "Sheffield",   tip: "right" },
                { top: "68.27%", left: "56.1%", city: "Stoke",       tip: "left"  },
                { top: "68.8%",  left: "64%",   city: "Nottingham",  tip: "right" },
                { top: "72.13%", left: "64.2%", city: "Leicester",   tip: "right" },
                { top: "73.73%", left: "58.3%", city: "Birmingham",  tip: "above" },
                { top: "84%",    left: "72%",   city: "London",      tip: "above" },
                { top: "84.27%", left: "48.3%", city: "Cardiff",     tip: "left"  },
                { top: "84.53%", left: "52.9%", city: "Bristol",     tip: "below" },
              ].map((pin) => (
                <div
                  key={pin.city}
                  className="absolute group/pin cursor-pointer"
                  style={{ top: pin.top, left: pin.left }}
                >
                  {/* Tooltip — direction controlled per-pin to avoid crowding */}
                  <div className={[
                    "absolute px-2.5 py-1 bg-gray-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity duration-200 pointer-events-none z-10",
                    pin.tip === "above"  && "bottom-full left-1/2 -translate-x-1/2 mb-2",
                    pin.tip === "below"  && "top-full left-1/2 -translate-x-1/2 mt-2",
                    pin.tip === "right"  && "left-full top-1/2 -translate-y-1/2 ml-2",
                    pin.tip === "left"   && "right-full top-1/2 -translate-y-1/2 mr-2",
                  ].filter(Boolean).join(" ")}>
                    {pin.city}
                    {pin.tip === "above" && <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />}
                    {pin.tip === "below" && <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900" />}
                    {pin.tip === "right" && <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900" />}
                    {pin.tip === "left"  && <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />}
                  </div>
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60 scale-150" />
                  {/* Dot */}
                  <div className="relative w-3 h-3 bg-green-500 group-hover/pin:bg-green-400 group-hover/pin:scale-150 rounded-full border-2 border-white shadow-md transition-transform duration-200" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process timeline + guarantee */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="p-6 bg-white rounded-2xl border border-green-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                How It Works
              </h3>
              <div className="space-y-5">
                {deliverySteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="relative shrink-0">
                      <div className="relative z-10 w-11 h-11 rounded-full bg-white border-2 border-green-200 flex items-center justify-center shadow-sm">
                        <step.icon className="h-5 w-5 text-green-600" />
                      </div>
                      {i < deliverySteps.length - 1 && (
                        <div className="absolute left-1/2 top-11 -translate-x-1/2 w-px h-5 bg-green-200" />
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-700">{step.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-2xl border border-green-100 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white border border-green-200 flex items-center justify-center shrink-0">
                <Package className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-green-800">Free delivery available</p>
                <p className="text-xs text-green-700">On orders over £150. See terms for full details.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
