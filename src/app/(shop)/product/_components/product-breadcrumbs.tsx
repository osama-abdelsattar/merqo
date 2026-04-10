import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/types/product.type";
import { HomeIcon } from "lucide-react";

export default function ProductBreadcrumbs({ product }: { product: Product }) {
  const { category, subcategory, title } = product;

  return (
    <header className="px-3 py-4 pb-0 sm:p-0">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <HomeIcon className="size-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/products?category=${category._id}`}>
              {category.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/products?subcategory=${subcategory[0]._id}`}
            >
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
