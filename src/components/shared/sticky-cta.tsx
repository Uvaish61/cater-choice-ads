"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 sm:hidden"
        >
          <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-xl text-sm transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-md shadow-green-200"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
