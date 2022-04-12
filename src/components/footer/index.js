import React from 'react';


export default function Footer(){
  return (
    <footer className="footer">
      <div className="contact">
        <h2 className="contact__email heading--light">contact@ollie.com</h2>
        <h2 className="contact__number heading--light">(+91)9157XXXXX7</h2>
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
          <li className="footer__list__item highlighted">we can help you</li>
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
        <p>All rights reserved &cpy; Ollie 2022</p>
        <p>Tuesday 15:16</p>
      </div>
    </footer>
  )
}