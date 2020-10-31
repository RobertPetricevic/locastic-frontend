import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import WorkhopBox from "../components/WorkshopBox";
import MobileWorkshopBox from "../components/MobileWorkshopBox";

import WORKSHOPS from "../data/workshops";
import { toggleModal } from "../store/actions";

const WorkshopsList = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleSelectChange(value) {
    history.push(`/${value}`);
  }

  const displayedWorkshops = WORKSHOPS.map((workshop) => (
    <React.Fragment key={workshop.id}>
      <MobileWorkshopBox workshopInfo={workshop} />
      <WorkhopBox workshopInfo={workshop} />
    </React.Fragment>
  ));

  return (
    <div className="workshopPage">
      <p className="filterBy">Filter by category:</p>
      <div className="categoriesSelect">
        <select
          name="catselect"
          id="catSelect"
          onChange={(event) => handleSelectChange(event.target.value)}
        >
          <option value="">All</option>
          <option value="design">Design</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>
      <div className="infoBox">
        <p className="pageTitle">Workshops</p>
        <p className="displayed">
          Displayed: <span>12</span>
        </p>
      </div>
      <div className="categoriesBox">
        <Link to="/">
          <p className="category all">All</p>
        </Link>
        <Link to="/design">
          <p className="category">
            <i className="fas fa-paint-brush categoryIcon"></i>Design
          </p>
        </Link>
        <Link to="/frontend">
          <p className="category">
            <i className="fas fa-desktop categoryIcon"></i>Frontend
          </p>
        </Link>
        <Link to="/backend">
          <p className="category">
            <i className="fas fa-code categoryIcon"></i>Backend
          </p>
        </Link>
        <Link to="/marketing">
          <p className="category">
            <i className="fas fa-bolt categoryIcon"></i>Marketing
          </p>
        </Link>
      </div>
      <div className="mainContent">{displayedWorkshops}</div>
      <p
        className="loadMore"
        onClick={() => {
          dispatch(toggleModal());
        }}
      >
        Load More
      </p>
    </div>
  );
};

export default WorkshopsList;
