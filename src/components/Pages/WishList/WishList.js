import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { priceFormat } from '../../../utils';

import WishItem from './WishItem/WishItem';

const WishList = ({ wishListItems }) => {
  const history = useHistory();
  const onProductSelected = (id) => history.push(`/products/${id}`);

  return (
    <main className='main'>
      <div className="container py-md-5 py-3 px-md-0 px-3">
        <h4 className="text-center mb-md-5 mb-2">Wish list</h4>

        {wishListItems && wishListItems.length > 0 ? (
          <>
            <div
              className="wish-item row no-gutters py-1 d-md-flex d-none justify-content-between">
              <div
                className="col-lg-8 col-md-7 d-flex align-items-center">Product
              </div>
              <div
                className="col-lg-4 col-md-5 d-flex align-items-center row no-gutters">
                <div className="col-4 text-left">Price</div>
              </div>
            </div>

            {wishListItems.map(
              ({ product_id, name, price, img_url, metal, stone }) => {
                price = priceFormat(price);

                return (
                  <WishItem
                    key={product_id}
                    wishListItem={{
                      product_id,
                      name,
                      price,
                      img_url,
                      metal,
                      stone,
                    }}
                    onProductSelected={() => onProductSelected(product_id)}
                  />
                );
              })}
          </>
        ) : (
          <h5 className="font-weight-light text-center mb-3">
            Your wish list is currently empty.
          </h5>
        )}

      </div>
    </main>
  );
};

const mapStateToProps = ({ wishlist: { wishListItems } }) => {
  return { wishListItems };
};

export default connect(mapStateToProps)(WishList);
