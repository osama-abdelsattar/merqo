"use client";

import { getCartData } from "@/actions/cart.action";
import { Cart } from "@/types/cart.type";
import { useQuery } from "@tanstack/react-query";

function useCart() {
  return useQuery<Cart | null>({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await getCartData();

      return data;
    },
  });
}

export { useCart };
