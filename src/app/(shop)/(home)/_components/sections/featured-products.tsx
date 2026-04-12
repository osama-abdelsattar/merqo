import { getFeaturedProducts } from "@/services/product.service";
import EmptyProducts from "@/app/(shop)/(home)/_components/cards/empty-products";
import ViewMoreCard from "@/app/(shop)/(home)/_components/cards/view-more-card";
import ProductCard from "@/app/(shop)/(home)/_components/cards/product-card";
import AnimatedSection from "@/components/animated-section";
import SectionHeader from "@/components/section-header";

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
        <EmptyProducts className="col-span-full" />
      )}
    </AnimatedSection>
  );
}

export default FeaturedProducts;
