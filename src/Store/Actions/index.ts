import { ProductItem } from "../../Types/Types";
import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS } from "./ActionTypes";

export const fetchProducts = (products: ProductItem[]) => ({
  type: FETCH_PRODUCTS,
  products,
});

export const addToCart = (product: ProductItem) => ({
  type: ADD_PRODUCT,
  product,
});

export const deleteFromCart = (product: ProductItem) => ({
  type: DELETE_PRODUCT,
  product,
});
