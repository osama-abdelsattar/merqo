import { StaticImageData } from "next/image";

export interface HeroSectionInfo {
  image: StaticImageData;
  title: string;
  description: string;
  CTA_text: string;
  CTA_href: string;
}
