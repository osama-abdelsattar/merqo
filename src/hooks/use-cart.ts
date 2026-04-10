"use client";

import { getCartData as fetchCart } from "@/actions/cart.action";
import { Cart } from "@/types/cart.type";
import { useQuery } from "@tanstack/react-query";

function useCart() {
  const {
    data: cartData = null,
    isLoading,
    error,
  } = useQuery<Cart | null>({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await fetchCart();
      return data;
    },
  });

  return { cartData, isLoading, error };
}

export { useCart };
