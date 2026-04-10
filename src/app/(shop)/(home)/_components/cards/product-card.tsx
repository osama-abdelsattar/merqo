import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import Rating from "@/components/ui/rating";
import ProductCardActions from "@/app/(shop)/(home)/_components/cards/product-card-actions";
import AddToCartButton from "@/app/(shop)/_components/add-to-cart-button";

interface ProductCard extends React.ComponentProps<typeof Card> {
  product: Product;
}

export default function ProductCard({ product, ...props }: ProductCard) {
  const {
    category,
    _id,
    title,
    imageCover,
    ratingsAverage,
    price,
    priceAfterDiscount,
  } = product;
  return (
    <Card {...props}>
      <div className="relative h-82">
        <Image fill src={imageCover} alt={title} className="object-cover" />
        <div className="p-3 absolute inset-0 flex flex-col gap-2 items-end justify-start">
          <ProductCardActions productID={_id} />
        </div>
      </div>
      <CardHeader className="gap-2">
        <div>
          <CardDescription className="leading-4">
            {category.name}
          </CardDescription>
          <CardTitle>
            <Link href={`/product/${_id}`}>{title}</Link>
          </CardTitle>
        </div>
        <Rating rating={ratingsAverage} />
      </CardHeader>
      <CardFooter className="mt-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl lg:text-2xl font-bold">
            {priceAfterDiscount || price}£
          </span>
          {typeof priceAfterDiscount === "number" && priceAfterDiscount > 0 && (
            <span className="text-lg xl:text-base line-through text-destructive">
              {price}
            </span>
          )}
        </div>
        <AddToCartButton productID={_id} />
      </CardFooter>
    </Card>
  );
}
