import { ProductItem } from "../../Types/Types";
import { FETCH_PRODUCTS } from "../Actions/ActionTypes";

export const productReducer = (state: ProductItem[] = [], action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};
