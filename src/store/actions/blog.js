import { FETCH_BLOG_FAILURE, FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS } from '../types';

const blogRequested = () => { return { type: FETCH_BLOG_REQUEST }; };
const blogLoaded = (newItems) => { return { type: FETCH_BLOG_SUCCESS, newItems }; };
const blogError = (error) => { return { type: FETCH_BLOG_FAILURE, payload: error }; };

const fetchBlog = (generalService) => () => (dispatch) => {
  let cancelled = false;
  dispatch(blogRequested());
  generalService.getBlog()
    .then((data) => !cancelled && dispatch(blogLoaded(data.results)))
    .catch((err) => !cancelled && dispatch(blogError(err)));
  return () => cancelled = true;
};

export default fetchBlog;
