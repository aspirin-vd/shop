import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { withGeneralService } from '../../HOC';
import { fetchAbout } from '../../../store/actions';

import Spinner from '../../Spinner';
import ErrorIndicator from '../../Error/ErrorIndicator';

const About = ({ fetchAbout, aboutData, loadingAbout, errorAbout }) => {
  useEffect(() => fetchAbout(), []);

  if (loadingAbout) return <Spinner/>;
  if (errorAbout) return <ErrorIndicator/>;
  return (<main className="main">
    <div className="container-600 py-md-5 py-3 px-md-0 px-4">
      <h4 className="text-center mb-md-5 mb-3">About</h4>
      <div className='mb-4' dangerouslySetInnerHTML={{ __html: aboutData }}/>
    </div>
  </main>);
};

const mapStateToProps = ({ about: { aboutData, loadingAbout, errorAbout } }) => {
  return { aboutData, loadingAbout, errorAbout };
};

const mapDispatchToProps = (dispatch, { generalService }) =>
  bindActionCreators({
    fetchAbout: fetchAbout(generalService),
  }, dispatch);

export default compose(
  withGeneralService(),
  connect(mapStateToProps, mapDispatchToProps),
)(About);
