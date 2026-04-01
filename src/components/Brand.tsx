import { SITE_INFO } from "@/constants/site-info";

export default function Brand() {
  return (
    <div className="flex items-center gap-2">
      <SITE_INFO.Logo className="size-10" />
      <div className="flex flex-col">
        <h1 className="leading-4 lg:leading-5 text-lg lg:text-xl font-semibold">
          {SITE_INFO.name}
        </h1>
        <p className="leading-4 lg:leading-5 text-muted-foreground text-sm">
          {SITE_INFO.slogan}
        </p>
      </div>
    </div>
  );
}
