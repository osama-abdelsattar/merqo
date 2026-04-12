"use client";

import { NAV_LINKS, CATEGORY_LINKS } from "@/config/navigation.config";
import { FOOTER_STRUCTURE } from "@/config/footer.config";
import { NavLink } from "@/types/navigation.type";
import { FooterSection } from "@/types/footer.type";

function useFooter() {
  const exploreLinks: NavLink[] = [
    ...NAV_LINKS,
    { label: "Categories", href: "/categories" },
  ];

  const footerSections: FooterSection[] = [
    {
      title: FOOTER_STRUCTURE.EXPLORE_TITLE,
      items: exploreLinks,
    },
    {
      title: FOOTER_STRUCTURE.SHOP_TITLE,
      items: CATEGORY_LINKS,
    },
  ];

  return { footerSections };
}

export { useFooter };
