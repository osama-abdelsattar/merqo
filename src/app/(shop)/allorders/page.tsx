"use client";

import EmptyCard from "@/components/ui/empty-card";
import { useOrders } from "@/hooks/use-orders";
import OrdersSkeleton from "@/app/(shop)/allorders/_components/orders-skeleton";
import OrderCard from "@/app/(shop)/allorders/_components/order-card";
import AnimatedSection from "@/components/ui/animated-section";
import SectionHeader from "@/components/ui/section-header";

export default function Orders() {
  const { data: orders, isLoading } = useOrders();
  return (
    <AnimatedSection>
      <SectionHeader>Orders</SectionHeader>
      {!isLoading ? (
        orders ? (
          <div className="grid lg:grid-cols-2 gap-4">
            {orders.toReversed().map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        ) : (
          <EmptyCard
            title="orders"
            cta={{ text: "Products", href: "/products" }}
          />
        )
      ) : (
        <OrdersSkeleton />
      )}
    </AnimatedSection>
  );
}
