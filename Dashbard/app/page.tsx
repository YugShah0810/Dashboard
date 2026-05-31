import { Suspense } from "react";
import { DashboardShell } from "@/components/dashboard-shell";
import { CourseGrid } from "@/components/course-grid";
import { CourseSkeletonGrid } from "@/components/course-skeleton";
import { getCourses } from "@/lib/supabase/server";

async function CourseSection() {
  const result = await getCourses();

  return <CourseGrid result={result} />;
}

export default function Home() {
  return (
    <DashboardShell>
      <Suspense fallback={<CourseSkeletonGrid />}>
        <CourseSection />
      </Suspense>
    </DashboardShell>
  );
}
