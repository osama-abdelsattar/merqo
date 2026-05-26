"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { KeySquareIcon } from "lucide-react";
import AuthFormField from "@/app/(auth)/_components/auth-form-field";
import {
  passwordChangeSchema,
  PasswordChangeValues,
} from "@/lib/schemas/update-user.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import ForgotPasswordLink from "@/components/forgot-password-link";
import { useToastMutation } from "@/hooks/use-toast-mutation";
import { updatePassword } from "@/actions/update-password.action";
import { Spinner } from "@/components/ui/spinner";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function PasswordChangeCard() {
  const form = useForm<PasswordChangeValues>({
    defaultValues: { currentPassword: "", password: "", rePassword: "" },
    resolver: zodResolver(passwordChangeSchema),
  });

  const router = useRouter();

  const { mutate, isPending } = useToastMutation({
    async mutationFn(values: PasswordChangeValues) {
      return await updatePassword(values);
    },
    onSuccessWithToast() {
      signOut({ redirect: false });
      router.push("/login");
    },
    successMessage: "Password updated, please log in again",
    errorMessage: (error) => error.message,
  });

  return (
    <Card className="md:col-span-6 lg:col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <KeySquareIcon className="size-5" />
          Change Password
        </CardTitle>
        <CardDescription>
          Update your password regularly to keep your account secure and
          protected.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => {
              mutate(values);
            })}
            className="grid gap-4"
          >
            <AuthFormField
              name="currentPassword"
              labelRight={<ForgotPasswordLink redirectHere />}
            />
            <AuthFormField
              name="password"
              label="New Password"
              placeholder="Enter your new password"
              autoComplete="new-password webauthn"
            />
            <AuthFormField
              name="rePassword"
              placeholder="Confirm your new password"
            />
            <Button type="submit" disabled={isPending}>
              {isPending && <Spinner />} Update Password
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default PasswordChangeCard;
