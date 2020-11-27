import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkouts = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleToggleFiltersClick = () => setIsOpenSidebar(!isOpenSidebar);

  const sidebarToggleText = isOpenSidebar
    ? 'Hide order summary' : 'Show order summary';

  return (
    <main className='main'>
      <div className="container py-md-5 py-3 px-md-0 px-3">
        <h4 className="text-center mb-md-5 mb-4">Checkouts</h4>
        <div className="row flex-lg-row-reverse">
          <div className="col-lg-5 navbar-expand-lg mb-2">
            <div className="d-lg-none d-flex">
              <a
                className='btn btn-block bg-highlighted collapsed d-flex justify-content-between'
                href='#'
                data-toggle="collapse"
                data-target="#sidebar"
                aria-controls="sidebar"
                aria-expanded="false"
                aria-label="Toggle sidebar"
                onClick={handleToggleFiltersClick}
              >
                <span
                  className='order-summary-toggle__text'
                >{sidebarToggleText}</span>
                <span className='final-price'>333</span>
              </a>
            </div>
            <div
              className="collapse navbar-collapse sidebar bg-highlighted px-1"
              id="sidebar"
            >
              <div className='p-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam aut doloribus eveniet ex facilis natus veritatis?
                Accusamus ad at cupiditate, debitis earum ex praesentium quia
                quis sapiente suscipit voluptates, voluptatum.
              </div>
            </div>
          </div>
          <div className="col-lg-7 mb-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              blanditiis, dignissimos, dolor doloremque eius ipsam ipsum laborum
              mollitia officia quia repudiandae sequi ut voluptates voluptatum!
              Earum labore nemo voluptatibus.
            </p>
            <button className='btn btn-color btn-block'>
              Continue to shipping
            </button>
          </div>
        </div>

        <Link to='/cart'>
          <i className="fal fa-chevron-left pr-2"/> Return to cart
        </Link>
      </div>
    </main>
  );
};

export default Checkouts;
