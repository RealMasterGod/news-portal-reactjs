import React from "react";
import { Link } from "react-router-dom";
export function ShowAll({id, image, title, name, time,category }) {
  return (
    <section className="newsArticles">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="head">
      <Link to={`/singlePage/category/${category}/${id}`} className='link'>
        <h1>{title}</h1>
        </Link>
        <div>
        <span>Source: {name}</span>
        <span>{time}</span>
        </div>
      </div>
    </section>
  );
}
