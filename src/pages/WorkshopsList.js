import React from "react";

const WorkshopsList = (props) => {
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
          <i class="fas fa-paint-brush categoryIcon"></i>Design
        </p>
        <p className="category">
          <i class="fas fa-desktop categoryIcon"></i>Frontend
        </p>
        <p className="category">
          <i class="fas fa-code categoryIcon"></i>Backend
        </p>
        <p className="category">
          <i class="fas fa-bolt categoryIcon"></i>Marketing
        </p>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default WorkshopsList;
