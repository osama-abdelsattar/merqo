import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import RefreshButton from "@/components/ui/refresh-button";
import { cn } from "@/lib/utils";
import { CTA } from "@/types/hero-slide.type";
import { BadgeXIcon, Globe } from "lucide-react";
import Link from "next/link";

interface EmptyCardProps extends Omit<
  React.ComponentProps<typeof Empty>,
  "title"
> {
  title: string;
  cta?: CTA;
}

export default function EmptyCard({
  className,
  title,
  cta,
  ...props
}: EmptyCardProps) {
  return (
    <Empty
      className={cn("border rounded-4xl max-w-3xl mx-auto gap-6", className)}
      {...props}
    >
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BadgeXIcon />
        </EmptyMedia>
        <EmptyTitle>No {title} found at this page</EmptyTitle>
        <EmptyDescription>
          We couldn&apos;t find any {title} at the moment. Please try again
          later or browse our categories.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        {cta && (
          <Button asChild>
            <Link href={cta.href}>
              <Globe />
              {cta.text}
            </Link>
          </Button>
        )}
        <RefreshButton />
      </EmptyContent>
    </Empty>
  );
}
