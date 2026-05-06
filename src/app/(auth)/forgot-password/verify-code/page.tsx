"use client";

import * as React from "react";
import { CardContent, CardFooter } from "@/components/ui/card";
import AuthCard from "@/app/(auth)/_components/auth-card";
import AuthHeader from "@/app/(auth)/_components/auth-header";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter, useSearchParams } from "next/navigation";
import EmptyCard from "@/components/empty-card";
import { Button } from "@/components/ui/button";
import { useToastMutation } from "@/hooks/use-toast-mutation";
import {
  sendPasswordResetCode,
  verifyPasswordResetCode,
} from "@/actions/password-reset.action";
import { Spinner } from "@/components/ui/spinner";

function ResetCodeContent() {
  const [value, setValue] = React.useState<string>();
  const [error, setError] = React.useState<string>();

  const router = useRouter();
  const params = useSearchParams();
  const emailAddress = params.get("email");

  const {
    mutate: verifyCode,
    error: apiError,
    isPending: isVerifyPending,
  } = useToastMutation({
    mutationFn: (OTP: string) => verifyPasswordResetCode(OTP),
    onSuccessWithToast() {
      if (!emailAddress) return;
      router.push(
        `/update-password?email=${encodeURIComponent(emailAddress)}`,
      );
    },
    successMessage: "Code verified, redirecting to update password",
    errorMessage: (data) => data.message,
  });

  const { mutate: resendOTP, isPending: isResendPending } = useToastMutation({
    mutationFn: () => {
      if (!emailAddress) throw new Error("Email address is required");
      return sendPasswordResetCode(emailAddress);
    },
    successMessage: "Code resent, check your email",
    errorMessage: (data) => data.message,
  });

  if (!emailAddress) return <EmptyCard title="OTP" />;

  return (
    <form
      className="mx-4 sm:mx-0"
      onSubmit={(e) => {
        e.preventDefault();

        if (!value) {
          setError("Please enter a code");
          return;
        }

        verifyCode(value);
      }}
    >
      <AuthCard className="max-w-fit min-h-fit rounded-4xl">
        <AuthHeader
          title="Verify email address"
          description={`Enter the verification code we sent to your email address: ${emailAddress}`}
        />
        <CardContent>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel>Verification Code</FieldLabel>
              <Button
                size="xs"
                variant="secondary"
                type="button"
                onClick={() => resendOTP()}
                disabled={isResendPending}
              >
                {isResendPending && <Spinner className="size-3" />}
                Resend code
              </Button>
            </div>
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => {
                if (value) {
                  setError(undefined);
                }
                setValue(value);
              }}
              pattern={REGEXP_ONLY_DIGITS}
            >
              <InputOTPGroup className="*:size-10 sm:*:size-12 md:*:size-14">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator className="mx-2" />
              <InputOTPGroup className="*:size-10 sm:*:size-12 md:*:size-14">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <FieldError
              errors={[{ message: error }, { message: apiError?.message }]}
            />
          </Field>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isVerifyPending}
          >
            {isVerifyPending && <Spinner />}
            Verify
          </Button>
        </CardFooter>
      </AuthCard>
    </form>
  );
}

function ResetCodePage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8">
          <Spinner />
        </div>
      }
    >
      <ResetCodeContent />
    </React.Suspense>
  );
}

export default ResetCodePage;
