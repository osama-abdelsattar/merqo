"use client";

import { LogOutIcon } from "lucide-react";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import LogOutAlertButton from "@/components/common/log-out-alert-button";

function AuthenticatedMenuItems() {
  return (
    <DropdownMenuGroup>
      <LogOutAlertButton>
        <DropdownMenuItem
          className="rounded-xl focus-visible:ring-0 border-0"
          variant="destructive"
        >
          <LogOutIcon /> Log out
        </DropdownMenuItem>
      </LogOutAlertButton>
    </DropdownMenuGroup>
  );
}

export default AuthenticatedMenuItems;
