import { Empty } from "@/components/ui/empty";
import EmptyCard from "@/components/empty-card";
import { CTA } from "@/types/hero-slide.type";

function EmptyProducts(props: React.ComponentProps<typeof Empty>) {
  const CTA: CTA = { text: "Browse categories", href: "/categories" };
  return <EmptyCard title="products" cta={CTA} {...props} />;
}

export default EmptyProducts;
