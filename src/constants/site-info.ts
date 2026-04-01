import { Logo } from "@/components/Logo";
import { Info } from "@/types/info.type";
import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";

export const SITE_INFO: Info = {
  name: "Merqo",
  Logo: Logo,
  slogan: "Everything, everywhere, delivered.",
  description:
    "A modern general marketplace — browse, wishlist, and shop everything in one place.",
  contactInfo: [
    {
      type: "email",
      value: "support@merqo.com",
      href: "mailto:support@merqo.com",
      Icon: MailIcon,
    },
    {
      type: "phone",
      value: "+20 102 123 4567",
      href: "tel:+201021234567",
      Icon: PhoneIcon,
    },
    {
      type: "address",
      value: "123 Commerce St, Cairo, EG",
      Icon: LocateIcon,
    },
  ],
};
