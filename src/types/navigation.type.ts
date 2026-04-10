import { Icon } from "@/types/icon.type";

interface NavLink {
  href: string;
  label: string;
  Icon?: Icon;
  iconOnly?: boolean;
  className?: string;
  badge?: string | number;
}

export type { NavLink };
