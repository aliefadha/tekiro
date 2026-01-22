interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gray-200 ${className}`}
    />
  )
}

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i}>
          <Skeleton className="w-full h-[450px]" />
          <Skeleton className="h-4 mt-2.5 w-3/4" />
          <Skeleton className="h-8 mt-2.5 w-full" />
        </div>
      ))}
    </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-gray-100 px-2.5 pt-2.5 pb-16 text-center">
      <Skeleton className="w-full aspect-square mb-5" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
      <Skeleton className="h-6 w-1/2 mx-auto mb-5" />
      <Skeleton className="h-8 w-20 mx-auto" />
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#85E408]"
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export function CategoryCardSkeleton() {
  return (
    <div className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-center items-center rounded-sm gap-5 border-4">
      <Skeleton className="w-full h-[350px]" />
      <Skeleton className="h-8 w-3/4 mx-auto" />
      <Skeleton className="h-10 w-24 mx-auto" />
    </div>
  )
}

export function RelatedProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-2/3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="bg-black px-2.5 pt-2.5 pb-8 text-center flex flex-col justify-start items-center rounded-sm gap-5 border-4">
          <Skeleton className="w-full h-[300px]" />
          <Skeleton className="h-8 w-3/4 mx-auto" />
          <Skeleton className="h-10 w-24 mx-auto" />
        </div>
      ))}
    </div>
  )
}
