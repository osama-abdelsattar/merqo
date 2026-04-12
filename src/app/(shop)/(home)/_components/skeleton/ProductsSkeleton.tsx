import Section from "@/components/section";
import SectionHeader from "@/components/section-header";
import { Skeleton } from "@/components/ui/skeleton";

function ProductsSkeleton({ title = "Featured Products" }: { title?: string }) {
  return (
    <Section>
      <SectionHeader>{title}</SectionHeader>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <Skeleton key={`skeleton-${i}`} className="h-112"></Skeleton>
        ))}
      </div>
    </Section>
  );
}

export default ProductsSkeleton;
