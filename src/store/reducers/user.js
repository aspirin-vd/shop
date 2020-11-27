import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, LOGOUT_USER } from '../types';

const updateUser = (state, action) => {
  if (state === undefined)
    return {
      userData: {},
      isLoggedIn: false,
      loadingUser: true,
      errorUser: null,
    };

  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        userData: {},
        isLoggedIn: false,
        loadingUser: true,
        errorUser: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        userData: action.newUserData,
        isLoggedIn: true,
        loadingUser: false,
        errorUser: null,
      };
    case FETCH_USER_FAILURE:
      return {
        userData: {},
        isLoggedIn: false,
        loadingUser: false,
        errorUser: action.payload,
      };
    case LOGOUT_USER:
      return {
        userData: {},
        isLoggedIn: false,
        loadingUser: false,
        errorUser: null,
      };
    default:
      return state.user;
  }
};

export default updateUser;
