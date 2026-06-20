import ToggleButton from "@/components/common/toggle-button";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ProfileProps } from "@/components/layout/navbar/_components/profile-item";
import UpdateProfileLinkContent from "@/components/layout/navbar/_components/update-profile-link-content";

interface ProfileActionProps extends ProfileProps {
  isUser: boolean;
}

function ProfileAction({ type, onLinkClick, isUser }: ProfileActionProps) {
  const isMobile = type === "mobile";

  const handleLinkClick = () => {
    if (!isUser || !onLinkClick) return;

    onLinkClick();
  };

  if (isMobile)
    return (
      <Button
        variant={isUser ? "outline" : "default"}
        aria-label={isUser ? "Edit profile" : "Login"}
        onClick={handleLinkClick}
        asChild
      >
        <Link href={isUser ? "/update-profile" : "/login"}>
          <UpdateProfileLinkContent type={type} isUser={isUser} />
        </Link>
      </Button>
    );

  return (
    <DropdownMenuItem className="focus-visible:ring-0 border-0" asChild>
      <ToggleButton tooltipText={isUser ? "Edit Profile" : "Login"} asChild>
        <Link href={isUser ? "/update-profile" : "/login"}>
          <UpdateProfileLinkContent type={type} isUser={isUser} />
        </Link>
      </ToggleButton>
    </DropdownMenuItem>
  );
}

export default ProfileAction;
export type { ProfileActionProps };
