import React from "react";

import { ReactComponent as Logo } from "../assets/tinel-logo.svg";

import CartPopupBox from "./CartPopupBox";

const Header = (props) => {
  const cartItems = [];

  const cartText = (num) => {
    if (num === 0) return "Cart is Empty";
    else if (num === 1)
      return `${num} Workshop ${props.header ? "in Cart" : ""}`;
    else return `${num} Workshops ${props.header ? "in Cart" : ""}`;
  };

  return (
    <div className="headerContainer">
      <Logo className="logo" width={50} height={40} />
      <CartPopupBox />
      <div className="cartContainer">
        <div className="iconContainer">
          <ion-icon
            name={`cart${cartItems.length === 0 ? "-outline" : ""}`}
          ></ion-icon>
        </div>
        <p className="cartText">{cartText(cartItems.length)}</p>
        {cartItems.length !== 0 && <div className="blueDot"></div>}
      </div>
    </div>
  );
};

export default Header;
