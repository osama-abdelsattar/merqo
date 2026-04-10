import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Banner } from "@/types/banner.type";
import { ArrowRightIcon, CopyIcon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface BannerCard extends React.ComponentProps<"div"> {
  banner: Banner;
}

export default function BannerCard({
  banner,
  className,
  ...props
}: BannerCard) {
  const { badge, heading, subheading, discount, promoCode, CTA } = banner;

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between overflow-clip rounded-2xl p-8 dark text-foreground",
        className,
      )}
      aria-label={heading}
      {...props}
    >
      {/* Graphics */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-48 -top-7 size-52 rounded-full bg-foreground/10 blur-2xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-6 size-52 rounded-full bg-foreground/15 blur-2xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 -left-4 size-48 rounded-full bg-foreground/10 blur-2xl"
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Badge variant="outline" className="gap-1.5">
            <span aria-hidden="true">
              {badge.Icon && <badge.Icon className="size-3.5" />}
            </span>
            {badge.label}
          </Badge>
          <h2 className="text-2xl font-bold leading-tight tracking-tight lg:text-3xl font-serif">
            {heading}
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-foreground/80">
            {subheading}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-extrabold text-white">
              {discount}
            </span>
            {/* Copy Promo button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  title="Click to copy code"
                  aria-label={`Promo code: ${promoCode}. Click to copy.`}
                  onClick={() => {
                    navigator.clipboard?.writeText(promoCode);
                    toast.success("Copied to clipboard");
                  }}
                  className="rounded-md cursor-pointer select-all"
                >
                  {promoCode} <CopyIcon className="size-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Copy Promo</TooltipContent>
            </Tooltip>
          </div>
          {/* ── CTA button ── */}
          <div className="ms-auto relative z-10">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href={CTA.href}>
                {CTA.label}
                <ArrowRightIcon
                  className="size-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
