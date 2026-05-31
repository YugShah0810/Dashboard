export function CourseSkeletonGrid() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <article
          key={index}
          aria-label="Loading course"
          className="min-h-[190px] animate-pulse overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-5"
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="size-11 rounded-[8px] bg-white/10" />
              <div className="h-7 w-14 rounded-full bg-white/10" />
            </div>
            <div>
              <div className="h-5 w-3/4 rounded bg-white/10" />
              <div className="mt-3 h-5 w-1/2 rounded bg-white/10" />
              <div className="mt-5 h-2 rounded-full bg-white/10" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
