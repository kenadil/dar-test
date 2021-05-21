import { Checkbox, Col, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { AdditionPropsType } from "../../Types/Props";

const { Option } = Select;
const colStyle = {
  verticalAlign: "middle",
  lineHeight: "10",
};

const Addition = ({ type, handleCheck, name }: AdditionPropsType) => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState({
    name: type[0].name,
    price: type[0].price,
    imgSrc: type[0].imgSrc,
  });

  const [ingredient, setIngredient] = useState({
    name: "",
    imgSrc: "",
    price: 0,
  });

  useEffect(() => {
    setIngredient({
      name: selected.name,
      imgSrc: selected.imgSrc,
      price: selected.price,
    });
  }, [selected]);

  useEffect(() => {
    handleCheck(ingredient, checked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={2} style={{ textAlign: "center", lineHeight: "10" }}>
          <Checkbox
            style={{ textAlign: "center" }}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </Col>
        <Col span={4} style={{ lineHeight: "10" }}>
          <h4>{name}</h4>
        </Col>
        <Col span={6} style={colStyle}>
          <img
            src={selected.imgSrc}
            alt=""
            height={150}
            style={{
              marginBottom: "16px",
              width: "60%",
              objectFit: "contain",
            }}
          />
        </Col>
        <Col span={6} style={colStyle}>
          <Select
            defaultValue={0}
            style={{ minWidth: "200px" }}
            onChange={(value) => setSelected(type[value])}
          >
            {type.map((e, i) => (
              <Option value={i}>{e.name}</Option>
            ))}
          </Select>
        </Col>
        <Col
          span={6}
          style={{
            verticalAlign: "center",
            lineHeight: "10",
            textAlign: "center",
          }}
        >
          <h4>${selected.price}</h4>
        </Col>
      </Row>
    </>
  );
};

export default Addition;
