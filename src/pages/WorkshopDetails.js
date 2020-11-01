import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

import WorkshopBox from "../components/WorkshopBox";
import { addToCart } from "../store/actions";

import WORKSHOPS from "../data/workshops";
import { BeatLoader } from "react-spinners";

const WorkshopDetails = (props) => {
  const [currentWorkshop, setCurrentWorkshop] = useState([]);
  console.log("currentWorkshop:", currentWorkshop);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectValue, setSelectValue] = useState(1);
  const [similar, setSimilar] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();

  const url = `http://localhost:3000/workshops/${id}`;

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleAddToCart = (e) => {
    dispatch(addToCart(currentWorkshop, parseInt(selectValue)));
  };

  const displayedSimilarWorkshops = similar.map((workshop) => (
    <WorkshopBox key={workshop.id} workshopInfo={workshop} />
  ));

  const fetchWorkshop = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const resData = await response.json();
    const responseUser = await fetch(
      `http://localhost:3000/users/${resData.userId}`
    );
    const resDataUser = await responseUser.json();
    const responseSimilar = await fetch(
      `http://localhost:3000/workshops?category=${resData.category}&id_ne=${id}&_start=0&_end=3`
    );
    const resDataSimilar = await responseSimilar.json();
    setCurrentWorkshop(resData);
    setIsLoading(false);
    setUserName(resDataUser.name);
    setSimilar(resDataSimilar);
  }, [url]);

  useEffect(() => {
    fetchWorkshop();
  }, [fetchWorkshop]);

  return (
    <div className="detailsPage">
      <div className="topContent">
        <div className="goBack">
          <Link to={{ pathname: `/`, state: currentWorkshop.id }}>
            <div className="goBackBox">
              <ion-icon name="arrow-back" />
              <p>Back</p>
            </div>
          </Link>
        </div>

        {isLoading ? (
          <div className="spinnerContainer">
            <BeatLoader />
          </div>
        ) : (
          <div className="detailsBox">
            <div className="detailsImgContainer">
              <img
                src={currentWorkshop.imageUrl}
                className="detailsImg"
                alt="img"
              />
            </div>
            <div className="detailsContent">
              <div className="detailsInfo">
                <div className="detailsSideInfo">
                  <div className="detailsCategoryIconContainer">
                    <i className="fas fa-paint-brush detailsCategoryIcon"></i>
                  </div>
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>{" "}
                    {moment(currentWorkshop.date).format("DD.MM.YYYY")}
                  </p>
                  <p className="time">
                    <i className="far fa-clock"></i>{" "}
                    {moment(currentWorkshop.date).format("HH:MM")} h
                  </p>
                </div>
                <div className="detailsMainInfo">
                  <h1 className="detailsTitle">{currentWorkshop.title}</h1>
                  <h2 className="detailsSpeaker">
                    <span>WITH </span>
                    {userName}
                  </h2>
                  <p className="detailsDescription">{currentWorkshop.desc}</p>
                </div>
              </div>
              <div className="detailsBuy">
                <div className="buyCard">
                  <p className="cardText">Buy Your Ticket</p>
                  <p className="cardPrice">
                    {currentWorkshop.price} <span>EUR</span>
                  </p>
                  <div className="detailsBuyInfo">
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
                    <p className="cardBtn" onClick={handleAddToCart}>
                      Add to cart
                    </p>
                    <p className="cardTotal">Subtotal: 4.950,00 EUR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {similar.length !== 0 && (
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
