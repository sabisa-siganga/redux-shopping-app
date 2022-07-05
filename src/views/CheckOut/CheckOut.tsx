import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./CheckOut.scss";

const CheckOut = () => {
  return (
    <div>
      <Navbar hideCart />
      <div className="shopping-fee">
        <h4>Shipping fee</h4>
        <p>Buy $59 more to enjoy FREE STANDARD SHIPPING</p>
      </div>
      <div className="item-summary">
        <h1>Item Summary</h1>
        <ul>
          <li>Item</li>
          <li>Price</li>
          <li>Qty</li>
          <li>Total</li>
        </ul>
      </div>
    </div>
  );
};

export default CheckOut;
