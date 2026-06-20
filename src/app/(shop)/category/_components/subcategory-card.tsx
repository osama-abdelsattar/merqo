import CardLink from "@/components/common/card-link";
import { cn } from "@/lib/utils";
import { SubCategory } from "@/types/category.type";

interface SubCategoryCardProps extends React.ComponentProps<"a"> {
  subCategory: SubCategory;
}

function SubCategoryCard({
  subCategory,
  className,
  ...props
}: SubCategoryCardProps) {
  const href = {
    pathname: "/products",
    query: { subcategory: subCategory._id },
  };
  return (
    <CardLink
      href={href}
      className={cn("group aspect-square", className)}
      {...props}
    >
      <h3 className="text-center text-foreground text-xl font-serif transition-transform group-hover:scale-110">
        {subCategory.name}
      </h3>
    </CardLink>
  );
}

export default SubCategoryCard;
