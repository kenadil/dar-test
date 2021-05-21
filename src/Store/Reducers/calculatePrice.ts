import { ShoppingCartLine } from "../../Types/Types";

export const calculatePrice = (cart: ShoppingCartLine[]) => {
  return cart.reduce((total, item) => total + item.totalPrice * item.count, 0);
};
