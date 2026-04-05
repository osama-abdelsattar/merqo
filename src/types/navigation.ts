import { Icon } from "./icon";

interface NavLink {
  href: string;
  label: string;
  Icon?: Icon;
  iconOnly?: boolean;
  className?: string;
}

export type { NavLink };
