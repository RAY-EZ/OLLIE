import React from 'react';
import {Link} from 'react-router-dom';
import imgPhonebooth from '../../medias/phonebooth.jpg';
import imgSetup from '../../medias/setup.jpg';

function Slice(){
  return (
    <section className="strategy slice text--right" id="strategy" data-text-pos="right">
      <div className="slice__content--right slice__content">
          <p className="slice__title">A little bit of strategy in my life, <br/>little bit of design by my side.</p>
        
        <h1 className="slice__heading">strategy</h1>
        <div className="slice__description">
          <p className="slice__description__paragraph">
            We are a desing & strategy studio specialized in settign pu your brand for success. Lorem ipsum dolor, 
            sit amet consectetur adipisicing elit. Veritatis, vel.
          </p>
          <ul className="slice__list">
            <li className="slice__list__item">brand workshop</li>
            <li className="slice__list__item">positioning</li>
            <li className="slice__list__item">naming</li>
            <li className="slice__list__item">research</li>
          </ul>
          <Link className="slice__link" to="#strategy">Learn more about strategy</Link>
        </div>
      </div>
      <div className="slice__media">
        <img src={imgPhonebooth} alt="" className="slice__media--large" />
        <div className="slice__media--small slice__media--left">
          <img src={imgSetup} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default Slice;