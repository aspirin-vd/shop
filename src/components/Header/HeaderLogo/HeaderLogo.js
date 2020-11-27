import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './HeaderLogo.scss';

const HeaderLogo = ({ isDarkMode, handleRefNavbarToggle }) => (
  <Link
    className="navbar-brand mr-0 pl-md-0 pl-3 pr-md-3 py-0 d-flex align-items-center"
    to="/" onClick={handleRefNavbarToggle}
  >
    <img
      className='header__logo pr-md-2 pl-md-0 pl-2'
      alt="Logo"
      src={isDarkMode ? `/images/logo/logo_dark.png` :
        `/images/logo/logo.png`}
    />
    <span className='d-md-flex d-none'>Royal</span>
  </Link>
);

const mapStateToProps = ({ themePicker: { isDarkMode } }) => {
  return { isDarkMode };
};

export default connect(mapStateToProps)(HeaderLogo);
