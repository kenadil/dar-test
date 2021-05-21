export type ProductItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  imgSrc: string;
  additions: ExtraItem[];
};

export type Ingredient = {
  name: string;
  price: number;
  imgSrc: string;
};

export type ExtraItem = {
  name: string;
  price: number;
  imgSrc: string;
};

export type ShoppingCartLine = {
  item: ProductItem;
  count: number;
  takeAway: boolean;
  additions: ExtraItem[];
  totalPrice: number;
};

export type LineProps = {
  line: ShoppingCartLine;
};
export type CartState = {
  shoppingCart: ShoppingCartLine[];
  totalPrice: number;
  quantity: number;
};
