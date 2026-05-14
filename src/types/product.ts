export type Category =
  | "Dogs"
  | "Birds"
  | "Cats"
  | "Dog Food"
  | "Bird Supplies"
  | "Hamster Care"
  | "Pet Medicine"
  | "Accessories"
  | "Cages";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: Category;
  material: string;
  price: number;
  discount?: number;
  image: string;
  description: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isTrending?: boolean;
  options: string[];
};

export type CartItem = Product & {
  quantity: number;
  variant: string;
};
