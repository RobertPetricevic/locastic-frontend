import React from "react";
import { useDispatch, useSelector } from "react-redux";

import WorkshopCartBox from "./WorkshopCartBox";
import { closeCart, openModal } from "../store/actions";

const CartPopupBox = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const dispatch = useDispatch();

  const cartText = (num) => {
    if (num === 0) return "Cart is Empty";
    else if (num === 1) return `${num} Workshop`;
    else return `${num} Workshops`;
  };

  const displayedCartWorkshops = cartItems.map((workshop) => (
    <WorkshopCartBox key={workshop.id} workshopInfo={workshop} />
  ));

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
      <div className="popupContent">{displayedCartWorkshops}</div>
      <div className="popupBuyBox">
        <p className="popupTotal">SUBTOTAL</p>
        <p className="popupPrice">
          {cartTotal} <span>EUR</span>
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
