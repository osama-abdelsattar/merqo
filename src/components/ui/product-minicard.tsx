import { CartItem } from "@/types/cart.type";
import QuantitySelect from "@/components/ui/quantity-select";
import { deleteFromCart } from "@/actions/cart.action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import AppProductMiniCard from "@/components/ui/app-product-mini-card";
import DeleteAlertButton from "@/components/ui/delete-alert";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Trash2Icon } from "lucide-react";
import { Product } from "@/types/product.type";

export default function ProductMiniCard({
  product,
}: {
  product: CartItem | Product;
}) {
  const queryClient = useQueryClient();
  const { mutate: deleteItem, isPending: isDeletionPending } = useMutation({
    mutationFn: async (productID: string) => {
      const res = await deleteFromCart(productID);
      return res;
    },
    onSuccess: (data) => {
      if (data) {
        toast.info(data.message);
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      }
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const productData = "product" in product ? product.product : product;

  return (
    <AppProductMiniCard
      product={productData as Product}
      actions={
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 pb-4 sm:pb-0">
          <div className="flex gap-2 items-center">
            <QuantitySelect availableQuantity={productData.quantity} />
            <span className="text-muted-foreground text-sm">
              {productData.quantity} available
            </span>
          </div>
          <DeleteAlertButton
            mutate={() => deleteItem(productData.id || productData._id)}
          >
            <Button
              variant="destructive"
              disabled={isDeletionPending}
              size="sm"
              className="w-full sm:w-auto"
            >
              {isDeletionPending ? (
                <Spinner className="size-4" />
              ) : (
                <Trash2Icon className="size-4" />
              )}
              <span>Remove Item</span>
            </Button>
          </DeleteAlertButton>
        </div>
      }
    />
  );
}
