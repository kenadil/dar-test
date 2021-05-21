export type ProductItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  imgSrc: string;
  takeAway: boolean;
  additions: ExtraItem[];
};

export type ExtraItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgSrc: string;
};

export type ShoppingCartLine = {
  item: ProductItem;
  count: number;
};

export type AppState = {
  catalog: ProductItem[];
  shoppingCart: ShoppingCartLine[];
  totalPrice: number;
  quantity: number;
};
