import SearchField from "@/components/layout/navbar-components/search-field";
import NavigationItems from "@/components/layout/navbar-components/navigation-items";

function DesktopMenu() {
  return (
    <>
      <SearchField className="hidden md:flex grow" />
      <NavigationItems className="hidden md:flex items-center gap-3" />
    </>
  );
}

export default DesktopMenu;
