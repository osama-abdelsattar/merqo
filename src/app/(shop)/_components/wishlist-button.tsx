"use client";
import React from "react";

import { Toggle } from "@/components/ui/toggle";
import ToggleButton from "@/components/ui/toggle-button";
import { HeartIcon } from "lucide-react";
import { useWishlist, useWishlistMutation } from "@/hooks/use-wishlist";
import { Spinner } from "@/components/ui/spinner";
import { Product } from "@/types/product.type";

interface WishlistButtonProps extends React.ComponentProps<typeof Toggle> {
  productId: string;
}

export default function WishlistButton({
  productId,
  ...props
}: WishlistButtonProps) {
  const { data: wishlistData, isLoading } = useWishlist();
  const { mutate: toggleWishlist, isPending } = useWishlistMutation();

  const isToggled =
    wishlistData?.data?.some(
      (item: Product | string) =>
        (typeof item === "string" ? item : item._id) === productId,
    ) || false;

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({ productId, isToggled });
  };

  return (
    <ToggleButton
      tooltipText={isToggled ? "Remove from wishlist" : "Add to wishlist"}
      size="icon-lg"
      pressed={isToggled}
      onPressedChange={() => {}} // Controlled by mutation
      onClick={handleToggle}
      disabled={isLoading || isPending}
      {...props}
    >
      {isPending ? <Spinner className="size-4" /> : <HeartIcon className={isToggled ? "fill-current" : ""} />}
    </ToggleButton>
  );
}
