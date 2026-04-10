"use server";

import { getTopCategories } from "@/services/category.service";

export default async function getCategories() {
  const categories = await getTopCategories();

  return categories?.toReversed() ?? [];
}
