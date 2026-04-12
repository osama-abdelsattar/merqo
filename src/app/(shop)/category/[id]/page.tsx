import AnimatedSection from "@/components/animated-section";
import SectionHeader from "@/components/section-header";
import { getSubCategories } from "@/services/category.service";
import SubCategoryCard from "@/app/(shop)/category/_components/subcategory-card";
import EmptyCategories from "@/app/(shop)/category/_components/empty-categories";

async function SubCategories({ params }: { params: Promise<{ id: string }> }) {
  const { id: categoryId } = await params;
  const subCategories = await getSubCategories(categoryId);

  if (!subCategories || !(subCategories.length > 0))
    return (
      <section className="min-h-[calc(100dvh-5rem)] flex items-center justify-center">
        <EmptyCategories />
      </section>
    );

  return (
    <AnimatedSection>
      <SectionHeader>Sub Categories</SectionHeader>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {subCategories.map((subCategory) => (
          <SubCategoryCard
            key={subCategory._id}
            subCategory={subCategory}
            className="aspect-square"
          />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default SubCategories;
