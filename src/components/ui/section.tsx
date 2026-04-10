import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-12 max-w-7xl mx-auto", className)} {...props}>
      {children}
    </section>
  );
}
