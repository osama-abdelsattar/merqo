import QuantitySelect from "@/components/ui/quantity-select";
import Rating from "@/components/ui/rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { SITE_INFO } from "@/config/site.config";
import { Product } from "@/types/product.type";
import ProductPrice from "@/app/(shop)/product/_components/product-price";
import WishlistButton from "@/app/(shop)/_components/wishlist-button";
import Link from "next/link";

export default function ProductInfoCard({ product }: { product: Product }) {
  const {
    category,
    brand,
    title,
    ratingsAverage,
    ratingsQuantity,
    price,
    priceAfterDiscount,
    quantity,
    description,
  } = product;

  return (
    <Card className="gap-4 w-full rounded-none sm:rounded-4xl h-fit lg:sticky lg:top-24">
      <CardHeader className="gap-3">
        <CardAction>
          <WishlistButton variant="outline" productId={product._id} />
        </CardAction>
        <div className="flex gap-2">
          <Badge asChild>
            <Link href={`/products?category=${category._id}`}>
              {category.name}
            </Link>
          </Badge>
          <Badge variant="secondary" asChild>
            <Link href={`/products?brand=${brand._id}`}>{brand.name}</Link>
          </Badge>
        </div>
        <div className="flex flex-col gap-1">
          <CardTitle className="text-4xl font-bold">
            <h2>{title}</h2>
          </CardTitle>
        </div>
        <Rating
          className="text-base"
          rating={ratingsAverage}
          showReviews
          reviewersCount={ratingsQuantity}
        />
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-4">
        <ProductPrice
          price={price}
          priceAfterDiscount={priceAfterDiscount}
          quantity={quantity}
        />
        <div className="flex items-center gap-3">
          <QuantitySelect availableQuantity={quantity} />
          <span className="text-base text-muted-foreground">
            {quantity} available
          </span>
        </div>
        <CardDescription className="text-base lg:text-lg">
          {description}.
        </CardDescription>
      </CardContent>
      <Separator className="mt-auto" />
      <CardFooter className="grid grid-cols-12 gap-4">
        <Button className="col-span-12 sm:col-span-6">Add to cart</Button>
        <Button className="col-span-12 sm:col-span-6" variant="outline">
          Buy now
        </Button>
        {SITE_INFO.features?.slice(0, -1).map((feature) => {
          const { Icon, title, description } = feature;
          return (
            <Item
              variant="muted"
              key={title}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4"
            >
              {Icon && (
                <ItemMedia>
                  <Icon className="size-6" />
                </ItemMedia>
              )}
              <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
              </ItemContent>
            </Item>
          );
        })}
      </CardFooter>
    </Card>
  );
}
