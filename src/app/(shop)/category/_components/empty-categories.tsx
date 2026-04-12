import { Empty } from "@/components/ui/empty";
import EmptyCard from "@/components/empty-card";
import { CTA } from "@/types/hero-slide.type";

function EmptyCategories(props: React.ComponentProps<typeof Empty>) {
  const CTA: CTA = { text: "Browse products", href: "/products" };
  return <EmptyCard title="sub categories" cta={CTA} {...props} />;
}

export default EmptyCategories;
