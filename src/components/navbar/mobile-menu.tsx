import { ChevronDownIcon, MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Drawer as DrawerPrimitive } from "vaul";
import { FaXmark } from "react-icons/fa6";
import { SITE_INFO } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item";
import { ADDITIONAL_LINKS, CATEGORY_LINKS, NAV_LINKS } from "@/config/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "./theme-toggle";
import SearchField from "./search-field";

export default function MobileMenu(
  props: React.ComponentProps<typeof DrawerPrimitive.Root>,
) {
  return (
    <Drawer {...props}>
      <DrawerTrigger className="p-2.5 cursor-pointer hover:bg-accent transition-colors md:hidden rounded-full">
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="p-0 before:inset-0 before:rounded-l-none bg-popover rounded-r-4xl">
        <DrawerHeader className="py-3 pe-2 flex-row justify-between items-center">
          <DrawerTitle className="text-2xl font-serif">
            {SITE_INFO.name}
          </DrawerTitle>
          <DrawerClose className="p-2 rounded-full hover:bg-accent w-fit transition-colors cursor-pointer">
            <FaXmark className="size-4" />
          </DrawerClose>
        </DrawerHeader>
        <ScrollArea className="grow overflow-y-clip border-y">
          <div className="p-4 flex flex-col gap-4">
            <SearchField className="sm:hidden w-full" />
            <Collapsible className="border rounded-2xl clip-hidden">
              <CollapsibleTrigger className="w-full px-4 py-3 flex justify-between items-center ring-0 group cursor-pointer hover:bg-muted transition-colors">
                Categories
                <ChevronDownIcon className="size-4 group-data-[state=open]:rotate-180 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="border-t">
                {CATEGORY_LINKS.map((link, i) => {
                  const { label, href } = link;
                  return (
                    <Item key={i} asChild>
                      <Link href={href} className="rounded-none">
                        <ItemContent>
                          <ItemTitle>{label}</ItemTitle>
                        </ItemContent>
                      </Link>
                    </Item>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
            {NAV_LINKS.concat(ADDITIONAL_LINKS).map((link, i) => {
              const { label, href, Icon } = link;
              return (
                <Item key={i} className="border-border" asChild>
                  <Link href={href}>
                    <ItemContent>
                      <ItemTitle>
                        {Icon && <Icon className="size-4.5" />} {label}
                      </ItemTitle>
                    </ItemContent>
                  </Link>
                </Item>
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
              <ThemeToggle tooltipText="theme" />
            </ItemActions>
          </Item>
          <Separator />
          <div className="flex flex-col gap-2">
            <Button className="cursor-pointer" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="cursor-pointer" variant="outline" asChild>
              <Link href="/signup">Signup</Link>
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
