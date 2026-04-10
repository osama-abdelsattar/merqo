import { Button } from "@/components/ui/button";
import { LogInIcon, UserPlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { Spinner } from "@/components/ui/spinner";

interface AuthSubmitButtonProps extends Omit<
  React.ComponentProps<typeof Button>,
  "type"
> {
  type: "login" | "signup";
  isFormSubmitting: boolean;
}

export default function AuthSubmitButton({
  type,
  className,
  isFormSubmitting,
  ...props
}: AuthSubmitButtonProps) {
  const isLogin = type === "login";

  return (
    <Button
      type="submit"
      className={cn(
        "w-full transition-all active:scale-95",
        className,
      )}
      disabled={isFormSubmitting}
      {...props}
    >
      {isFormSubmitting ? (
        <Spinner />
      ) : isLogin ? (
        <LogInIcon />
      ) : (
        <UserPlusIcon />
      )}
      {isLogin ? "Login" : "Sign Up"}
    </Button>
  );
}
