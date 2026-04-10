import { Empty } from "@/components/ui/empty";
import EmptyCard from "@/components/ui/empty-card";
import { CTA } from "@/types/hero-slide.type";

export default function EmptyCategories(
  props: React.ComponentProps<typeof Empty>,
) {
  const CTA: CTA = { text: "Browse products", href: "/products" };
  return <EmptyCard title="categories" cta={CTA} {...props} />;
}
