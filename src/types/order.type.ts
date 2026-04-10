import { CartItem } from "@/types/cart.type";

interface Order {
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: "cash" | "card";
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
    phone: string;
  };
  cartItems: CartItem[];
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
}

export type { Order };
