"use client";
import { SITE_INFO } from "@/config/site.config";
import BannerCard from "@/app/(shop)/(home)/_components/cards/banner-card";
import AnimatedSection from "@/components/common/animated-section";

function PromoCodes() {
  return (
    <AnimatedSection
      aria-label="Promotional offers"
      className="-mx-2 sm:mx-auto"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {SITE_INFO.promos.map((banner) => (
          <BannerCard
            key={banner.id}
            banner={banner}
            className="bg-linear-to-br first:from-chart-3/80 first:to-chart-4 last:from-primary/80 last:to-primary"
          />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default PromoCodes;
