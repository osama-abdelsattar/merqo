"use client";

import { AUTH_LINKS, USER_MENU_LINKS } from "@/config/navigation.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import AuthenticatedMenuItems from "@/components/layout/navbar/_components/authenticated-menu-items";
import UnauthenticatedMenuItems from "@/components/layout/navbar/_components/unauthenticated-menu-items";
import Link from "next/link";
import Badge from "@/components/layout/navbar/badge";
import { Separator } from "@/components/ui/separator";
import UserAvatar from "@/components/layout/navbar/_components/user-avatar";
import ProfileItem from "@/components/layout/navbar/_components/profile-item";

function UserMenu() {
  const session = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={session.status === "loading"}>
        <Button
          size="icon-lg"
          className="rounded-full"
          aria-label="User account menu: Edit profile, logout, or browse cart, wishlist, and orders"
        >
          <UserAvatar size="lg" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="flex flex-col gap-1 min-w-fit"
        align="end"
      >
        <ProfileItem size="sm" className="flex-nowrap items-center p-2" />
        <DropdownMenuGroup>
          {USER_MENU_LINKS.map((link) => (
            <DropdownMenuItem
              key={link.label}
              className="rounded-xl focus-visible:ring-0 border-0"
              asChild
            >
              <Link href={link.href} className="focus-visible:ring-0 border-0">
                {link.Icon && <link.Icon />} {link.label}
                <Badge href={link.href} />
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <Separator />
        <DropdownMenuGroup>
          {session.status === "authenticated" ? (
            <AuthenticatedMenuItems />
          ) : (
            <UnauthenticatedMenuItems authLinks={AUTH_LINKS} />
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
