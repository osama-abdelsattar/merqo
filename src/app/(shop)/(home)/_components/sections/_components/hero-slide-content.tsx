"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTA } from "@/types/hero-slide.type";

interface HeroSlideContentProps {
  title: string;
  description: string;
  CTA: CTA;
}

function HeroSlideContent({ title, description, CTA }: HeroSlideContentProps) {
  return (
    <>
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
        <h2 className="text-2xl md:text-4xl font-semibold mb-2">{title}</h2>
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
    </>
  );
}

export default HeroSlideContent;
