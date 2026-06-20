import { StaticImageData } from "next/image";
import { CTA } from "@/types/cta.type";

interface HeroSlideInfo {
  image: StaticImageData;
  title: string;
  description: string;
  CTA: CTA;
}

export type { HeroSlideInfo, CTA };
