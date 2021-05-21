import React from "react";
import { ChangeModalType } from "../../Types/ModalTypes";
import { Button, Col, List, Modal, Row } from "antd";
import ProductInfo from "../Product/ProductInfo";
import { additions } from "../../Services/api";
import Addition from "../Addition/Addition";

const ChangeModal = ({ item }: ChangeModalType) => {
  const [state, setState] = React.useState({
    item: item,
    visible: false,
    confirmLoading: false,
  });

  const showModal = () => {
    setState((prevState: any) => ({ ...prevState, visible: true }));
  };

  const handleOk = () => {
    setState((prevState: any) => ({ ...prevState, confirmLoading: true }));
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
      <Button
        style={{ border: "none", boxShadow: "none" }}
        key="editProduct"
        onClick={showModal}
      >
        Edit
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
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={state.confirmLoading}
            onClick={handleOk}
          >
            To Cart (${item.price})
          </Button>,
        ]}
      >
        <ProductInfo item={item} />
        <h2 className="change-part">Extra Ingredients</h2>
        <List
          className="change-part"
          bordered
          style={{
            padding: "10px 50px 30px",
          }}
          header={
            <Row gutter={[8, 16]} style={{ width: "100%" }}>
              <Col span={6}>Image</Col>
              <Col span={6}>Name</Col>
              <Col span={5}>Price</Col>
              <Col span={5}>Quantity</Col>
              <Col span={2} style={{ whiteSpace: "nowrap" }}>
                <h4>Total Price</h4>
              </Col>
            </Row>
          }
          itemLayout="horizontal"
          dataSource={additions}
          renderItem={(addition) => <Addition addition={addition} />}
        />
      </Modal>
    </>
  );
};

export default ChangeModal;
