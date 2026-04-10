import { cn } from "@/lib/utils";
import { SubCategory } from "@/types/category.type";
import Link from "next/link";

interface SubCategoryCard extends React.ComponentProps<"a"> {
  subCategory: SubCategory;
  className?: string;
}

export default function SubCategoryCard({
  subCategory,
  className,
  ...props
}: SubCategoryCard) {
  const { _id, name } = subCategory;
  const hrefUrl = {
    pathname: "/products",
    query: { subcategory: _id },
  };
  return (
    <Link
      href={hrefUrl}
      className={cn(
        "group aspect-square border bg-card transition-colors rounded-4xl flex items-center justify-center p-6 relative overflow-clip",
        className,
      )}
      {...props}
    >
      {/* Graphics */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-2 -top-2 size-16 rounded-full bg-foreground/20 blur-[48px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-1/3 size-24 rounded-full bg-foreground/20 blur-[48px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 -left-2 size-20 rounded-full bg-foreground/20 blur-[48px]"
      />
      <h3 className="text-center text-foreground text-xl font-serif transition-transform group-hover:scale-110">
        {name}
      </h3>
    </Link>
  );
}
