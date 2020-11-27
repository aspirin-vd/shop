import { FETCH_BLOG_FAILURE, FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS } from '../types';

const updateBlog = (state, action) => {
  if (state === undefined)
    return {
      blogItems: [],
      loadingBlog: true,
      errorBlog: null,
    };

  switch (action.type) {
    case FETCH_BLOG_REQUEST:
      return {
        blogItems: [],
        loadingBlog: true,
        errorBlog: null,
      };
    case FETCH_BLOG_SUCCESS:
      return {
        blogItems: action.newItems,
        loadingBlog: false,
        errorBlog: null,
      };
    case FETCH_BLOG_FAILURE:
      return {
        blogItems: [],
        loadingBlog: false,
        errorBlog: action.payload,
      };
    default:
      return state.blog;
  }
};

export default updateBlog;
