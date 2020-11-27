import { PRODUCT_TOGGLE_WISHLIST } from '../types';

const updateWishListItems = (wishListItems, item, idx) => {
  if (idx === -1) return [...wishListItems, item];
  return [...wishListItems.slice(0, idx), ...wishListItems.slice(idx + 1)];
};

const updateWishListItem = (product, item = {}) => {
  const {
    product_id = product.product_id, name = product.name, price = product.price,
    img_url = product.img_urls[0], metal = product.metal, stone = product.stone,
  } = item;

  return { product_id, name, price, img_url, metal, stone };
};

const updateOrder = (state, productId) => {
  const { productList: { products }, wishlist: { wishListItems } } = state;
  const product = products.find(({ product_id }) => product_id === productId);
  const itemIndex = wishListItems.findIndex(({ product_id }) => product_id === productId);
  const newItem = updateWishListItem(product, wishListItems[itemIndex]);
  const newCartItems = updateWishListItems(wishListItems, newItem, itemIndex);

  return { wishListItems: newCartItems };
};

const updateWishList = (state, action) => {
  let wish_list;

  if (state === undefined) {
    wish_list = localStorage.wish_list;
    if (wish_list) return JSON.parse(wish_list);
    return { wishListItems: [] };
  }

  switch (action.type) {
    case PRODUCT_TOGGLE_WISHLIST:
      wish_list = updateOrder(state, action.payload);
      localStorage.setItem('wish_list', JSON.stringify(wish_list));
      return wish_list;
    default:
      return state.wishlist;
  }
};

export default updateWishList;
