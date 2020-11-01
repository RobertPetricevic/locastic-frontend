import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory, useParams, useLocation } from "react-router-dom";

import { BeatLoader } from "react-spinners";

import WorkshopBox from "../components/WorkshopBox";

const WorkshopsList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { cat } = useParams();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectChange = (value) => {
    history.push(`/${value}`);
  };

  const fetchData = useCallback(async () => {
    const url = `http://localhost:3000/workshops?${
      cat ? `category=${cat}` : ""
    }&_sort=date&_order=dsc&_page=${page}&_limit=9`;

    setIsLoading(true);
    const response = await fetch(url);
    const resData = await response.json();
    if (page !== 1) {
      setData((prevData) => [...prevData, ...resData]);
    } else {
      setData(resData);
    }
    setIsLoading(false);
  }, [setData, page, cat]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const item = document.querySelector(".scroll-" + location.state);
    if (item) {
      item.scrollIntoView();
      window.scrollBy(0, -200);
    }
  });

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
          onChange={(event) => {
            handleSelectChange(event.target.value);
            setPage(1);
          }}
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
          Displayed: <span>{data.length}</span>
        </p>
      </div>
      <div className="categoriesBox">
        <Link
          to="/"
          onClick={() => {
            setPage(1);
          }}
        >
          <p className="category all">All</p>
        </Link>
        <Link
          to="/design"
          onClick={() => {
            setPage(1);
          }}
        >
          <p className="category">
            <i className="fas fa-paint-brush categoryIcon"></i>Design
          </p>
        </Link>
        <Link
          to="/frontend"
          onClick={() => {
            setPage(1);
          }}
        >
          <p className="category">
            <i className="fas fa-desktop categoryIcon"></i>Frontend
          </p>
        </Link>
        <Link
          to="/backend"
          onClick={() => {
            setPage(1);
          }}
        >
          <p className="category">
            <i className="fas fa-code categoryIcon"></i>Backend
          </p>
        </Link>
        <Link
          to="/marketing"
          onClick={() => {
            setPage(1);
          }}
        >
          <p className="category">
            <i className="fas fa-bolt categoryIcon"></i>Marketing
          </p>
        </Link>
      </div>
      <div className="mainContent">
        {isLoading ? (
          <div className="spinnerContainer">
            <BeatLoader />
          </div>
        ) : (
          displayedWorkshops
        )}
      </div>
      <p
        className="loadMore"
        onClick={() => {
          setPage((prevNum) => prevNum + 1);
        }}
      >
        Load More
      </p>
    </div>
  );
};

export default WorkshopsList;
