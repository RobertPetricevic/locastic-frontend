import React from "react";

import WorkshopCartBox from "./WorkshopCartBox";

const CartPopupBox = (props) => {
  const cartItems = [];

  const cartText = (num) => {
    if (num === 0) return "Cart is Empty";
    else if (num === 1) return `${num} Workshop`;
    else return `${num} Workshops`;
  };

  return (
    <div className="cartPopupBox">
      <div className="popupHeader">
        <div className="cartContainer">
          <div className="popupIconContainer">
            <ion-icon
              name={`cart${cartItems.length === 0 ? "-outline" : ""}`}
            ></ion-icon>
          </div>
          <p className="cartPopupText">{cartText(cartItems.length)}</p>
          {cartItems.length !== 0 && <div className="blueDot"></div>}
        </div>
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
