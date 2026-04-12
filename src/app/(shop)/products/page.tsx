import AnimatedSection from "@/components/animated-section";
import SectionHeader from "@/components/section-header";
import { getAllProducts } from "@/services/product.service";
import ProductCard from "@/app/(shop)/(home)/_components/cards/product-card";
import EmptyProducts from "@/app/(shop)/(home)/_components/cards/empty-products";
import Pagination from "@/app/(shop)/products/_components/pagination";
import { SearchParams } from "next/dist/server/request/search-params";

async function AllProducts({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const allProducts = await getAllProducts(params);

  if (!allProducts || !(allProducts?.data.length > 0))
    return (
      <section className="min-h-[calc(100dvh-5rem)] flex items-center justify-center">
        <EmptyProducts />
      </section>
    );

  return (
    <AnimatedSection>
      <SectionHeader>Products</SectionHeader>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allProducts.data.map((product) => (
          <ProductCard key={product._id} product={product} className="pt-0" />
        ))}
        <div className="col-span-full">
          <Pagination metadata={allProducts.metadata} />
        </div>
      </div>
    </AnimatedSection>
  );
}

export default AllProducts;
