"use client";
import * as React from "react";

import { Wishlist, WishlistData } from "@/types/wishlist.type";
import { useWishlist } from "@/hooks/use-wishlist";

interface WishlistContextValue {
  wishlist: Wishlist | null;
  wishlistData: WishlistData | null;
  setWishlist: React.Dispatch<React.SetStateAction<Wishlist | null>>;
  setWishlistData: React.Dispatch<React.SetStateAction<WishlistData | null>>;
  isLoading: boolean;
  error: Error | null;
}

const WishlistContext = React.createContext<WishlistContextValue | undefined>(
  undefined,
);

function WishlistProvider({ children }: { children: React.ReactNode }) {
  const { data = null, isLoading, error } = useWishlist();
  const [wishlistData, setWishlistData] = React.useState<WishlistData | null>(
    data,
  );
  const [wishlist, setWishlist] = React.useState<Wishlist | null>(null);

  React.useEffect(() => {
    setWishlistData(data);
  }, [data]);

  const providerValue = React.useMemo(() => {
    return {
      wishlistData,
      wishlist,
      setWishlistData,
      setWishlist,
      isLoading,
      error,
    };
  }, [wishlistData, wishlist, isLoading, error]);

  return (
    <WishlistContext.Provider value={providerValue}>
      {children}
    </WishlistContext.Provider>
  );
}

// This removes the "possibly null" warnings in components
function useWishlistContext() {
  const context = React.useContext(WishlistContext);

  if (context === undefined) {
    throw new Error(
      "useWishlistContext must be used within a WishlistProvider",
    );
  }

  return context;
}

export { useWishlistContext, WishlistProvider };
