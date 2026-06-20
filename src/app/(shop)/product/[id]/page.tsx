import EmptyCard from "@/components/common/empty-card";
import { getSpecificProduct } from "@/services/product.service";
import ProductBreadcrumbs from "@/app/(shop)/product/_components/product-breadcrumbs";
import ProductImage from "@/app/(shop)/product/_components/product-image";
import ProductInfoCard from "@/app/(shop)/product/_components/product-info-card";
import AnimatedSection from "@/components/common/animated-section";
import { PackageSearch } from "lucide-react";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: productId } = await params;
  const product = await getSpecificProduct(productId);

  if (!product) {
    return (
      <div className="h-[calc(100vh-5rem)] flex justify-center items-center">
        <EmptyCard
          icon={<PackageSearch />}
          title="Product not found"
          description="This product may have been removed or doesn't exist."
          cta={{ href: "/products", text: "Browse Products" }}
        />
      </div>
    );
  }

  return (
    <AnimatedSection className="-mx-6 py-0 sm:py-6 sm:mx-auto min-h-[calc(100vh-5rem)] flex flex-col justify-center gap-4">
      <ProductBreadcrumbs product={product} />
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <ProductImage images={product.images} alt={product.description} />
        <ProductInfoCard product={product} />
      </div>
    </AnimatedSection>
  );
}

export default ProductPage;
