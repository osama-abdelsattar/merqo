"use client";

import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";
import { NavLink } from "@/types/navigation.type";

interface MobileCategoriesSectionProps {
  categories: NavLink[];
  onLinkClick: () => void;
}

function MobileCategoriesSection({
  categories,
  onLinkClick,
}: MobileCategoriesSectionProps) {
  return (
    <Collapsible className="border rounded-2xl overflow-clip">
      <CollapsibleTrigger className="w-full px-4 py-3 flex justify-between items-center ring-0 group cursor-pointer hover:bg-muted transition-colors">
        Categories
        <ChevronDownIcon className="size-4 group-data-[state=open]:rotate-180 transition-transform" />
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t">
        {categories?.map((link, i) => {
          const { label, href } = link;
          return (
            <Item key={i} asChild>
              <Link href={href} onClick={onLinkClick} className="rounded-none">
                <ItemContent>
                  <ItemTitle>{label}</ItemTitle>
                </ItemContent>
              </Link>
            </Item>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default MobileCategoriesSection;
