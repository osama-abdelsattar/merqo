"use client";

import { changeInfo } from "@/actions/update-info.action";
import AuthFormField from "@/app/(auth)/_components/auth-form-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Spinner } from "@/components/ui/spinner";
import { useToastMutation } from "@/hooks/use-toast-mutation.hook";
import {
  accountInfoSchema,
  AccountInfoValues,
} from "@/lib/schemas/update-user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { User2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

function AccountInfoCard() {
  const { data: sessionData, update: updateSession } = useSession();

  const form = useForm<AccountInfoValues>({
    values: {
      name: sessionData?.user?.name ?? "",
      email: sessionData?.user?.email ?? "",
      phone: "",
    },
    resolver: zodResolver(accountInfoSchema),
  });

  const watchedValues = form.watch();
  const isChanged = Object.entries(watchedValues).some(([key, value]) => {
    if (value === "" || value === undefined) return false;
    const sessionValue =
      sessionData?.user?.[key as keyof typeof sessionData.user];
    return value !== sessionValue;
  });

  const { mutate: updateInfo, isPending } = useToastMutation({
    async mutationFn(values: AccountInfoValues) {
      const filteredValues: AccountInfoValues = Object.fromEntries(
        Object.entries(values).filter(([key, value]) => {
          if (value === "" || value === undefined) return false;
          const sessionValue =
            sessionData?.user?.[key as keyof typeof sessionData.user];
          return value !== sessionValue;
        }),
      );

      return await changeInfo(filteredValues);
    },
    async onSuccessWithToast(data) {
      await updateSession(data?.user);
    },
    successMessage: "Info Updated Successfully",
    errorMessage: (data) => data.message,
  });

  return (
    <Card className="md:col-span-6 lg:col-span-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User2Icon className="size-5" />
          User Info
        </CardTitle>
        <CardDescription>
          Manage your personal information, contact details, and account
          preferences.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => updateInfo(values))}
            className="grid lg:grid-cols-2 gap-4"
          >
            <AuthFormField name="name" />
            <AuthFormField name="phone" />
            <AuthFormField name="email" className="col-span-full" />
            <Button
              type="submit"
              className="col-span-full"
              disabled={isPending || !isChanged}
            >
              {isPending && <Spinner />}
              Update Info
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default AccountInfoCard;
