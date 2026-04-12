"use client";
import * as React from "react";

import ProductListLayout from "@/components/layout/product-list-layout";
import ContinueShoppingButton from "../_components/continue-shopping-button";
import { useWishlistContext } from "@/context/wishlist.context";
import WishlistProductCard from "./_components/wishlist-product-card";
import WishlistSkeleton from "./_components/wishlist-skeleton";
import { useQueryClient } from "@tanstack/react-query";

function WishlistPage() {
  const { wishlistData, isLoading } = useWishlistContext();

  const queryClient = useQueryClient();
  React.useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["wishlist"] });
  }, [queryClient]);

  return (
    <ProductListLayout
      title="Wishlist"
      isEmpty={!wishlistData || wishlistData?.count < 1}
      isLoading={isLoading}
      Skeleton={WishlistSkeleton}
      emptyState={{
        title: "wishlist products",
        cta: { href: "/", text: "Start Shopping" },
      }}
    >
      <div className="col-span-full grid xl:grid-cols-2 gap-4">
        {wishlistData?.data?.map((product) => (
          <WishlistProductCard key={product._id} product={product} />
        ))}
        <div className="col-span-full">
          <ContinueShoppingButton variant="outline" size="lg" />
        </div>
      </div>
    </ProductListLayout>
  );
}

export default WishlistPage;
