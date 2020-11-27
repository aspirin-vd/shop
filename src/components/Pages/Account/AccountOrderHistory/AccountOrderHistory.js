import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { priceFormat } from '../../../../utils';

import './AccountOrderHistory.scss';

const AccountOrderHistory = ({ userData: { orderHistoryItems } }) => {
  return (
    <>
      <h5 className="mb-3">Order History</h5>

      {orderHistoryItems && orderHistoryItems.length !== 0 ?
        orderHistoryItems.map(({
          product_id, name, price, img_url, metal, stone,
        }) => (
          <div key={product_id} className='order-history d-flex w-100'>
            <Link to={`/products/${product_id}`}>
              <div className="item">
                <img className="card-img-top" src={img_url} alt=""/>
              </div>
            </Link>
            <div className="pl-1 w-100">
              <Link
                className='h6 d-block mb-2'
                to={`/products/${product_id}`}
              >{name}</Link>
              <p className='mb-2'>{priceFormat(price)}</p>
              {!!metal && <small className='d-block mb-1'>{metal}</small>}
              {!!stone && <small className='d-block mb-4'>{stone}</small>}
            </div>
          </div>
        )) : (
          <p>You haven't placed any orders yet.</p>
        )}
    </>
  );
};

const mapStateToProps = ({ user: { userData } }) => {
  return { userData };
};

export default connect(mapStateToProps)(AccountOrderHistory);
