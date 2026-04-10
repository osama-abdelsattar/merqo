import { CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

interface AuthFooterProps extends React.ComponentProps<typeof CardFooter> {
  type: "login" | "signup";
}

export default function AuthFooter({
  type,
  className,
  ...props
}: AuthFooterProps) {
  const isLogin = type === "login";

  return (
    <CardFooter className={cn("flex-col gap-2", className)} {...props}>
      <p className="text-sm">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link
          href={isLogin ? "/signup" : "/login"}
          className="underline-offset-2 underline inline-flex items-baseline"
        >
          {isLogin ? "Create one" : "Login"}
        </Link>
      </p>
      <div className="relative w-full my-2">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-muted-foreground bg-card px-2">
          OR
        </span>
        <Separator />
      </div>
      <Link
        href="/"
        className="text-sm underline-offset-2 underline items-baseline"
      >
        Continue as a guest
      </Link>
    </CardFooter>
  );
}
