import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../types';

const productListRequested = () => { return { type: FETCH_PRODUCTS_REQUEST }; };
const productListLoaded = (newItems) => { return { type: FETCH_PRODUCTS_SUCCESS, newItems };};
const productListError = (error) => { return { type: FETCH_PRODUCTS_FAILURE, payload: error }; };

const fetchProductList = (generalService) => (categoryId, search, params) => (dispatch) => {
  let cancelled = false;
  dispatch(productListRequested());
  generalService.getProductList(categoryId, search, params)
    .then((data) => !cancelled && dispatch(productListLoaded(data.results)))
    .catch((err) => !cancelled && dispatch(productListError(err)));
  return () => cancelled = true;
};

export default fetchProductList;
