import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/product";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Rating from "@/components/product/rating";

interface ProductCard extends React.ComponentProps<"div"> {
  product: Product;
  size?: "default" | "sm";
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
        <Image fill src={imageCover} alt="" className="object-cover" />
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
          {priceAfterDiscount && (
            <span className="text-lg xl:text-base line-through text-destructive">
              {price}
            </span>
          )}
        </div>
        <Button>
          <PlusIcon /> Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
