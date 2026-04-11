"use client";
import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

export default function LogOutAlertButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const queryClient = useQueryClient();

  const handleLogOut = React.useCallback(async () => {
    await signOut({ redirect: false });
    queryClient.invalidateQueries({ queryKey: ["cart", "wishlist"] });
    toast.success("Logged out successfully, redirecting to login page");
    router.push("/login");
  }, [router, queryClient]);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        asChild
        onSelect={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to log out?</AlertDialogTitle>
          <AlertDialogDescription>
            You won&apos;t be able to access cart, checkout, or place orders,
            you would still be able to explore products and use wishlist.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={handleLogOut}>
            Log out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
