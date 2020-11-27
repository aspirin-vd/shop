import React from 'react';

import './NavLeft.scss';

const NavLeft = ({
  refNavbarToggle, handleRefNavbarToggle, handleNavbarToggle, handleSearchToggle,
}) => (
  <div className="navbar__navbar-left order-md-1 d-flex">
    <button
      className="navbar-toggler collapsed position-relative border-0"
      type="button"
      data-toggle="collapse" data-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false" aria-label="Toggle navigation"
      onClick={handleNavbarToggle}
      ref={refNavbarToggle}
    >
      <span className="toggler-icon"/>
    </button>
    <div className="navbar-nav d-lg-none justify-content-center">
      <a className="nav-item nav-link btn fal fa-search"
         onClick={() => {
           handleRefNavbarToggle();
           handleSearchToggle();
         }}
      />
    </div>
  </div>
);

export default NavLeft;
