"use client";

import { FormControl, FormItem } from "@/components/ui/form";
import { RadioGroupItem } from "@/components/ui/radio-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";

interface PaymentRadioItemProps {
  value: string;
  title: string;
  description: string;
}

function PaymentRadioItem({
  value,
  title,
  description,
}: PaymentRadioItemProps) {
  return (
    <FormItem>
      <FieldLabel className="cursor-pointer">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>{title}</FieldTitle>
            <FieldDescription>{description}</FieldDescription>
          </FieldContent>
          <FormControl>
            <RadioGroupItem value={value} />
          </FormControl>
        </Field>
      </FieldLabel>
    </FormItem>
  );
}

export default PaymentRadioItem;
