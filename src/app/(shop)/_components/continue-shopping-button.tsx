import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

function ContinueShoppingButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button {...props} asChild>
      <Link href="/">
        <ArrowLeftIcon /> Continue shopping
      </Link>
    </Button>
  );
}

export default ContinueShoppingButton;
