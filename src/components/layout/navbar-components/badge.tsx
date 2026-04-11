"use client";

import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { Url } from "next/dist/shared/lib/router/router";
import { Badge as ShadcnBadge } from "@/components/ui/badge";

const Badge = ({ href }: { href: Url }) => {
  const { cartData } = useCart();
  const { data: wishlistData } = useWishlist();

  const cartBadge = cartData?.numOfCartItems;
  const wishlistBadge = wishlistData?.count;

  const badge =
    href === "/cart" ? cartBadge : href === "/wishlist" ? wishlistBadge : null;

  if (!badge || badge < 1) return null;

  return (
    <ShadcnBadge className="ms-auto p-0 size-5 text-xs">{badge}</ShadcnBadge>
  );
};

export default Badge;
