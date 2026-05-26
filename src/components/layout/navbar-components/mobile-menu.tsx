"use client";
import * as React from "react";

import { MenuIcon } from "lucide-react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CATEGORY_LINKS,
  NAV_LINKS,
  USER_MENU_LINKS,
} from "@/config/navigation.config";
import { Separator } from "@/components/ui/separator";
import SearchField from "@/components/layout/navbar-components/search-field";
import { useSession } from "next-auth/react";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemActions,
} from "@/components/ui/item";
import ThemeToggle from "@/components/layout/navbar-components/theme-toggle";
import MobileCategoriesSection from "./_components/mobile-categories-section";
import MobileNavLinks from "./_components/mobile-nav-links";
import MobileAuthButtons from "./_components/mobile-auth-buttons";
import ProfileItem from "./_components/profile-item";

function MobileMenu(props: React.ComponentProps<typeof Drawer>) {
  const { data: session } = useSession();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleLinkClick = () => setIsDrawerOpen((prev) => !prev);

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
        <ProfileItem
          type="mobile"
          className="rounded-none"
          onLinkClick={handleLinkClick}
        />
        <ScrollArea className="grow overflow-y-hidden border-y">
          <div className="p-4 flex flex-col gap-4">
            <SearchField className="sm:hidden w-full" />
            <MobileCategoriesSection
              categories={CATEGORY_LINKS}
              onLinkClick={handleLinkClick}
            />
            <Separator />
            <MobileNavLinks
              links={NAV_LINKS.concat(USER_MENU_LINKS)}
              onLinkClick={handleLinkClick}
              separatorIndex={NAV_LINKS.length - 1}
            />
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
          <MobileAuthButtons session={session} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileMenu;
