"use client";

import EmptyCard from "@/components/common/empty-card";
import { useOrders } from "@/hooks/use-orders.hook";
import OrderCard from "@/app/(shop)/allorders/_components/order-card";
import AnimatedSection from "@/components/common/animated-section";
import SectionHeader from "@/components/common/section-header";
import OrdersSkeleton from "@/app/(shop)/allorders/_components/orders-skeleton";
import { Receipt } from "lucide-react";

function Orders() {
  const { data: orders, isLoading } = useOrders();

  if (isLoading) return <OrdersSkeleton />;

  if (!orders)
    return (
      <AnimatedSection>
        <SectionHeader level="h1">Orders</SectionHeader>
        <EmptyCard
          icon={<Receipt />}
          title="No orders yet"
          description="Your completed orders will appear here once you start shopping."
          cta={{ text: "Start Shopping", href: "/products" }}
        />
      </AnimatedSection>
    );

  return (
    <AnimatedSection>
      <SectionHeader level="h1">Orders</SectionHeader>
      <div className="grid lg:grid-cols-2 gap-4">
        {orders?.toReversed()?.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Orders;
