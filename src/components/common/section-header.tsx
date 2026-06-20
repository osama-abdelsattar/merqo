import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.ComponentProps<"header"> {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function SectionHeader({
  className,
  level = "h2",
  children,
  ...props
}: SectionHeaderProps) {
  const HeadingTag = level;
  return (
    <header className={cn("overflow-hidden mb-12 -mx-4", className)} {...props}>
      <HeadingTag className="section-header">{children}</HeadingTag>
    </header>
  );
}

export default SectionHeader;
