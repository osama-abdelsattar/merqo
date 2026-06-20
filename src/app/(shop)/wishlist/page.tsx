"use client";
import * as React from "react";

import AnimatedSection from "@/components/common/animated-section";
import SectionHeader from "@/components/common/section-header";
import EmptyCard from "@/components/common/empty-card";
import ContinueShoppingButton from "@/app/(shop)/_components/continue-shopping-button";
import { useWishlistContext } from "@/context/wishlist.context";
import WishlistProductCard from "@/app/(shop)/wishlist/_components/wishlist-product-card";
import WishlistSkeleton from "@/app/(shop)/wishlist/_components/wishlist-skeleton";
import { useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";

function WishlistPage() {
  const { wishlistData, isLoading } = useWishlistContext();

  const queryClient = useQueryClient();
  React.useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["wishlist"] });
  }, [queryClient]);

  if (isLoading) return <WishlistSkeleton />;

  if (!wishlistData || wishlistData?.count < 1) {
    return (
      <AnimatedSection>
        <SectionHeader>Wishlist</SectionHeader>
        <EmptyCard
          icon={<Heart />}
          title="Your wishlist is empty"
          description="Save products you love and find them here anytime."
          cta={{ href: "/products", text: "Browse Products" }}
          showRefresh={true}
        />
      </AnimatedSection>
    );
  }

  return (
    <main className="min-h-[calc(100dvh-5rem)]">
      <AnimatedSection className="-mx-6 sm:mx-auto">
        <SectionHeader>Wishlist</SectionHeader>
        <div className="grid grid-cols-12 gap-6 *:lg:sticky *:lg:h-fit *:lg:top-26">
          <div className="col-span-full grid xl:grid-cols-2 gap-4">
            {wishlistData?.data?.map((product) => (
              <WishlistProductCard key={product._id} product={product} />
            ))}
            <div className="col-span-full">
              <ContinueShoppingButton variant="outline" size="lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

export default WishlistPage;
