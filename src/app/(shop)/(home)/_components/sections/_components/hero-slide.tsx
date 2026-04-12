"use client";

import Image from "next/image";
import HeroSlideContent from "./hero-slide-content";
import { HeroSlideInfo } from "@/types/hero-slide.type";

interface HeroSlideProps {
  slide: HeroSlideInfo;
}

function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <div className="relative h-[calc(100dvh-5rem)] max-h-[520px] md:max-h-[440px] lg:max-h-[720px]">
      <Image
        fill
        src={slide.image}
        alt={slide.description}
        className="object-cover"
      />
      <div className="bg-black/60 dark absolute inset-0 z-10 flex flex-col gap-4 justify-center items-center px-6">
        <HeroSlideContent
          title={slide.title}
          description={slide.description}
          CTA={slide.CTA}
        />
      </div>
    </div>
  );
}

export default HeroSlide;
