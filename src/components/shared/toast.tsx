"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, show, onClose, duration = 3500 }: ToastProps) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2.5 bg-gray-900 text-white text-sm font-medium px-5 py-3.5 rounded-xl shadow-2xl max-w-[92vw]"
        >
          <Info className="h-4 w-4 text-green-400 shrink-0" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
