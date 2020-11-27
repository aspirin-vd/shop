import React from 'react';

import './HeaderWrapper.scss';

const HeaderWrapper = ({
  navLeft, headerLogo, headerForm, navRight, headerMenu,
}) => (
  <header className="header">
    <nav className="navbar navbar-expand-md fixed-top p-0">
      <div className="container position-relative h-100">

        {navLeft}
        {headerLogo}

        <div className="order-md-last d-flex h-100">

          {headerForm}
          {navRight}

        </div>

        {headerMenu}

      </div>
    </nav>
  </header>
);

export default HeaderWrapper;
