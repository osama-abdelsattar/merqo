"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Core Swiper styles (no UI styles imported to avoid bloat)
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import "@/app/(shop)/product/_components/product-image.css";

import { Button } from "@/components/ui/button";

interface ProductImageProps {
  images: string[];
  alt: string;
}

function ProductImage({ images, alt }: ProductImageProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const displayImages =
    images?.length > 0
      ? images
      : [
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000",
        ];

  return (
    <div className="w-full h-fit lg:w-[360px] lg:sticky lg:top-24 flex flex-col gap-6">
      {/* Main Viewer */}
      <div className="relative group">
        <Swiper
          loop={true}
          spaceBetween={0}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="sm:rounded-4xl border-y border-x-0 sm:border-x bg-white shadow-sm overflow-hidden"
        >
          {displayImages.map((src, index) => (
            <SwiperSlide key={`main-${index}`}>
              <div className="relative aspect-3/4 w-full max-w-sm mx-auto">
                <Image
                  fill
                  src={src}
                  alt={`${alt} - view ${index + 1}`}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons (Visible on Hover) */}
        <Button
          className="swiper-button-prev-custom"
          size="icon-lg"
          variant="outline"
        >
          <ChevronLeft />
        </Button>
        <Button
          className="swiper-button-next-custom"
          size="icon-lg"
          variant="outline"
        >
          <ChevronRight />
        </Button>
      </div>

      {/* Thumbnail Navigation (The "Images" Pagination) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full"
      >
        {displayImages.map((src, index) => (
          <SwiperSlide key={`thumb-${src}`} className="w-24! sm:w-28!">
            <div
              className={cn(
                "relative aspect-square w-full rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300",
                "border-transparent grayscale opacity-50 hover:grayscale-0 hover:opacity-100",
                "in-[.swiper-slide-thumb-active]:border-primary in-[.swiper-slide-thumb-active]:grayscale-0 in-[.swiper-slide-thumb-active]:opacity-100 in-[.swiper-slide-thumb-active]:scale-95",
              )}
            >
              <Image
                fill
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover"
                sizes="120px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductImage;
