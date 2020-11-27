import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { withGeneralService } from '../../HOC';
import { fetchBlog } from '../../../store/actions';
import { dateFormat } from '../../../utils';

import Spinner from '../../Spinner';
import ErrorIndicator from '../../Error/ErrorIndicator';

const Blog = ({ fetchBlog, blogItems, loadingBlog, errorBlog }) => {
  useEffect(() => fetchBlog(), []);

  if (loadingBlog) return <Spinner/>;
  if (errorBlog) return <ErrorIndicator/>;

  return (
    <main className="main">
      <div className="container-600 pt-md-5 pt-3 px-md-0 px-4">
        <h4 className="text-center mb-md-5 mb-4">Blog</h4>

        {blogItems && blogItems.length > 0 ?
          blogItems.map(({ blog_id, title, date, text }) => (
            <div key={blog_id} className='mb-md-5 mb-4'>
              <h5 className='mb-3'>{title}</h5>
              <p>{dateFormat(date)}</p>
              <div dangerouslySetInnerHTML={{ __html: text }}/>
            </div>
          )) : (
            <h5 className="font-weight-light text-center mb-3">
              Blog is currently empty.
            </h5>
          )}

      </div>
    </main>
  );
};

const mapStateToProps = ({ blog: { blogItems, loadingBlog, errorBlog } }) => {
  return { blogItems, loadingBlog, errorBlog };
};

const mapDispatchToProps = (dispatch, { generalService }) =>
  bindActionCreators({
    fetchBlog: fetchBlog(generalService),
  }, dispatch);

export default compose(
  withGeneralService(),
  connect(mapStateToProps, mapDispatchToProps),
)(Blog);
