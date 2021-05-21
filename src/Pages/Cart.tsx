import React from "react";
import { Row, Col } from "antd";
import Cart from "../Components/Cart/Cart";

const CartPage = () => {
  return (
    <div className="cart-page">
      <Row justify="space-around" align="middle">
        <Col span={23}>
          <Cart />
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
