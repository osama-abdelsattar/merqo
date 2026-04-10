import { cn } from "@/lib/utils";
import { Category } from "@/types/category.type";
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
      className={cn("group relative aspect-5/6", className)}
      {...props}
    >
      <div className="absolute inset-0 rounded-4xl overflow-clip">
        <Image
          fill
          className={cn(
            "object-cover transition-transform duration-300 group-hover:scale-105",
            "rounded-[inherit]",
          )}
          src={image}
          alt={name}
        />
      </div>
      <div className="bg-linear-to-t from-black from-10% to-black/20 hover:to-black/0 backdrop-saturate-0 hover:backdrop-saturate-125 transition-colors dark absolute -inset-px rounded-4xl flex items-end justify-center p-6">
        <h3 className="text-center text-foreground text-lg font-serif transition-all duration-300 group-hover:-translate-y-3">
          {name}
        </h3>
      </div>
    </Link>
  );
}
