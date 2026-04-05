"use client";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { cn } from "@/lib/utils";
import { Globe, RefreshCwIcon } from "lucide-react";
import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";

export default function EmptyProducts({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Empty
      className={cn("border rounded-4xl max-w-3xl mx-auto gap-6", className)}
      {...props}
    >
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BiErrorCircle />
        </EmptyMedia>
        <EmptyTitle>Error while getting products</EmptyTitle>
        <EmptyDescription>
          We couldn&apos;t find any products at the moment. Please try again
          later or browse our categories.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button asChild>
          <Link href="/categories">
            <Globe />
            Browse Categories
          </Link>
        </Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          <RefreshCwIcon />
          Refresh Page
        </Button>
      </EmptyContent>
    </Empty>
  );
}
