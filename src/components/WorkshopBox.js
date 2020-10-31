import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const WorkshopBox = ({ workshopInfo }) => {
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
    <div className="workshopBox">
      <Link to={`/details/${workshopInfo.id}`}>
        <div className="boxImgContainer">
          <img className="boxImg" src={workshopInfo.imageUrl} alt="img" />
        </div>
      </Link>
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
          <p className="price">
            {workshopInfo.price} <span>EUR</span>
          </p>
          <p className="boxBtn">Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopBox;
