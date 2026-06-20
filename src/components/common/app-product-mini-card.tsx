"use client";

import Image from "next/image";
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Rating from "@/components/common/rating";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product.type";
import { cn } from "@/lib/utils";
import { CartProduct } from "@/types/cart.type";

interface AppProductMiniCardProps extends React.ComponentProps<typeof Card> {
  product: Product | CartProduct;
  topAction?: React.ReactNode;
  actions?: React.ReactNode;
}

function AppProductMiniCard({
  product,
  topAction,
  actions,
  className,
  ...props
}: AppProductMiniCardProps) {
  const { imageCover, _id, id, title, category, brand, ratingsAverage } =
    product;

  const productID = id || _id;

  return (
    <Card
      className={cn("overflow-hidden rounded-none sm:rounded-4xl", className)}
      {...props}
    >
      <div className="flex flex-row items-center ps-6">
        <div className="w-32 sm:w-42 sm:aspect-square shrink-0">
          <Image
            width={640}
            height={873}
            src={imageCover}
            alt={title}
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-between gap-4">
          <CardHeader>
            {topAction && <CardAction>{topAction}</CardAction>}
            <CardTitle className="w-fit">
              <Link
                href={`/product/${productID}`}
                className="inline-block hover:underline"
              >
                <h3 className="text-lg font-semibold leading-5 line-clamp-2">
                  {title}
                </h3>
              </Link>
            </CardTitle>
            <Rating rating={ratingsAverage} className="mb-1" />
            <div className="flex flex-wrap gap-2">
              <Badge variant="subtle">{category.name}</Badge>
              <Badge variant="secondary">{brand.name}</Badge>
            </div>
          </CardHeader>
          <CardFooter>{actions}</CardFooter>
        </div>
      </div>
    </Card>
  );
}

export default AppProductMiniCard;
