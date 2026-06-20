"use client";

import React from "react";
import Link from "next/link";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import Badge from "@/components/layout/navbar/badge";
import { NavLink } from "@/types/navigation.type";

interface MobileNavLinksProps {
  links: NavLink[];
  onLinkClick: () => void;
  separatorIndex?: number;
}

function MobileNavLinks({
  links,
  onLinkClick,
  separatorIndex,
}: MobileNavLinksProps) {
  return (
    <>
      {links.map((link, i) => {
        const { label, href, Icon } = link;
        return (
          <React.Fragment key={label}>
            <Item className="border-border" asChild>
              <Link href={href} onClick={onLinkClick}>
                <ItemContent>
                  <ItemTitle className="w-full">
                    {Icon && <Icon className="size-4.5" />} {label}
                    <Badge href={href} />
                  </ItemTitle>
                </ItemContent>
              </Link>
            </Item>
            {separatorIndex !== undefined && i === separatorIndex && (
              <Separator />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default MobileNavLinks;
