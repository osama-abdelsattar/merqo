import WishlistButton from "@/components/product/wishlist-button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { SITE_INFO } from "@/config/site";

export default function ProductPageSkeleton() {
  return (
    <div className="-mx-6 sm:py-6 max-w-7xl sm:mx-auto min-h-[calc(100vh-5rem)] flex flex-col gap-4">
      <div className="grow flex justify-center items-center">
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="w-[320px] h-[calc(873px/2)] p-4 border bg-card rounded-4xl">
            <Skeleton className="w-full h-full" />
          </div>
          <Card className="gap-4 w-full rounded-none sm:rounded-4xl">
            <CardHeader>
              <CardAction>
                <WishlistButton disabled />
              </CardAction>
              <div className="flex gap-2 mb-2">
                <Skeleton className="w-24 h-5 rounded-full" />
                <Skeleton className="w-24 h-5 rounded-full" />
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <Skeleton className="w-1/2 h-3" />
              </div>
              <div className="flex gap-3">
                <Skeleton className="w-36 h-3" />
                <Skeleton className="w-12 h-3" />
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Skeleton className="w-24 h-4" />
                <Skeleton className="w-28 h-6" />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton className="w-36 h-8" />
                <Skeleton className="w-20 h-3" />
              </div>
              <CardDescription className="text-base lg:text-lg">
                <Skeleton className="h-2 mb-2" />
                <Skeleton className="h-2 mb-2" />
                <Skeleton className="h-2 mb-2" />
                <Skeleton className="h-2 mb-2" />
                <Skeleton className="w-3/4 h-2" />
              </CardDescription>
            </CardContent>
            <Separator className="mt-auto" />
            <CardFooter className="grid grid-cols-12 gap-4">
              <Skeleton className="h-8 rounded-full col-span-12 sm:col-span-6" />
              <Skeleton className="h-8 rounded-full col-span-12 sm:col-span-6" />
              {SITE_INFO.features?.slice(0, -1).map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-18 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4"
                />
              ))}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
