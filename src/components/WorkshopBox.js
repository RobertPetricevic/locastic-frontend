import React from "react";

const WorkshopBox = (props) => {
  return (
    <div className="workshopBox">
      <div className="boxImgContainer">
        <img
          className="boxImg"
          src="https://pbs.twimg.com/media/EREoip3XsAEPDRp.jpg"
          alt="img"
        />
      </div>
      <div className="boxContent">
        <div className="boxContentContainer">
          <div className="boxIconContainer">
            <i className="fas fa-paint-brush boxFloatingIcon"></i>
          </div>
          <div className="boxInfo">
            <p className="date">
              <i className="far fa-calendar-alt"></i> 27.6.2020.
            </p>
            <p className="time">
              <i className="far fa-clock"></i> 09:00h
            </p>
          </div>
          <p className="boxTitle">Interaction Design Workshop</p>
          <p className="price">
            495,99 <span>EUR</span>
          </p>
          <a className="boxBtn">Add to cart</a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopBox;
