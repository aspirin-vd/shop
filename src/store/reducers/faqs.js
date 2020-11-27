import { FETCH_FAQS_FAILURE, FETCH_FAQS_REQUEST, FETCH_FAQS_SUCCESS } from '../types';

const updateFAQS = (state, action) => {
  if (state === undefined)
    return {
      faqsItems: [],
      loadingFAQS: true,
      errorFAQS: null,
    };

  switch (action.type) {
    case FETCH_FAQS_REQUEST:
      return {
        faqsItems: [],
        loadingFAQS: true,
        errorFAQS: null,
      };
    case FETCH_FAQS_SUCCESS:
      return {
        faqsItems: action.newItems,
        loadingFAQS: false,
        errorFAQS: null,
      };
    case FETCH_FAQS_FAILURE:
      return {
        faqsItems: [],
        loadingFAQS: false,
        errorFAQS: action.payload,
      };
    default:
      return state.faqs;
  }
};

export default updateFAQS;
