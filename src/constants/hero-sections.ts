import { type HeroSectionInfo } from "@/types/heroSectionInfo.type";
import heroImg1 from "../../public/Hero1.png";
import heroImg2 from "../../public/Hero2.png";
import heroImg3 from "../../public/Hero3.png";

export const HERO_SECTIONS: HeroSectionInfo[] = [
  {
    image: heroImg1,
    title: "Quality Essentials for Every Day",
    description:
      "Find everything you need for home, tech, and style—all hand-picked for your modern lifestyle.",
    CTA_text: "Explore all products",
    CTA_href: "/products",
  },
  {
    image: heroImg2,
    title: "Modern Tech, Made Simple",
    description:
      "Upgrade your space with the latest smart devices and high-performance electronics built to last.",
    CTA_text: "Explore electronics",
    CTA_href: "/categories",
  },
  {
    image: heroImg3,
    title: "Top Brands You'll Love",
    description:
      "Discover trending styles and timeless pieces from our curated list of favorite global brands.",
    CTA_text: "Explore all brands",
    CTA_href: "/brands",
  },
];
