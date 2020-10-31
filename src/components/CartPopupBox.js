import React from "react";
import { useDispatch } from "react-redux";

import WorkshopCartBox from "./WorkshopCartBox";
import { closeCart } from "../store/actions";
import { openModal } from "../store/actions";

const CartPopupBox = (props) => {
  const cartItems = [];
  const dispatch = useDispatch();

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
        <p
          className="exitBtn"
          onClick={() => {
            dispatch(closeCart());
          }}
        >
          +
        </p>
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
        <p
          className="popupBtn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          Checkout
        </p>
      </div>
    </div>
  );
};

export default CartPopupBox;
