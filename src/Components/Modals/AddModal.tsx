import React, { useState } from "react";
import { ChangeModalType } from "../../Types/ModalTypes";
import { Button, Col, InputNumber, List, Modal, Radio, Row } from "antd";
import ProductInfo from "../Product/ProductInfo";
import Addition from "../Addition/Addition";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/Actions";
import { ExtraItem } from "../../Types/Types";
import { sweets, syrups, sugar } from "../../Services/api";

const AddModal = ({ item }: ChangeModalType) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    item: item,
    visible: false,
    confirmLoading: false,
  });
  const [amount, setAmount] = useState(1);
  const [takeAway, setTakeAway] = useState(true);

  const [extras, setExtras] = useState<any[]>([]);
  const handleCheck = (addition: ExtraItem, checked: boolean) => {
    const additions = [...extras];
    if (checked) {
      additions.push(addition);
    } else {
      const index = additions.indexOf(addition);
      if (index !== -1) {
        additions.splice(index, 1);
      }
    }
    setExtras(additions);
  };

  const showModal = () => {
    setState((prevState: any) => ({ ...prevState, visible: true }));
  };

  const handleOk = () => {
    setState((prevState: any) => ({ ...prevState, confirmLoading: true }));
    dispatch(addToCart(item, amount, takeAway, extras));
    setState((prevState: any) => ({
      ...prevState,
      confirmLoading: false,
      visible: false,
    }));
  };

  const handleCancel = () => {
    setState((prevState: any) => ({
      ...prevState,
      confirmLoading: false,
      visible: false,
    }));
  };

  return (
    <>
      <Button style={{ border: "none", boxShadow: "none" }} onClick={showModal}>
        В корзину
      </Button>
      <Modal
        title={item.name}
        style={{ top: 20 }}
        visible={state.visible}
        confirmLoading={state.confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1100}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Отмена
          </Button>,
          <InputNumber
            min={1}
            defaultValue={1}
            style={{ margin: "0 10px" }}
            onChange={(value) => setAmount(value)}
          />,
          <Button
            key="submit"
            type="primary"
            loading={state.confirmLoading}
            onClick={handleOk}
          >
            В корзину ($
            {Math.round(
              amount *
                (item.price +
                  extras.reduce((a, b) => a + b.price, 0) +
                  Number.EPSILON) *
                100
            ) / 100}
            )
          </Button>,
        ]}
      >
        <ProductInfo item={item} />
        <h2 className="change-part">Дополнительно</h2>
        <List
          className="change-part"
          bordered
          style={{
            padding: "10px 50px 30px",
            width: "95%",
            margin: "0 auto",
          }}
          header={
            <Row gutter={[16, 16]} style={{ width: "100%" }}>
              <Col span={2}></Col>
              <Col span={4}>Тип</Col>
              <Col span={6}>
                <div style={{ padding: "0 50px" }}>Изображение</div>
              </Col>
              <Col span={6}>
                <div style={{ padding: "0 50px" }}>Название</div>
              </Col>
              <Col span={6}>
                <div style={{ textAlign: "center" }}>Стоимость</div>{" "}
              </Col>
            </Row>
          }
          itemLayout="horizontal"
        >
          <Addition type={syrups} handleCheck={handleCheck} name={"Сироп #1"} />
          <Addition type={syrups} handleCheck={handleCheck} name={"Сироп #2"} />
          <Addition
            type={sweets}
            handleCheck={handleCheck}
            name={"Сладкие специи"}
          />
          <Addition type={sugar} handleCheck={handleCheck} name={"Сахар"} />
        </List>
        <div style={{ textAlign: "center" }}>
          <h2 className="change-part">Кофе с собой?</h2>
          <Radio.Group
            defaultValue="a"
            buttonStyle="solid"
            style={{ fontSize: "1.25rem" }}
            onChange={(e) => setTakeAway(e.target.value === "a")}
          >
            <Radio.Button value="a">На вынос</Radio.Button>
            <Radio.Button value="b">В кафе</Radio.Button>
          </Radio.Group>
        </div>
      </Modal>
    </>
  );
};

export default AddModal;
