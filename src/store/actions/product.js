import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from '../types';

const productRequested = () => { return { type: FETCH_PRODUCT_REQUEST }; };
const productLoaded = (newItem) => { return { type: FETCH_PRODUCT_SUCCESS, newItem }; };
const productError = (error) => { return { type: FETCH_PRODUCT_FAILURE, payload: error }; };

const fetchProduct = (generalService) => (productId) => (dispatch) => {
  let cancelled = false;
  dispatch(productRequested());
  generalService.getProduct(productId)
    .then((data) => !cancelled && dispatch(productLoaded(data)))
    .catch((err) => !cancelled && dispatch(productError(err)));
  return () => cancelled = true;
};

export default fetchProduct;
