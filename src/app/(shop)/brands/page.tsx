import AnimatedSection from "@/components/common/animated-section";
import EmptyCard from "@/components/common/empty-card";
import SectionHeader from "@/components/common/section-header";
import { getAllBrands } from "@/services/brand.service";
import BrandCard from "./_components/brand-card";
import { Store } from "lucide-react";

async function Brands() {
  const brands = await getAllBrands();

  if (!brands)
    return (
      <AnimatedSection>
        <SectionHeader level="h1">Brands</SectionHeader>
        <EmptyCard
          icon={<Store />}
          title="No brands found"
          cta={{ text: "Browse Categories", href: "/categories" }}
        />
      </AnimatedSection>
    );

  return (
    <AnimatedSection>
      <SectionHeader level="h1">Brands</SectionHeader>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <BrandCard brand={brand} key={brand._id} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Brands;
