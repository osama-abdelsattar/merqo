"use client";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import UserAvatar from "@/components/layout/navbar/_components/user-avatar";
import { useSession } from "next-auth/react";
import ProfileAction from "@/components/layout/navbar/_components/profile-action";

interface ProfileProps {
  type?: "desktop" | "mobile";
  onLinkClick?: () => void;
}

function ProfileItem({
  type = "desktop",
  onLinkClick,
  ...props
}: ProfileProps & React.ComponentProps<typeof Item>) {
  const session = useSession();

  return (
    <Item variant="muted" aria-label="Profile" {...props}>
      <ItemMedia aria-label="Profile picture">
        <UserAvatar size="lg" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle aria-label="User full name">
          {session.data?.user.name ?? "Guest"}
        </ItemTitle>
        <p className="text-xs text-muted-foreground" aria-label="User email">
          {session.data?.user.email ?? "Login to access all the features"}
        </p>
      </ItemContent>
      <ItemActions className="ms-auto">
        <ProfileAction
          type={type}
          onLinkClick={onLinkClick}
          isUser={session.status === "authenticated"}
        />
      </ItemActions>
    </Item>
  );
}
export default ProfileItem;
export type { ProfileProps };
