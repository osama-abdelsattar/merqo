import { Icon } from "./icon.type";

interface InfoLink {
  type: "email" | "phone" | "address";
  value: string;
  Icon?: Icon;
  href?: string;
}
interface SocialLink {
  platform: string;
  link: string;
}
export interface Info {
  name: string;
  slogan: string;
  Logo: Icon;
  description: string;
  contactInfo?: InfoLink[];
  socialInfo?: SocialLink[];
}
