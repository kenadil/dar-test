import { Ingredient, ProductItem } from "../Types/Types";

const coffee: ProductItem[] = [
  {
    id: 1,
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ullam tempora autem cupiditate molestias quos? Ex nihil vitae facilis ut nam aut quaerat doloremque commodi dolorem! Rem saepe culpa nesciunt.",
    price: 1.99,
    quantity: 0,
    imgSrc:
      "https://www.torani.com/sites/default/files/styles/torani_syrup_recipe_detail/public/recipes/illustration/Cappuccino%20layers.jpg?itok=NdkAKAXu",
    additions: [],
  },
  {
    id: 2,
    name: "Latte",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ullam tempora autem cupiditate molestias quos? Ex nihil vitae facilis ut nam aut quaerat doloremque commodi dolorem! Rem saepe culpa nesciunt.",
    price: 2.99,
    quantity: 0,
    imgSrc: "https://cdn.kiwilimon.com/recetaimagen/36986/46349.jpg",
    additions: [],
  },
  {
    id: 3,
    name: "Frappuccino",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ullam tempora autem cupiditate molestias quos? Ex nihil vitae facilis ut nam aut quaerat doloremque commodi dolorem! Rem saepe culpa nesciunt.",
    price: 3.99,
    quantity: 0,
    imgSrc:
      "https://simplyhomecooked.com/wp-content/uploads/2021/02/Starbucks-Caramel-Frappuccino-Copycat-recipe-8.jpg",
    additions: [],
  },
  {
    id: 4,
    name: "Glintwine",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ullam tempora autem cupiditate molestias quos? Ex nihil vitae facilis ut nam aut quaerat doloremque commodi dolorem! Rem saepe culpa nesciunt.",
    price: 5.99,
    quantity: 0,
    imgSrc:
      "https://previews.123rf.com/images/elnur/elnur1801/elnur180103020/93935678-mulled-wine-glintwine-served-in-glasses-for-christmas-table.jpg",
    additions: [],
  },
];

export const syrups: Ingredient[] = [
  {
    name: "Гренадин",
    price: 0.59,
    imgSrc:
      "https://avatars.mds.yandex.net/get-mpic/1525215/img_id203235764006029854.jpeg/9hq",
  },
  {
    name: "Карамель",
    price: 0.59,
    imgSrc:
      "https://coffeemag.kz/image/cache/data/___________MONIN_521d2d34ca28b-500x500.jpg",
  },
  {
    name: "Амаретто",
    price: 0.59,
    imgSrc:
      "https://chefs-shop.com/image/catalog/Monin/%D0%90%D0%BC%D0%B0%D1%80%D0%B5%D1%82%D1%82%D0%BE%20%D0%BF%D1%8D%D1%82.jpg",
  },
  {
    name: "Мёд",
    price: 0.59,
    imgSrc: "https://cdn1.ozone.ru/s3/multimedia-t/6010982801.jpg",
  },
];

export const sweets: Ingredient[] = [
  {
    name: "Шоколадная стружка",
    price: 0.89,
    imgSrc: "https://canadacook.ru/uploads/shokoladnaya-kroshka.jpg",
  },
  {
    name: "Корица",
    price: 0.49,
    imgSrc:
      "https://avatanplus.ru/files/resources/original/5855655caede91590d93f22c.png",
  },
  {
    name: "Крошка Орео",
    price: 0.79,
    imgSrc:
      "https://w7.pngwing.com/pngs/438/910/png-transparent-brown-rat-biscuits-oreo-hydrox-sandwich-cookie-biscuit-miscellaneous-food-biscuits.png",
  },
  {
    name: "Красный бархат",
    price: 0.99,
    imgSrc:
      "https://static.tildacdn.com/tild3939-6262-4331-a131-323738366337/noroot.png",
  },
];

export const sugar: Ingredient[] = [
  {
    name: "Сахар",
    price: 0,
    imgSrc: "http://pngimg.com/uploads/sugar/sugar_PNG8.png",
  },
  {
    name: "Карамельный сахар",
    price: 0.19,
    imgSrc:
      "https://www.mirbeer.ru/resources/catalog/catalog/01_tovar_za_may/belgian-dark-sugar.png",
  },
];

function fetchProductsAPI() {
  return coffee;
}

export default fetchProductsAPI;
