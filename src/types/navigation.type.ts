import { Icon } from "@/types/icon.type";
import { Url } from "next/dist/shared/lib/router/router";

interface NavLink {
  href: Url;
  label: string;
  Icon?: Icon;
  iconOnly?: boolean;
  className?: string;
  badge?: string | number;
}

export type { NavLink };
