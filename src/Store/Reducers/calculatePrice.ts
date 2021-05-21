import { ShoppingCartLine } from "../../Types/Types";

export const calculatePrice = (cart: ShoppingCartLine[]) => {
  cart.reduce(
    (total, product) => total + product.item.price * product.count,
    0
  );
};
