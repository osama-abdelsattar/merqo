import Section from "@/components/common/section";
import SectionHeader from "@/components/common/section-header";
import { Skeleton } from "@/components/ui/skeleton";

function CategoriesSkeleton({ title = "Top Categories" }: { title?: string }) {
  return (
    <Section>
      <SectionHeader>{title}</SectionHeader>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={`skeleton-${i}`} className="aspect-5/6"></Skeleton>
        ))}
      </div>
    </Section>
  );
}

export default CategoriesSkeleton;
