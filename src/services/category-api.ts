import { buildApiUrl, fetchApi } from "@/lib/api";
import { Category } from "@/types/category";

async function getTopCategories() {
  return fetchApi<Category[]>(buildApiUrl(["categories"]));
}

async function getSpecificCategory(productId: string) {
  return fetchApi<Category>(buildApiUrl(["categories", productId]));
}

export { getTopCategories, getSpecificCategory };
