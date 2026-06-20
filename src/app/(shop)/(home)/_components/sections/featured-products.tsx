import { getFeaturedProducts } from "@/services/product.service";
import EmptyCard from "@/components/common/empty-card";
import ViewMoreCard from "@/app/(shop)/(home)/_components/cards/view-more-card";
import ProductCard from "@/app/(shop)/(home)/_components/cards/product-card";
import AnimatedSection from "@/components/common/animated-section";
import SectionHeader from "@/components/common/section-header";
import { PackageSearch } from "lucide-react";

async function FeaturedProducts() {
  const productList = await getFeaturedProducts();

  return (
    <AnimatedSection>
      <SectionHeader>Featured Products</SectionHeader>
      {productList ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productList.map((product) => (
            <ProductCard key={product._id} product={product} className="pt-0" />
          ))}
          <ViewMoreCard />
        </div>
      ) : (
        <EmptyCard
          icon={<PackageSearch />}
          title="No featured products"
          className="col-span-full"
          cta={{ href: "/products", text: "Browse All Products" }}
        />
      )}
    </AnimatedSection>
  );
}

export default FeaturedProducts;
