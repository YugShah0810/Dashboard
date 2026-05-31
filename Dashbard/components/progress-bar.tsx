"use client";

import { motion } from "framer-motion";

export function ProgressBar({ value, delay = 0 }: { value: number; delay?: number }) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clampedValue}
      className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"
    >
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: clampedValue / 100 }}
        transition={{ delay, type: "spring", stiffness: 120, damping: 24 }}
        className="block h-full origin-left rounded-full bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300 shadow-[0_0_18px_rgba(103,232,249,0.35)]"
      />
    </div>
  );
}
