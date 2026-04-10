import { Icon } from "@/types/icon.type";

interface Banner {
  id: string;
  badge: {
    Icon?: Icon;
    label: string;
  };
  heading: string;
  subheading: string;
  discount: string;
  promoCode: string;
  CTA: {
    label: string;
    href: string;
  };
}

export type { Banner };
