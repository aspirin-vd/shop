import { FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS } from '../types';

const updateCategory = (state, action) => {
  if (state === undefined)
    return {
      categoryItem: {},
      loadingCategory: true,
      errorCategory: null,
    };

  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        categoryItem: {},
        loadingCategory: true,
        errorCategory: null,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        categoryItem: action.newItem,
        loadingCategory: false,
        errorCategory: null,
      };
    case FETCH_CATEGORY_FAILURE:
      return {
        categoryItem: {},
        loadingCategory: false,
        errorCategory: action.payload,
      };
    default:
      return state.category;
  }
};

export default updateCategory;
