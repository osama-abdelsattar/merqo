interface CartItem {
  _id: string;
  count: number;
  price?: number;
  product: {
    subcategory: {
      _id: string;
      name: string;
      slug: string;
      category: string;
    }[];
    _id: string;
    title: string;
    slug: string;
    quantity: number;
    imageCover: string;
    category: {
      _id: string;
      name: string;
      slug: string;
      image: string;
    };
    brand: {
      _id: string;
      name: string;
      slug: string;
      image: string;
    };
    ratingsAverage: number;
    id: string;
  };
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

export type { Cart, CartItem };
