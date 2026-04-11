import AnimatedSection from "@/components/ui/animated-section";
import EmptyCard from "@/components/ui/empty-card";
import SectionHeader from "@/components/ui/section-header";
import { getAllBrands } from "@/services/brand.service";
import { CTA } from "@/types/hero-slide.type";
import BrandCard from "./_components/brand-card";

async function Brands() {
  const brands = await getAllBrands();
  const CTA: CTA = { text: "categories", href: "/categories" };

  if (!brands) return <EmptyCard title="brands" cta={CTA} />;

  return (
    <AnimatedSection>
      <SectionHeader>Brands</SectionHeader>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <BrandCard brand={brand} key={brand._id} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Brands;
