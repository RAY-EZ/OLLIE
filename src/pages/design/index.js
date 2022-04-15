import React from 'react';
import {Link} from 'react-router-dom';
import Attention from '../../components/attention';
import Slice from '../../components/slice';
import Card from '../../components/card';
import imgMeeting from '../../medias/meeting.jpg'
import imgChairs from '../../medias/chairs.jpg';
import rightArrow from '../../medias/right-arrow.svg';
import Showcase from '../../components/showcase'

export default function Design(){
  return (
    <main className="content" data-page="home">
      <section className="intro">
        <div className="intro__content">
          <div className="intro__heading">
            <h1 className="heading-primary intro__title">brand</h1>
            <p className="intro__heading__description">we are specialized in setting up the 
            foundation of your brand and setting up for success</p>
          </div>
          <div>
            <h1 className="heading-primary move intro__title">experience</h1>
          </div>
          <div>
            <h1 className="heading-primary intro__title">studio</h1>
          </div>
        </div>
      </section>
      <Attention/>
      <Card/>
      <section className="design slice text--left" id="design" data-text-pos="left">
        <div className="slice__content--left slice__content">
            <p className="slice__title">When they ask us how we <br/>say this is how we do it.</p>
          
          <h1 className="slice__heading">design</h1>
          <div className="slice__description">
            <p className="slice__description__paragraph">
            We are a desing & strategy studio specialized in setting up your brand 
            for success. Nulla interdum ante nec quam tristque pretium. in eget rutrum. Some of our desing service include.
            </p>
            <ul className="slice__list">
              <li className="slice__list__item">experience design</li>
              <li className="slice__list__item">visual identity</li>
              <li className="slice__list__item">digital design</li>
              <li className="slice__list__item">service design</li>
            </ul>
            <Link className="slice__link" to="#design">Learn more about design</Link>
          </div>
        </div>
        <div className="slice__media">
          <img src={imgMeeting} alt="" className="slice__media--large" />
          <img src={imgChairs} alt="" className="slice__media--small slice__media--right" />
        </div>
      </section>
      <Slice/>
      <Showcase/>
      <section className="outro">
        <div className="outro__content">
          <div className="heading">
            <h1 className="heading-primary outro__title">we just want</h1>
          </div>
          <div>
            <h1 className="heading-primary outro__title">to see you</h1>
          </div>
          <div>
            <h1 className="heading-primary outro__title">succeed</h1>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="content__wrapper">
          <div className="card__title">
            <div className="card__title__video"></div>
            <h3 className="card__title__label">
              Brand experience? watch video(01:41)
            </h3>
          </div>
          <div className="card__content">
            <div className="card__description">
              <p className="card__description__paragraph">
              We are a design & strategy studio specialized in setting up your brand for 
              success. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Facere eos, accusantium incidunt iusto ratione molestias eum sit 
              culpa voluptatum officia omnis animi ullam amet iure minus obcaecati inventore, 
              quaerat velit!
              </p>
            </div>
            <Link className="card__link" to="doesnotexist">Learn more about us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}