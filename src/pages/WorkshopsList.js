import React from "react";

import WorkhopBox from "../components/WorkshopBox";
import MobileWorkshopBox from "../components/MobileWorkshopBox";

import WORKSHOPS from "../data/workshops";

const WorkshopsList = (props) => {
  const displayedWorkshops = WORKSHOPS.map((workshop) => (
    <>
      <MobileWorkshopBox key={`m${workshop.id}`} workshopInfo={workshop} />
      <WorkhopBox key={workshop.id} workshopInfo={workshop} />
    </>
  ));

  return (
    <div className="workshopPage">
      <p className="filterBy">Filter by category:</p>
      <div className="categoriesSelect">
        <select name="catselect" id="catSelect">
          <option value="All">All</option>
          <option value="Design">Design</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>
      <div className="infoBox">
        <p className="pageTitle">Workshops</p>
        <p className="displayed">
          Displayed: <span>12</span>
        </p>
      </div>
      <div className="categoriesBox">
        <p className="category all">All</p>
        <p className="category">
          <i className="fas fa-paint-brush categoryIcon"></i>Design
        </p>
        <p className="category">
          <i className="fas fa-desktop categoryIcon"></i>Frontend
        </p>
        <p className="category">
          <i className="fas fa-code categoryIcon"></i>Backend
        </p>
        <p className="category">
          <i className="fas fa-bolt categoryIcon"></i>Marketing
        </p>
      </div>
      <div className="mainContent">{displayedWorkshops}</div>
      <p className="loadMore">Load More</p>
    </div>
  );
};

export default WorkshopsList;
