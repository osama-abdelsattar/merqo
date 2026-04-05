import Brand from "@/components/navbar/brand";
import SearchField from "@/components/navbar/search-field";
import NavigationItems from "@/components/navbar/navigation-items";
import MobileMenu from "@/components/navbar/mobile-menu";

export default function Navbar(props: React.ComponentProps<"nav">) {
  return (
    <nav {...props}>
      <Brand />
      <SearchField className="hidden sm:flex md:grow" />
      <NavigationItems className="hidden md:flex items-center gap-3" />
      <MobileMenu direction="left" />
    </nav>
  );
}
