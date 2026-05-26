"use client";
import * as React from "react";

import { addToCart } from "@/actions/cart.action";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { useCartContext } from "@/context/cart.context";
import { useToastMutation } from "@/hooks/use-toast-mutation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ExternalToast } from "sonner";

interface AddToCartButtonProps extends React.ComponentProps<typeof Button> {
  productID: string;
  hideTextInSm?: boolean;
}

function AddToCartButton({
  productID,
  hideTextInSm = true,
  ...props
}: AddToCartButtonProps) {
  const isSm = useBreakpoint("sm");
  const notHidden = !hideTextInSm || !isSm;
  const { setCart } = useCartContext();

  const { status } = useSession();

  const router = useRouter();

  const [toastOptions, setToastOptions] = React.useState<ExternalToast>();

  const { mutate, isPending } = useToastMutation(
    {
      mutationFn: async (id: string) => {
        if (status === "unauthenticated") {
          setToastOptions({
            action: {
              label: "Login",
              onClick() {
                router.push("/login");
              },
            },
          });
          throw new Error("Please login first before using cart");
        }
        const res = await addToCart(id);
        if (!res) throw new Error("Failed to add to cart");
        return res;
      },
      successMessage: (data) => data.message,
      errorMessage: (error) => error.message,
      onSuccessWithToast: (data) => {
        setCart(data);
      },
    },
    toastOptions,
  );

  return (
    <Button
      onClick={() => mutate(productID)}
      size={notHidden ? "default" : "icon-lg"}
      aria-label="Add to cart"
      disabled={isPending}
      {...props}
    >
      {isPending ? <Spinner /> : <PlusIcon />}
      {notHidden && "Add To Cart"}
    </Button>
  );
}

export default AddToCartButton;
