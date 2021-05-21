import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartState } from "../../Types/Types";

const Navbar = () => {
  const state = useSelector(
    (state: { cartState: CartState }) => state.cartState
  );
  return (
    <div className="list-bar">
      <nav style={{ padding: "0 50px", textAlign: "right" }}>
        <Link
          to="/cart"
          style={{ fontSize: ".85rem" }}
          href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_nav"
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <ShoppingCartOutlined
              style={{
                fontSize: "2.25rem",
              }}
            />
            <div
              style={{
                background: "#ff8000",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                color: "white",
                textAlign: "center",
                padding: "2px",
              }}
            >
              {state.quantity}
            </div>
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
