import { PRODUCT_TOGGLE_WISHLIST } from '../types';

const productToggleWishList = (productId) => {
  return { type: PRODUCT_TOGGLE_WISHLIST, payload: productId };
};

export default productToggleWishList;
