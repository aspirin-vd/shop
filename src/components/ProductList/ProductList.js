import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { compose } from '../../utils';
import { withGeneralService } from '../HOC';
import { productToggleWishList } from '../../store/actions';

import ProductListView from './ProductListView/ProductListView';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error/ErrorIndicator';

const ProductList = ({
  productUrl = '', msgIsEmpty = 'Product list is currently empty.',
  loadingProducts, errorProducts, products,
  wishListItems, onToggleToWishList,
}) => {
  if (loadingProducts) return <Spinner/>;
  if (errorProducts) return <ErrorIndicator/>;
  return (
    <ProductListView
      products={products}
      productUrl={productUrl}
      msgIsEmpty={msgIsEmpty}
      wishListItems={wishListItems}
      onToggleToWishList={onToggleToWishList}
    />
  );
};

const mapStateToProps = ({
  productList: { products, loadingProducts, errorProducts }, wishlist: { wishListItems },
}) => {
  return { products, loadingProducts, errorProducts, wishListItems };
};

const mapDispatchToProps = {
  onToggleToWishList: productToggleWishList,
};

export default compose(
  withGeneralService(),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProductList);
