"use client";

import * as React from "react";
import {
  PackageIcon,
  CreditCardIcon,
  BanknoteIcon,
  CalendarIcon,
  CheckCircle2,
  ClockIcon,
  User2Icon,
  PhoneIcon,
  MailIcon,
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
import { OrderInvoiceSheet } from "@/app/(shop)/allorders/_components/order-invoice-sheet";

interface OrderCardProps extends React.ComponentProps<typeof Card> {
  order: Order;
}

export default function OrderCard({ order, ...props }: OrderCardProps) {
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
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Customer Details
            </h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 font-medium">
                <User2Icon className="h-4 w-4 text-muted-foreground" />
                {order.user.name}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MailIcon className="h-4 w-4" />
                {order.user.email}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <PhoneIcon className="h-4 w-4" />
                {order.user.phone}
              </p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Payment Method
            </h4>
            <div className="flex items-center gap-2 text-sm font-medium">
              {order.paymentMethodType === "cash" ? (
                <>
                  <BanknoteIcon className="h-4 w-4 text-emerald-500" />
                  Cash on Delivery
                </>
              ) : (
                <>
                  <CreditCardIcon className="h-4 w-4 text-primary" />
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
