import EmptyProducts from "@/app/(home)/_components/cards/empty-products";
import { getSpecificProduct } from "@/services/product-api";
import ProductBreadcrumbs from "./_components/product-breadcrumbs";
import ProductImage from "./_components/product-image";
import ProductInfoCard from "./_components/product-info-card";
import ProductPageSkeleton from "./_components/skeleton/product-page-skeleton";

export default async function ProductPage({
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
    <section className="-mx-6 sm:py-6 max-w-7xl sm:mx-auto min-h-[calc(100vh-5rem)] flex flex-col gap-4">
      <ProductBreadcrumbs product={product} />
      <div className="grow flex justify-center items-center">
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <ProductImage src={product.imageCover} alt={product.description} />
          <ProductInfoCard product={product} />
        </div>
      </div>
    </section>
  );
}
