import SectionHeader from "@/components/ui/section-header";
import OrdersSkeleton from "@/app/(shop)/allorders/_components/orders-skeleton";
import Section from "@/components/ui/section";

export default function Loading() {
  return (
    <Section>
      <SectionHeader>Orders</SectionHeader>
      <OrdersSkeleton />
    </Section>
  );
}
