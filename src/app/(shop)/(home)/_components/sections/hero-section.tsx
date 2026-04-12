"use client";
import { HERO_SLIDES } from "@/config/hero-slides.config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import HeroSlide from "./_components/hero-slide";

function HeroSection(props: React.ComponentProps<"section">) {
  return (
    <section {...props}>
      <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }}>
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.title}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSection;
