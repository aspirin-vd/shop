import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  allProductsRemovedFromCart,
  productAddedToCart,
  productRemovedFromCart,
} from '../../../../store/actions';

import './ShoppingCartItem.scss';

const ShoppingCartItem = ({ cartItem, onIncrease, onDecrease, onDelete }) => {
  const { product_id, name, price, img_url, count, priceTotal, metal, stone } = cartItem;

  return (
    <div className="cart-item row no-gutters py-1">
      <div className="col-lg-8 col-md-7 d-flex align-items-center pb-md-0 pb-1">
        <Link to={`/products/${product_id}`}>
          <div className="cart-img-wrapper">
            <img className="cart-img" src={img_url} alt=""/>
          </div>
        </Link>
        <div className="p-3">
          <Link
            className='h6 d-block'
            to={`/products/${product_id}`}
          >{name}</Link>
          <small className='d-block mb-1'>{metal} | {stone}</small>
          <button className="btn p-0" onClick={() => onDelete(product_id)}>
            <i className="fal fa-times"/> Remove
          </button>
        </div>
      </div>
      <div className="cart-right col-lg-4 col-md-5 pt-md-0 pt-1 d-md-flex">
        <div className='d-md-none row no-gutters'>
          <div className="col-4 mb-1 text-left">
            <small>Price</small>
          </div>
          <div className="col-4 mb-1 text-center">
            <small>Total Price</small>
          </div>
          <div className="col-4 mb-1 text-right">
            <small>Total Price</small>
          </div>
        </div>
        <div className='row no-gutters align-items-center w-100'>
          <div className="col-4 text-left">
            <p className='mb-0'>{price}</p>
          </div>
          <div className="col-4 text-center">
            <div className='d-flex justify-content-between align-items-center'>
              <button
                className="btn btn-color-reverse btn-sm rounded-circle"
                onClick={() => onDecrease(product_id)}
              >
                <i className="fal fa-minus"/>
              </button>
              <span>{count}</span>
              <button
                className="btn btn-color-reverse btn-sm rounded-circle"
                onClick={() => onIncrease(product_id)}
              >
                <i className="fal fa-plus"/>
              </button>
            </div>
          </div>
          <div className="col-4 text-right">
            <p className='mb-0'>{priceTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  onIncrease: productAddedToCart,
  onDecrease: productRemovedFromCart,
  onDelete: allProductsRemovedFromCart,
};

export default connect(undefined, mapDispatchToProps)(ShoppingCartItem);
