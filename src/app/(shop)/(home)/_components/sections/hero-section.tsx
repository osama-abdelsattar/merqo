"use client";
import { HERO_SLIDES } from "@/config/hero-slides.config";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

function HeroSection(props: React.ComponentProps<"section">) {
  return (
    <section {...props}>
      <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }}>
        {HERO_SLIDES.map((slide) => {
          const { title, image, description, CTA } = slide;
          return (
            <SwiperSlide key={title}>
              <div className="relative h-[calc(100dvh-5rem)] max-h-[520px] md:max-h-[440px] lg:max-h-[720px]">
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
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.2,
                    }}
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
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.4,
                    }}
                    className="w-full max-w-sm flex gap-2 *:grow"
                  >
                    <Button size="lg" asChild>
                      <Link href={CTA.href}>{CTA.text}</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="cursor-pointer"
                      asChild
                    >
                      <Link href="/products?deal=true">View Deals</Link>
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

export default HeroSection;
