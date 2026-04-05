import Logo from "@/components/navbar/logo";
import { Info } from "@/types/site";
import {
  HeadphonesIcon,
  LocateIcon,
  MailIcon,
  PhoneIcon,
  ShieldHalf,
  SparklesIcon,
  TicketPercentIcon,
  Truck,
} from "lucide-react";
import {
  FaArrowRotateRight,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const SITE_INFO: Info = {
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
      href: null,
    },
  ],
  socialInfo: [
    {
      platform: "Facebook",
      link: "facebook.com/merqo",
      Icon: FaFacebook,
      iconOnly: true,
    },
    {
      platform: "Instagram",
      link: "instagram.com/merqo",
      Icon: FaInstagram,
      iconOnly: true,
    },
    {
      platform: "Twitter",
      link: "x.com/merqo",
      Icon: FaXTwitter,
      iconOnly: true,
    },
  ],
  features: [
    { title: "Free Delivery", description: "Orders over $50", Icon: Truck },
    {
      title: "30 Days Return",
      description: "Money back",
      Icon: FaArrowRotateRight,
    },
    {
      title: "Secure Payment",
      description: "100% Protected",
      Icon: ShieldHalf,
    },
    {
      title: "24/7 Support",
      description: "Dedicated support team",
      Icon: HeadphonesIcon,
    },
  ],
  promos: [
    {
      id: "deal-of-the-day",
      badge: {
        Icon: TicketPercentIcon,
        label: "Deal of the Day",
      },
      heading: "Farm-Fresh Organic Fruits",
      subheading:
        "Hand-picked daily from certified organic farms. No pesticides, no shortcuts — just real fruit.",
      discount: "40% OFF",
      promoCode: "ORGANIC40",
      CTA: {
        label: "Shop the Deal",
        href: "/shop?category=fruits&deal=true",
      },
    },
    {
      id: "new-arrivals",
      badge: {
        Icon: SparklesIcon,
        label: "New Arrivals",
      },
      heading: "Rare & Exotic Vegetables",
      subheading:
        "Global varieties you won't find at the supermarket. Sourced from specialty growers worldwide.",
      discount: "25% OFF",
      promoCode: "FRESH25",
      CTA: {
        label: "Explore Now",
        href: "/shop?category=vegetables&filter=new",
      },
    },
  ],
};

export { SITE_INFO };
