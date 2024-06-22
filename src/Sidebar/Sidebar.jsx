import React from "react"
import './sidebar.css'

const Sidebar = () => {
  return (
    <>
      <section className='social'>
        <div className='socBox'>
          <i className='fab fa-facebook-f'></i>
          <span>12,740 Likes</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-pinterest'></i>
          <span>5,600 Fans</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
          <span>8,700 Followers</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
          <span>22,700 Followers</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-youtube'></i>
          <span>2,700 Subscriber</span>
        </div>
      </section>
      <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section>
    </>
  )
}

export default Sidebar