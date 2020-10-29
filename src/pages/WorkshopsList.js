import React from "react";

import WorkhopBox from "../components/WorkshopBox";

import WORKSHOPS from "../data/workshops";

const WorkshopsList = (props) => {
  const displayedWorkshops = WORKSHOPS.map((workshop) => (
    <WorkhopBox key={workshop.id} workshopInfo={workshop} />
  ));

  return (
    <div className="workshopPage">
      <p className="filterBy">Filter by category:</p>
      <div className="infoBox">
        <p className="pageTitle">Workshops</p>
        <p className="displayed">Displayed: 12</p>
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
