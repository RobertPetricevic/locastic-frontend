import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const MobileWorkshopBox = ({ workshopInfo }) => {
  const categoryIcon = (catName) => {
    switch (catName) {
      case "design":
        return "fas fa-paint-brush";
      case "frontend":
        return "fas fa-desktop";
      case "backend":
        return "fas fa-code";
      case "marketing":
        return "fas fa-bolt";
      default:
        break;
    }
  };

  return (
    <div className="mobileWorkshopBox">
      <div className="mobileBoxImgContainer">
        <Link to={`/details/${workshopInfo.id}`}>
          <img className="mobileBoxImg" src={workshopInfo.imageUrl} alt="img" />
        </Link>
      </div>
      <div className="mobileBoxContent">
        <div className="mobileBoxIconContainer">
          <i
            className={`${categoryIcon(workshopInfo.category)} boxFloatingIcon`}
          ></i>
        </div>
        <div className="mobileBoxInfo">
          <p className="mobileDate">
            <i className="far fa-calendar-alt"></i>{" "}
            {moment(workshopInfo.date).format("DD.MM.YYYY")}
          </p>
          <p className="mobileTime">
            <i className="far fa-clock"></i>{" "}
            {moment(workshopInfo.date).format("HH:MM")}
          </p>
        </div>
        <Link to={`/details/${workshopInfo.id}`}>
          <p className="mobileBoxTitle">{workshopInfo.title}</p>
        </Link>
        <div className="mobileBuyInfo">
          <p className="mobilePrice">
            {workshopInfo.price} <span>EUR</span>
          </p>
          <div className="mobileBoxBtn">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileWorkshopBox;
