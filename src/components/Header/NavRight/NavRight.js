import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../../store/actions';

import './NavRight.scss';

const NavRight = ({ isLoggedIn, access, logoutUser, quantityTotal, handleRefNavbarToggle }) => {
  const handleLogoutClick = () => logoutUser();

  return (
    <ul className="navbar__nav-right navbar-nav flex-row">
      <li className="nav-item d-flex align-items-center">
        <Link
          to='/wishlist'
          className="nav-link fal fa-heart"
          onClick={handleRefNavbarToggle}/>
      </li>

      <li className="nav-item arrow-down dropdown d-flex align-items-center">
        <a
          href='#'
          className="nav-link fal fa-user"
          role="button"
          id="userMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        />

        <div
          className="dropdown-menu position-absolute user-menu"
          aria-labelledby="userMenu"
        >
          {(isLoggedIn) ? (
            <>
              <Link to='/account' className="dropdown-item"
                    onClick={handleRefNavbarToggle}>My account</Link>
              {(access === 1) ? (
                <Link to='/account' className="dropdown-item disabled"
                      aria-disabled="true"
                      onClick={handleRefNavbarToggle}>Admin panel</Link>
              ) : ''}

              <Link
                to='/' className="dropdown-item"
                onClick={() => {
                  handleRefNavbarToggle();
                  handleLogoutClick();
                }}
              >Log out</Link>
            </>
          ) : (
            <>
              <Link
                to='/account/register'
                className="dropdown-item"
                onClick={handleRefNavbarToggle}
              >Register</Link>

              <Link
                to='/account/login'
                className="dropdown-item"
                onClick={handleRefNavbarToggle}
              >Log in</Link>
            </>
          )}
        </div>
      </li>

      <li className="nav-item d-flex align-items-center">
        <Link
          to='/cart'
          className="nav-link fal fa-shopping-bag position-relative"
          onClick={handleRefNavbarToggle}
        >
          <span
            className="badge badge-pill cart-quantity"
          >{quantityTotal}</span>
        </Link>
      </li>
    </ul>
  );
};

const mapStateToProps = ({ user: { isLoggedIn, userData: { access } }, shoppingCart: { quantityTotal } }) => {
  return { isLoggedIn, access, quantityTotal };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    logoutUser: logoutUser,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavRight);
