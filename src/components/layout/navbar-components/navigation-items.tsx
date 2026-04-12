import ThemeToggle from "@/components/layout/navbar-components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import UserMenu from "@/components/layout/navbar-components/user-menu";
import CategoriesMenu from "@/components/layout/navbar-components/categories-menu";
import NavLinks from "@/components/layout/navbar-components/nav-links";

function NavigationItems(props: React.ComponentProps<"ul">) {
  return (
    <ul {...props}>
      <NavLinks />
      <li>
        <CategoriesMenu />
      </li>
      <Separator orientation="vertical" />
      <li>
        <UserMenu />
      </li>
      <li>
        <ThemeToggle />
      </li>
    </ul>
  );
}

export default NavigationItems;
