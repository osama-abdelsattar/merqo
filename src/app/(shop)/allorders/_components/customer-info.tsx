import { Order } from "@/types/order.type";
import { User2Icon } from "lucide-react";
import React from "react";

interface CustomerInfoProps extends React.ComponentProps<"div"> {
  customer: Order["user"];
}

function CustomerInfo({ customer, ...props }: CustomerInfoProps) {
  return (
    <div {...props}>
      <p className="font-bold text-base flex items-center gap-2">
        <User2Icon className="size-4" />
        {customer.name}
      </p>
      <a href={`mailto:${customer.email}`} className="hover-link">
        {customer.email}
      </a>
      <a href={`tel:${customer.phone}`} className="hover-link">
        {customer.phone}
      </a>
    </div>
  );
}

export default CustomerInfo;
