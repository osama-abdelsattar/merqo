import { Icon } from "./icon.type";
import { Separator as SeparatorPrimitive } from "radix-ui";

export interface NavLink {
  href: string;
  label: string;
  Icon?: Icon;
  iconOnly?: boolean;
  separator?: React.ComponentProps<typeof SeparatorPrimitive.Root>;
  className?: string;
}
