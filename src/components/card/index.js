import React from 'react';
import {Link} from 'react-router-dom';

function Card(){
  return (
    <section className="card">
      <div className="content__wrapper card__wrapper">
        <div className="card__title">
          <div className="card__title__video"></div>
          <p className="card__title__label">
            We are here to help you<br/> grow faster and stronger.
          </p>
        </div>
        <div className="card__content">
          {/* <div className="card__description"> */}
            <p className="card__content__paragraph">
            We are a design & strategy studio specialized in setting up your brand for 
            sucess. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maiores, eius neque eos officia magnam officiis deleniti at corrupti 
            veniam sapiente inventore ipsa, temporibus deserunt quasi laudantium 
            consequuntur reiciendis sed fuga nesciunt eum veritatis! Laudantium 
            illo dignissimos ex deleniti natus ut necessitatibus, tempore ullam, 
            accusamus quibusdam voluptas, aliquid eius iste! Voluptates nesciunt ipsum 
            eaque repudiandae porro. Nobis a odio architecto in!
            </p>
          {/* </div> */}
          <Link className="card__content__link link" to="doesnotexist">Why should you work with us?</Link>
        </div>
      </div>
    </section>
  );
}

export default Card;