"use client";

import { CardContent } from "@/components/ui/card";
import Link from "next/link";
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
      <Form {...form}>
        <CardContent>
          <form
            onSubmit={form.handleSubmit(logIn)}
            className="flex flex-col gap-4"
          >
            <AuthFormField name="email" />
            <AuthFormField
              name="password"
              autoComplete="current-password webauthn"
              labelRight={
                <Link
                  href="/forgot-password"
                  className="inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              }
            />
            <AuthSubmitButton
              type="login"
              className="mt-4"
              isFormSubmitting={form.formState.isSubmitting}
            />
          </form>
        </CardContent>
        <AuthFooter type="login" />
      </Form>
    </AuthCard>
  );
}

export default LoginPage;
