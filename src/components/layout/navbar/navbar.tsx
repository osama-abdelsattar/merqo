"use client";
import Brand from "@/components/layout/navbar/brand";
import MobileMenu from "@/components/layout/navbar/mobile-menu";
import DesktopMenu from "@/components/layout/navbar/desktop-menu";
import { useBreakpoint } from "@/hooks/use-breakpoint.hook";

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
