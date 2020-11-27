import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './HeaderMenu.scss';

const HeaderMenu = ({ menuItems, handleRefNavbarToggle }) => (
  <div className="header__menu collapse navbar-collapse" id="navbarToggler">
    <ul className="navbar-nav px-md-0 px-3">

      {menuItems.map(({ menu_id, name, link, submenu }) => submenu ? (
        <li
          key={menu_id}
          className="nav-item arrow-down dropdown d-flex align-items-md-center flex-column"
        >
          <a className="nav-link" role="button" data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false" href='#'
             id={`navbarDropdown${menu_id}`}>{name}</a>
          <div
            className="dropdown-menu pt-0 pt-md-2 pb-0 pb-md-2"
            aria-labelledby={`navbarDropdown${menu_id}`}
          >

            {submenu.map(({ menu_id, name, link: _link }) => (
              <Link
                className="dropdown-item px-3 px-md-4"
                key={menu_id} to={`${link}${_link}/`}
                onClick={handleRefNavbarToggle}
              >{name}</Link>
            ))}

          </div>
        </li>
      ) : (
        <li key={menu_id} className="nav-item d-flex align-items-center">
          <Link
            className="nav-link w-100"
            to={`${link}`} onClick={handleRefNavbarToggle}
          >{name}</Link>
        </li>
      ))}

    </ul>
  </div>
);

const mapStateToProps = ({
  navMenu: { menuItems },
}) => {
  return { menuItems };
};

export default connect(mapStateToProps)(HeaderMenu);

