"use client";

import {
  Atom,
  BookOpenCheck,
  BrainCircuit,
  Code2,
  DatabaseZap,
  GraduationCap,
  LucideIcon,
  Sparkles
} from "lucide-react";
import { MotionArticle } from "@/components/motion-card";
import { ProgressBar } from "@/components/progress-bar";
import type { CourseQueryResult } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Atom,
  BookOpenCheck,
  BrainCircuit,
  Code2,
  DatabaseZap,
  GraduationCap,
  Sparkles
};

export function CourseGrid({ result }: { result: CourseQueryResult }) {
  if (result.error) {
    return (
      <MotionArticle className="min-h-[168px] p-5 md:col-span-2" transition={{ delay: 0.16 }}>
        <div className="flex h-full flex-col justify-between gap-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-200/80">
              Data stream offline
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-50">Supabase connection needed</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">{result.error}</p>
          </div>
          <p className="text-xs text-slate-500">
            Run the SQL in <span className="text-slate-300">supabase/seed.sql</span>, then add your
            Supabase URL and anon key to <span className="text-slate-300">.env.local</span>.
          </p>
        </div>
      </MotionArticle>
    );
  }

  return (
    <>
      {result.courses.map((course, index) => {
        const Icon = iconMap[course.icon_name] ?? GraduationCap;

        return (
          <MotionArticle
            key={course.id}
            className="grain min-h-[190px] p-5"
            transition={{ delay: 0.12 + index * 0.07, type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-[8px] border border-white/10 bg-white/10 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                  <Icon size={20} />
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                  {course.progress}%
                </span>
              </div>

              <div>
                <h2 className="text-balance text-lg font-semibold leading-6 text-slate-50">
                  {course.title}
                </h2>
                <ProgressBar value={course.progress} delay={0.22 + index * 0.08} />
              </div>
            </div>
          </MotionArticle>
        );
      })}
    </>
  );
}
