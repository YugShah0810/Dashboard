"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  ChevronsLeft,
  Home,
  Settings,
  Sparkles
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home },
  { label: "Courses", icon: BookOpen },
  { label: "Activity", icon: BarChart3 },
  { label: "Calendar", icon: CalendarDays },
  { label: "Labs", icon: Sparkles }
];

export function Sidebar() {
  const [active, setActive] = useState("Home");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className={[
          "sticky top-0 hidden h-screen shrink-0 border-r border-white/10 bg-ink-950/[0.62] px-3 py-5 backdrop-blur-2xl md:block",
          collapsed ? "w-[84px]" : "w-[232px]",
          "transition-[width] duration-300 ease-out lg:w-[232px]"
        ].join(" ")}
      >
        <div className="flex h-full flex-col gap-6">
          <header className="flex h-11 items-center justify-between px-2">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="grid size-10 shrink-0 place-items-center rounded-[8px] border border-cyan-300/30 bg-cyan-300/10 text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.18)]">
                <Sparkles size={18} />
              </span>
              <span className="hidden whitespace-nowrap text-sm font-semibold tracking-wide text-slate-100 lg:inline">
                NexLearn
              </span>
            </div>
            <button
              type="button"
              aria-label="Collapse sidebar"
              onClick={() => setCollapsed((value) => !value)}
              className="hidden size-9 place-items-center rounded-[8px] border border-white/10 text-slate-400 transition-colors hover:text-slate-100 lg:grid"
            >
              <ChevronsLeft
                size={16}
                className={collapsed ? "rotate-180 transition-transform" : "transition-transform"}
              />
            </button>
          </header>

          <div className="flex flex-1 flex-col justify-between">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.label;

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setActive(item.label)}
                      className="relative flex h-11 w-full items-center gap-3 rounded-[8px] px-3 text-sm text-slate-400 outline-none transition-colors hover:text-slate-100"
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="sidebar-active"
                          className="absolute inset-0 rounded-[8px] border border-cyan-300/25 bg-cyan-300/10"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      ) : null}
                      <Icon size={18} className="relative shrink-0" />
                      <span className="relative hidden truncate lg:inline">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              className="relative flex h-11 w-full items-center gap-3 rounded-[8px] px-3 text-sm text-slate-400 transition-colors hover:text-slate-100"
            >
              <Settings size={18} className="shrink-0" />
              <span className="hidden lg:inline">Settings</span>
            </button>
          </div>
        </div>
      </nav>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-3 bottom-3 z-50 rounded-[8px] border border-white/10 bg-ink-950/[0.86] p-2 shadow-glow backdrop-blur-2xl md:hidden"
      >
        <ul className="grid grid-cols-5 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <li key={item.label}>
                <button
                  type="button"
                  aria-label={item.label}
                  onClick={() => setActive(item.label)}
                  className="relative grid h-11 w-full place-items-center rounded-[8px] text-slate-400 transition-colors"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="mobile-active"
                      className="absolute inset-0 rounded-[8px] border border-cyan-300/25 bg-cyan-300/10"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  ) : null}
                  <Icon size={18} className="relative" />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
