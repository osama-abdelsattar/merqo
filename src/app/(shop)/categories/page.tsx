import AnimatedSection from "@/components/animated-section";
import SectionHeader from "@/components/section-header";
import CategoryCard from "@/app/(shop)/(home)/_components/cards/category-card";
import EmptyCategories from "../category/_components/empty-categories";
import { getTopCategories } from "@/services/category.service";

async function Categories() {
  const categories = (await getTopCategories())?.toReversed();

  if (!categories || !(categories.length > 0))
    return (
      <section className="min-h-[calc(100dvh-5rem)] flex items-center justify-center">
        <EmptyCategories />
      </section>
    );

  return (
    <AnimatedSection>
      <SectionHeader>Categories</SectionHeader>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            category={category}
            className="aspect-square"
          />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Categories;
