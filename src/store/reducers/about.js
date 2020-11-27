import { FETCH_ABOUT_FAILURE, FETCH_ABOUT_REQUEST, FETCH_ABOUT_SUCCESS } from '../types';

const updateAbout = (state, action) => {
  if (state === undefined)
    return {
      aboutData: '',
      loadingAbout: true,
      errorAbout: null,
    };

  switch (action.type) {
    case FETCH_ABOUT_REQUEST:
      return {
        aboutData: '',
        loadingAbout: true,
        errorAbout: null,
      };
    case FETCH_ABOUT_SUCCESS:
      return {
        aboutData: action.newData,
        loadingAbout: false,
        errorAbout: null,
      };
    case FETCH_ABOUT_FAILURE:
      return {
        aboutData: '',
        loadingAbout: false,
        errorAbout: action.payload,
      };
    default:
      return state.about;
  }
};

export default updateAbout;
