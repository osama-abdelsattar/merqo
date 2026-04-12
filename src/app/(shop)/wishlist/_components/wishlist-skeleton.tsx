import Section from "@/components/section";
import SectionHeader from "@/components/section-header";
import { Skeleton } from "@/components/ui/skeleton";

function WishlistSkeleton() {
  return (
    <Section>
      <SectionHeader>Wishlist</SectionHeader>
      <div className="space-y-6">
        <div className="grid xl:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={`cart-skeleton-${i}`} className="h-52 rounded-4xl" />
          ))}
        </div>
        <Skeleton className="w-64 h-10 rounded-full" />
      </div>
    </Section>
  );
}

export default WishlistSkeleton;
