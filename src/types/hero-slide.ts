import { StaticImageData } from "next/image";

interface HeroSlideInfo {
  image: StaticImageData;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export type { HeroSlideInfo };
