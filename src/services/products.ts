import { Product } from "@/types/product.type";
import { getAPI } from "@/utils/api";
import { toast } from "sonner";

async function getFeaturedProducts(): Promise<Product[] | null> {
  try {
    const res = await fetch(getAPI(["products"], { limit: 16, sort: "-sold" })),
      { data } = await res.json();

    return data;
  } catch {
    // toast.error("There was a problem while fetching data, please try again", {
    //   action: {
    //     label: "Refresh",
    //     onClick: () => window.location.reload(),
    //   },
    // });
    return null;
  }
}

export { getFeaturedProducts };
