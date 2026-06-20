import ThemeToggle from "@/components/layout/navbar/theme-toggle";
import {
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface AuthHeaderProps extends React.ComponentProps<typeof CardHeader> {
  title: string;
  description: string;
}

function AuthHeader({
  title,
  description,
  className,
  ...props
}: AuthHeaderProps) {
  return (
    <CardHeader className={cn(className)} {...props}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardAction>
        <ThemeToggle />
      </CardAction>
    </CardHeader>
  );
}

export default AuthHeader;
