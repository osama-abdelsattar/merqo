import { ApiResponse, buildApiUrl, fetchApi } from "@/utils/api.util";
import { Category, SubCategory } from "@/types/category.type";

async function getTopCategories() {
  const data = await fetchApi<ApiResponse<Category[]>>(
    buildApiUrl(["categories"]),
  );

  return data?.data ?? null;
}

async function getSpecificCategory(categoryId: string) {
  const data = await fetchApi<ApiResponse<Category[]>>(
    buildApiUrl(["categories", categoryId]),
  );

  return data?.data ?? null;
}

async function getSubCategories(categoryId: string) {
  const subCategories = await fetchApi<ApiResponse<SubCategory[]>>(
    buildApiUrl(["categories", categoryId, "subcategories"]),
  );
  return (
    subCategories?.data
      ?.filter((subCategory) => subCategory.category === categoryId)
      .reverse() ?? null
  );
}

export { getTopCategories, getSpecificCategory, getSubCategories };
