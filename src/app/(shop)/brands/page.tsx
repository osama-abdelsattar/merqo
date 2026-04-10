import AnimatedSection from "@/components/ui/animated-section";
import SectionHeader from "@/components/ui/section-header";
import { Skeleton } from "@/components/ui/skeleton";

function BrandsSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton
          key={`brand-skeleton-${i}`}
          className="h-48 rounded-4xl"
        />
      ))}
    </div>
  );
}

export default function Brands() {
  return (
    <AnimatedSection>
      <SectionHeader>Brands</SectionHeader>
      <BrandsSkeleton />
    </AnimatedSection>
  );
}
