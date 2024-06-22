import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import '../assets/fontawesome-free-6.5.2-web/css/all.min.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [navSlider,setNavSlider] = useState(false)
    const [query,setQuery] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/query/${query}`)
    }
    return (
        <>
        <div className="navbar-container">
            <div className="header">
                <div className='header-text'>
                    <h1>Daily</h1>
                    {/* <h1>News</h1> */}
                </div>
                <div className="logo-img">
                    <img className='logo' src={logo} alt="" />
                </div>
            </div>
            <nav className='navbar'>
                <button className='btn-logo' onClick={() => setNavSlider(!navSlider)}>
                    <i className="fa-solid fa-play btn-logo-img"></i>
                </button>
                <ul className={navSlider ? 'nav-slider' :'nav-list'}>
                    <li>
                        <Link className='.link' to={`/`}>home</Link>
                    </li>
                    <li>
                        <Link className='.link' to={`/general`}>general</Link>
                    </li>
                    <li>
                        <Link className='.link' to={`/world`}>world</Link>
                    </li>
                    <li>
                        <Link className='.link' to={`/nation`}>nation</Link>
                    </li>
                    <li>
                        <Link className='.link' to={`/technology`}>technology</Link>
                    </li>
                    <li>
                        <Link className='.link' to={`/entertainment`}>entertainment</Link>
                    </li>
                    <li>
                        <Link className='.link' to={`/sports`}>sports</Link>
                    </li>
                    <li>
                        <Link className='.link' to={`/health`}>health</Link>
                    </li>
                    <li>
                        <Link className='.link' to={`/favorite`}>favorite</Link>
                    </li>
                </ul>
                <div className='search'>
                    <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" id="query" placeholder='Enter keywords' required value={query} 
                    onChange={(e) => setQuery(e.target.value)} />
                    <button className='keyword-search' >Search</button>
                    </form>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar
