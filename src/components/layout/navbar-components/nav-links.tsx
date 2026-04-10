"use client";

import { NAV_LINKS } from "@/config/navigation.config";
import TooltipButton from "@/components/ui/tooltip-button";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/hooks/use-wishlist";

export default function NavLinks() {
  const { cartData } = useCart();

  const { data: wishlistData } = useWishlist();
  const wishlistItemCount = wishlistData?.count || 0;

  return NAV_LINKS.map((link) => {
    const { label, Icon, href } = link;
    return (
      <li key={label}>
        <TooltipButton
          tooltipText={label}
          variant="outline"
          size="icon-lg"
          asChild
        >
          <Link href={href} className="relative">
            {Icon && <Icon className="size-5" />}
            {href === "/cart" && cartData && cartData.numOfCartItems > 0 && (
              <Badge className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 p-0 size-4.5 text-xs">
                {cartData.numOfCartItems}
              </Badge>
            )}
            {href === "/wishlist" && wishlistItemCount > 0 && (
              <Badge className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 p-0 size-4.5 text-xs variant-secondary">
                {wishlistItemCount}
              </Badge>
            )}
          </Link>
        </TooltipButton>
      </li>
    );
  });
}
