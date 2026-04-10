import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationLink,
  PaginationPrevious,
  PaginationItem,
  PaginationNext,
} from "@/components/ui/pagination";
import { PaginationMetadata } from "@/utils/api.util";

export default function Pagination({
  metadata,
}: {
  metadata: PaginationMetadata;
}) {
  const { numberOfPages, currentPage, nextPage, prevPage } = metadata;

  const getHref = (page: number | undefined | null) => {
    return page ? `?page=${page}` : "#";
  };

  return (
    <ShadcnPagination className="p-2">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={getHref(prevPage)}
            isActive={Boolean(prevPage)}
          />
        </PaginationItem>

        {Array.from({ length: numberOfPages }).map((_, i) => {
          const pageNumber = i + 1;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={getHref(pageNumber)}
                isActive={pageNumber === currentPage}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href={getHref(nextPage)}
            isActive={Boolean(nextPage)}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
}
