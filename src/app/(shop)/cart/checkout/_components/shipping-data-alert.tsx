import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

function ShippingDataAlert() {
  return (
    <Alert>
      <div className="flex items-center gap-4">
        <InfoIcon />
        <div className="">
          <AlertTitle>Delivery Information</AlertTitle>
          <AlertDescription>
            Please ensure your address is accurate for smooth delivery
          </AlertDescription>
        </div>
      </div>
    </Alert>
  );
}

export default ShippingDataAlert;
