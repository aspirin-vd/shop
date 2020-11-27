import React from 'react';
import { Link } from 'react-router-dom';

import './HomeMenu.scss';

const HomeMenu = ({ homeMenuItems: { link: shopLink, submenu: menu } }) => {
   if (menu.length > 0) return (
      <div className='home__menu py-4 d-md-none'>
         <h5 className="text-center mb-3">Shop</h5>
         <div className="list-group list-group-flush">
            {menu.map(({ menu_id, name, link }) => (
               <Link className='list-group-item border-0'
                     key={menu_id} to={`${shopLink}${link}`}>{name}</Link>
            ))}
         </div>
      </div>
   );
   return null
};

export default HomeMenu;
