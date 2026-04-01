import { FooterSection } from "@/types/footerSection.type";
import { PaymentMethodIcon } from "@/types/paymentMethodIcon.type";
import { BsPaypal } from "react-icons/bs";
import { GrVisa } from "react-icons/gr";
import { SiMastercard } from "react-icons/si";
import { CATEGORY_LINKS } from "./links";

export const PAYMENT_METHODS: PaymentMethodIcon[] = [
    { Icon: GrVisa, srLabel: "Visa" },
    { Icon: SiMastercard, srLabel: "MasterCard" },
    { Icon: BsPaypal, srLabel: "PayPal" },
  ],
  FOOTER_SECTIONS: FooterSection[] = [{ title: "Shop", items: CATEGORY_LINKS }];
