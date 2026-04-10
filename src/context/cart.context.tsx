"use client";
import { getCartData as fetchCart } from "@/actions/cart.action";
import { Cart } from "@/types/cart.type";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";

const CartContext = React.createContext<{
  cartData: Cart | null;
  isLoading: boolean;
  error: Error | null;
}>({
  cartData: null,
  isLoading: false,
  error: null,
});

function CartProvider({ children }: { children: React.ReactNode }) {
  const {
    data: cartData = null,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await fetchCart();
      return data;
    },
  });

  return (
    <CartContext.Provider value={{ cartData, isLoading, error }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
