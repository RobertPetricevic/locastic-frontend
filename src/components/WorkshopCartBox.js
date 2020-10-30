import React from "react";

const WorkshopCartBox = (props) => {
  return (
    <div className="workshopCartBox">
      <div className="workshopCartBoxImgContainer">
        <img
          className="workshopCartBoxImg"
          src="https://secure.meetupstatic.com/photos/event/2/d/8/e/highres_482651662.jpeg"
          alt="img"
        />
      </div>
      <div className="workShopCartContent">
        <div className="workShopCartInfo">
          <p className="workShopCartTitle">Interaction Dsng Workshop</p>
          <p className="workShopCartTrash">
            <ion-icon name="trash-outline"></ion-icon>
          </p>
        </div>
        <div className="workShopCartBuy">
          <select name="num" id="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <p className="workShopCartPrice">
            450,00 <span>EUR</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCartBox;
