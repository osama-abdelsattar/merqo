import Section from "@/components/common/section";
import SectionHeader from "@/components/common/section-header";
import { Skeleton } from "@/components/ui/skeleton";

function CartSkeleton() {
  return (
    <Section>
      <SectionHeader>Cart</SectionHeader>
      <div className="grid grid-cols-12 gap-6 *:lg:sticky *:lg:h-fit *:lg:top-26">
        <div className="col-span-full lg:col-span-8 space-y-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={`cart-skeleton-${i}`} className="h-52 rounded-4xl" />
          ))}
          <div className="flex flex-col sm:flex-row gap-2 items-center sm:justify-between">
            <Skeleton className="w-64 h-10 rounded-full" />
            <Skeleton className="w-48 h-10 rounded-full" />
          </div>
        </div>
        <div className="col-span-full lg:col-span-4">
          <Skeleton className="h-96" />
        </div>
      </div>
    </Section>
  );
}

export default CartSkeleton;
