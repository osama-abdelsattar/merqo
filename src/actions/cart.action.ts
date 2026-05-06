"use server";

import { Cart } from "@/types/cart.type";
import { buildApiUrl, fetchApi } from "@/utils/api.util";
import { getServerToken } from "@/utils/token.util";
import axios from "axios";

async function addToCart(productId: string): Promise<Cart> {
  const token = await getServerToken();
  if (!token) throw new Error("Unauthorized");

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
      throw new Error(error.response?.data?.message || "Failed to add to cart");
    }

    throw new Error("Failed to add to cart");
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

  return null;
}

async function deleteFromCart(productId: string): Promise<Cart> {
  const token = await getServerToken();
  if (!token) throw new Error("Unauthorized");

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
      throw new Error(
        error.response?.data?.message || "Failed to delete from cart",
      );
    }

    throw new Error("Failed to delete from cart");
  }
}

async function clearCart(): Promise<Cart> {
  const token = await getServerToken();
  if (!token) throw new Error("Unauthorized");

  try {
    const res = await axios.delete<Cart>(buildApiUrl(["cart"], {}, "v2"), {
      headers: { token },
    });
    const data = res.data;

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to clear cart");
    }

    throw new Error("Failed to clear cart");
  }
}

export { addToCart, getCartData, deleteFromCart, clearCart };
