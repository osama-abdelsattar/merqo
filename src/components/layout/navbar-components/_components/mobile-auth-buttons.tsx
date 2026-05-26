"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogOutAlertButton from "@/components/log-out-alert-button";
import { Session } from "next-auth";

interface MobileAuthButtonsProps {
  session: Session | null;
}

function MobileAuthButtons({ session }: MobileAuthButtonsProps) {
  return (
    <div className="flex flex-col gap-2">
      {session ? (
        <LogOutAlertButton>
          <Button variant="destructive">Logout</Button>
        </LogOutAlertButton>
      ) : (
        <>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/signup">Signup</Link>
          </Button>
        </>
      )}
    </div>
  );
}

export default MobileAuthButtons;
