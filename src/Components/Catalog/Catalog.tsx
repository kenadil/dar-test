import { List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "../../Types/Types";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import "./Catalog.css";

export type stateType = {
  productState: ProductItem[];
};

const Catalog = () => {
  const state = useSelector(
    (state: { productState: ProductItem[] }) => state.productState
  );

  return (
    <div className="catalog-list">
      <List
        header={
          <>
            <h1>Кофе</h1>
            <Navbar />
          </>
        }
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 6,
        }}
        dataSource={state}
        renderItem={(item: ProductItem) => (
          <List.Item>
            <Product item={item} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Catalog;
