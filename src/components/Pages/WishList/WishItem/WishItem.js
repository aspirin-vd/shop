import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { productToggleWishList } from '../../../../store/actions';

import './WishItem.scss';

const WishItem = ({ wishListItem, onDelete, onProductSelected }) => {
  const { product_id, name, price, img_url, metal, stone } = wishListItem;

  return (
    <div className="wish-item row no-gutters py-1">
      <div className="col-lg-8 col-md-7 d-flex align-items-center pb-md-0 pb-1">
        <Link to={`/products/${product_id}`}>
          <div className="wish-img-wrapper">
            <img className="wish-img" src={img_url} alt=""/>
          </div>
        </Link>
        <div className="py-2 pl-2 pr-md-2">
          <Link
            className='h6 d-block'
            to={`/products/${product_id}`}
          >
            {name}
          </Link>
          <small className='d-block mb-1'>{metal} | {stone}</small>
          <button
            className="btn p-0"
            onClick={() => onDelete(product_id)}
          >
            <i className="fal fa-times"/> Remove
          </button>
        </div>
      </div>
      <div className="wish-right col-lg-4 col-md-5 pt-md-0 pt-1 d-md-flex">
        <div
          className='d-flex align-items-center justify-content-between w-100'>
          <div className='d-flex flex-column'>
            <small className='d-md-none mb-1'>Price</small>
            <p className='mb-0'>{price}</p>
          </div>
          <button
            className="btn btn-outline-color card-btn px-4"
            onClick={() => onProductSelected(product_id)}
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  onDelete: productToggleWishList,
};

export default connect(undefined, mapDispatchToProps)(WishItem);
