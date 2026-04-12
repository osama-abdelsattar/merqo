"use client";

import { NavLink } from "@/types/navigation.type";
import Link from "next/link";

interface FooterLinksSectionProps {
  title: string;
  items: NavLink[];
}

function FooterLinksSection({ title, items }: FooterLinksSectionProps) {
  return (
    <div className="lg:col-span-2">
      <h3 className="font-semibold text-lg mb-5">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          const { label, href } = item;
          return (
            <li key={label}>
              <Link
                className="text-muted-foreground/80 hover:text-muted-foreground transition-colors text-sm"
                href={href}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterLinksSection;
