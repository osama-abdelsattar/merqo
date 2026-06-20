import AnimatedSection from "@/components/common/animated-section";
import SectionHeader from "@/components/common/section-header";
import { getSubCategories } from "@/services/category.service";
import SubCategoryCard from "@/app/(shop)/category/_components/subcategory-card";
import EmptyCard from "@/components/common/empty-card";
import { FolderOpen } from "lucide-react";

async function SubCategories({ params }: { params: Promise<{ id: string }> }) {
  const { id: categoryId } = await params;
  const subCategories = await getSubCategories(categoryId);

  if (!subCategories || !(subCategories.length > 0))
    return (
      <AnimatedSection>
        <SectionHeader level="h1">Sub Categories</SectionHeader>
        <EmptyCard
          icon={<FolderOpen />}
          title="No sub-categories found"
          cta={{ href: "/products", text: "Browse Products" }}
        />
      </AnimatedSection>
    );

  return (
    <AnimatedSection>
      <SectionHeader level="h1">Sub Categories</SectionHeader>
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

