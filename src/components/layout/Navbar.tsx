"use client";
import Brand from "@/components/layout/navbar-components/brand";
import MobileMenu from "@/components/layout/navbar-components/mobile-menu";
import DesktopMenu from "@/components/layout/navbar-components/desktop-menu";
import { useBreakpoint } from "@/hooks/use-breakpoint";

function Navbar(props: React.ComponentProps<"nav">) {
  const isMobile = useBreakpoint("mobile");
  return (
    <nav {...props}>
      <Brand />
      {isMobile ? <MobileMenu direction="left" /> : <DesktopMenu />}
    </nav>
  );
}

export default Navbar;
