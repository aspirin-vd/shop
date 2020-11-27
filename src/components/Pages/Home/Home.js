import React from 'react';
import { connect } from 'react-redux';

import HomeWrapper from './HomeWrapper/HomeWrapper';
import HomeMenu from './HomeMenu/HomeMenu';

const Home = ({ menuItems }) => {
  const homeConfig = {
    rowOne: [
      { image: '/images/title/image_1.jpg', title: 'Rings', link: '/collections/rings/' },
      { image: '/images/title/image_2.jpg', title: 'Earrings', link: '/collections/earrings/' },
    ],
    rowTwo: [
      { image: '/images/title/image_3.jpg', title: 'Rings', link: '/collections/rings/' },
      { image: '/images/title/image_4.jpg', title: 'Earrings', link: '/collections/earrings/' },
      { image: '/images/title/image_5.jpg', title: 'Necklaces', link: '/collections/necklaces/' },
      { image: '/images/title/image_6.jpg', title: 'Bracelets', link: '/collections/bracelets/' },
    ],
    rowThree: [
      { image: '/images/title/image_7.jpg', title: 'Earrings', link: '/collections/earrings/' },
      { image: '/images/title/image_8.jpg', title: 'Earrings', link: '/collections/earrings/' },
    ],
    rowFour: [
      { image: '/images/title/image_9.jpg', title: 'Necklaces', link: '/collections/necklaces/' },
      { image: '/images/title/image_10.jpg', title: 'Rings', link: '/collections/rings/' },
    ],
  };

  return (
    <HomeWrapper
      homeConfig={homeConfig}
      homeMenu={
        <HomeMenu homeMenuItems={menuItems[0]}/>
      }
    />
  );
};

const mapStateToProps = ({ navMenu: { menuItems } }) => {
  return { menuItems };
};

export default connect(mapStateToProps)(Home);
