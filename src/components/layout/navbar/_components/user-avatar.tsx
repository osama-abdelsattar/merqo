"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Spinner } from "@/components/ui/spinner";
import { getInitials } from "@/utils/text.util";
import { User2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserAvatar(props: React.ComponentProps<typeof Avatar>) {
  const session = useSession();

  return (
    <Avatar {...props}>
      <AvatarImage className="relative">
        <Image
          fill
          src={session?.data?.user?.image ?? ""}
          alt={session?.data?.user?.name ?? "User avatar"}
        />
      </AvatarImage>
      <AvatarFallback>
        {session?.data?.user?.name ? (
          getInitials(session.data.user.name)
        ) : session.status === "loading" ? (
          <Spinner />
        ) : (
          <User2Icon className="size-5" />
        )}
      </AvatarFallback>
    </Avatar>
  );
}
