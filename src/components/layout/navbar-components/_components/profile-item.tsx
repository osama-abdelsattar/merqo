"use client";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import UserAvatar from "./user-avatar";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import ToggleButton from "@/components/toggle-button";
import Link from "next/link";
import { EditIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

interface ProfileProps extends React.ComponentProps<typeof Item> {
  type?: "desktop" | "mobile";
  onLinkClick?: () => void;
}

function ProfileItem({
  type = "desktop",
  onLinkClick,
  ...props
}: ProfileProps) {
  const session = useSession();

  return (
    <Item variant="muted" aria-label="Profile" {...props}>
      <ItemMedia aria-label="Profile picture">
        <UserAvatar size="lg" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle aria-label="User full name">
          {session.data?.user.name}
        </ItemTitle>
        <p className="text-xs text-muted-foreground" aria-label="User email">
          {session.data?.user.email}
        </p>
      </ItemContent>
      <ItemActions className="ms-auto">
        {type === "desktop" ? (
          <DropdownMenuItem className="focus-visible:ring-0 border-0" asChild>
            <ToggleButton tooltipText="Edit Profile" asChild>
              <Link href="/update-profile">
                <EditIcon />
              </Link>
            </ToggleButton>
          </DropdownMenuItem>
        ) : (
          <Button
            variant="outline"
            aria-label="Edit profile"
            onClick={onLinkClick}
            asChild
          >
            <Link href="/update-profile">
              <EditIcon /> Edit
            </Link>
          </Button>
        )}
      </ItemActions>
    </Item>
  );
}
export default ProfileItem;
