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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { User2Icon } from "lucide-react";
import { getInitials } from "@/utils/text.util";
import AuthenticatedMenuItems from "./_components/authenticated-menu-items";
import UnauthenticatedMenuItems from "./_components/unauthenticated-menu-items";
import Link from "next/link";
import Badge from "./badge";
import { Separator } from "@/components/ui/separator";

function UserMenu() {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-lg" className="rounded-full">
          <Avatar size="lg">
            <AvatarImage className="relative">
              <Image fill src={session?.user?.image ?? ""} alt="" />
            </AvatarImage>
            <AvatarFallback>
              {session?.user?.name ? (
                getInitials(session.user.name)
              ) : (
                <User2Icon className="size-5" />
              )}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1" align="end">
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
          {session ? (
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
