import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from '../types';

const updateProduct = (state, action) => {
  if (state === undefined)
    return {
      productItem: {},
      loadingProduct: true,
      errorProduct: null,
    };

  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        productItem: {},
        loadingProduct: true,
        errorProduct: null,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        productItem: action.newItem,
        loadingProduct: false,
        errorProduct: null,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        productItem: {},
        loadingProduct: false,
        errorProduct: action.payload,
      };
    default:
      return state.product;
  }
};

export default updateProduct;
