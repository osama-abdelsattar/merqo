"use client";

import * as React from "react";
import { CardContent, CardFooter } from "@/components/ui/card";
import AuthCard from "@/app/(auth)/_components/auth-card";
import AuthHeader from "@/app/(auth)/_components/auth-header";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { useRouter, useSearchParams } from "next/navigation";
import EmptyCard from "@/components/common/empty-card";
import { Button } from "@/components/ui/button";
import { useToastMutation } from "@/hooks/use-toast-mutation.hook";
import { Spinner } from "@/components/ui/spinner";
import { resetPassword } from "@/actions/password-reset.action";
import PasswordInput from "@/components/common/password-input";
import { signOut } from "next-auth/react";
import { PASSWORD_REGEX } from "@/lib/schemas/auth.schema";

function UpdatePasswordContent() {
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>();

  const router = useRouter();
  const params = useSearchParams();
  const emailAddress = params.get("email");
  const redirectHref = params.get("redirect");

  const { mutate, isPending } = useToastMutation({
    mutationFn: () => {
      if (!emailAddress) throw new Error("Email address is required");
      return resetPassword(emailAddress, password);
    },
    onSuccessWithToast() {
      if (!redirectHref) {
        signOut({ redirect: false });
        router.push("/login");
      } else router.push(redirectHref);
    },
    successMessage: `Password updated, ${redirectHref ? "redirecting back..." : "please login again"}`,
    errorMessage: (data) => data.message,
  });

  if (!emailAddress) return <EmptyCard title="OTP" />;

  return (
    <form
      className="w-full max-w-md mx-4 sm:mx-0"
      onSubmit={(e) => {
        e.preventDefault();

        if (!PASSWORD_REGEX.test(password)) {
          setError("Please enter a valid password");
          return;
        }

        mutate();
      }}
    >
      <AuthCard className="min-h-fit rounded-4xl">
        <AuthHeader
          title="Update Password"
          description="Choose a strong password and remember it"
        />
        <CardContent>
          <Field>
            <FieldLabel>New Password</FieldLabel>
            <PasswordInput
              value={password}
              autoComplete="new-password webauthn"
              onChange={(e) => {
                if (e.target.value.length > 0) setError(undefined);
                setPassword(e.target.value);
              }}
            />
            <FieldError errors={[{ message: error }]} />
          </Field>
        </CardContent>
        <CardFooter>
          <Button className="ms-auto" type="submit" disabled={isPending}>
            {isPending && <Spinner />}
            Update Password
          </Button>
        </CardFooter>
      </AuthCard>
    </form>
  );
}

function UpdatePasswordPage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8">
          <Spinner />
        </div>
      }
    >
      <UpdatePasswordContent />
    </React.Suspense>
  );
}

export default UpdatePasswordPage;
