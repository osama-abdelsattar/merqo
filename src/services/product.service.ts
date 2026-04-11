import { Product } from "@/types/product.type";
import { ApiResponse, buildApiUrl, fetchApi } from "@/utils/api.util";
import { SearchParams } from "next/dist/server/request/search-params";

async function getAllProducts(params?: SearchParams, headers?: HeadersInit) {
  const data = await fetchApi<ApiResponse<Product[]>>(
    buildApiUrl(["products"], params),
    headers,
  );

  return data ?? null;
}

async function getFeaturedProducts() {
  const data = await fetchApi<ApiResponse<Product[]>>(
    buildApiUrl(["products"], { limit: 15, sort: "-sold" }),
  );

  return data?.data ?? null;
}

async function getSpecificProduct(productId: string) {
  const data = await fetchApi<ApiResponse<Product>>(
    buildApiUrl(["products", productId]),
  );

  return data?.data ?? null;
}

export { getAllProducts, getFeaturedProducts, getSpecificProduct };
