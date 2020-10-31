import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

import WorkhopBox from "../components/WorkshopBox";

import WORKSHOPS from "../data/workshops";
import USERS from "../data/users";
import MobileWorkshopBox from "../components/MobileWorkshopBox";
import { addToCart } from "../store/actions";

const WorkshopDetails = (props) => {
  const [selectValue, setSelectValue] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const shopId = parseInt(id);
  const workshopInfo = WORKSHOPS.find((workshop) => workshop.id === shopId);
  const userName = USERS.find((user) => user.id === shopId).name;

  const threeWorkShops = WORKSHOPS.slice(0, 3);
  // const threeWorkShops = [];

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleAddToCart = (e) => {
    dispatch(addToCart(workshopInfo, parseInt(selectValue)));
  };

  const displayedSimilarWorkshops = threeWorkShops.map((workshop) => (
    <React.Fragment key={workshop.id}>
      <MobileWorkshopBox workshopInfo={workshop} />
      <WorkhopBox workshopInfo={workshop} />
    </React.Fragment>
  ));

  return (
    <div className="detailsPage">
      <div className="topContent">
        <div className="goBack">
          <Link to="/">
            <div className="goBackBox">
              <ion-icon name="arrow-back" />
              <p>Back</p>
            </div>
          </Link>
        </div>
        <div className="detailsBox">
          <div className="detailsImgContainer">
            <img src={workshopInfo.imageUrl} className="detailsImg" alt="img" />
          </div>
          <div className="detailsContent">
            <div className="detailsInfo">
              <div className="detailsSideInfo">
                <div className="detailsCategoryIconContainer">
                  <i className="fas fa-paint-brush detailsCategoryIcon"></i>
                </div>
                <p className="date">
                  <i className="far fa-calendar-alt"></i>{" "}
                  {moment(workshopInfo.date).format("DD.MM.YYYY")}
                </p>
                <p className="time">
                  <i className="far fa-clock"></i>{" "}
                  {moment(workshopInfo.date).format("HH:MM")} h
                </p>
              </div>
              <div className="detailsMainInfo">
                <h1 className="detailsTitle">{workshopInfo.title}</h1>
                <h2 className="detailsSpeaker">
                  <span>WITH </span>
                  {userName}
                </h2>
                <p className="detailsDescription">{workshopInfo.desc}</p>
              </div>
            </div>
            <div className="detailsBuy">
              <div className="buyCard">
                <p className="cardText">Buy Your Ticket</p>
                <p className="cardPrice">
                  {workshopInfo.price} <span>EUR</span>
                </p>
                <div className="buyInfo">
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
                  <a className="cardBtn" onClick={handleAddToCart}>
                    Add to cart
                  </a>
                  <p className="cardTotal">Subtotal: 4.950,00 EUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {threeWorkShops.length !== 0 && (
        <div className="bottomContent">
          <div className="similarBox">
            <h2 className="similarTitle">Similar Workshops</h2>
            <div className="similarShops">{displayedSimilarWorkshops}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopDetails;
