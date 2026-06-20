import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import RefreshButton from "@/components/common/refresh-button";
import { cn } from "@/lib/utils";
import { CTA } from "@/types/cta.type";
import { Globe, PackageX } from "lucide-react";
import Link from "next/link";

interface EmptyCardProps extends Omit<React.ComponentProps<typeof Empty>, "title"> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  cta?: CTA;
  showRefresh?: boolean;
}

function EmptyCard({
  className,
  icon,
  title,
  description,
  cta,
  showRefresh = false,
  ...props
}: EmptyCardProps) {
  return (
    <Empty
      className={cn("border rounded-4xl max-w-3xl mx-auto gap-6", className)}
      {...props}
    >
      <EmptyHeader>
        <EmptyMedia variant="icon">
          {icon ?? <PackageX />}
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>
          {description ?? "Nothing to show here at the moment."}
        </EmptyDescription>
      </EmptyHeader>
      {(cta || showRefresh) && (
        <EmptyContent className="flex-row justify-center gap-2">
          {cta && (
            <Button asChild>
              <Link href={cta.href}>
                <Globe />
                {cta.text}
              </Link>
            </Button>
          )}
          {showRefresh && <RefreshButton />}
        </EmptyContent>
      )}
    </Empty>
  );
}

export default EmptyCard;
