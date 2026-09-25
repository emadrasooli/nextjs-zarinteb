import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner Skeleton */}
      <section className="max-w-7xl mx-auto my-3 px-4">
        <Skeleton className="w-full h-[200px] md:h-[350px] lg:h-[450px] rounded-3xl" />
      </section>

      {/* Filter and Grid Container */}
      <section className="max-w-7xl mx-auto px-4 flex flex-col gap-6 my-8">
        {/* Filter bar skeleton */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-2xl border border-zinc-200/60 dark:border-zinc-800">
          <Skeleton className="h-10 w-full md:w-72 rounded-xl" />
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-24 rounded-full" />
            ))}
          </div>
        </div>

        {/* Product Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-card p-4 space-y-4 shadow-sm"
            >
              <Skeleton className="w-full aspect-square rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-5 w-4/5 rounded-md" />
                <Skeleton className="h-4 w-3/5 rounded-md" />
              </div>
              <div className="pt-2 flex justify-between items-center mt-auto border-t border-zinc-100 dark:border-zinc-800/80">
                <Skeleton className="h-9 w-full rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
