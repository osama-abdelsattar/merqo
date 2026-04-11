import EmptyProducts from "@/app/(shop)/(home)/_components/cards/empty-products";
import { getSpecificProduct } from "@/services/product.service";
import ProductBreadcrumbs from "@/app/(shop)/product/_components/product-breadcrumbs";
import ProductImage from "@/app/(shop)/product/_components/product-image";
import ProductInfoCard from "@/app/(shop)/product/_components/product-info-card";
import AnimatedSection from "@/components/ui/animated-section";

async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: productId } = await params;
  const product = await getSpecificProduct(productId);

  if (!product) {
    return (
      <div className="h-[calc(100vh-5rem)] flex justify-center items-center">
        <EmptyProducts className="max-w-fit" />
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
