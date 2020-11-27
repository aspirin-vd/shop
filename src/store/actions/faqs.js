import { FETCH_FAQS_FAILURE, FETCH_FAQS_REQUEST, FETCH_FAQS_SUCCESS } from '../types';

const faqsRequested = () => { return { type: FETCH_FAQS_REQUEST }; };
const faqsLoaded = (newItems) => { return { type: FETCH_FAQS_SUCCESS, newItems }; };
const faqsError = (error) => { return { type: FETCH_FAQS_FAILURE, payload: error }; };

const fetchFAQS = (generalService) => () => (dispatch) => {
  let cancelled = false;
  dispatch(faqsRequested());
  generalService.getFAQS()
    .then((data) => !cancelled && dispatch(faqsLoaded(data.results)))
    .catch((err) => !cancelled && dispatch(faqsError(err)));
  return () => cancelled = true;
};

export default fetchFAQS;
