import AnimatedSection from "@/components/common/animated-section";
import SectionHeader from "@/components/common/section-header";
import EmptyCard from "@/components/common/empty-card";
import { getAllProducts } from "@/services/product.service";
import ProductCard from "@/app/(shop)/(home)/_components/cards/product-card";
import { PackageSearch } from "lucide-react";
import { SearchParams } from "next/dist/server/request/search-params";

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const products = await getAllProducts();

  const getRequestedProducts = async () => {
    if (!products) return null;

    const query = params.query as string;

    return products.data.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.name.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const searchedProducts = await getRequestedProducts();
  if (!searchedProducts || searchedProducts.length <= 0)
    return (
      <AnimatedSection>
        <SectionHeader level="h1">Search Products</SectionHeader>
        <EmptyCard
          icon={<PackageSearch />}
          title="No products matches your search"
          description="Try adjusting your search or browse a different category."
          cta={{ href: "/categories", text: "Browse Categories" }}
        />
      </AnimatedSection>
    );

  return (
    <AnimatedSection>
      <SectionHeader level="h1">Search Products</SectionHeader>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {searchedProducts.map((product) => (
          <ProductCard key={product._id} product={product} className="pt-0" />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default SearchPage;
