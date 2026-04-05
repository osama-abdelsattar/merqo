import { NavLink } from "@/types/navigation";
import {
  HeartIcon,
  HomeIcon,
  ShoppingBasketIcon,
  TagsIcon,
  BoxIcon,
  LogInIcon,
  UserPlus2Icon,
} from "lucide-react";
import { CATEGORIES } from "./categories";
import LoginDialog from "@/components/auth/login-dialog";
import SignupDialog from "@/components/auth/signup-dialog";

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

const categories =
  CATEGORIES?.map((category) => {
    return { href: `/products?category=${category._id}`, label: category.name };
  }) ?? [];

const CATEGORY_LINKS: NavLink[] = [
  { href: "/categories", label: "Categories" },
  ...categories,
];

const ADDITIONAL_LINKS: NavLink[] = [
  { href: "/brands", label: "Brands", Icon: TagsIcon },
  {
    href: "/products",
    label: "Products",
    Icon: BoxIcon,
  },
];

interface AuthLink extends NavLink {
  AuthDialogComponent: React.FunctionComponent;
}

const AUTH_LINKS: AuthLink[] = [
  {
    href: "/login",
    label: "Login",
    Icon: LogInIcon,
    AuthDialogComponent: LoginDialog,
  },
  {
    href: "/signup",
    label: "Sign Up",
    Icon: UserPlus2Icon,
    AuthDialogComponent: SignupDialog,
  },
];

const SECTION_LINKS: NavLink[] = NAV_LINKS.concat(
  CATEGORY_LINKS[0],
  ADDITIONAL_LINKS,
);

export {
  NAV_LINKS,
  CATEGORY_LINKS,
  ADDITIONAL_LINKS,
  AUTH_LINKS,
  SECTION_LINKS,
};
