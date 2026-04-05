import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function ViewMoreCard() {
  return (
    <Link
      href="/products"
      className="border-2 rounded-4xl flex justify-center items-center hover:bg-muted dark:hover:bg-card transition-colors min-h-112 shadow-md group relative overflow-clip"
    >
      {/* Graphics */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 -top-7 size-52 rounded-full bg-foreground/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-1/3 size-52 rounded-full bg-foreground/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -left-6 size-48 rounded-full bg-foreground/10 blur-3xl"
      />

      {/* Content */}
      <div className="flex flex-col items-center gap-4 text-muted-foreground">
        <div className="size-14 border rounded-full flex justify-center items-center group-hover:translate-x-1.5 group-active:opacity-50 transition-[transform_opacity]">
          <ArrowRightIcon />
        </div>
        <p className="font-medium group-active:opacity-50 transition-opacity">
          Explore more
        </p>
      </div>
    </Link>
  );
}
