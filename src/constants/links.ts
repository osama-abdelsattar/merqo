// Types
import { NavLink } from "@/types/navLink.type";
// Icons
import {
  HeartIcon,
  HomeIcon,
  ShoppingBasketIcon,
  TagsIcon,
  BoxIcon,
  LogInIcon,
  UserPlus2Icon,
} from "lucide-react";

export const NAV_LINKS: NavLink[] = [
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
  ],
  CATEGORY_LINKS: NavLink[] = [
    { href: "/categories", label: "All Categories" },
    { href: "/products", label: "Electronics" },
    { href: "/products", label: "Health & beauty" },
    { href: "/products", label: "Men's fashion" },
    { href: "/products", label: "Women's fashion" },
  ],
  ADDITIONAL_LINKS: NavLink[] = [
    { href: "/brands", label: "Brands", Icon: TagsIcon },
    {
      href: "/products",
      label: "Products",
      Icon: BoxIcon,
      separator: {
        orientation: "vertical",
        className: "my-3",
      },
    },
  ],
  AUTHORIZATION_LINKS: NavLink[] = [
    {
      href: "/login",
      label: "Login",
      Icon: LogInIcon,
      className:
        "text-primary-500/70 hover:text-primary-500 hover:border-primary-500",
    },
    {
      href: "/signup",
      label: "Sign Up",
      Icon: UserPlus2Icon,
      className:
        "text-secondary-500/70 hover:text-secondary-500 hover:border-secondary-500",
    },
  ];
