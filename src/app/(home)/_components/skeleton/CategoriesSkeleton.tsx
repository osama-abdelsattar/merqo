import SectionHeader from "@/components/ui/section-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriesSkeleton() {
  return (
    <section className="py-12 max-w-7xl mx-auto">
      <SectionHeader>Top Categories</SectionHeader>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={`skeleton-${i}`} className="aspect-5/6"></Skeleton>
        ))}
      </div>
    </section>
  );
}
