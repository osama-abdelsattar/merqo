"use client";

import Link from "next/link";
import { EyeIcon } from "lucide-react";
import TooltipButton from "@/components/common/tooltip-button";
import WishlistButton from "@/app/(shop)/_components/wishlist-button";

function ProductCardActions({ productID }: { productID: string }) {
  return (
    <>
      <WishlistButton variant="secondary" productId={productID} />
      <TooltipButton
        tooltipText="View Product"
        variant="secondary"
        size="icon-lg"
        asChild
      >
        <Link href={`/product/${productID}`}>
          <EyeIcon />
        </Link>
      </TooltipButton>
    </>
  );
}

export default ProductCardActions;
