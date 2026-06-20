import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationLink,
  PaginationPrevious,
  PaginationItem,
  PaginationNext,
} from "@/components/ui/pagination";
import { PaginationMetadata } from "@/utils/api.util";

function Pagination({ metadata }: { metadata?: PaginationMetadata }) {
  if (!metadata)
    return (
      <ShadcnPagination className="p-2">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink className="opacity-50 pointer-events-none">
              1
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </ShadcnPagination>
    );

  const getHref = (page: number | undefined | null) => {
    return page ? `?page=${page}` : "#";
  };

  return (
    <ShadcnPagination className="p-2">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={getHref(metadata.prevPage)}
            isActive={Boolean(metadata.prevPage)}
          />
        </PaginationItem>

        {Array.from({ length: metadata.numberOfPages }).map((_, i) => {
          const pageNumber = i + 1;

          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={getHref(pageNumber)}
                isActive={pageNumber === metadata.currentPage}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href={getHref(metadata.nextPage)}
            isActive={Boolean(metadata.nextPage)}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
}

export default Pagination;
