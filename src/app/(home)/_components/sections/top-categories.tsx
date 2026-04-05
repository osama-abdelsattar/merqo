import Section from "@/components/ui/section";
import CategoryCard from "../cards/category-card";
import { CATEGORIES } from "@/config/categories";
import SectionHeader from "@/components/ui/section-header";

export default async function TopCategories() {
  return (
    <Section>
      <SectionHeader>Top Categories</SectionHeader>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {CATEGORIES?.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </Section>
  );
}
