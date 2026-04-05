import { getTopCategories } from "@/services/category-api";

const CATEGORIES = await getTopCategories();
CATEGORIES?.reverse();

export { CATEGORIES };
