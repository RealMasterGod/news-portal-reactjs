import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'

const Cart = ({id,title,image,time,name,category}) => {
    return (
        <div className='box'>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="text">
                <span className='category'>{category}</span>
                <Link to={`/singlePage/category/${category}/${id}`} className='link'>
                <h1 className='titleBg'>{title}</h1>
                </Link>
                <div className="source">
                    <span>Source: {name}</span>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart
