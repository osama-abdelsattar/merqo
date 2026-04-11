import { Brand } from "@/types/brand.type";
import { Category } from "@/types/category.type";
import { ApiResponse, buildApiUrl, fetchApi } from "@/utils/api.util";

async function getAllBrands() {
  const data = await fetchApi<ApiResponse<Category[]>>(buildApiUrl(["brands"]));

  return data?.data ?? null;
}

async function getSpecificBrand(brandID: string) {
  const data = await fetchApi<ApiResponse<Brand[]>>(
    buildApiUrl(["brands", brandID]),
  );

  return data?.data;
}

export { getAllBrands, getSpecificBrand };
