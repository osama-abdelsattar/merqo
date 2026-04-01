interface Product {
  id: string;
  _id: string;
  slug: string;
  title: string;
  description: string;
  images: string[];
  imageCover: string;
  quantity: number;
  price: number;
  priceAfterDiscount?: number;
  sold: number | null;
  ratingsAverage: number;
  ratingsQuantity: number;
  category: Category;
  subcategory: SubCategory[];
  brand: Brand;
  createdAt: string;
  updatedAt: string;
}

interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export type { Product, Category, Brand };
