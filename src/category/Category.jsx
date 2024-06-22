import React from "react";
import EachCat from "../EachCat";
import './category.css'

const Category = ({ category, content }) => {
  return (
    <>
      <div className="title">
      <h1>{category}</h1>
      </div>
      <div className="grid-container">
        {content?.articles?.slice(0,4)?.map((news,i) => {
        return (
          <EachCat key={i} id={i} time={news.publishedAt} image={news.image} title={news.title} name={news.source.name} category={category} />
        );
      })}
      </div>
    </>
  );
};

export default Category;
