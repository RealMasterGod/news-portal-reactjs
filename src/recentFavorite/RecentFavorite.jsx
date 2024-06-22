import React from "react";
import "./recentFavorite.css";
import { Link } from "react-router-dom";


const RecentFavorite = ({ id, title, image, time, name, category }) => {
  return (

    <div className="recent-fav">
      <div className="top-img">
        <img src={image} alt="" />
      </div>
      <div className="bottom-text">
      <Link to={`/singlePage/category/${category}/${id}`} className='link'>
        <h1>{title}</h1>
        </Link>
        <div className="">
          <h3>{name}</h3>
          <div>
          <i className="fa-regular fa-calendar date"></i>
          <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentFavorite;
