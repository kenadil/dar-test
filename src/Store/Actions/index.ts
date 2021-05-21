import {
  ExtraItem,
  Ingredient,
  ProductItem,
  ShoppingCartLine,
} from "../../Types/Types";
import {
  ADD_EXTRAS,
  ADD_PRODUCT,
  CHANGE_AMOUNT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
} from "./ActionTypes";

export const fetchProducts = (products: ProductItem[]) => ({
  type: FETCH_PRODUCTS,
  products,
});

export const addToCart = (
  item: ProductItem,
  amount = 2,
  takeAway = true,
  additions: ExtraItem[]
) => ({
  type: ADD_PRODUCT,
  item,
  amount,
  takeAway,
  additions,
});

export const deleteFromCart = (line: ShoppingCartLine) => ({
  type: DELETE_PRODUCT,
  line,
});

export const changeAmount = (line: ShoppingCartLine, amount: number) => ({
  type: CHANGE_AMOUNT,
  line,
  amount,
});

export const addExtra = (extra: Ingredient) => ({
  type: ADD_EXTRAS,
  extra,
});
