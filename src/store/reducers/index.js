import updateNavMenu from './navMenu';
import updateCategory from './category';
import updateProductList from './productList';
import updateProduct from './product';
import updateBlog from './blog';
import updateFAQS from './faqs';
import updateAbout from './about';
import updateWishList from './wishlist';
import updateUser from './user';
import updateShoppingCart from './shoppingCart';
import updateThemePicker from './themePicker';

const reducer = (state, action) => {
  return {
    navMenu: updateNavMenu(state, action),
    category: updateCategory(state, action),
    productList: updateProductList(state, action),
    product: updateProduct(state, action),
    blog: updateBlog(state, action),
    faqs: updateFAQS(state, action),
    about: updateAbout(state, action),
    wishlist: updateWishList(state, action),
    user: updateUser(state, action),
    shoppingCart: updateShoppingCart(state, action),
    themePicker: updateThemePicker(state, action),
  };
};

export default reducer;
