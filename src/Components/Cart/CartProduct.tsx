import { Button, Col, InputNumber, Popover, Row } from "antd";
import React, { useEffect } from "react";
import { Image } from "antd";
import { LineProps } from "../../Types/Types";
import { useDispatch } from "react-redux";
import { changeAmount, deleteFromCart } from "../../Store/Actions";

const colStyle = {
  verticalAlign: "center",
  lineHeight: "5",
};

const CartProduct = ({ line }: LineProps) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState(line.count);

  const handleChange = (value: any) => {
    setAmount(value);
    dispatch(changeAmount(line, amount));
  };

  useEffect(() => {
    dispatch(changeAmount(line, amount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  return (
    <>
      <Row gutter={[8, 16]}>
        <Col span={2} style={colStyle}>
          <Image
            src={line.item.imgSrc}
            height={75}
            width={"100%"}
            style={{ objectFit: "cover" }}
          />
        </Col>
        <Col span={5} style={colStyle}>
          <h4>{line.item.name}</h4>
        </Col>
        <Col span={4} style={colStyle}>
          <p>${line.item.price}</p>
        </Col>
        <Col span={4} style={colStyle}>
          <InputNumber
            min={1}
            defaultValue={line.count}
            onChange={handleChange}
          />
        </Col>
        <Col span={4} style={colStyle}>
          {line.takeAway ? "Да" : "Нет"}
        </Col>
        <Col span={3} style={colStyle}>
          <Popover
            content={
              <div>
                <p>
                  <b>{line.item.name}</b>: {line.item.price}$
                  {line.count > 1 ? " x " + line.count : ""}
                </p>
                {line.additions.map((addition) => (
                  <p style={{ fontSize: "0.95rem" }}>
                    <b>{addition.name}</b>:
                    {addition.price > 0 ? "$" + addition.price : ""}
                    {line.count > 1 ? " x " + line.count : ""}
                  </p>
                ))}
              </div>
            }
          >
            <h4 className="popover">
              $
              {Math.round(
                (line.totalPrice * line.count + Number.EPSILON) * 100
              ) / 100}
            </h4>
          </Popover>
        </Col>
        <Col span={2} style={colStyle}>
          <Button type="link" onClick={() => dispatch(deleteFromCart(line))}>
            Удалить
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CartProduct;
