import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

interface Props {
  hideCart?: boolean;
}

export const Navbar = (props: Props) => {
  const { hideCart } = props;
  return (
    <div className="nav">
      <h1>
        <Link to="/">Redux Shopping Cart</Link>
      </h1>

      {!hideCart && <Cart />}
    </div>
  );
};

Navbar.defaultProps = { hideCart: false };
