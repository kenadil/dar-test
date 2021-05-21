import { CartState } from "../../Types/Types";
import {
  ADD_PRODUCT,
  CHANGE_AMOUNT,
  DELETE_PRODUCT,
} from "../Actions/ActionTypes";
import { calculatePrice } from "./calculatePrice";

const initialState = {
  shoppingCart: [],
  totalPrice: 0,
  quantity: 0,
};

export const cartReducer = (state: CartState = initialState, action: any) => {
  const { shoppingCart } = state;
  switch (action.type) {
    case CHANGE_AMOUNT: {
      const newShoppingCart = [...shoppingCart];

      if (action.amount > 0) {
        newShoppingCart.map(
          (line) =>
            (line.count = line === action.line ? action.amount : line.count)
        );
      } else {
        newShoppingCart.filter((line) => line !== action.line);
      }
      console.log(newShoppingCart);
      return {
        ...state,
        shoppingCart: newShoppingCart,
        totalPrice: calculatePrice(newShoppingCart),
        quantity: newShoppingCart.reduce((a, b) => a + b.count, 0),
      };
    }
    case ADD_PRODUCT: {
      const newShoppingCart = [...shoppingCart];

      let line = newShoppingCart.find(
        (line) =>
          line.item === action.item &&
          line.takeAway === action.takeAway &&
          line.additions.length === action.additions.length &&
          line.additions.every((element, index) => {
            return element === action.additions[index];
          })
      );
      if (!line) {
        line = {
          item: action.item,
          count: action.amount,
          takeAway: action.takeAway,
          additions: action.additions,
          totalPrice:
            action.additions?.reduce(
              (a: any, b: { price: any }) => a + b.price,
              0
            ) + action.item?.price,
        };
        newShoppingCart.push(line);
      } else line.count += action.amount;
      return {
        ...state,
        shoppingCart: newShoppingCart,
        totalPrice: calculatePrice(newShoppingCart),
        quantity: newShoppingCart.reduce((a, b) => a + b.count, 0),
      };
    }
    case DELETE_PRODUCT: {
      const newShoppingCart = [...shoppingCart];
      const index = newShoppingCart.indexOf(action.line);
      if (index !== -1) {
        newShoppingCart.splice(index, 1);
      }
      return {
        ...state,
        shoppingCart: newShoppingCart,
        totalPrice: calculatePrice(newShoppingCart),
        quantity: newShoppingCart.reduce((a, b) => a + b.count, 0),
      };
    }
    default:
      return state;
  }
};
