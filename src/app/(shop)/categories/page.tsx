import AnimatedSection from "@/components/ui/animated-section";
import SectionHeader from "@/components/ui/section-header";
import categories from "@/actions/categories.action";
import CategoryCard from "@/app/(shop)/(home)/_components/cards/category-card";
import { Suspense } from "react";
import Skeleton from "@/app/(shop)/categories/_components/skeleton";

export default async function Categories() {
  const CATEGORIES = await categories();
  return (
    <Suspense fallback={<Skeleton />}>
      <AnimatedSection>
        <SectionHeader>Categories</SectionHeader>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {CATEGORIES?.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              className="aspect-square"
            />
          ))}
        </div>
      </AnimatedSection>
    </Suspense>
  );
}
