import React from "react";
import { ProductItem } from "../../Types/Types";
import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import ChangeModal from "../Modals/ChangeModal";

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
      actions={[
        <h3 key="price">{item.price}$</h3>,
        <ChangeModal item={item} />,
        <Button style={{ border: "none", boxShadow: "none" }} key="toCart">
          В корзину
        </Button>,
      ]}
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
          </>
        }
      />
    </Card>
  );
};

export default Product;
