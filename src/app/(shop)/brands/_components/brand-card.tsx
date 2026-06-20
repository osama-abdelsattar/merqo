import CardLink from "@/components/common/card-link";
import { cn } from "@/lib/utils";
import { Brand } from "@/types/brand.type";
import Image from "next/image";

interface BrandCardProps extends React.ComponentProps<"a"> {
  brand: Brand;
}

function BrandCard({ brand, className, ...props }: BrandCardProps) {
  const href = {
    pathname: "/products",
    query: { brand: brand._id },
  };
  return (
    <CardLink
      href={href}
      key={brand._id}
      className={cn("h-48", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-24 h-18">
          <Image
            fill
            src={brand.image}
            alt={brand.name ?? ""}
            className="rounded-4xl"
          />
        </div>
        <span>{brand.name}</span>
      </div>
    </CardLink>
  );
}

export default BrandCard;
