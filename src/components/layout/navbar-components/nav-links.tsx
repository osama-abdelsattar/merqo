import { NAV_LINKS } from "@/config/navigation.config";
import TooltipButton from "@/components/tooltip-button";
import Link from "next/link";

function NavLinks() {
  return NAV_LINKS.map((link) => {
    const { label, Icon, href } = link;
    return (
      <li key={label}>
        <TooltipButton
          tooltipText={label}
          variant="outline"
          size="icon-lg"
          asChild
        >
          <Link href={href} className="relative">
            {Icon && <Icon className="size-5" />}
          </Link>
        </TooltipButton>
      </li>
    );
  });
}

export default NavLinks;
