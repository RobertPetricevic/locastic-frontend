import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ClipLoader } from "react-spinners";

import WorkshopBox from "../components/WorkshopBox";

import { fetchData } from "../store/actions";

const WorkshopsList = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { cat } = useParams();

  const data = useSelector((state) => state.storedData);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const [error, setError] = useState();

  const handleSelectChange = (value) => {
    history.push(`/${value}`);
  };

  const getData = useCallback(async () => {
    setError(null);
    if (page !== 1) {
      setIsReadMore(true);
    }
    setIsLoading(true);
    try {
      await dispatch(fetchData(cat, page));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
    setIsReadMore(false);
  }, [dispatch, cat, page]);

  useEffect(() => {
    if (location.state) {
      const item = document.querySelector(".scroll-" + location.state);
      if (item) {
        item.scrollIntoView();
        window.scrollBy(0, -200);
      }
      return;
    }
    getData();
  }, [getData, location.state]);

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
          <p
            className={`category all ${cat === undefined && "currentCategory"}`}
          >
            <span>All</span>
          </p>
        </Link>
        <Link
          to="/design"
          onClick={() => {
            setPage(1);
          }}
        >
          <p className={`category ${cat === "design" && "currentCategory"}`}>
            <i className="fas fa-paint-brush categoryIcon"></i>
            <span>Design</span>
          </p>
        </Link>
        <Link
          to="/frontend"
          onClick={() => {
            setPage(1);
          }}
        >
          <p className={`category ${cat === "frontend" && "currentCategory"}`}>
            <i className="fas fa-desktop categoryIcon"></i>
            <span>Frontend</span>
          </p>
        </Link>
        <Link
          to="/backend"
          onClick={() => {
            setPage(1);
          }}
        >
          <p className={`category ${cat === "backend" && "currentCategory"}`}>
            <i className="fas fa-code categoryIcon"></i>
            <span>Backend</span>
          </p>
        </Link>
        <Link
          to="/marketing"
          onClick={() => {
            setPage(1);
          }}
        >
          <p className={`category ${cat === "marketing" && "currentCategory"}`}>
            <i className="fas fa-bolt categoryIcon"></i>
            <span>Marketing</span>
          </p>
        </Link>
      </div>
      <div className="mainContent">
        {error ? (
          <div className="errorContainer">
            <p className="errorTxt">{error}</p>
            <div
              className="tryAgain"
              onClick={() => {
                getData();
              }}
            >
              {isLoading ? <ClipLoader size={10} /> : "Try Again"}
            </div>
          </div>
        ) : isLoading && !isReadMore ? (
          <div className="spinnerContainer">
            <ClipLoader size={150} />
          </div>
        ) : (
          displayedWorkshops
        )}
      </div>
      <div
        className={`loadMore ${isReadMore && "loadSpinner"}`}
        onClick={() => {
          history.replace({ pathname: `/${cat ? cat : ""}`, state: undefined });
          setPage((prevNum) => prevNum + 1);
        }}
      >
        {isReadMore ? (
          <div className="spinnerContainer">
            <ClipLoader />
          </div>
        ) : (
          "Load More"
        )}
      </div>
    </div>
  );
};

export default WorkshopsList;
