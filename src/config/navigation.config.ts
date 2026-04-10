import { NavLink } from "@/types/navigation.type";
import {
  HeartIcon,
  HomeIcon,
  ShoppingBasketIcon,
  TagsIcon,
  BoxIcon,
  LogInIcon,
  UserPlus2Icon,
} from "lucide-react";

const NAV_LINKS: NavLink[] = [
  { href: "/", Icon: HomeIcon, label: "Home", iconOnly: true },
  {
    href: "/cart",
    Icon: ShoppingBasketIcon,
    label: "Cart",
    iconOnly: true,
  },
  {
    href: "/wishlist",
    Icon: HeartIcon,
    label: "Wishlist",
    iconOnly: true,
  },
];

const ADDITIONAL_LINKS: NavLink[] = [
  { href: "/brands", label: "Brands", Icon: TagsIcon },
  {
    href: "/products",
    label: "Products",
    Icon: BoxIcon,
  },
];

const AUTH_LINKS: NavLink[] = [
  {
    href: "/login",
    label: "Login",
    Icon: LogInIcon,
  },
  {
    href: "/signup",
    label: "Sign Up",
    Icon: UserPlus2Icon,
  },
];

const SECTION_LINKS: NavLink[] = NAV_LINKS.concat(ADDITIONAL_LINKS);

export { NAV_LINKS, ADDITIONAL_LINKS, AUTH_LINKS, SECTION_LINKS };
