import SearchField from "@/components/layout/navbar/search-field";
import NavigationItems from "@/components/layout/navbar/navigation-items";

function DesktopMenu() {
  return (
    <>
      <SearchField className="hidden md:flex grow" />
      <NavigationItems className="hidden md:flex items-center gap-3" />
    </>
  );
}

export default DesktopMenu;
