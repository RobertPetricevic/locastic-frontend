import React from "react";

import WorkshopCartBox from "./WorkshopCartBox";
import CartIconContainer from "./CartIconContainer";

const CartPopupBox = (props) => {
  const cartItems = [1, 2, 3];

  const cartText = (num) => {
    if (num === 0) return "Cart is Empty";
    else if (num === 1) return `${num} Workshop`;
    else return `${num} Workshops`;
  };

  return (
    <div className="cartPopupBox">
      <div className="popupHeader">
        <CartIconContainer />
        <p className="exitBtn">+</p>
      </div>
      <div className="popupContent">
        <WorkshopCartBox />
        <WorkshopCartBox />
        <WorkshopCartBox />
      </div>
      <div className="popupBuyBox">
        <p className="popupTotal">SUBTOTAL</p>
        <p className="popupPrice">
          400,00 <span>EUR</span>
        </p>
        <p className="popupBtn">Checkout</p>
      </div>
    </div>
  );
};

export default CartPopupBox;
