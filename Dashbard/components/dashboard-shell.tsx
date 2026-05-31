import { ActivityTile } from "@/components/tiles/activity-tile";
import { HeroTile } from "@/components/tiles/hero-tile";
import { Sidebar } from "@/components/sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-radial-glow">
      <div className="mx-auto flex min-h-screen w-full max-w-[1560px] flex-col pb-24 md:flex-row md:pb-0">
        <Sidebar />
        <main className="flex-1 px-4 pb-6 pt-4 sm:px-6 md:pl-3 md:pr-6 md:pt-6 lg:pl-4">
          <section
            aria-label="Student dashboard"
            className="grid auto-rows-[minmax(168px,auto)] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            <HeroTile />
            {children}
            <ActivityTile />
          </section>
        </main>
      </div>
    </div>
  );
}
