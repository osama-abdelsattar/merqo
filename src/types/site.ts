import { Banner } from "./banner";
import { Icon } from "./icon";

interface InfoLink {
  type: "email" | "phone" | "address";
  value: string;
  Icon?: Icon;
  href: string | null;
}

interface SocialLink {
  platform: string;
  link: string;
  Icon?: Icon;
  iconOnly?: boolean;
}

interface Feature {
  title: string;
  description: string;
  Icon?: Icon;
}

interface Info {
  name: string;
  slogan: string;
  Logo: Icon;
  description: string;
  contactInfo?: InfoLink[];
  socialInfo?: SocialLink[];
  features?: Feature[];
  promos: Banner[];
}

export type { Info };
