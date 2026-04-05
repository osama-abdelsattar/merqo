"use client";
import { HERO_SLIDES } from "@/config/hero-slides";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function HeroSection(props: React.ComponentProps<"section">) {
  return (
    <section {...props}>
      <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }}>
        {HERO_SLIDES.map((slide) => {
          const { title, image, description, ctaText, ctaHref } = slide;
          return (
            <SwiperSlide key={title}>
              <div className="relative h-[calc(100vh-5rem)] max-h-168">
                <Image
                  fill
                  src={image}
                  alt={description}
                  className="object-cover"
                />
                <div className="bg-black/60 dark absolute inset-0 z-10 flex flex-col gap-4 justify-center items-center px-6">
                  <motion.div
                    {...fadeInUp}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground text-center"
                  >
                    <h2 className="text-2xl md:text-4xl font-semibold mb-2">
                      {title}
                    </h2>
                    <p className="md:text-lg text-muted-foreground max-w-md text-center mx-auto">
                      {description}
                    </p>
                  </motion.div>
                  <motion.div
                    {...fadeInUp}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-sm flex gap-2 *:grow"
                  >
                    <Button size="lg" asChild>
                      <Link href={ctaHref}>{ctaText}</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="cursor-pointer"
                    >
                      View Deals
                    </Button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
