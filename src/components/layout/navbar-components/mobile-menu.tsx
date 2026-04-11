"use client";

import { ChevronDownIcon, MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaXmark } from "react-icons/fa6";
import { SITE_INFO } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item";
import {
  CATEGORY_LINKS,
  NAV_LINKS,
  USER_MENU_LINKS,
} from "@/config/navigation.config";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/layout/navbar-components/theme-toggle";
import SearchField from "@/components/layout/navbar-components/search-field";
import { useSession } from "next-auth/react";
import * as React from "react";
import LogOutAlertButton from "@/components/ui/logout-alert";
import Badge from "./badge";

export default function MobileMenu(props: React.ComponentProps<typeof Drawer>) {
  const token = useSession();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <Drawer {...props} open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger className="p-2.5 cursor-pointer hover:bg-accent transition-colors md:hidden rounded-full">
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="p-0 before:inset-0 before:rounded-l-none bg-popover rounded-r-4xl">
        <DrawerHeader className="py-3 pe-2 flex-row justify-between items-center">
          <DrawerTitle className="text-2xl font-serif">
            {SITE_INFO.name}
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            Site navigation menu
          </DrawerDescription>
          <DrawerClose className="p-2 rounded-full hover:bg-accent w-fit transition-colors cursor-pointer">
            <FaXmark className="size-4" />
          </DrawerClose>
        </DrawerHeader>
        <ScrollArea className="grow overflow-y-hidden border-y">
          <div className="p-4 flex flex-col gap-4">
            <SearchField className="sm:hidden w-full" />
            <Collapsible className="border rounded-2xl overflow-clip">
              <CollapsibleTrigger className="w-full px-4 py-3 flex justify-between items-center ring-0 group cursor-pointer hover:bg-muted transition-colors">
                Categories
                <ChevronDownIcon className="size-4 group-data-[state=open]:rotate-180 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="border-t">
                {CATEGORY_LINKS?.map((link, i) => {
                  const { label, href } = link;
                  return (
                    <Item key={i} asChild>
                      <Link
                        href={href}
                        onClick={() => setIsDrawerOpen((prev) => !prev)}
                        className="rounded-none"
                      >
                        <ItemContent>
                          <ItemTitle>{label}</ItemTitle>
                        </ItemContent>
                      </Link>
                    </Item>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
            <Separator />
            {NAV_LINKS.concat(USER_MENU_LINKS).map((link, i) => {
              const { label, href, Icon } = link;
              return (
                <React.Fragment key={label}>
                  <Item className="border-border" asChild>
                    <Link
                      href={href}
                      onClick={() => setIsDrawerOpen((prev) => !prev)}
                    >
                      <ItemContent>
                        <ItemTitle className="w-full">
                          {Icon && <Icon className="size-4.5" />} {label}
                          <Badge href={href} />
                        </ItemTitle>
                      </ItemContent>
                    </Link>
                  </Item>
                  {i + 1 === NAV_LINKS.length && <Separator />}
                </React.Fragment>
              );
            })}
          </div>
        </ScrollArea>
        <DrawerFooter className="gap-4">
          <Item variant="muted" className="ps-4 pe-3 py-2 rounded-4xl">
            <ItemContent>
              <ItemTitle>Theme</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ThemeToggle />
            </ItemActions>
          </Item>
          <Separator />
          <div className="flex flex-col gap-2">
            {token.status === "authenticated" ? (
              <LogOutAlertButton>
                <Button variant="destructive">Logout</Button>
              </LogOutAlertButton>
            ) : (
              <>
                <Button asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/signup">Signup</Link>
                </Button>
              </>
            )}
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
