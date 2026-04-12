import { Badge } from "@/components/ui/badge";

function ProductPrice({
  price,
  priceAfterDiscount,
  quantity,
}: {
  price: number;
  priceAfterDiscount?: number;
  quantity: number;
}) {
  return (
    <div className="flex gap-2 justify-between items-center flex-wrap">
      <div className="flex items-center gap-3">
        <span className="text-2xl md:text-4xl font-bold">
          {priceAfterDiscount || price}£
        </span>
        {priceAfterDiscount && (
          <>
            <span className="md:text-xl line-through text-muted-foreground">
              {price}£
            </span>
            <Badge variant="outline">
              Save {Math.round(((price - priceAfterDiscount) / price) * 100)}%
            </Badge>
          </>
        )}
      </div>
      <div className="*:h-8 *:px-3 *:text-base">
        {quantity > 0 ? (
          <Badge variant="subtle" className="gap-1.5">
            <div className="size-2.5 bg-primary rounded-full animate-pulse" />{" "}
            In stock
          </Badge>
        ) : (
          <Badge variant="destructive">Out of stock</Badge>
        )}
      </div>
    </div>
  );
}

export default ProductPrice;
