"use client";

import * as React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  FileTextIcon,
  CreditCardIcon,
  TruckIcon,
  ReceiptIcon,
  User2Icon,
  PhoneIcon,
  MailIcon,
  XIcon,
} from "lucide-react";
import type { Order } from "@/types/order.type";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

interface OrderInvoiceSheetProps extends React.ComponentProps<typeof Sheet> {
  order: Order;
  children?: React.ReactNode;
}

export function OrderInvoiceSheet({
  order,
  children,
  ...props
}: OrderInvoiceSheetProps) {
  const currencyFormatter = React.useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EGP",
      }),
    [],
  );

  return (
    <Sheet {...props}>
      <SheetTrigger asChild className="w-full">
        {children || (
          <Button variant="outline">
            <FileTextIcon />
            View Invoice
          </Button>
        )}
      </SheetTrigger>

      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <SheetTitle className="font-serif text-3xl">Merqo</SheetTitle>
              <SheetDescription className="flex items-center gap-2 text-muted-foreground">
                <ReceiptIcon className="size-3" />
                Tax Invoice • {order.id}
              </SheetDescription>
            </div>
            <div className="flex flex-col items-end gap-2">
              <SheetClose asChild>
                <Button size="icon-sm" variant="outline">
                  <XIcon />
                </Button>
              </SheetClose>
              <Badge variant={order.isPaid ? "default" : "destructive"}>
                {order.isPaid ? "Payment Received" : "Payment Pending"}
              </Badge>
            </div>
          </div>
        </SheetHeader>
        <Separator />
        <ScrollArea className="overflow-y-hidden">
          <div className="p-6 space-y-4">
            {/* Information Grid */}
            <div className="space-y-4 text-sm">
              <section className="space-y-3">
                <h4 className="text-base font-serif border-b pb-1">
                  Billed To
                </h4>
                <div className="space-y-1">
                  <p className="font-bold text-base flex items-center gap-2">
                    <User2Icon className="size-4" />
                    {order.user.name}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground break-all">
                    <MailIcon className="size-4" />
                    {order.user.email}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <PhoneIcon className="size-4" />
                    {order.user.phone}
                  </p>
                </div>
              </section>

              <section className="space-y-3">
                <h4 className="text-base font-serif border-b pb-1">
                  Logistics
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-medium">
                    <TruckIcon className="size-4 text-muted-foreground" />
                    <span>
                      {order.isDelivered
                        ? "Fulfillment Complete"
                        : "Order Processing"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-medium capitalize">
                    <CreditCardIcon className="size-4 text-muted-foreground" />
                    <span>
                      {order.paymentMethodType === "cash"
                        ? "Cash on Delivery"
                        : "Visa / Credit Card"}
                    </span>
                  </div>
                </div>
              </section>
            </div>

            {/* Itemized Table */}
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b pb-2">
                <h4 className="text-base font-serif">Order Items</h4>
                <span className="text-xs text-muted-foreground">
                  {order.cartItems.length} Products
                </span>
              </div>
              <div className="space-y-6">
                {order.cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center "
                  >
                    <div className="flex gap-4">
                      <div className="relative size-16 shrink-0">
                        <Image
                          fill
                          src={item.product.imageCover}
                          alt={item.product.title}
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="font-bold">
                          {item.product?.title || "Product Item"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.count} Unit{item.count > 1 ? "s" : ""}
                          {item.price &&
                            ` x ${currencyFormatter.format(item.price)}`}
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold">
                      {item.price &&
                        currencyFormatter.format(item.count * item.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals Section */}
            <div className="space-y-3 bg-muted p-6 rounded-2xl shadow-xl">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Shipping Fee</span>
                <span className="text-xs text-muted-foreground">
                  {currencyFormatter.format(order.shippingPrice)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">VAT / Tax</span>
                <span className="text-xs text-muted-foreground">
                  {currencyFormatter.format(order.taxPrice)}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">Total Amount Due</span>
                <span className="font-black text-lg">
                  {currencyFormatter.format(order.totalOrderPrice)}
                </span>
              </div>
            </div>
          </div>
        </ScrollArea>
        <Separator />
        <SheetFooter className="text-center">
          <p className="text-xs text-muted-foreground italic max-w-sm mx-auto leading-relaxed">
            This is a computer generated invoice and does not require a physical
            signature. Thank you for trusting Merqo.
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
