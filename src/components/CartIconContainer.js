import React from "react";

const CartIconContainer = (props) => {
  const cartItems = [1, 2, 3, 4];

  const cartText = (num) => {
    if (num === 0) return "Cart is Empty";
    else if (num === 1)
      return `${num} Workshop ${props.header ? "in Cart" : ""}`;
    else return `${num} Workshops ${props.header ? "in Cart" : ""}`;
  };

  return (
    <div className="CartContainer">
      <div className="IconContainer">
        <ion-icon
          name={`cart${cartItems.length === 0 ? "-outline" : ""}`}
        ></ion-icon>
      </div>
      <p className="CartText">{cartText(cartItems.length)}</p>
      {cartItems.length !== 0 && <div className="blueDot"></div>}
    </div>
  );
};

export default CartIconContainer;
