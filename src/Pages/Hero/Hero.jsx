import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
      <section className='hero'>
          <div className="hero-left">
              <h1 className='hero-title'>
                  Skills speak louder<br/>
                  than words</h1>
              <p className="hero-des">We help companies develop the strongest tech teams around.<br/>
                  We help candidates sharpen their tech skills and pursue job opportunities.</p>
          </div>
          <nav >
              <ul className='navbar-list'>
                  <li><button className='btn-common btn-sign_up'>Sign up</button></li>
                  <li><button className='btn-common btn-demo btn-hero'>Request Demo</button></li>
              </ul>
          </nav>
          <p className="hero-des extra">Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
      </section>
  )
}

export default Hero