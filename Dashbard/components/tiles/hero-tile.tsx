"use client";

import { Flame, Zap } from "lucide-react";
import { MotionArticle } from "@/components/motion-card";

export function HeroTile() {
  return (
    <MotionArticle className="min-h-[280px] p-6 md:col-span-2 xl:col-span-2 xl:row-span-2">
      <div className="relative flex h-full flex-col justify-between gap-10">
        <div className="absolute right-0 top-0 size-40 rounded-full bg-cyan-300/10 blur-3xl" />
        <header className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/75">
              Neural learning hub
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl">
              Welcome back, Anaya
            </h1>
          </div>
          <span className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100 sm:inline-flex">
            Live cohort
          </span>
        </header>

        <div className="relative grid gap-4 sm:grid-cols-[1fr_180px]">
          <section
            aria-label="Today focus"
            className="rounded-[8px] border border-white/10 bg-black/[0.18] p-4"
          >
            <div className="flex items-center gap-3 text-slate-300">
              <Zap size={18} className="text-cyan-200" />
              <span className="text-sm">Next sprint</span>
            </div>
            <p className="mt-3 text-2xl font-semibold text-slate-50">Ship your RSC module</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              42 minutes planned across data fetching, animation polish, and review.
            </p>
          </section>

          <section
            aria-label="Daily learning streak"
            className="rounded-[8px] border border-fuchsia-300/20 bg-fuchsia-300/10 p-4"
          >
            <div className="flex items-center justify-between">
              <Flame size={20} className="text-fuchsia-100" />
              <span className="text-xs uppercase tracking-[0.2em] text-fuchsia-100/70">Streak</span>
            </div>
            <p className="mt-5 text-5xl font-semibold text-slate-50">18</p>
            <p className="mt-1 text-sm text-fuchsia-100/80">days active</p>
          </section>
        </div>
      </div>
    </MotionArticle>
  );
}
