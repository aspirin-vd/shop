import { FETCH_ABOUT_FAILURE, FETCH_ABOUT_REQUEST, FETCH_ABOUT_SUCCESS } from '../types';

const aboutRequested = () => { return { type: FETCH_ABOUT_REQUEST }; };
const aboutLoaded = (newData) => { return { type: FETCH_ABOUT_SUCCESS, newData }; };
const aboutError = (error) => { return { type: FETCH_ABOUT_FAILURE, payload: error }; };

const fetchAbout = (generalService) => () => (dispatch) => {
  let cancelled = false;
  dispatch(aboutRequested());
  generalService.getAbout()
    .then((data) => !cancelled && dispatch(aboutLoaded(data.results)))
    .catch((err) => !cancelled && dispatch(aboutError(err)));
  return () => cancelled = true;
};

export default fetchAbout;
