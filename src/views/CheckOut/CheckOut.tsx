import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./CheckOut.scss";

const CheckOut = () => {
  return (
    <div>
      <Navbar hideCart />

      <div className="first-part">
        {/* left */}
        <div>
          <div className="shopping-fee">
            <div className="border">
              <h4>Shipping fee</h4>
              <p>Buy R59 more to enjoy FREE STANDARD SHIPPING</p>
            </div>
          </div>
          <div className="item-summary">
            <h1>Item Summary</h1>
            <table className="table">
              <tr>
                <th>
                  <input className="input" type="checkbox" />
                  All
                </th>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </table>
          </div>
        </div>

        {/* right */}

        <div className="order">
          <span>Order Summary</span>
          <h4>Subtotal</h4>
          <p>R249</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
