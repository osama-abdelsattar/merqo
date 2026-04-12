"use client";
import * as React from "react";

import { Toggle } from "@/components/ui/toggle";
import ToggleButton from "@/components/toggle-button";
import { HeartIcon } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { Product } from "@/types/product.type";
import { useQueryClient } from "@tanstack/react-query";
import { addToWishlist, removeFromWishlist } from "@/actions/wishlist.action";
import { useWishlistContext } from "@/context/wishlist.context";
import { useToastMutation } from "@/hooks/use-toast-mutation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ExternalToast } from "sonner";

interface WishlistButtonProps extends React.ComponentProps<typeof Toggle> {
  productId: string;
}

function WishlistButton({ productId, ...props }: WishlistButtonProps) {
  const queryClient = useQueryClient();
  const { wishlistData, setWishlist, isLoading } = useWishlistContext();

  const { status } = useSession();

  const router = useRouter();

  const [toastOptions, setToastOptions] = React.useState<ExternalToast>();

  const { mutate: toggleWishlist, isPending } = useToastMutation(
    {
      mutationFn: async ({
        productId,
        isToggled,
      }: {
        productId: string;
        isToggled: boolean;
      }) => {
        if (status === "unauthenticated") {
          setToastOptions({
            action: {
              label: "Login",
              onClick() {
                router.push("/login");
              },
            },
          });
          throw new Error("Please login first before using wishlist");
        }
        if (isToggled) {
          return await removeFromWishlist(productId);
        } else {
          return await addToWishlist(productId);
        }
      },
      successMessage: (data) => data?.message || "Updated wishlist",
      errorMessage: (error) => error.message,
      onSuccessWithToast: (data) => {
        queryClient.invalidateQueries({ queryKey: ["wishlist"] });
        setWishlist(data);
      },
    },
    toastOptions,
  );

  const isToggled =
    wishlistData?.data?.some(
      (item: Product | string) =>
        (typeof item === "string" ? item : item._id) === productId,
    ) || false;

  return (
    <ToggleButton
      tooltipText={isToggled ? "Remove from wishlist" : "Add to wishlist"}
      size="icon-lg"
      pressed={isToggled}
      onPressedChange={() => toggleWishlist({ productId, isToggled })}
      disabled={isLoading || isPending}
      {...props}
    >
      {isPending ? (
        <Spinner className="size-4" />
      ) : (
        <HeartIcon className={isToggled ? "fill-current" : ""} />
      )}
    </ToggleButton>
  );
}

export default WishlistButton;
