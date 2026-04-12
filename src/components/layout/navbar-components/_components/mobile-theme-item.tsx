"use client";

import ThemeToggle from "@/components/layout/navbar-components/theme-toggle";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemActions,
} from "@/components/ui/item";

function MobileThemeItem() {
  return (
    <Item variant="muted" className="ps-4 pe-3 py-2 rounded-4xl">
      <ItemContent>
        <ItemTitle>Theme</ItemTitle>
      </ItemContent>
      <ItemActions>
        <ThemeToggle />
      </ItemActions>
    </Item>
  );
}

export default MobileThemeItem;
