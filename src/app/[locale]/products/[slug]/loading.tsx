import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Product Detail Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Gallery / Image Skeleton */}
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full aspect-square rounded-2xl border border-zinc-200/60 dark:border-zinc-800" />
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="w-20 h-20 rounded-xl" />
            ))}
          </div>
        </div>

        {/* Info / Metadata Skeleton */}
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <Skeleton className="h-6 w-28 rounded-full" />
            <Skeleton className="h-10 w-3/4 rounded-xl" />
            <Skeleton className="h-5 w-40 rounded-md" />
          </div>

          <div className="space-y-3 py-4 border-y border-zinc-200/70 dark:border-zinc-800">
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-2/3 rounded-md" />
          </div>

          {/* Action buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Skeleton className="h-12 w-full sm:w-48 rounded-xl" />
            <Skeleton className="h-12 w-full sm:w-48 rounded-xl" />
          </div>
        </div>
      </div>

      {/* Similar Products Skeleton */}
      <div className="my-16 space-y-6">
        <Skeleton className="h-8 w-48 rounded-xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-card p-4 space-y-4"
            >
              <Skeleton className="w-full aspect-square rounded-xl" />
              <Skeleton className="h-5 w-3/4 rounded-md" />
              <Skeleton className="h-4 w-1/2 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
