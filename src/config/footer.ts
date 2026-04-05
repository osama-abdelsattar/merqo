import { FooterSection } from "@/types/footer";
import { PaymentMethodIcon } from "@/types/payment";
import { BsPaypal } from "react-icons/bs";
import { GrVisa } from "react-icons/gr";
import { SiMastercard } from "react-icons/si";
import { CATEGORY_LINKS, SECTION_LINKS } from "./navigation";

const PAYMENT_METHODS: PaymentMethodIcon[] = [
  { Icon: GrVisa, srLabel: "Visa" },
  { Icon: SiMastercard, srLabel: "MasterCard" },
  { Icon: BsPaypal, srLabel: "PayPal" },
];

const FOOTER_SECTIONS: FooterSection[] = [
  { title: "Explore", items: SECTION_LINKS },
  { title: "Shop", items: CATEGORY_LINKS.slice(1, CATEGORY_LINKS.length) },
];

export { PAYMENT_METHODS, FOOTER_SECTIONS };
