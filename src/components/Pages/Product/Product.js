import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { compose } from '../../../utils';
import { withGeneralService } from '../../HOC';
import {
  fetchProduct,
  productAddedToCart,
  productToggleWishList,
} from '../../../store/actions';

import Spinner from '../../Spinner';
import ErrorIndicator from '../../Error/ErrorIndicator';
import ProductView from './ProductView/ProductView';

const Product = ({
  productId, onAddedToCart, fetchProduct, loadingProduct, errorProduct, productItem,
  onToggleToWishList, wishListItems,
}) => {
  useEffect(() => fetchProduct(productId), [productId]);

  const history = useHistory();

  const isWish = (productId) =>
    wishListItems.findIndex(({ product_id }) =>
      product_id === productId) !== -1;

  const handleGoCart = () => history.push('/cart');

  if (loadingProduct) return <Spinner/>;
  if (errorProduct) return <ErrorIndicator/>;
  return (
    <ProductView
      productItem={productItem}
      isWish={isWish}
      handleGoCart={handleGoCart}
      onAddedToCart={onAddedToCart}
      onToggleToWishList={onToggleToWishList}
    />
  );
};

const mapStateToProps = ({
  product: { productItem, loadingProduct, errorProduct },
  wishlist: { wishListItems },
}) => {
  return { productItem, loadingProduct, errorProduct, wishListItems };
};

const mapDispatchToProps = (dispatch, { generalService }) => {
  return bindActionCreators({
    fetchProduct: fetchProduct(generalService),
    onAddedToCart: productAddedToCart,
    onToggleToWishList: productToggleWishList,
  }, dispatch);
};

export default compose(
  withGeneralService(),
  connect(mapStateToProps, mapDispatchToProps),
)(Product);
