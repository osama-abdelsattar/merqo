import { Suspense } from "react";
import TopCategories from "@/app/(shop)/(home)/_components/sections/top-categories";
import FeaturedProducts from "@/app/(shop)/(home)/_components/sections/featured-products";
import HeroSection from "@/app/(shop)/(home)/_components/sections/hero-section";
import CategoriesSkeleton from "@/app/(shop)/(home)/_components/skeleton/CategoriesSkeleton";
import ProductsSkeleton from "@/app/(shop)/(home)/_components/skeleton/ProductsSkeleton";
import PromoCodes from "@/app/(shop)/(home)/_components/sections/promo-codes";

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
