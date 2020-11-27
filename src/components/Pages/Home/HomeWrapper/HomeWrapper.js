import React from 'react';
import { Link } from 'react-router-dom';

import './HomeWrapper.scss';

const HomeWrapper = ({ homeMenu, homeConfig }) => (
  <main className='main home'>
    <div className="container">

      <div className='row pt-1 mx-0'>
        {homeConfig.rowOne.map(({
          image, title, link,
        }, index) => (
          <div key={index} className="col-md-6 px-0">
            <Link
              className='home__link_image d-block position-relative'
              to={link}
            >
              <img
                className='home__image position-absolute w-100'
                src={image}
                alt='Rings'
              />
              <div
                className="home__caption text-center d-inline-block pb-2 position-absolute">
                <small>Shop</small>
                <h5 className="mb-0">{title}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {homeMenu}

      <div className="row d-md-flex d-none mx-0">
        {homeConfig.rowTwo.map(({
          image, title, link,
        }, index) => (
          <div key={index} className="col-md-3 px-0">
            <Link className='home__link_image d-block position-relative'
                  to={link}>
              <img
                className='home__image position-absolute w-100 mw-100'
                src={image}
                alt={title}
              />
            </Link>
          </div>
        ))}
      </div>

      <div className='row mx-0'>
        {homeConfig.rowThree.map(({
          image, title, link,
        }, index) => (
          <div key={index} className="col-md-6 px-0">
            <Link
              className='home__link_image d-block position-relative'
              to={link}
            >
              <img
                className='home__image position-absolute w-100 mw-100'
                src={image}
                alt={title}
              />
            </Link>
          </div>
        ))}
      </div>

      <div className='row mx-0'>
        {homeConfig.rowFour.map(({
          image, title, link,
        }, index) => (
          <div key={index} className="col-md-6 px-0">
            <Link
              className='home__link_image d-block position-relative'
              to={link}
            >
              <img
                className='home__image position-absolute w-100 mw-100'
                src={image}
                alt={title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default HomeWrapper;
