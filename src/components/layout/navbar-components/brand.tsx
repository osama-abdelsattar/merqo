import { SITE_INFO } from "@/config/site.config";
import Link from "next/link";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <SITE_INFO.Logo className="size-8 lg:size-10" />
      <div className="flex flex-col h-full">
        <span className="leading-4 lg:leading-7 text-3xl lg:text-2xl font-serif font-semibold">
          {SITE_INFO.name}
        </span>
        <p className="hidden lg:[display:initial] leading-4 text-muted-foreground text-xs">
          {SITE_INFO.slogan}
        </p>
      </div>
    </Link>
  );
}

export default Brand;
