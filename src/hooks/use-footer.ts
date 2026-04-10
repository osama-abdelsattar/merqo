import { useCategories } from "@/hooks/use-categories";
import { NAV_LINKS, ADDITIONAL_LINKS } from "@/config/navigation.config";
import { FOOTER_STRUCTURE } from "@/config/footer.config";

export const useFooter = () => {
  const { data: categories, isLoading } = useCategories();

  const exploreLinks = [...NAV_LINKS, ...ADDITIONAL_LINKS];

  const footerSections = [
    {
      title: FOOTER_STRUCTURE.EXPLORE_TITLE,
      items: exploreLinks,
    },
    {
      title: FOOTER_STRUCTURE.SHOP_TITLE,
      items: categories || [],
      isLoading: isLoading,
    },
  ];

  return { footerSections };
};
