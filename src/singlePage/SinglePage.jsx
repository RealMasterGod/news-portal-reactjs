import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RecentFavorite from "../recentFavorite/RecentFavorite";
import "./singlePage.css";
import "../Sidebar/sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../features/news/newsSlice";

const SinglePage = () => {
  const { cat, artId } = useParams();
  const {favorite} = useSelector((store) => store.news);
  const category = useSelector((store) => store.news[cat]);
  const [article, setArticle] = useState(null);
  const dispatch = useDispatch()
  console.log("hello")
  useEffect(() => {
    setArticle(category?.articles?.[parseInt(artId)]);
  }, [cat, artId, category]);
  return (
    <section className="single-page">
      <section className="main-part">
        <div className="image">
          <img src={article?.image} alt="" />
        </div>
        <div className="head">
          <h1>{article?.title}</h1>
          <span>Source: {article?.source?.name}</span>
          <span>{article?.publishedAt}</span>
        </div>
        <div className="other-media">
          <section className="social">
            <div className="socBox">
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </div>
            <div className="socBox">
              <i className="fab fa-pinterest"></i>
              <span>Pinterest</span>
            </div>
            <div className="socBox">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </div>
            <div className="socBox">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </div>
            {!article?.isFav ? (<div className="socBox" onClick={() => dispatch(addFav({cat,artId}))}>
              <i className="fa-regular fa-star"></i>
              <span>Add to Favorite</span>
            </div>): (<div className="socBox" onClick={() => dispatch(removeFav({url:article.url}))}>
              <i className="fa-solid fa-star"></i>
              <span>Remove from Favorite</span>
            </div> 
            )}
          </section>
        </div>
        <div className="detailed-content">
            <p>{article?.content}</p>
            <p>{article?.description}</p>
            <p>{article?.content}</p>
            <p>{article?.description}</p>
            <p>{article?.content}</p>
            <p>{article?.description}</p>
            <p>{article?.content}</p>
            <p>{article?.description}</p>
        </div>
      </section>
      <section className="side-content">
        <Sidebar />
        <h1 className="recently-favorite">Recently Added To Favorites</h1>
        {favorite?.articles?.slice(0, 4)?.map((news, i) => {
          return (
            <RecentFavorite
              key={i}
              id={i}
              time={news.publishedAt}
              image={news.image}
              title={news.title}
              name={news.source.name}
              category="favorite"
            />
          );
        })}
      </section>
    </section>
  );
};

export default SinglePage;
