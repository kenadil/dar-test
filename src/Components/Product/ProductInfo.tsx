import "./ProductInfo.css";
import React from "react";
import { ChangeModalType } from "../../Types/ModalTypes";
import { Divider, Image } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const ProductInfo = ({ item }: ChangeModalType) => {
  return (
    <div className="product-info change-part">
      <div className="image-container">
        <Image src={item.imgSrc} alt={item.name + ".jpg"} />
      </div>
      <div className="text-container">
        <div className="text-heading">
          <h2>{item.name}</h2>
          <h3>{item.price}$</h3>
        </div>
        <p>{item.description}</p>
        <Divider />
        <div className="info-icons">
          <div className="info-icon">
            <LikeOutlined />
            <p>Roasted Beans</p>
          </div>
          <div className="info-icon">
            <LikeOutlined />
            <p>Roasted Beans</p>
          </div>
          <div className="info-icon">
            <LikeOutlined />
            <p>Roasted Beans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
