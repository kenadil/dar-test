import { Col, Row } from "antd";
import React from "react";
import Catalog from "../Components/Catalog/Catalog";
import { ProductItem } from "../Types/Types";

const coffee: ProductItem[] = [
  {
    id: 1,
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ullam tempora autem cupiditate molestias quos? Ex nihil vitae facilis ut nam aut quaerat doloremque commodi dolorem! Rem saepe culpa nesciunt.",
    price: 1.99,
    quantity: 0,
    imgSrc: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
    additions: [],
    takeAway: true,
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
    takeAway: true,
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
    takeAway: true,
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
    takeAway: true,
  },
];

const MainPage = () => {
  return (
    <div className="main">
      <Row justify="space-around" align="middle">
        <Col span={23}>
          <Catalog catalog={coffee} />
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;
