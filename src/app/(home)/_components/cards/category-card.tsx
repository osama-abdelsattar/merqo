import { cn } from "@/lib/utils";
import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";

interface CategoryCard extends React.ComponentProps<"a"> {
  category: Category;
  className?: string;
}

export default function CategoryCard({
  category,
  className,
  ...props
}: CategoryCard) {
  const { _id, image, name } = category;
  return (
    <Link
      href={`/category/${_id}`}
      className={cn(
        "aspect-5/6 relative rounded-4xl overflow-clip group bg-white",
        className,
      )}
      {...props}
    >
      <Image
        fill
        className="object-cover"
        src={image}
        alt={name}
      />
      <div className="bg-linear-to-t from-black from-10% to-black/20 hover:to-black/0 backdrop-saturate-0 hover:backdrop-saturate-125 transition-colors dark absolute inset-0 flex items-end justify-center p-6">
        <h3 className="text-foreground text-lg font-serif group-hover:-translate-y-2 transition-transform">
          {name}
        </h3>
      </div>
    </Link>
  );
}
