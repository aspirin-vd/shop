import React from 'react';
import { Link } from 'react-router-dom';

import { priceFormat } from '../../../utils';

import './ProductListView.scss';

const ProductListView = ({
  products, productUrl, msgIsEmpty, wishListItems, onToggleToWishList,
}) => {
  const isWish = (productId) =>
    wishListItems.findIndex(({ product_id }) =>
      product_id === productId) !== -1;

  return (
    <div className="row product-list mx-0">
      {products && products.length !== 0 ?
        products.map(({ product_id, name, price, img_urls }) => (
          <div
            key={product_id}
            className="product-list-item col-lg-3 col-md-4 col-6 position-relative"
          >
            <Link className='card' to={`${productUrl}${product_id}`}>
              <div className='card-header'>
                <img className='card-img-top' src={img_urls[0]} alt={name}/>
              </div>
              <div className="card-body">
                <h6 className="card-title">{name}</h6>
                <p className="card-text">{priceFormat(price)}</p>
              </div>
            </Link>

            <div
              className={`product-wish link ${isWish(product_id) ? 'fa' :
                'fal'} fa-heart position-absolute p-2`}
              onClick={() => onToggleToWishList(product_id)}
            />
          </div>),
        ) : (
          <div className='w-100 py-3'>
            <h3 className="font-weight-light text-center">{msgIsEmpty}</h3>
          </div>
        )}
    </div>
  );
};

export default ProductListView;
