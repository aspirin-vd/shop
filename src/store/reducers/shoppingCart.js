import {
  PRODUCT_ADDED_TO_CART,
  PRODUCT_REMOVED_FROM_CART,
  PRODUCTS_REMOVED_FROM_CART,
} from '../types';

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  if (idx === -1) return [...cartItems, item];
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (product, item = {}, quantity) => {
  const {
    product_id = product.product_id, name = product.name, price = product.price,
    img_url = product.img_urls[0], metal = product.metal, stone = product.stone,
    count = 0, priceTotal = 0,
  } = item;

  return {
    product_id, name, price, img_url, metal, stone,
    count: count + quantity, priceTotal: priceTotal + quantity * price,
  };
};

const updateOrder = (state, productId, quantity) => {
  const { product: { productItem }, shoppingCart: { cartItems } } = state;
  const itemIndex = cartItems.findIndex(({ product_id }) => product_id === productId);
  const newItem = updateCartItem(productItem, cartItems[itemIndex], quantity);
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);

  return {
    cartItems: newCartItems,
    subTotal: newCartItems.reduce((sum, { priceTotal }) => sum + priceTotal, 0),
    quantityTotal: newCartItems.reduce((sum, { count }) => sum + count, 0),
  };
};

const updateShoppingCart = (state, action) => {
  let shopping_cart;

  if (state === undefined) {
    shopping_cart = localStorage.shopping_cart;
    if (shopping_cart) return JSON.parse(shopping_cart);
    return {
      cartItems: [],
      subTotal: 0,
      quantityTotal: 0,
    };
  }

  switch (action.type) {
    case PRODUCT_ADDED_TO_CART:
      shopping_cart = updateOrder(state, action.payload, 1);
      localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
      return shopping_cart;

    case PRODUCT_REMOVED_FROM_CART:
      shopping_cart = updateOrder(state, action.payload, -1);
      localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
      return shopping_cart;

    case PRODUCTS_REMOVED_FROM_CART:
      const item = state.shoppingCart.cartItems.find(
        ({ product_id }) => product_id === action.payload);
      shopping_cart = updateOrder(state, action.payload, -item.count);
      localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
      return shopping_cart;

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
