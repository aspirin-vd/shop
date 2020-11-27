import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../types';

const updateProductList = (state, action) => {
  if (state === undefined)
    return {
      products: [],
      loadingProducts: true,
      errorProducts: null,
    };

  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        products: [],
        loadingProducts: true,
        errorProducts: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        products: action.newItems,
        loadingProducts: false,
        errorProducts: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        products: [],
        loadingProducts: false,
        errorProducts: action.payload,
      };

    default:
      return state.productList;
  }
};

export default updateProductList;
