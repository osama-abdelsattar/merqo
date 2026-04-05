"use client";
import Link from "next/link";
import { AUTH_LINKS, CATEGORY_LINKS, NAV_LINKS } from "@/config/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ThemeToggle from "./theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User2Icon } from "lucide-react";
import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item";

export default function NavigationItems(props: React.ComponentProps<"ul">) {
  return (
    <ul {...props}>
      {NAV_LINKS.map((link) => {
        const { label, Icon, href } = link;
        return (
          <li key={href} className="flex items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="rounded-full"
                  asChild
                >
                  <Link href={href}>
                    {Icon ? (
                      <span>
                        <Icon className="size-5" />
                      </span>
                    ) : null}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          </li>
        );
      })}
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="lg" variant="outline">
              Categories
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            {CATEGORY_LINKS.slice(1, CATEGORY_LINKS.length).map((link) => {
              const { label, href } = link;
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
                    {label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
      <Separator orientation="vertical" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon-lg" className="rounded-full">
            <Avatar size="lg">
              {/* <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" /> */}
              <AvatarFallback>
                <User2Icon className="size-5" />
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-1" align="end">
          {AUTH_LINKS.map((link) => {
            const { href, label, Icon, AuthDialogComponent } = link;
            return (
              <Dialog key={href}>
                <DropdownMenuItem
                  asChild
                  onSelect={(e) => e.preventDefault()}
                  className="focus-visible:ring-0 border-0"
                >
                  <DialogTrigger asChild>
                    <Item
                      size="sm"
                      className="p-2 hover:bg-muted cursor-pointer"
                      tabIndex={0}
                    >
                      <ItemMedia>
                        {Icon && <Icon className="size-4.5" />}
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle className="text-sm">{label}</ItemTitle>
                      </ItemContent>
                    </Item>
                  </DialogTrigger>
                </DropdownMenuItem>
                <DialogContent>
                  <AuthDialogComponent />
                </DialogContent>
              </Dialog>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
      <ThemeToggle />
    </ul>
  );
}
