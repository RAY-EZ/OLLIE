import React from 'react';
import {Link} from 'react-router-dom';
import studioImg  from '../../medias/studio.jpg';

function Attention(){
  return (
    <section className="attention">
    {/* <div className="attention__content"> */}
      <div className="attention__media">
        <img src={studioImg} alt="interaction" className="image--huge attention--image" />
      </div>
      <div className="attention__text">
        <div className="content__wrapper">
          <p className="attention__paragraph">
            We know what you're thinking, 'i want to grow my company, but i'm not sure how..'
            right? Have not doubts, Ollie is here to help you find clarity in the chaos of your business.
          </p>
          <p className="attention__paragraph">
            By using the power of strategy and design we define your business and set you up for future success in your market.
            Here will go some more info about how we can help our target audience and others.
          </p>
        </div>
      </div>
    {/* </div> */}
    </section>
  )
}

export default Attention;
