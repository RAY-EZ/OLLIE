import React, {useState, useEffect} from 'react';
import rightArrow from '../../medias/right-arrow.svg';
import {Link } from 'react-router-dom';
import Timer from './timer'

function Footer(){
  console.log('renderd')
  // console.log(time)
  return (
    <footer className="footer">
      <div className="content__wrapper">
        <div className="footer__contact contact">
          <div className="contact__group">
            <div>
              <p className="contact__email heading--light">contact@olliebranding.com</p>
            </div>
            <div>
             <p className="contact__number heading--light">(+91)9157XXXXX7</p>
            </div>
          </div>
          <Link to="#top">
            <img src={rightArrow} className="contact__link" alt="" />
          </Link>
        </div>
        <div className="footer__main-content">
          <ul className="footer__list">
            <li className="footer__list__item">Home</li>
            <li className="footer__list__item">Services</li>
            <li className="footer__list__item">Cases</li>
            <li className="footer__list__item">About</li>
            <li className="footer__list__item">Why us?</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list__item">Agency owner</li>
            <li className="footer__list__item">
              <Link to="/" className="footer__link">we can help you</Link> 
              </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list__item">Wiedauwakai 23a</li>
            <li className="footer__list__item">9000 Gent</li>
            <li className="footer__list__item">Belgium</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list__item">Privacy policy</li>
            <li className="footer__list__item">Terms of use</li>
          </ul>
        </div>
        <div className="footer__lower-content">
          <p>All rights reserved &copy; Ollie 2022</p>
          <Timer/>
        </div>

      </div>
    </footer>
  )
}
export default Footer;