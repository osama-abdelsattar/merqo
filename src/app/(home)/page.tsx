import { lazy, Suspense } from "react";
import HeroSection from "./_components/sections/hero-section";
import CategoriesSkeleton from "./_components/skeleton/CategoriesSkeleton";
import ProductsSkeleton from "./_components/skeleton/ProductsSkeleton";
import PromoCodes from "./_components/sections/promo-codes";

const TopCategories = lazy(
  () => import("./_components/sections/top-categories"),
);
const FeaturedProducts = lazy(
  () => import("./_components/sections/featured-products"),
);

export default function Home() {
  return (
    <>
      <HeroSection className="-mx-6 mb-8" />
      <Suspense fallback={<CategoriesSkeleton />}>
        <TopCategories />
      </Suspense>
      <PromoCodes />
      <Suspense fallback={<ProductsSkeleton />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
