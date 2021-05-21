import { ExtraItem, Ingredient, ProductItem } from "./Types";

export type CatalogPropsType = {
  catalog: ProductItem[];
  //addProduct: (product: ProductItem) => AddProduct;
  //removeProduct: (product: ProductItem) => RemoveProduct;
};

export type AdditionPropsType = {
  handleCheck: (n: ExtraItem, m: boolean) => void;
  name: String;
  type: Ingredient[];
};
