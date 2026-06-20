"use client";
import * as React from "react";
import AnimatedSection from "@/components/common/animated-section";
import SectionHeader from "@/components/common/section-header";
import EmptyCard from "@/components/common/empty-card";
import CartProductCard from "@/app/(shop)/cart/_components/cart-product-card";
import { useQueryClient } from "@tanstack/react-query";
import { useToastMutation } from "@/hooks/use-toast-mutation.hook";
import { clearCart } from "@/actions/cart.action";
import { useCartContext } from "@/context/cart.context";
import CartSummaryCard from "@/app/(shop)/cart/_components/cart-summary-card";
import CartFooterActions from "@/app/(shop)/cart/_components/cart-footer-actions";
import CartSkeleton from "@/app/(shop)/cart/_components/cart-skeleton";
import { ShoppingCart } from "lucide-react";

function CartPage() {
  const queryClient = useQueryClient();
  React.useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["cart"] });
  }, [queryClient]);

  const { cart, setCart, isLoading } = useCartContext();

  const { mutate, isPending } = useToastMutation({
    mutationFn: async () => {
      const res = await clearCart();
      if (!res) throw new Error("Failed to clear cart");
      return res;
    },
    successMessage: (data) => data?.message || "Cart cleared",
    errorMessage: (error) => error.message,
    onSuccessWithToast: (data) => setCart(data),
  });

  if (isLoading) return <CartSkeleton />;

  if (!cart || cart.numOfCartItems === 0) {
    return (
      <AnimatedSection>
        <SectionHeader>Cart</SectionHeader>
        <EmptyCard
          icon={<ShoppingCart />}
          title="Your cart is empty"
          description="Add items to your cart and they'll show up here."
          cta={{ href: "/products", text: "Browse Products" }}
          showRefresh={true}
        />
      </AnimatedSection>
    );
  }

  return (
    <main className="min-h-[calc(100dvh-5rem)]">
      <AnimatedSection className="-mx-6 sm:mx-auto">
        <SectionHeader>Cart</SectionHeader>
        <div className="grid grid-cols-12 gap-6 *:lg:sticky *:lg:h-fit *:lg:top-26">
          <div className="col-span-full lg:col-span-8 space-y-4">
            {cart?.data.products.map((product) => (
              <CartProductCard key={product._id} product={product.product} />
            ))}
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:justify-between">
              <CartFooterActions mutate={mutate} isPending={isPending} />
            </div>
          </div>
          <div className="col-span-full lg:col-span-4">
            <CartSummaryCard cart={cart!} />
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

export default CartPage;
