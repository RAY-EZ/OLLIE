import React from 'react';
import rightArrow from '../../medias/right-arrow.svg'
import {Link } from 'react-router-dom';

function Showcase(){
  return (
    <section className="showcase" id="cases">
    <div className="content__wrapper">
      <h3 className="showcase__title">Now we can hear you thinking 'that's<br/>
       nice and all but can you back it all up?'.<br/>
       Sure we can, here are some cases.</h3>
      <div className="showcase__group">
          <h1 className="heading-primary showcase__heading">cases</h1>
          <Link className="showcase__link link" to="#cases">See all of our cases</Link>
      </div>

      <ul className="showcase__list">
       <li className="showcase__list__item">
         <div className="showcase__group">
           <h4 className="showcase__list__item--number">01</h4>
           <h2 className="showcase__list__item--label">Lean</h2>
         </div>
         <Link to="/">
           <img src={rightArrow} alt="" className="showcase__list__item--link" />
         </Link>
       </li>
       <li className="showcase__list__item">
         <div className="showcase__group">
           <h4 className="showcase__list__item--number">02</h4>
           <h2 className="showcase__list__item--label">The Harbour</h2>
         </div>
         <Link  to="/">
           <img src={rightArrow} alt="" className="showcase__list__item--link"/>
         </Link>
       </li>
       <li className="showcase__list__item">
         <div className="showcase__group">
           <h4 className="showcase__list__item--number">03</h4>
           <h2 className="showcase__list__item--label">Baba</h2>
         </div>
         <Link to="/">
           <img src={rightArrow} alt="" className="showcase__list__item--link"/>
         </Link>
       </li>
      </ul>
    </div>

  </section>
  )
}

export default Showcase;