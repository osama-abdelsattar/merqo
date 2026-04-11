import { cn } from "@/lib/utils";

export default function SectionHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header className={cn("overflow-hidden mb-12 -mx-4", className)} {...props}>
      <h2 className="section-header">{props.children}</h2>
    </header>
  );
}
