"use server";

import { Cart } from "@/types/cart.type";
import { buildApiUrl, fetchApi } from "@/utils/api.util";
import { getServerToken } from "@/utils/token.util";
import axios from "axios";

async function addToCart(productId: string): Promise<Cart | null> {
  const token = await getServerToken();

  try {
    const res = await axios.post<Cart>(
      buildApiUrl(["cart"], {}, "v2"),
      { productId },
      { headers: { token } },
    );
    const data = res.data;

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return null;
  }
}

async function getCartData() {
  const token = await getServerToken();

  if (!token) return null;

  const data = await fetchApi<Cart>(
    buildApiUrl(["cart"], {}, "v2"),
    { token },
    { cache: "no-store" },
  );

  if (data?.status === "success") return data;
  else return null;
}

async function deleteFromCart(productId: string): Promise<Cart | null> {
  const token = await getServerToken();

  try {
    const res = await axios.delete<Cart>(
      buildApiUrl(["cart", productId], {}, "v2"),
      {
        headers: { token },
      },
    );
    const data = res.data;

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return null;
  }
}

export { addToCart, getCartData, deleteFromCart };
