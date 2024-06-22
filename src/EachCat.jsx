import React from "react";
import './eachCat.css'
import { Link } from "react-router-dom";

const EachCat = ({id,title,image,time,name,category}) => {
  return (
      <div className="card">
        <div className="photo-part">
          <div className="img-part">
            <img src={image} alt="" />
          </div>
          <div className="category-name">
            <h4>{category}</h4>
          </div>
        </div>
        <div className="text-part">
        <Link to={`/singlePage/category/${category}/${id}`} className='link'>
        <h1>{title}</h1>
        </Link>
          <div>
          <h3>{name}</h3>
          <i class="fa-regular fa-calendar"></i>
          <span>{time}</span>
          </div>
        </div>
      </div>
  );
};

export default EachCat;
