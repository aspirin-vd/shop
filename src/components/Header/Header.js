import React, { createRef, useState } from 'react';

import HeaderWrapper from './HeaderWrapper/HeaderWrapper';
import NavLeft from './NavLeft/NavLeft';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import NavRight from './NavRight/NavRight';
import HeaderForm from './HeaderForm/HeaderForm';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header = () => {
  const [{ isNavbarOpen, isSearchOpen }, setHeaderState] = useState(
    { isNavbarOpen: false, isSearchOpen: false });
  const refNavbarToggle = createRef();

  const handleNavbarToggle = () =>
    setHeaderState({ isNavbarOpen: !isNavbarOpen, isSearchOpen });

  const handleSearchToggle = () => {
    setHeaderState({ isNavbarOpen, isSearchOpen: !isSearchOpen });
    document.getElementById('headerFrom1').focus();
  };

  const handleRefNavbarToggle = () => isNavbarOpen &&
    refNavbarToggle.current.click();

  return (
    <HeaderWrapper
      navLeft={
        <NavLeft
          refNavbarToggle={refNavbarToggle}
          handleNavbarToggle={handleNavbarToggle}
          handleSearchToggle={handleSearchToggle}
          handleRefNavbarToggle={handleRefNavbarToggle}
        />
      }
      headerLogo={
        <HeaderLogo handleRefNavbarToggle={handleRefNavbarToggle}/>
      }
      headerForm={
        <HeaderForm
          isSearchOpen={isSearchOpen}
          handleSearchToggle={handleSearchToggle}
          handleRefNavbarToggle={handleRefNavbarToggle}
        />
      }
      navRight={
        <NavRight handleRefNavbarToggle={handleRefNavbarToggle}/>
      }
      headerMenu={
        <HeaderMenu handleRefNavbarToggle={handleRefNavbarToggle}/>
      }
    />
  );
};

export default Header;
