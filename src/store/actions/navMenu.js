import { FETCH_NAVMENU_FAILURE, FETCH_NAVMENU_REQUEST, FETCH_NAVMENU_SUCCESS } from '../types';

const navMenuRequested = () => { return { type: FETCH_NAVMENU_REQUEST }; };
const navMenuLoaded = (newItems) => { return { type: FETCH_NAVMENU_SUCCESS, newItems }; };
const navMenuError = (error) => { return { type: FETCH_NAVMENU_FAILURE, payload: error }; };

const fetchNavMenu = (generalService) => () => (dispatch) => {
  let cancelled = false;
  dispatch(navMenuRequested());
  generalService.getNavMenu()
    .then((data) => !cancelled && dispatch(navMenuLoaded(data.results)))
    .catch((err) => !cancelled && dispatch(navMenuError(err)));
  return () => cancelled = true;
};

export default fetchNavMenu;
