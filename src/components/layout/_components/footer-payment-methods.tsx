"use client";

import { PAYMENT_METHODS } from "@/config/footer.config";
import { PaymentMethodIcon } from "@/types/payment.type";

interface FooterPaymentMethodsProps {
  methods?: PaymentMethodIcon[];
}

function FooterPaymentMethods({
  methods = PAYMENT_METHODS,
}: FooterPaymentMethodsProps) {
  return (
    <div className="flex items-center gap-4 text-muted-foreground">
      {methods.map((method) => {
        const { srLabel, Icon } = method;
        return (
          <div key={srLabel}>
            <Icon className="size-6" />
            <span className="sr-only">{srLabel}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FooterPaymentMethods;
