import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Catalog from "../Components/Catalog/Catalog";
import fetchProductsAPI from "../Services/api";
import { fetchProducts } from "../Store/Actions";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      const coffee = fetchProductsAPI();
      dispatch(fetchProducts(coffee));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <Row justify="space-around" align="middle">
        <Col span={23}>
          <Catalog />
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;
