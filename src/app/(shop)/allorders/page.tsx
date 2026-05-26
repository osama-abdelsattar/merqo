"use client";

import EmptyCard from "@/components/empty-card";
import { useOrders } from "@/hooks/use-orders";
import OrderCard from "@/app/(shop)/allorders/_components/order-card";
import AnimatedSection from "@/components/animated-section";
import SectionHeader from "@/components/section-header";
import OrdersSkeleton from "./_components/orders-skeleton";

function Orders() {
  const { data: orders, isLoading } = useOrders();

  if (isLoading) return <OrdersSkeleton />;

  if (!orders)
    return (
      <section className="min-h-[calc(100dvh-5rem)] flex items-center justify-center]">
        <EmptyCard
          title="orders"
          cta={{ text: "Products", href: "/products" }}
        />
      </section>
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
