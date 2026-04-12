"use client";
import { Url } from "next/dist/shared/lib/router/router";
import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { useCartContext } from "@/context/cart.context";
import { useWishlistContext } from "@/context/wishlist.context";

const Badge = ({ href }: { href: Url }) => {
  const { cart } = useCartContext();
  const { wishlist, wishlistData } = useWishlistContext();

  const cartBadge = cart?.numOfCartItems ?? null;
  const wishlistBadge = (wishlist?.data?.length || wishlistData?.count) ?? null;

  const badge =
    href === "/cart" ? cartBadge : href === "/wishlist" ? wishlistBadge : null;

  if (!badge || badge < 1) return null;

  return (
    <ShadcnBadge className="ms-auto p-0 size-5 text-xs text-primary-foreground!">
      {badge}
    </ShadcnBadge>
  );
};

export default Badge;
