import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  productState: productReducer,
  cartState: cartReducer,
});

export default rootReducer;
