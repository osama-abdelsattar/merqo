"use server";

import { CheckoutApiResponse, CheckoutApiSession } from "@/types/checkout.type";
import { Order } from "@/types/order.type";
import { DecodedToken } from "@/types/token.type";
import { buildApiUrl, fetchApi, getSiteBaseUrl } from "@/utils/api.util";
import { getServerToken } from "@/utils/token.util";
import axios from "axios";

async function createOrder(
  orderType: "Cash" | "Visa",
  orderInfo: object,
  cartId: string,
): Promise<CheckoutApiResponse | CheckoutApiSession> {
  const token = await getServerToken();
  if (!token) throw new Error("Unauthorized");
  const url =
    orderType === "Cash"
      ? buildApiUrl(["orders", cartId], {}, "v2")
      : buildApiUrl(
          ["orders", "checkout-session", cartId],
          { url: getSiteBaseUrl() },
          "v1",
        );

  try {
    const res = await axios.post<CheckoutApiResponse | CheckoutApiSession>(
      url,
      orderInfo,
      {
        headers: { token },
      },
    );
    const data = res.data;

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to create order",
      );
    }
    throw new Error("Failed to create order");
  }
}

async function getOrdersData(userID: string | null) {
  const token = await getServerToken();
  if (!token || !userID) return null;

  const data = await fetchApi<Order[]>(
    buildApiUrl(["orders", "user", userID]),
    { token },
    { cache: "no-store" },
  );

  return data;
}

async function getUserID() {
  const token = await getServerToken();

  if (token) {
    const res = await fetchApi<DecodedToken>(
      buildApiUrl(["auth", "verifyToken"]),
      { token },
    );

    return res?.decoded.id;
  } else return null;
}

export { getOrdersData, getUserID, createOrder };
