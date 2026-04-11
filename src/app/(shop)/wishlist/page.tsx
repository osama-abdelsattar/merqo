"use client";

import ProductListLayout from "@/components/layout/product-list-layout";
import AppProductMiniCard from "@/components/ui/app-product-mini-card";
import { useWishlist, useWishlistMutation } from "@/hooks/use-wishlist";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon, XIcon } from "lucide-react";
import AddToCartButton from "@/app/(shop)/_components/add-to-cart-button";
import { Spinner } from "@/components/ui/spinner";
import DeleteAlertButton from "@/components/ui/delete-alert";

function WishlistPage() {
  const { data: wishlistData, isLoading } = useWishlist();
  const { mutate: toggleWishlist, isPending } = useWishlistMutation();

  const products = wishlistData?.data || [];

  return (
    <ProductListLayout
      title="Wishlist"
      isEmpty={products.length === 0}
      isLoading={isLoading}
      emptyState={{
        title: "Wishlist Products",
        cta: { href: "/", text: "Start Shopping" },
      }}
      listFooter={
        <div className="flex justify-center sm:justify-start">
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              <ArrowLeftIcon /> Continue shopping
            </Link>
          </Button>
        </div>
      }
    >
      {products.map((product) => (
        <AppProductMiniCard
          key={product._id}
          product={product}
          topAction={
            <DeleteAlertButton
              mutate={() =>
                toggleWishlist({ productId: product._id, isToggled: true })
              }
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
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
            <div className="flex items-center justify-between w-full gap-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap">
                {product.priceAfterDiscount || product.price}£
              </span>
              <AddToCartButton productID={product._id} />
            </div>
          }
        />
      ))}
    </ProductListLayout>
  );
}

export default WishlistPage;
