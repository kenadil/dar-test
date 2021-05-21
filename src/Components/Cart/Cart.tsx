import React from "react";
import { Button, Col, List, Row } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartState } from "../../Types/Types";
import CartProduct from "./CartProduct";

const Cart = () => {
  const state = useSelector(
    (state: { cartState: CartState }) => state.cartState
  );

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Cart</h1>
        <Link to="/">
          <Button type="primary">Go back</Button>
        </Link>
      </div>
      <List
        header={
          <Row gutter={[8, 16]} style={{ width: "100%" }}>
            <Col span={2}>Изображение</Col>
            <Col span={5}>Название</Col>
            <Col span={4}>Стоимость</Col>
            <Col span={4}>Количество</Col>
            <Col span={4}>На вынос</Col>
            <Col span={3} style={{ whiteSpace: "nowrap" }}>
              <h4>Итого</h4>
            </Col>
            <Col span={2}></Col>
          </Row>
        }
        dataSource={state.shoppingCart}
        footer={
          <Row gutter={[8, 16]} style={{ width: "100%", marginTop: "10px" }}>
            <Col span={6}></Col>
            <Col span={6}></Col>
            <Col span={8}></Col>
            <Col span={2} style={{ whiteSpace: "nowrap" }}>
              <h2>
                Общая сумма:{" "}
                {Math.round((state.totalPrice + Number.EPSILON) * 100) / 100}$
              </h2>
            </Col>
          </Row>
        }
        renderItem={(line, index) => (
          <List.Item style={index % 2 ? { background: "#fafafa" } : {}}>
            <CartProduct line={line} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;
