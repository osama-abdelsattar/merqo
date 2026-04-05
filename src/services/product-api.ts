import { Product } from "@/types/product";
import { buildApiUrl, fetchApi } from "@/lib/api";

async function getFeaturedProducts() {
  return fetchApi<Product[]>(
    buildApiUrl(["products"], { limit: 15, sort: "-sold" }),
  );
}

async function getSpecificProduct(productId: string) {
  return fetchApi<Product>(buildApiUrl(["products", productId]));
}

export { getFeaturedProducts, getSpecificProduct };
