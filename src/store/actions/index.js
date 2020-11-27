import fetchCategory from './category';
import fetchProductList from './productList';
import fetchProduct from './product';
import fetchNavMenu from './navMenu';
import fetchFAQS from './faqs';
import fetchBlog from './blog';
import fetchAbout from './about';
import {
  allProductsRemovedFromCart,
  productAddedToCart,
  productRemovedFromCart,
} from './shoppingCart';
import productToggleWishList from './wishlist';
import {
  fetchLogin,
  fetchPassword,
  fetchProfile,
  fetchRegister,
  fetchUser,
  logoutUser,
} from './user';
import themePickerToggle from './themePicker';

export {
  productAddedToCart,
  productRemovedFromCart,
  allProductsRemovedFromCart,

  productToggleWishList,
  logoutUser,
  themePickerToggle,

  fetchRegister,
  fetchLogin,
  fetchUser,
  fetchProfile,
  fetchPassword,
  fetchCategory,
  fetchProductList,
  fetchProduct,
  fetchNavMenu,
  fetchFAQS,
  fetchBlog,
  fetchAbout,
};
