import AnimatedSection from "@/components/common/animated-section";
import SectionHeader from "@/components/common/section-header";
import CategoryCard from "@/app/(shop)/(home)/_components/cards/category-card";
import EmptyCard from "@/components/common/empty-card";
import { getTopCategories } from "@/services/category.service";
import { LayoutGrid } from "lucide-react";

async function Categories() {
  const categories = (await getTopCategories())?.toReversed();

  if (!categories || !(categories.length > 0))
    return (
      <AnimatedSection>
        <SectionHeader level="h1">Categories</SectionHeader>
        <EmptyCard
          icon={<LayoutGrid />}
          title="No categories available"
          cta={{ href: "/products", text: "Browse Products" }}
        />
      </AnimatedSection>
    );

  return (
    <AnimatedSection>
      <SectionHeader level="h1">Categories</SectionHeader>
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
