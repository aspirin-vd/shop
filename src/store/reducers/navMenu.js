import { FETCH_NAVMENU_FAILURE, FETCH_NAVMENU_REQUEST, FETCH_NAVMENU_SUCCESS } from '../types';

const updateNavMenu = (state, action) => {
  if (state === undefined)
    return {
      menuItems: [],
      loadingMenu: true,
      errorMenu: null,
    };

  switch (action.type) {
    case FETCH_NAVMENU_REQUEST:
      return {
        menuItems: [],
        loadingMenu: true,
        errorMenu: null,
      };
    case FETCH_NAVMENU_SUCCESS:
      return {
        menuItems: action.newItems,
        loadingMenu: false,
        errorMenu: null,
      };
    case FETCH_NAVMENU_FAILURE:
      return {
        menuItems: [],
        loadingMenu: false,
        errorMenu: action.payload,
      };
    default:
      return state.navMenu;
  }
};

export default updateNavMenu;
