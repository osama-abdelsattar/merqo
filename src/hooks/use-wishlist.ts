"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getWishlistData,
  addToWishlist,
  removeFromWishlist,
} from "@/actions/wishlist.action";
import { toast } from "sonner";

export const useWishlist = () => {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const data = await getWishlistData();
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useWishlistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      productId,
      isToggled,
    }: {
      productId: string;
      isToggled: boolean;
    }) => {
      if (isToggled) {
        return await removeFromWishlist(productId);
      } else {
        return await addToWishlist(productId);
      }
    },
    onSuccess: (data) => {
      if (data?.status === "success") {
        toast.success(data.message, { richColors: true });
        queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      }
    },
    onError: (error) => {
      toast.error(error.message, { richColors: true });
    },
  });
};
