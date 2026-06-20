import AnimatedSection from "@/components/common/animated-section";
import CategoryCard from "@/app/(shop)/(home)/_components/cards/category-card";
import SectionHeader from "@/components/common/section-header";
import { getTopCategories } from "@/services/category.service";
import EmptyCard from "@/components/common/empty-card";
import Section from "@/components/common/section";
import { LayoutGrid } from "lucide-react";

async function TopCategories() {
  const categories = (await getTopCategories())?.toReversed();

  if (!categories || !(categories.length > 0))
    return (
      <Section>
        <EmptyCard
          icon={<LayoutGrid />}
          title="No categories available"
          cta={{ href: "/products", text: "Browse Products" }}
        />
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
