import {
  ProductBrand,
  ProductCategory,
  ProductSubCategory,
} from "@/types/product.type";

interface CartItem {
  _id: string;
  count: number;
  price?: number;
  product: CartProduct;
}

interface CartProduct {
  id: string;
  _id: string;
  title: string;
  slug: string;
  quantity: number;
  imageCover: string;
  category: ProductCategory;
  subcategory: ProductSubCategory[];
  brand: ProductBrand;
  ratingsAverage: number;
}

interface Cart {
  status: "success" | string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: {
    _id: string;
    cartOwner: string;
    products: CartItem[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalCartPrice: number;
  };
}

export type { Cart, CartItem, CartProduct };
