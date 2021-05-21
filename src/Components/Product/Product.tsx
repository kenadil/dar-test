import React from "react";
import { ProductItem } from "../../Types/Types";
import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";

export interface ProductProps {
  item: ProductItem;
}

const Product = ({ item }: ProductProps) => {
  return (
    <Card
      hoverable
      cover={
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={item.imgSrc} style={{ height: "20vh", objectFit: "cover" }} />
      }
      title={<h3>{item.name}</h3>}
    >
      <Meta
        title={
          <>
            <p
              style={{
                whiteSpace: "normal",
                textAlign: "left",
                fontWeight: "normal",
              }}
            >
              {item.description}
            </p>
            <span style={{ float: "left" }}>{item.price}$</span>
            <Button style={{ float: "right" }}>To cart</Button>
          </>
        }
      />
    </Card>
  );
};

export default Product;
