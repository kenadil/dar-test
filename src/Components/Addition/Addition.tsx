import { Col, InputNumber, Row } from "antd";
import React from "react";
import { AdditionPropsType } from "../../Types/Props";

const colStyle = {
  verticalAlign: "center",
  lineHeight: "5",
};

const Addition = ({ addition }: AdditionPropsType) => {
  const [amount, setAmount] = React.useState(0);

  const changeAmount = (value: any) => {
    setAmount(value);
  };

  return (
    <>
      <Row gutter={[8, 16]}>
        <Col span={6} style={colStyle}>
          <img
            src={addition.imgSrc}
            alt=""
            style={{
              height: "75px",
              marginBottom: "16px",
              width: "70%",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col span={6} style={colStyle}>
          <h4>{addition.name}</h4>
        </Col>
        <Col span={5} style={colStyle}>
          <p>${addition.price}</p>
        </Col>
        <Col span={5} style={colStyle}>
          <InputNumber defaultValue={0} onChange={changeAmount} />
        </Col>
        <Col span={2} style={colStyle}>
          <h4>${amount * addition.price}</h4>
        </Col>
      </Row>
    </>
  );
};

export default Addition;
