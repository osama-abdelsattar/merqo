import { useQuery } from "@tanstack/react-query";
import getCategories from "@/actions/categories.action";
import { NavLink } from "@/types/navigation.type";
import { Category } from "@/types/category.type";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await getCategories();
      const formatted: NavLink[] =
        data?.map((cat: Category) => ({
          href: `/products?category=${cat._id}`,
          label: cat.name,
        })) ?? [];

      return formatted;
    },
    staleTime: 1000 * 60 * 60,
  });
};
