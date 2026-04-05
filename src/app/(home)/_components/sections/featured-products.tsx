import { getFeaturedProducts } from "@/services/product-api";
import EmptyProducts from "../cards/empty-products";
import ViewMoreCard from "../cards/view-more-card";
import ProductCard from "../cards/product-card";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

export default async function FeaturedProducts() {
  const productList = await getFeaturedProducts();

  return (
    <Section>
      {productList ? (
        <>
          <SectionHeader>Featured Products</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                className="pt-0"
              />
            ))}
            <ViewMoreCard />
          </div>
        </>
      ) : (
        <EmptyProducts className="col-span-full" />
      )}
    </Section>
  );
}
