"use client";

import { motion } from "framer-motion";
import { CalendarRange } from "lucide-react";
import { MotionArticle } from "@/components/motion-card";

const activity = [
  1, 2, 4, 3, 5, 2, 1, 3, 4, 5, 2, 3, 1, 4, 5, 5, 3, 2, 4, 1, 2, 3, 5, 4, 2, 1, 3, 4,
  5, 2, 3, 4, 1, 2, 5, 3, 4, 2, 1, 5, 4, 3
];

const intensity = [
  "bg-white/[0.08]",
  "bg-cyan-300/20",
  "bg-cyan-300/[0.34]",
  "bg-teal-300/[0.44]",
  "bg-fuchsia-300/[0.48]"
];

export function ActivityTile() {
  return (
    <MotionArticle
      className="min-h-[260px] p-5 md:col-span-2 xl:col-span-2"
      transition={{ delay: 0.42, type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex h-full flex-col justify-between gap-6">
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
              Learning activity
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50">42 focused sessions</h2>
          </div>
          <span className="grid size-11 place-items-center rounded-[8px] border border-white/10 bg-white/10 text-cyan-100">
            <CalendarRange size={20} />
          </span>
        </header>

        <section
          aria-label="Activity contribution chart"
          className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-2"
        >
          {activity.map((value, index) => (
            <motion.span
              key={`${value}-${index}`}
              initial={{ opacity: 0, scale: 0.65 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.012, type: "spring", stiffness: 260, damping: 22 }}
              className={`aspect-square rounded-[4px] ${intensity[value - 1]}`}
            />
          ))}
        </section>

        <footer className="flex items-center justify-between text-sm text-slate-400">
          <span>Last 6 weeks</span>
          <span className="text-emerald-200">+23% momentum</span>
        </footer>
      </div>
    </MotionArticle>
  );
}
