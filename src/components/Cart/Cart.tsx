import React from "react";
import "./Cart.scss";
import shopper from "../../images/shopper.png";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <Link to="/checkout" className="shopping-cart">
      <h2>Cart</h2>
      <img src={shopper} alt="shopping-cart" width="40" />
      <p>
        <span>{cart.totalQuantity}</span>
      </p>
    </Link>
  );
};

export default Cart;
