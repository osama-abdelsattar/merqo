"use client";

import { CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthCard from "@/app/(auth)/_components/auth-card";
import AuthFooter from "@/app/(auth)/_components/auth-footer";
import AuthHeader from "@/app/(auth)/_components/auth-header";
import AuthFormField from "@/app/(auth)/_components/auth-form-field";
import AuthSubmitButton from "@/app/(auth)/_components/auth-submit-button";
import { loginSchema, LoginValues } from "@/lib/schemas/auth.schema";

import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import ForgotPasswordLink from "@/components/forgot-password-link";

function LoginPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const form = useForm<LoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  async function logIn(credentials: LoginValues) {
    const res = await signIn("signin", {
      ...credentials,
      redirect: false,
    });

    if (res?.error) {
      toast.error(res.error, { richColors: true });
      return;
    }

    if (res?.ok) {
      toast.success("Logged in successfully!", {
        richColors: true,
      });
      await queryClient.resetQueries();
      router.push("/");
      router.refresh();
    }
  }

  return (
    <AuthCard className="sm:max-w-md">
      <AuthHeader
        title="Login to your account"
        description="Enter your email below to login to your account"
      />
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(logIn)}
            className="flex flex-col gap-4"
          >
            <AuthFormField name="email" />
            <AuthFormField
              name="password"
              autoComplete="current-password webauthn"
              labelRight={<ForgotPasswordLink />}
            />
            <AuthSubmitButton
              type="login"
              className="mt-4"
              isFormSubmitting={form.formState.isSubmitting}
            />
          </form>
        </Form>
      </CardContent>
      <AuthFooter type="login" />
    </AuthCard>
  );
}

export default LoginPage;
