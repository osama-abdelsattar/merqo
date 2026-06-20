import { cn } from "@/lib/utils";
import Link from "next/link";

function CardLink({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "border rounded-4xl flex items-center justify-center p-6 relative overflow-clip",
        className,
      )}
      {...props}
    >
      {/* Graphics */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-2 -top-2 size-16 rounded-full bg-foreground/20 blur-[48px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-1/3 size-24 rounded-full bg-foreground/20 blur-[48px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 -left-2 size-20 rounded-full bg-foreground/20 blur-[48px]"
      />
      {children}
    </Link>
  );
}

export default CardLink;
