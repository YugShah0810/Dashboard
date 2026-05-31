"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 20
} as const;

export function MotionArticle({
  className,
  children,
  ...props
}: HTMLMotionProps<"article">) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.015, y: -4 }}
      transition={spring}
      className={[
        "group relative isolate overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] shadow-glow backdrop-blur-xl",
        "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_0%,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_100%_15%,rgba(168,85,247,0.13),transparent_24%)] before:opacity-70 before:transition-opacity before:duration-300",
        "after:absolute after:inset-0 after:-z-10 after:rounded-[8px] after:border after:border-cyan-300/0 after:transition-colors after:duration-300",
        "hover:before:opacity-100 hover:after:border-cyan-300/30",
        className ?? ""
      ].join(" ")}
      {...props}
    >
      {children}
    </motion.article>
  );
}
