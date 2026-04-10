import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton";

export default function Skeleton() {
  return (
    <Section>
      <SectionHeader>Products</SectionHeader>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <ShadcnSkeleton key={`skeleton-${i}`} className="h-112" />
        ))}
      </div>
    </Section>
  );
}
