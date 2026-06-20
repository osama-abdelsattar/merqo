import { CartProduct } from "@/types/cart.type";
import QuantitySelect from "@/components/common/quantity-select";
import { deleteFromCart } from "@/actions/cart.action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import AppProductMiniCard from "@/components/common/app-product-mini-card";
import DeleteAlertButton from "@/components/common/delete-alert-button";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Trash2Icon } from "lucide-react";
import { useCartContext } from "@/context/cart.context";

function CartProductCard({ product }: { product: CartProduct }) {
  const { setCart } = useCartContext();

  const { mutate: deleteItem, isPending: isDeletionPending } = useMutation({
    mutationFn: async (productID: string) => {
      const res = await deleteFromCart(productID);

      return res;
    },
    onSuccess: (data) => {
      if (data) {
        toast.info(data.message);
        setCart(data);
      }
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return (
    <AppProductMiniCard
      product={product}
      actions={
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4 pb-4 md:pb-0">
          <QuantitySelect availableQuantity={product.quantity} showAvailable />
          <DeleteAlertButton
            mutate={() => deleteItem(product._id)}
            innerButtonText="Remove item"
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
              <span>Remove item</span>
            </Button>
          </DeleteAlertButton>
        </div>
      }
    />
  );
}

export default CartProductCard;
