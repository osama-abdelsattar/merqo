import { PaymentMethodIcon } from "@/types/payment.type";
import { BsPaypal } from "react-icons/bs";
import { GrVisa } from "react-icons/gr";
import { SiMastercard } from "react-icons/si";

const PAYMENT_METHODS: PaymentMethodIcon[] = [
  { Icon: GrVisa, srLabel: "Visa" },
  { Icon: SiMastercard, srLabel: "MasterCard" },
  { Icon: BsPaypal, srLabel: "PayPal" },
];

const FOOTER_STRUCTURE = {
  EXPLORE_TITLE: "Explore",
  SHOP_TITLE: "Shop",
};

export { PAYMENT_METHODS, FOOTER_STRUCTURE };
