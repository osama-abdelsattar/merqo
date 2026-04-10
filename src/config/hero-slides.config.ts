import { type HeroSlideInfo } from "@/types/hero-slide.type";
import heroImg1 from "@images/Hero1.png";
import heroImg2 from "@images/Hero2.png";
import heroImg3 from "@images/Hero3.png";

const HERO_SLIDES: HeroSlideInfo[] = [
  {
    image: heroImg1,
    title: "Quality Essentials for Every Day",
    description:
      "Find everything you need for home, tech, and style—all hand-picked for your modern lifestyle.",
    CTA: {
      text: "Explore Products",
      href: "/products",
    },
  },
  {
    image: heroImg2,
    title: "Modern Tech, Made Simple",
    description:
      "Upgrade your space with the latest smart devices and high-performance electronics built to last.",
    CTA: {
      text: "Explore Categories",
      href: "/categories",
    },
  },
  {
    image: heroImg3,
    title: "Top Brands You'll Love",
    description:
      "Discover trending styles and timeless pieces from our curated list of favorite global brands.",
    CTA: {
      text: "Explore Brands",
      href: "/brands",
    },
  },
];

export { HERO_SLIDES };
