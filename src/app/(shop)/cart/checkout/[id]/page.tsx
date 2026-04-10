"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "@/actions/order.action";
import { toast } from "sonner";
import AnimatedSection from "@/components/ui/animated-section";
import SectionHeader from "@/components/ui/section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { shippingSchema, ShippingValues } from "@/lib/schemas/checkout.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Spinner } from "@/components/ui/spinner";
import { Separator } from "@/components/ui/separator";

import { RadioGroup } from "@/components/ui/radio-group";
import AppFormField from "@/components/ui/app-form-field";
import { CHECKOUT_FIELDS } from "@/config/checkout-form.config";
import PaymentRadioItem from "@/app/(shop)/cart/checkout/_components/payment-radio-item";
import { useRouter } from "next/navigation";

export default function Checkout({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const form = useForm<ShippingValues>({
    defaultValues: {
      details: "",
      city: "",
      phone: "",
      type: "Cash",
    },
    resolver: zodResolver(shippingSchema),
    mode: "onBlur",
  });

  const router = useRouter();

  const queryClient = useQueryClient();
  const { mutate: order, isPending: isOrderPending } = useMutation({
    mutationFn: async (data: ShippingValues) => {
      const orderInfo = {};
      const pageParams = await params;
      const cartID = pageParams.id;

      const res = await createOrder(data.type, orderInfo, cartID);

      return res;
    },
    onSuccess: (res, data) => {
      if (data.type === "Cash") {
        toast.info(res.message);
        queryClient.invalidateQueries({ queryKey: ["cart"] });
        router.push("/allorders");
      }

      if (data.type === "Visa") {
        window.open(res.session.url, "_self");
      }
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return (
    <AnimatedSection>
      <SectionHeader>Complete Your Order</SectionHeader>
      <div className="*:lg:sticky *:lg:top-24">
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
              <CardDescription>
                Where should we deliver your order?
              </CardDescription>
            </CardHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => order(data))}
                className="flex flex-col gap-4"
              >
                <CardContent className="flex flex-col gap-4">
                  <Alert>
                    <div className="flex items-center gap-4">
                      <InfoIcon />
                      <div className="">
                        <AlertTitle>Delivery Information</AlertTitle>
                        <AlertDescription>
                          Please ensure your address is accurate for smooth
                          delivery
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                  {Object.entries(CHECKOUT_FIELDS).map(
                    ([inputName, inputData]) => (
                      <AppFormField
                        key={`form-${inputName}`}
                        name={inputName}
                        config={inputData}
                      />
                    ),
                  )}
                </CardContent>
                <Separator />
                <CardFooter className="flex-col items-stretch gap-4">
                  <FormField
                    name="type"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-4">
                        <div className="">
                          <FormLabel className="font-serif">
                            Payment Method
                          </FormLabel>
                          <FormDescription>
                            Choose how you&apos;d like to pay
                          </FormDescription>
                        </div>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <PaymentRadioItem
                              value="Cash"
                              title="Cash on delivery"
                              description="Pay when your order arrives at your doorstep."
                            />
                            <PaymentRadioItem
                              value="Visa"
                              title="Pay online"
                              description="Secure payment with Credit/Debit Card via Stripe."
                            />
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isOrderPending}>
                    {isOrderPending && <Spinner />} Place order
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
          <Button variant="outline" size="lg" className="me-auto" asChild>
            <Link href="/">
              <ArrowLeftIcon /> Back to cart
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
