import AnimatedSection from "@/components/ui/animated-section";
import CategoryCard from "@/app/(shop)/(home)/_components/cards/category-card";
import categories from "@/actions/categories.action";
import SectionHeader from "@/components/ui/section-header";

export default async function TopCategories() {
  const CATEGORIES = await categories();
  return (
    <AnimatedSection>
      <SectionHeader>Top Categories</SectionHeader>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {CATEGORIES?.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </AnimatedSection>
  );
}
