import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useLocation } from 'react-router-dom';

import { compose } from '../../../utils';
import { withGeneralService } from '../../HOC';
import { fetchProductList } from '../../../store/actions';

import SearchWrapper from './SearchWrapper/SearchWrapper';
import SearchFrom from './SearchForm/SearchFrom';
import ProductList from '../../ProductList';

const Search = ({ fetchProductList }) => {
  const query = new URLSearchParams(useLocation().search).get('q');

  useEffect(() => {
    if (query) fetchProductList(undefined, query);
  }, [query]);

  return (
    <SearchWrapper
      query={query}
      searchForm={
        <SearchFrom query={query}/>
      }
      productList={
        query || query !== '' ? (
          <ProductList productUrl={'/products/'}/>
        ) : undefined
      }
    />
  );
};

const mapDispatchToProps = (dispatch, { generalService }) =>
  bindActionCreators({
    fetchProductList: fetchProductList(generalService),
  }, dispatch);

export default compose(
  withGeneralService(),
  connect(undefined, mapDispatchToProps),
)(Search);
