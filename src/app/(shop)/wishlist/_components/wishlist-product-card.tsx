"use client";

import AppProductMiniCard from "@/components/common/app-product-mini-card";
import { Button } from "@/components/ui/button";
import DeleteAlertButton from "@/components/common/delete-alert-button";
import { Spinner } from "@/components/ui/spinner";
import { XIcon } from "lucide-react";
import AddToCartButton from "@/app/(shop)/_components/add-to-cart-button";
import { removeFromWishlist } from "@/actions/wishlist.action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useWishlistContext } from "@/context/wishlist.context";
import { Product } from "@/types/product.type";

function WishlistProductCard({ product }: { product: Product }) {
  const { setWishlist } = useWishlistContext();
  const queryClient = useQueryClient();
  const { mutate: deleteWishlistItem, isPending } = useMutation({
    mutationFn: async ({ productId }: { productId: string }) => {
      const res = await removeFromWishlist(productId);

      return res;
    },
    onSuccess: (data) => {
      if (data?.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["wishlist"] });
        toast.success(data.message);
        setWishlist(data);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <AppProductMiniCard
      product={product}
      topAction={
        <DeleteAlertButton
          mutate={() => deleteWishlistItem({ productId: product._id })}
          innerButtonText="Remove item"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Remove item from wishlist"
            disabled={isPending}
          >
            {isPending ? (
              <Spinner className="size-4" />
            ) : (
              <XIcon className="size-4" />
            )}
          </Button>
        </DeleteAlertButton>
      }
      actions={
        <div className="flex items-center justify-between gap-4 w-full h-full">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap">
            {product.priceAfterDiscount || product.price}£
          </span>
          <AddToCartButton productID={product._id} />
        </div>
      }
    />
  );
}

export default WishlistProductCard;
