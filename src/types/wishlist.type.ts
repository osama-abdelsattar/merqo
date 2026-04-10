import { Product } from "@/types/product.type";

interface WishlistResponse {
  status: string;
  count: number;
  data: Product[];
}

export type { WishlistResponse };
