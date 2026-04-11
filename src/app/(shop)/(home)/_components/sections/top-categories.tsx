import AnimatedSection from "@/components/ui/animated-section";
import CategoryCard from "@/app/(shop)/(home)/_components/cards/category-card";
import SectionHeader from "@/components/ui/section-header";
import { getTopCategories } from "@/services/category.service";
import EmptyCategories from "@/app/(shop)/category/_components/empty-categories";
import Section from "@/components/ui/section";

async function TopCategories() {
  const categories = (await getTopCategories())?.toReversed();

  if (!categories || !(categories.length > 0))
    return (
      <Section>
        <EmptyCategories />
      </Section>
    );

  return (
    <AnimatedSection>
      <SectionHeader>Top Categories</SectionHeader>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories?.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default TopCategories;
