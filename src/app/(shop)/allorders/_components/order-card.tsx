"use client";

import * as React from "react";
import {
  PackageIcon,
  CreditCardIcon,
  BanknoteIcon,
  CalendarIcon,
  CheckCircle2,
  ClockIcon,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Order } from "@/types/order.type";
import OrderInvoiceSheet from "@/app/(shop)/allorders/_components/order-invoice-sheet";
import CustomerInfo from "./customer-info";

interface OrderCardProps extends React.ComponentProps<typeof Card> {
  order: Order;
}

function OrderCard({ order, ...props }: OrderCardProps) {
  const dateFormatter = React.useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
    [],
  );

  const currencyFormatter = React.useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EGP",
      }),
    [],
  );
  return (
    <Card {...props}>
      {/* Header Section */}
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold tracking-tight flex items-center gap-2">
              <PackageIcon className="size-5" />
              Order #{order.id}
            </CardTitle>
            <div className="flex items-center text-sm text-muted-foreground gap-1.5">
              <CalendarIcon className="size-4" />
              {dateFormatter.format(new Date(order.createdAt))}
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex items-center gap-2">
            <Badge
              variant={order.isPaid ? "default" : "destructive"}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full"
            >
              {order.isPaid ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : (
                <ClockIcon className="h-3.5 w-3.5" />
              )}
              {order.isPaid ? "Paid" : "Unpaid"}
            </Badge>
            <Badge
              variant={order.isDelivered ? "default" : "secondary"}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full"
            >
              {order.isDelivered ? "Delivered" : "Processing"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-6">
        {/* Customer & Payment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Customer Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg">Customer Details</h4>
            <CustomerInfo className="space-y-2" customer={order.user} />
          </div>

          {/* Payment Info */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg">Payment Method</h4>
            <div className="flex items-center gap-2 text-sm font-medium">
              {order.paymentMethodType === "cash" ? (
                <>
                  <BanknoteIcon className="size-4" />
                  Cash on Delivery
                </>
              ) : (
                <>
                  <CreditCardIcon className="size-4" />
                  Visa / Credit Card
                </>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {order.cartItems.length} item(s) in this order.
            </p>
          </div>
        </div>
        <Separator />
        {/* Financial Summary */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Subtotal</span>
            <span>
              {currencyFormatter.format(
                order.totalOrderPrice - order.taxPrice - order.shippingPrice,
              )}
            </span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Shipping</span>
            <span>{currencyFormatter.format(order.shippingPrice)}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Tax</span>
            <span>{currencyFormatter.format(order.taxPrice)}</span>
          </div>
          <div className="flex justify-between items-center ">
            <span className="font-semibold text-base">Total</span>
            <span className="font-bold text-lg">
              {currencyFormatter.format(order.totalOrderPrice)}
            </span>
          </div>
        </div>
      </CardContent>
      <Separator />
      {/* Footer Actions */}
      <CardFooter>
        <OrderInvoiceSheet order={order} />
      </CardFooter>
    </Card>
  );
}

export default OrderCard;
