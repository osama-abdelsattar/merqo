"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import AuthCard from "@/app/(auth)/_components/auth-card";
import AuthHeader from "@/app/(auth)/_components/auth-header";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { sendPasswordResetCode } from "@/actions/password-reset.action";
import { useToastMutation } from "@/hooks/use-toast-mutation";
import { useRouter } from "next/navigation";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ForgotPasswordPage() {
  const [emailAddress, setEmailAddress] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  const router = useRouter();

  const { mutate: sendResetCode, isPending } = useToastMutation({
    mutationFn: (email: string) => sendPasswordResetCode(email),
    onSuccessWithToast() {
      router.push(
        `/forgot-password/verify-code?email=${encodeURIComponent(emailAddress)}`,
      );
    },
    successMessage: (data) => data.message ?? "Done successfully",
    errorMessage: (error) => error.message,
  });

  return (
    <form
      className="w-full max-w-md mx-4 sm:mx-0"
      onSubmit={(e) => {
        e.preventDefault();

        if (!EMAIL_REGEX.test(emailAddress)) {
          setError("Please enter a valid email address");
          return;
        }
        sendResetCode(emailAddress);
      }}
    >
      <AuthCard className="min-h-fit rounded-4xl">
        <AuthHeader
          title="Forgot your password?"
          description="Enter your email below to reset your password"
        />
        <CardContent>
          <Field>
            <FieldLabel>Email Address</FieldLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              autoComplete="email webauthn"
              value={emailAddress}
              onChange={(e) => {
                if (error) setError(null);
                setEmailAddress(e.target.value);
              }}
              autoFocus
            />
            {error && <FieldError errors={[{ message: error }]} />}
          </Field>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="ms-auto" disabled={isPending}>
            {isPending && <Spinner />}
            Send Reset Link
          </Button>
        </CardFooter>
      </AuthCard>
    </form>
  );
}

export default ForgotPasswordPage;
