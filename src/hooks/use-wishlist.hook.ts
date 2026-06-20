"use client";

import { useQuery } from "@tanstack/react-query";
import { getWishlistData } from "@/actions/wishlist.action";
import { WishlistData } from "@/types/wishlist.type";

function useWishlist() {
  return useQuery<WishlistData | null>({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const data = await getWishlistData();

      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
}

export { useWishlist };
