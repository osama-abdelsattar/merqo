import AnimatedSection from "@/components/ui/animated-section";
import SectionHeader from "@/components/ui/section-header";
import { getAllProducts } from "@/services/product.service";
import ProductCard from "@/app/(shop)/(home)/_components/cards/product-card";
import EmptyProducts from "@/app/(shop)/(home)/_components/cards/empty-products";
import Pagination from "@/app/(shop)/products/_components/pagination";
import { SearchParams } from "next/dist/server/request/search-params";
import { Suspense } from "react";
import Skeleton from "@/app/(shop)/products/_components/skeleton";

export default async function AllProducts({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const allProducts = await getAllProducts(params);
  return (
    <Suspense fallback={<Skeleton />}>
      <AnimatedSection>
        <SectionHeader>Products</SectionHeader>
        {allProducts && allProducts.results !== 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allProducts.data.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                className="pt-0"
              />
            ))}
            <div className="col-span-full">
              <Pagination metadata={allProducts.metadata} />
            </div>
          </div>
        ) : (
          <EmptyProducts className="col-span-full" />
        )}
      </AnimatedSection>
    </Suspense>
  );
}
