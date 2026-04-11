import { getTopCategories } from "@/services/category.service";
import { NavLink } from "@/types/navigation.type";
import {
  HeartIcon,
  HomeIcon,
  ShoppingBasketIcon,
  TagsIcon,
  LogInIcon,
  UserPlus2Icon,
  PackageIcon,
  LayersIcon,
} from "lucide-react";

const categories = (await getTopCategories())?.toReversed();

const NAV_LINKS: NavLink[] = [
  { href: "/", Icon: HomeIcon, label: "Home" },
  {
    href: "/products",
    label: "Products",
    Icon: LayersIcon,
  },
  { href: "/brands", Icon: TagsIcon, label: "Brands" },
];

const CATEGORY_LINKS: NavLink[] = categories?.map((category) => {
  return {
    href: { pathname: "/products", query: { id: category._id } },
    label: category.name,
  };
}) ?? [{ href: "/categories", label: "All categories" }];

const ADDITIONAL_LINKS: NavLink[] = [];

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

const USER_MENU_LINKS: NavLink[] = [
  {
    href: "/cart",
    Icon: ShoppingBasketIcon,
    label: "Cart",
  },

  {
    href: "/wishlist",
    Icon: HeartIcon,
    label: "Wishlist",
  },

  {
    href: "/allorders",
    Icon: PackageIcon,
    label: "Orders",
  },
];

const SECTION_LINKS: NavLink[] = NAV_LINKS.concat(ADDITIONAL_LINKS);

export {
  NAV_LINKS,
  CATEGORY_LINKS,
  ADDITIONAL_LINKS,
  AUTH_LINKS,
  USER_MENU_LINKS,
  SECTION_LINKS,
};
