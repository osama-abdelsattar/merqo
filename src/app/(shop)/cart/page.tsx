"use client";
import * as React from "react";

import CartProductCard from "./_components/cart-product-card";
import ProductListLayout from "@/components/layout/product-list-layout";
import { useQueryClient } from "@tanstack/react-query";
import { useToastMutation } from "@/hooks/use-toast-mutation";
import { clearCart } from "@/actions/cart.action";
import { useCartContext } from "@/context/cart.context";
import CartSummaryCard from "./_components/cart-summary-card";
import CartFooterActions from "./_components/cart-footer-actions";
import CartSkeleton from "./_components/cart-skeleton";

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
  return (
    <ProductListLayout
      title="Cart"
      isEmpty={!cart || cart.numOfCartItems === 0}
      isLoading={isLoading}
      Skeleton={CartSkeleton}
      emptyState={{
        title: "products",
        cta: { href: "/products", text: "Start Shopping" },
      }}
    >
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
    </ProductListLayout>
  );
}

export default CartPage;
