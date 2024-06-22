import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from '../Cart'
import './home.css'
import Category from '../category'
import Sidebar from '../Sidebar/Sidebar'
import RecentFavorite from '../recentFavorite/RecentFavorite'


const Home = () => {
    const newsArticles = useSelector((store) => store.news)
    console.log(newsArticles)
    const {favorite,general,keywordNews,...other} = newsArticles
    console.log(other)
    return (
        <>
            <section className='hero'>
                <div className='hero-container'>
                    {newsArticles?.general?.articles?.slice(0,4)?.map((news,i) => {
                        // console.log(news)
                        return <Cart key={i} id={i} time={news.publishedAt} image={news.image} title={news.title} name={news.source.name} category='general' />
                    })}
                </div>
            </section>
            <main>
                <div className="home-container">
                    <section className="main-content">
                        {Object.entries(other)?.map((cat) => {
                            return <Category key={cat[0]} category={cat[0]} content={cat[1]}/>
                        })}
                    </section>
                    <section className="side-content">
                        <Sidebar />
                        <h1 className='recently-favorite'>Recently Added To Favorites</h1>
                        {newsArticles?.favorite?.articles?.slice(0,4)?.map((news,i) => {
                            return <RecentFavorite key={i} id={i} time={news.publishedAt} image={news.image} title={news.title} name={news.source.name} category='favorite'/>
                        })}
                    </section>
                </div>
            </main>
        </>
    )
}

export default Home
