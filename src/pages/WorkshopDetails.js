import React from "react";
import moment from "moment";

import WorkhopBox from "../components/WorkshopBox";

import WORKSHOPS from "../data/workshops";
import USERS from "../data/users";

const WorkshopDetails = (props) => {
  const workshopInfo = WORKSHOPS[1];

  const userName = USERS.find((user) => user.id === workshopInfo.id).name;

  const threeWorkShops = WORKSHOPS.slice(0, 3);

  const displayedSimilarWorkshops = threeWorkShops.map((workshop) => (
    <WorkhopBox key={workshop.id} workshopInfo={workshop} />
  ));

  return (
    <div className="detailsPage">
      <div className="topContent">
        <div className="goBack">
          <div className="goBackBox">
            <ion-icon name="arrow-back" />
            <p>Back</p>
          </div>
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
                  {moment(workshopInfo.date).format("HH:MM")}
                </p>
              </div>
              <div className="detailsMainInfo">
                <h1 className="detailsTitle">{workshopInfo.title}</h1>
                <h2 className="detailsSpeaker">with {userName}</h2>
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
                  <select className="buySelect" name="num" id="num">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                  <a className="cardBtn">Add to cart</a>
                </div>
                <p className="cardTotal">Subtotal: 4.950,00 EUR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomContent">
        <div className="similarBox">
          <h2 className="similarTitle">Similar Workshops</h2>
          <div className="similarShops">{displayedSimilarWorkshops}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetails;
