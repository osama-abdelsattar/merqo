"use client";

import AnimatedSection from "@/components/common/animated-section";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { AlertCircleIcon, RotateCcwIcon } from "lucide-react";

function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <AnimatedSection className="min-h-[calc(100dvh-5rem)] flex items-center justify-center px-6">
      <Empty className="max-w-lg mx-auto gap-6 border rounded-4xl">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <AlertCircleIcon />
          </EmptyMedia>
          <EmptyTitle>Something went wrong</EmptyTitle>
          <EmptyDescription>
            {error.message ||
              "An unexpected error occurred. Please try again later."}
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button onClick={() => window.location.reload()}>
            <RotateCcwIcon />
            Refresh
          </Button>
        </EmptyContent>
      </Empty>
    </AnimatedSection>
  );
}

export default GlobalError;
