"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductMiniCard from "@/components/ui/product-minicard";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { ArrowLeftIcon, ShoppingCartIcon, TagIcon, XIcon } from "lucide-react";
import Link from "next/link";
import ProductListLayout from "@/components/layout/product-list-layout";

export default function CartPage() {
  const { cartData, isLoading } = useCart();
  const totalPrice = cartData?.data.totalCartPrice.toLocaleString("en-EG");

  return (
    <ProductListLayout
      title="Cart"
      isEmpty={!cartData || cartData.numOfCartItems === 0}
      isLoading={isLoading}
      emptyState={{
        title: "Products",
        cta: { href: "login", text: "Login" },
      }}
      listFooter={
        <div className="flex justify-between">
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              <ArrowLeftIcon /> Continue shopping
            </Link>
          </Button>
          <Button variant="ghost" size="lg">
            <XIcon /> Clear Cart
          </Button>
        </div>
      }
      sidebar={
        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-xl font-bold font-serif">Order Summary</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1 *:flex *:justify-between *:items-center [&_h4]:text-muted-foreground [&_h4]:font-medium">
              <div>
                <h4>Subtotal ({cartData?.numOfCartItems} items)</h4>
                <span>{totalPrice}£</span>
              </div>
              <div>
                <h4>Shipping</h4>
                <span className="text-chart-2 dark:text-chart-1">FREE</span>
              </div>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="flex-col items-stretch gap-4">
            <div className="flex justify-between items-center grow">
              <h4 className="font-semibold text-base">Estimated Total</h4>
              <span>{totalPrice}£</span>
            </div>
            <div className="flex flex-col gap-2">
              <Button size="lg" variant="secondary">
                <TagIcon />
                Apply Coupon
              </Button>
              <Button size="lg" asChild>
                <Link href={`/cart/checkout/${cartData?.cartId}`}>
                  <ShoppingCartIcon />
                  Order
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      }
    >
      {cartData?.data.products.map((product) => (
        <ProductMiniCard key={product._id} product={product} />
      ))}
    </ProductListLayout>
  );
}
