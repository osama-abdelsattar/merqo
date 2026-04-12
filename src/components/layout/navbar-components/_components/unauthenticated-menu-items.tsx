"use client";

import Link from "next/link";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "@/types/navigation.type";

interface UnauthenticatedMenuItemsProps {
  authLinks: NavLink[];
}

function UnauthenticatedMenuItems({
  authLinks,
}: UnauthenticatedMenuItemsProps) {
  return (
    <DropdownMenuGroup>
      {authLinks.map((link) => {
        const { href, label, Icon } = link;
        return (
          <DropdownMenuItem
            key={href + label}
            className="rounded-xl focus-visible:ring-0 border-0"
            asChild
          >
            <Link
              href={href}
              className="text-foreground/60 hover:text-foreground transition-[color] cursor-pointer"
            >
              <span>{Icon && <Icon />}</span>
              <span>{label}</span>
            </Link>
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuGroup>
  );
}

export default UnauthenticatedMenuItems;
