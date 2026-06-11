"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL, COMPANY } from "@/lib/constants";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 max-w-[220px] text-sm"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold text-gray-900 text-xs">Online now</span>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-3">
              Get an instant quote or request our full product list right now.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#25D366] hover:bg-[#20BD5C] text-white font-semibold text-xs py-2 px-4 rounded-xl transition-colors"
              >
                Get Instant Quote
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs py-2 px-4 rounded-xl transition-colors"
              >
                Request Product List
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowTooltip((p) => !p)}
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] rounded-full shadow-lg shadow-green-200/60 flex items-center justify-center transition-colors"
      >
        <MessageCircle className="h-7 w-7 text-white fill-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.button>
    </div>
  );
}
