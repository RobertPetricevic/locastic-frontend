import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import { addToCart } from "../store/actions";

const WorkshopBox = ({ workshopInfo }) => {
  const dispatch = useDispatch();

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
    <div className={`workshopBox scroll-${workshopInfo.id}`}>
      <div className="boxImgContainer">
        <Link to={`/details/${workshopInfo.id}`}>
          <img className="boxImg" src={workshopInfo.imageUrl} alt="img" />
        </Link>
      </div>
      <div className="boxContent">
        <div className="boxContentContainer">
          <div className="boxIconContainer">
            <i
              className={`${categoryIcon(
                workshopInfo.category
              )} boxFloatingIcon`}
            ></i>
          </div>
          <div className="boxInfo">
            <p className="date">
              <i className="far fa-calendar-alt"></i>{" "}
              {moment(workshopInfo.date).format("DD.MM.YYYY")}
            </p>
            <p className="time">
              <i className="far fa-clock"></i>{" "}
              {moment(workshopInfo.date).format("HH:MM")}
            </p>
          </div>
          <Link to={`/details/${workshopInfo.id}`}>
            <p className="boxTitle">{workshopInfo.title}</p>
          </Link>
          <div className="buyInfo">
            <p className="price">
              {workshopInfo.price} <span>EUR</span>
            </p>
            <div
              className="boxBtn"
              onClick={() => {
                dispatch(addToCart(workshopInfo, 1));
              }}
            >
              <div className="BTNicon">
                <ion-icon className="BTNicon" name="cart-outline"></ion-icon>
              </div>
              <p className="BTNtext">Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopBox;
