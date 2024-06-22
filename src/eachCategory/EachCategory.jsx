import { ShowAll } from './ShowAll';
import React, { useState } from "react";
import "./eachCategory.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RecentFavorite from "../recentFavorite/RecentFavorite";

const EachCategory = () => {
  const { catMain } = useParams();
//   console.log(cat)
  const { articles } = useSelector((store) => store.news[catMain]);
  const {favorite} = useSelector((store) => store.news);
  // console.log(favorite,articles)
  const [currentPage,setCurrentPage] = useState(1)
  const recordsPerPage = 4
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const totalPages = Math.ceil(articles?.length/recordsPerPage) || 0
//   console.log(totalPages)
  const numbers = [...Array(totalPages+1).keys()].slice(1)
//   console.log(catMain, articles, newsArticles);

  const prePage = () => {
    if(currentPage !== indexOfFirstRecord+1) {
        // console.log(currentPage)
        setCurrentPage(currentPage-1)
    }
  }
  const nextPage = () => {
    if(currentPage !== recordsPerPage-1) {
        // console.log(currentPage)
        setCurrentPage(currentPage+1)
    }
    
  }
  const changePage = (id) => {
    setCurrentPage(id)
  }
  
  return (
    <section className="each-category">
      <section className="main-portion">
      {articles?.slice(indexOfFirstRecord,indexOfLastRecord).map((news,i) => {
        return <ShowAll key={i} id={i+indexOfFirstRecord} time={news.publishedAt} image={news.image} title={news.title} name={news.source.name} category={catMain} />
      })}
      <div className="page">
        <nav>
            <ul className="pagination">
                <li className='page-item'>
                    <p className='page-link' onClick={prePage}>&laquo;</p>
                </li>
                {numbers.map((n,i) => {
                        return (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <p className='page-link' onClick={() => changePage(n)}>{n}</p>
                            </li>
                        )
                })}
                <li className='page-item'>
                    <p className='page-link' onClick={nextPage}>&raquo;</p>
                </li>
            </ul>
        </nav>
      </div>
      </section>
      <section className="side-portion">
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
              category={catMain}
            />
          );
        })}
      </section>
    </section>
  );
};

export default EachCategory;
