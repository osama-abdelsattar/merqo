import { Product } from "./product.type";

interface Wishlist {
  status: "success" | string;
  message: string;
  data: string[];
}
interface WishlistData {
  status: "success" | string;
  count: number;
  data: Product[];
}

export type { Wishlist, WishlistData };
