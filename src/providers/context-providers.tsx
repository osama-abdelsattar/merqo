import { CartProvider } from "@/context/cart.context";
import { WishlistProvider } from "@/context/wishlist.context";

function ContextProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>{children}</WishlistProvider>
    </CartProvider>
  );
}

export default ContextProviders;
