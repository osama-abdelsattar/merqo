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
import { useRouter, useSearchParams } from "next/navigation";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ForgotPasswordContent() {
  const [emailAddress, setEmailAddress] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect");

  const { mutate: sendResetCode, isPending } = useToastMutation({
    mutationFn: (email: string) => sendPasswordResetCode(email),
    onSuccessWithToast() {
      const next = new URLSearchParams({
        email: emailAddress,
        ...(redirect ? { redirect } : {}),
      });
      router.push(`/forgot-password/verify-code?${next.toString()}`);
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
            Send Reset Code
          </Button>
        </CardFooter>
      </AuthCard>
    </form>
  );
}

function ForgotPasswordPage() {
  return (
    <React.Suspense fallback={null}>
      <ForgotPasswordContent />
    </React.Suspense>
  );
}

export default ForgotPasswordPage;
