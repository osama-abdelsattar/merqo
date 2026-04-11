import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

type AuthCardProps = React.ComponentProps<typeof Card>;

function AuthCard({
  children,
  className,
  ...props
}: AuthCardProps) {
  return (
    <Card
      className={cn(
        "w-full min-h-dvh sm:min-h-fit max-w-full rounded-none sm:rounded-4xl flex flex-col justify-between",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

export default AuthCard;
