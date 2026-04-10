import { AUTH_LINKS } from "@/config/navigation.config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOutIcon, PackageIcon, User2Icon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getInitials } from "@/utils/text.util";
import LogOutAlertButton from "@/components/ui/logout-alert";
import { useSession } from "next-auth/react";
import { Separator } from "@/components/ui/separator";

export default function UserMenu() {
  const token = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-lg" className="rounded-full">
          <Avatar size="lg">
            <AvatarImage className="relative">
              <Image fill src={token?.data?.user?.image ?? ""} alt="" />
            </AvatarImage>
            <AvatarFallback>
              {token?.data?.user?.name ? (
                getInitials(token.data.user.name)
              ) : (
                <User2Icon className="size-5" />
              )}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="rounded-xl focus-visible:ring-0 border-0"
            asChild
          >
            <Link href="/allorders">
              <PackageIcon /> Orders
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <Separator />
        <DropdownMenuGroup>
          {token && token.status === "authenticated" ? (
            <LogOutAlertButton>
              <DropdownMenuItem
                className="rounded-xl focus-visible:ring-0 border-0"
                variant="destructive"
              >
                <LogOutIcon /> Log out
              </DropdownMenuItem>
            </LogOutAlertButton>
          ) : (
            AUTH_LINKS.map((link) => {
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
            })
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
