import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCartSelect, removeFromCart } from "../store/actions";

const WorkshopCartBox = ({ workshopInfo }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [selectValue, setSelectValue] = useState(1);

  const currentItem = cartItems.find((item) => item.id === workshopInfo.id);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    dispatch(addToCartSelect(workshopInfo, parseInt(e.target.value)));
  };

  useEffect(() => {
    setSelectValue(currentItem.quantity);
  }, [currentItem.quantity]);

  return (
    <div className="workshopCartBox">
      <div className="workshopCartBoxImgContainer">
        <img
          className="workshopCartBoxImg"
          src={workshopInfo.imageUrl}
          alt="img"
        />
      </div>
      <div className="workShopCartContent">
        <div className="workShopCartInfo">
          <p className="workShopCartTitle">{workshopInfo.title}</p>
          <p
            className="workShopCartTrash"
            onClick={() => {
              dispatch(removeFromCart(workshopInfo.id));
            }}
          >
            <ion-icon name="trash-outline"></ion-icon>
          </p>
        </div>
        <div className="workShopCartBuy">
          <select
            name="num"
            id="num"
            value={selectValue}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
          </select>
          <p className="workShopCartPrice">
            {workshopInfo.price} <span>EUR</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCartBox;
