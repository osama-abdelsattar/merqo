import Section from "@/components/section";
import SectionHeader from "@/components/section-header";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <Section>
      <SectionHeader>Brands</SectionHeader>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={`brand-skeleton-${i}`} className="h-48 rounded-4xl" />
        ))}
      </div>
    </Section>
  );
}

export default loading;
