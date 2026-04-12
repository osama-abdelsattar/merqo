import { Url } from "next/dist/shared/lib/router/router";
import { Order } from "./order.type";

interface CheckoutField {
  label: string;
  placeholder: string;
  autoComplete: string;
  type: "text" | "tel";
}

interface CheckoutApiResponse {
  __v: number;
  id: number;
  status: "success" | string;
  message: string;
  data: Order;
  user: {
    id: string;
    name: string;
    email: string;
  };
  pricing: {
    cartPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalOrderPrice: number;
  };
}

interface CheckoutApiSession {
  status: "success" | string;
  session: {
    url: string;
    success_url: string;
    cancel_url: string;
  };
}

export type { CheckoutField, CheckoutApiResponse, CheckoutApiSession };
