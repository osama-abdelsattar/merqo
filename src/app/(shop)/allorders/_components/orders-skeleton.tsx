import Section from "@/components/common/section";
import SectionHeader from "@/components/common/section-header";
import { Skeleton } from "@/components/ui/skeleton";

function OrdersSkeleton() {
  return (
    <Section>
      <SectionHeader>Orders</SectionHeader>
      <div className="grid lg:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={`skeleton-orders-${i}`} className="h-124" />
        ))}
      </div>
    </Section>
  );
}

export default OrdersSkeleton;
