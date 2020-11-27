import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useLocation } from 'react-router-dom';

import { compose } from '../../../utils';
import { withGeneralService } from '../../HOC';
import { fetchCategory, fetchProductList } from '../../../store/actions';

import Spinner from '../../Spinner';

import ShopWrapper from './ShopWrapper/ShopWrapper';
import ShopFilters from './ShopFilters/ShopFilters';
import ProductList from '../../ProductList';

const Shop = ({
  categoryId, fetchProductList,
  fetchCategory, filterData, loadingCategory,
}) => {
  const [filters, setFilters] = useState({});
  const filtersUrl = new URLSearchParams(useLocation().search).get('p');

  useEffect(() => { fetchCategory(categoryId); }, [categoryId]);
  useEffect(() => {
    const _filtersUrl = JSON.parse(filtersUrl);
    const _filters = {};
    for (const key in _filtersUrl) {
      if (filterData[key]) _filters[key] = _filtersUrl[key];
    }
    fetchProductList(categoryId, undefined, JSON.stringify(_filters));
    setFilters(_filters);
  }, [categoryId, filtersUrl]);

  if (loadingCategory) return <Spinner/>;
  return (
    <ShopWrapper
      filters={
        <ShopFilters filters={filters}/>
      }
      productList={
        <ProductList/>
      }
    />
  );
};

const mapStateToProps = ({
  category: {
    categoryItem: { filters: filterData },
    loadingCategory,
  },
}) => {
  return { filterData, loadingCategory };
};

const mapDispatchToProps = (dispatch, { generalService }) =>
  bindActionCreators({
    fetchProductList: fetchProductList(generalService),
    fetchCategory: fetchCategory(generalService),
  }, dispatch);

export default compose(
  withGeneralService(),
  connect(mapStateToProps, mapDispatchToProps),
)(Shop);
