import { FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS } from '../types';

const categoryRequested = () => { return { type: FETCH_CATEGORY_REQUEST }; };
const categoryLoaded = (newItem) => { return { type: FETCH_CATEGORY_SUCCESS, newItem }; };
const categoryError = (error) => { return { type: FETCH_CATEGORY_FAILURE, payload: error }; };

const fetchCategory = (generalService) => (categoryId) => (dispatch) => {
  let cancelled = false;
  dispatch(categoryRequested());
  generalService.getCategory(categoryId)
    .then((data) => !cancelled && dispatch(categoryLoaded(data)))
    .catch((err) => !cancelled && dispatch(categoryError(err)));
  return () => cancelled = true;
};

export default fetchCategory;
