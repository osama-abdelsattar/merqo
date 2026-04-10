import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton";

export default function Skeleton() {
  return (
    <Section>
      <SectionHeader>Categories</SectionHeader>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ShadcnSkeleton
            key={`skeleton-${i}`}
            className="h-96 aspect-square"
          />
        ))}
      </div>
    </Section>
  );
}
