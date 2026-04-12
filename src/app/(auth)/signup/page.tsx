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
import { signupSchema, SignupValues } from "@/lib/schemas/auth.schema";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

function SignupPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const form = useForm<SignupValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  async function signUp(credentials: SignupValues) {
    const res = await signIn("signup", {
      ...credentials,
      redirect: false,
    });

    if (res?.error) {
      toast.error(res.error, { richColors: true });
      return;
    }

    if (res?.ok) {
      toast.success("Account created successfully!", {
        richColors: true,
      });
      router.refresh();
      await queryClient.resetQueries();
      router.push("/");
    }
  }
  return (
    <AuthCard className="sm:max-w-xl">
      <AuthHeader
        title="Create your account"
        description="Enter your details below to create your account"
      />
      <Form {...form}>
        <CardContent>
          <form onSubmit={form.handleSubmit(signUp)}>
            <div className="grid md:grid-cols-2 items-start gap-x-2 gap-y-4">
              <AuthFormField name="name" />
              <AuthFormField name="phone" />
              <AuthFormField name="email" className="md:col-span-2" />
              <AuthFormField name="password" />
              <AuthFormField name="rePassword" />
            </div>
            <AuthSubmitButton
              isFormSubmitting={form.formState.isSubmitting}
              type="signup"
              className="mt-4"
            />
          </form>
        </CardContent>
        <AuthFooter type="signup" />
      </Form>
    </AuthCard>
  );
}

export default SignupPage;
