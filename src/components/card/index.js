import React from 'react';
import {Link} from 'react-router-dom';

function Card(){
  return (
    <section className="card">
      <div className="content__wrapper">
        <div className="card__title">
          <div className="card__title__video"></div>
          <h3 className="card__title__label">
            We are here to help you grow faster and stronger.
          </h3>
        </div>
        <div className="card__content">
          <div className="card__description">
            <p className="card__description__paragraph">
            We are a design & strategy studio specialized in setting up your brand for 
            sucess. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Facere eos, accusantium incidunt iusto ratione molestias eum sit 
            culpa voluptatum officia omnis animi ullam amet iure minus obcaecati inventore, 
            quaerat velit!
            </p>
          </div>
          <Link className="card__link" to="doesnotexist">Why should you work with us?</Link>
        </div>
      </div>
    </section>
  );
}

export default Card;