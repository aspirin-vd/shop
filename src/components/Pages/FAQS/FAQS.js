import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { withGeneralService } from '../../HOC';
import { fetchFAQS } from '../../../store/actions';

import Spinner from '../../Spinner';
import ErrorIndicator from '../../Error/ErrorIndicator';

const FAQS = ({ fetchFAQS, faqsItems, loadingFAQS, errorFAQS }) => {
  useEffect(() => fetchFAQS(), []);

  if (loadingFAQS) return <Spinner/>;
  if (errorFAQS) return <ErrorIndicator/>;
  return (
    <main className="main">
      <div className="container-600 py-md-5 py-3 px-md-0 px-4">
        <h4 className="text-center mb-md-5 mb-4">FAQS</h4>
        {faqsItems && faqsItems.length !== 0 ?
          faqsItems.map(({ faq_id, name, description }) => (
            <div key={faq_id} className='mb-5'>
              <h6 className='mb-3'>{name}</h6>
              <div dangerouslySetInnerHTML={{ __html: description }}/>
            </div>
          ))
          : (
            <h5 className="font-weight-light text-center mb-3">
              FAQS is currently empty.
            </h5>
          )}
      </div>
    </main>
  );
};

const mapStateToProps = ({ faqs: { faqsItems, loadingFAQS, errorFAQS } }) => {
  return { faqsItems, loadingFAQS, errorFAQS };
};

const mapDispatchToProps = (dispatch, { generalService }) =>
  bindActionCreators({
    fetchFAQS: fetchFAQS(generalService),
  }, dispatch);

export default compose(
  withGeneralService(),
  connect(mapStateToProps, mapDispatchToProps),
)(FAQS);
