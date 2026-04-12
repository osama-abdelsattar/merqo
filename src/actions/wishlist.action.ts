"use server";

import { buildApiUrl, fetchApi } from "@/utils/api.util";
import { getServerToken } from "@/utils/token.util";
import axios from "axios";
import { Wishlist, WishlistData } from "@/types/wishlist.type";

async function getWishlistData() {
  const token = await getServerToken();
  if (!token) return null;

  const data = await fetchApi<WishlistData>(
    buildApiUrl(["wishlist"]),
    { token },
    { cache: "no-store" },
  );

  return data;
}

async function addToWishlist(productId: string) {
  const token = await getServerToken();
  if (!token) throw new Error("Unauthorized");

  try {
    const res = await axios.post<Wishlist>(
      buildApiUrl(["wishlist"]),
      { productId },
      { headers: { token } },
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to add to wishlist",
      );
    }
    throw new Error("Failed to add to wishlist");
  }
}

async function removeFromWishlist(productId: string) {
  const token = await getServerToken();
  if (!token) throw new Error("Unauthorized");

  try {
    const res = await axios.delete<Wishlist>(
      buildApiUrl(["wishlist", productId]),
      {
        headers: { token },
      },
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to remove from wishlist",
      );
    }
    throw new Error("Failed to remove from wishlist");
  }
}

export { getWishlistData, addToWishlist, removeFromWishlist };
