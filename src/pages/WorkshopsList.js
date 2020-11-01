import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import WorkshopBox from "../components/WorkshopBox";

const WorkshopsList = (props) => {
  const history = useHistory();
  const { cat } = useParams();

  const [data, setData] = useState([]);
  console.log("data:", data);

  const handleSelectChange = (value) => {
    history.push(`/${value}`);
  };

  const fetchData = useCallback(async () => {
    const response = await fetch("http://localhost:3000/workshops");
    const resData = await response.json();
    setData(resData);
  }, [setData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const displayedWorkshops = data.map((workshop) => (
    <WorkshopBox key={workshop.id} workshopInfo={workshop} />
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
      <p className="loadMore">Load More</p>
    </div>
  );
};

export default WorkshopsList;
