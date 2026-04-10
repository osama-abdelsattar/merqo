interface Product {
  id: string;
  _id: string;
  __v: number;
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
  category: ProductCategory;
  subcategory: ProductSubCategory[];
  brand: ProductBrand;
  createdAt: string;
  updatedAt: string;
}

interface ProductSubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

interface ProductCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface ProductBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export type { Product };
