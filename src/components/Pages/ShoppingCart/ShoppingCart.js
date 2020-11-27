import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { priceFormat } from '../../../utils';

import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';

const ShoppingCart = ({ cartItems, subTotal }) => (
  <main className='main'>
    <div className="container py-md-5 py-3 px-md-0 px-3">
      <h4 className="text-center mb-md-5 mb-2">Cart</h4>

      {cartItems && cartItems.length !== 0 ? (
        <>
          <div
            className="cart-item row no-gutters py-1 d-md-flex d-none justify-content-between">
            <div
              className="col-lg-8 col-md-7 d-flex align-items-center"
            >
              Product
            </div>
            <div
              className="col-lg-4 col-md-5 d-flex align-items-center row no-gutters">
              <div className="col-4 text-left">Price</div>
              <div className="col-4 text-center">Quantity</div>
              <div className="col-4 text-right">Total Price</div>
            </div>
          </div>

          {cartItems.map(({
            product_id, name, price, img_url, count, priceTotal, metal, stone,
          }) => {
            price = priceFormat(price);
            priceTotal = priceFormat(priceTotal);

            return (
              <ShoppingCartItem
                key={product_id}
                cartItem={{
                  product_id,
                  name,
                  price,
                  img_url,
                  count,
                  priceTotal,
                  metal,
                  stone,
                }}
              />
            );
          })}

          <div
            className='d-flex justify-content-md-end justify-content-between mt-1 mb-3'
          >
            <div className='pr-4'>Subtotal</div>
            <div>{priceFormat(subTotal)}</div>
          </div>
          <div className='d-flex justify-content-md-end mb-2'>
            <Link
              to='/checkouts'
              type="button"
              aria-disabled="true"
              className="btn btn-color px-md-5 py-2 col-md-auto col disabled"
            >
              Checkout
            </Link>
          </div>
        </>
      ) : (
        <h5 className="font-weight-light text-center mb-3">
          Your shopping cart is currently empty.
        </h5>
      )}
    </div>
  </main>
);

const mapStateToProps = ({ shoppingCart: { cartItems, subTotal } }) => {
  return { cartItems, subTotal };
};

export default connect(mapStateToProps)(ShoppingCart);
