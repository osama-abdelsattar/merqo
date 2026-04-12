"use client";
import * as React from "react";

import { useCart } from "@/hooks/use-cart";
import { Cart } from "@/types/cart.type";

interface CartContextValue {
  cart: Cart | null;
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>;
  isLoading: boolean;
  error: Error | null;
}

const CartContext = React.createContext<CartContextValue | undefined>(
  undefined,
);

function CartProvider({ children }: { children: React.ReactNode }) {
  const { data: cartData = null, isLoading, error } = useCart();
  const [cart, setCart] = React.useState<Cart | null>(cartData);

  React.useEffect(() => {
    setCart(cartData);
  }, [cartData]);

  const providerValue = React.useMemo(() => {
    return {
      cart,
      setCart,
      isLoading,
      error,
    };
  }, [cart, isLoading, error]);

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}

// This removes the "possibly null" warnings in components
function useCartContext() {
  const context = React.useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
}

export { CartProvider, useCartContext };
