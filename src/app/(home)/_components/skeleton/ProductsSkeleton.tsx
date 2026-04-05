import SectionHeader from "@/components/ui/section-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsSkeleton() {
  return (
    <section className="py-12 max-w-7xl mx-auto">
      <SectionHeader>Featured Products</SectionHeader>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <Skeleton key={`skeleton-${i}`} className="h-112"></Skeleton>
        ))}
      </div>
    </section>
  );
}
