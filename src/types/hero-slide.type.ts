import { StaticImageData } from "next/image";

interface HeroSlideInfo {
  image: StaticImageData;
  title: string;
  description: string;
  CTA: CTA;
}

interface CTA {
  text: string;
  href: string;
}

export type { HeroSlideInfo, CTA };
