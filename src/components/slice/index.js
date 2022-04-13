import React from 'react';
import {Link} from 'react-router-dom';

function Slice(){
  return (
    <section className="strategy section" id="strategy" data-text-pos="right">
      <div className="section__content">
          <h3 className="section__title">A little bit of strategy in my life, <br/>little bit of design by my side.</h3>
        
        <h1 className="heading-primary">strategy</h1>
        <div className="section__description">
          <p className="section__description__paragraph">
            We are a desing & strategy studio specialized in settign pu your brand for success. Lorem ipsum dolor, 
            sit amet consectetur adipisicing elit. Veritatis, vel.
          </p>
          <ul className="section__list">
            <li className="section__list__item">brand workshop</li>
            <li className="section__list__item">positioning</li>
            <li className="section__list__item">naming</li>
            <li className="section__list__item">research</li>
          </ul>
          <Link className="section__link" to="#strategy">Learn more about strategy</Link>
        </div>
      </div>
      <div className="section__media">
        <img src="" alt="" className="section__media--large" />
        <img src="" alt="" className="section__media--small" />
      </div>
    </section>
  )
}

export default Slice;