"use client";

import { addToCart } from "@/actions/cart.action";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Cart } from "@/types/cart.type";
import { Spinner } from "@/components/ui/spinner";

export default function AddToCartButton({ productID }: { productID: string }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      const res = await addToCart(id);
      if (!res) throw new Error("Failed to add to cart");
      return res;
    },
    onSuccess: (data: Cart) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return (
    <Button onClick={() => mutate(productID)} disabled={isPending}>
      {isPending ? <Spinner /> : <PlusIcon />} Add To Cart
    </Button>
  );
}
