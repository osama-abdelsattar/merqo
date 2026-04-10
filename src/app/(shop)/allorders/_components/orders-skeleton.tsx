import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export function OrderCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-36" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Skeleton className="h-4 w-28" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
          <div className="space-y-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-26" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex justify-between items-center pt-2">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-6 w-36" />
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter>
        <Skeleton className="h-10 w-full rounded-full" />
      </CardFooter>
    </Card>
  );
}

export default function OrdersSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <OrderCardSkeleton key={i} />
      ))}
    </div>
  );
}
