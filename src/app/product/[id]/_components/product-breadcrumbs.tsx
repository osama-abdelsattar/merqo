import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/types/product";
import { HomeIcon } from "lucide-react";

export default function ProductBreadcrumbs({
  product,
}: {
  product: Product;
}) {
  const { category, subcategory, title } = product;

  return (
    <header>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <HomeIcon className="size-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/category/${category._id}`}>
              {category.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/category/${subcategory[0]._id}`}>
              {subcategory[0].name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>{title}</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
