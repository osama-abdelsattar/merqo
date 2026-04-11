"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CATEGORY_LINKS } from "@/config/navigation.config";
import Link from "next/link";

export default function CategoriesMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" variant="outline">
          Categories
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {CATEGORY_LINKS?.map((link) => {
          const { label, href } = link;
          return (
            <DropdownMenuItem
              key={href + label}
              className="rounded-xl focus-visible:ring-0 border-0"
              asChild
            >
              <Link
                href={href}
                className="text-foreground/60 hover:text-foreground"
              >
                {href === "/categories" && "All"} {label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
