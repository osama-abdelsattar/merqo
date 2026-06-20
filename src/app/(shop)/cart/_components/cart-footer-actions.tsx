import { Button } from "@/components/ui/button";
import DeleteAlertButton from "@/components/common/delete-alert-button";
import { Spinner } from "@/components/ui/spinner";
import { Cart } from "@/types/cart.type";
import { UseMutateFunction } from "@tanstack/react-query";
import { XIcon } from "lucide-react";
import ContinueShoppingButton from "../../_components/continue-shopping-button";

function CartFooterActions({
  mutate,
  isPending,
}: {
  mutate: UseMutateFunction<Cart | null, Error, void, unknown>;
  isPending: boolean;
}) {
  return (
    <>
      <ContinueShoppingButton variant="outline" size="lg" />
      <DeleteAlertButton mutate={mutate} innerButtonText="Clear cart">
        <Button variant="ghost" disabled={isPending} size="lg">
          {isPending ? <Spinner /> : <XIcon />} Clear cart
        </Button>
      </DeleteAlertButton>
    </>
  );
}

export default CartFooterActions;
