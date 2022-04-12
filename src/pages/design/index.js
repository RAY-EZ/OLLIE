import React from 'react';
import {Link} from 'react-router-dom';
import studioImg  from '../../medias/studio.jpg';
export default function Design(){
  return (
    <main className="content" data-page="home">
      <section className="intro">
        <div className="intro__content">
          <div className="heading">
            <h1 className="heading-primary">Brand</h1>
            <p className="intro__content heading__description">we are specialized in setting up the 
            foundation of your brand and setting up for success</p>
          </div>
          <div>
            <h1 className="heading-primary intro-heading">Experience</h1>
          </div>
          <div>
            <h1 className="heading-primary">studio</h1>
          </div>
        </div>
      </section>
      <section className="attention">
        <div className="attention__content">
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
        </div>
      </section>
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
      <section className="design section" id="design" data-text-pos="left">
        <div className="section__content">
            <h3 className="section__title">When they ask us how we <br/>say this is how we do it.</h3>
          
          <h1 className="heading-primary">design</h1>
          <div className="section__description">
            <p className="section__description__paragraph">
            We are a desing & strategy studio specialized in setting up your brand 
            for success. Nulla interdum ante nec quam tristque pretium. in eget rutrum. Some of our desing service include.
            </p>
            <ul className="section__list">
              <li className="section__list__item">experience design</li>
              <li className="section__list__item">visual identity</li>
              <li className="section__list__item">digital design</li>
              <li className="section__list__item">service design</li>
            </ul>
            <Link className="section__link" to="#design">Learn more about design</Link>
          </div>
        </div>
        <div className="section__media">
          <img src="" alt="" className="section__media--large" />
          <img src="" alt="" className="section__media--small" />
        </div>
      </section>
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
      <section className="showcase" id="cases">
        <div className="showcase__content">
          <h3 className="showcase__title">Now we can hear you thinking 'that's<br/>
           nice and all but can you back it all up?'.<br/>
           Sure we can, here are some cases.</h3>
           <div>
            <h1 className="heading-primary">cases</h1>
            <Link className="showcase__link link" to="#cases">See all of our cases</Link>
           </div>
           <ul className="showcase__list">
             <li className="showcase__list__item">
               <h4 className="showcase__list__item__number">01</h4>
               <h2 className="showcase__list__item__label">Lean</h2>
               <Link className="showcase__list__item__link" to="/">
                 <svg className="right-arrow"></svg>
               </Link>
             </li>
             <li className="showcase__list__item">
               <h4 className="showcase__list__item__number">02</h4>
               <h2 className="showcase__list__item__label">The Harbour</h2>
               <Link className="showcase__list__item__link" to="/">
                 <svg className="right-arrow"></svg>
               </Link>
             </li>
             <li className="showcase__list__item">
               <h4 className="showcase__list__item__number">03</h4>
               <h2 className="showcase__list__item__label">Baba</h2>
               <Link className="showcase__list__item__link" to="/">
                 <svg className="right-arrow"></svg>
               </Link>
             </li>
           </ul>
        </div>
      </section>
      <section className="outro">
        <div className="outro__content">
          <div className="heading">
            <h1 className="heading-primary">we just want</h1>
          </div>
          <div>
            <h1 className="heading-primary outro-heading">to see you</h1>
          </div>
          <div>
            <h1 className="heading-primary">succeed</h1>
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