import React from 'react';

import { priceFormat } from '../../../../utils';

import './ProductView.scss';

const ProductView = ({
  productItem, onAddedToCart, isWish, handleGoCart, onToggleToWishList,
}) => {
  const { product_id, name, price, description, img_urls, metal, stone } =
    productItem;

  return (
    <main className='main product-details'>
      <div className="container">

        <div className="row no-gutters position-relative pt-1">

          <div className="carousel slide cart-header col-md-6 mb-md-0"
               id="carousel"
               data-interval="false"
               data-ride="carousel">
            <div className="carousel-inner">

              {img_urls.map((img_url, index) => (
                <div
                  key={index}
                  className={`carousel-item${index === 0 ? ' active' : ''}`}
                >
                  <img src={img_url} className="card-img-top" alt={name}/>
                </div>
              ))}

            </div>

            {img_urls.length > 1 && (
              <>
                <a className="carousel-control-prev" href="#carousel"
                   role="button"
                   data-slide="prev">
                  <i className="fal fa-chevron-left" aria-hidden="true"/>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel"
                   role="button"
                   data-slide="next">
                  <i className="fal fa-chevron-right" aria-hidden="true"/>
                  <span className="sr-only">Next</span>
                </a>
              </>
            )}

          </div>
          <div
            className="card-body col-md-6 position-static px-md-5 px-sm-0 px-3">
            <h5 className="card-title mb-4">{name}</h5>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {!!metal && <p>{metal}</p>}
            {!!stone && <p>{stone}</p>}

            <div className="mb-4">
              <span>{priceFormat(price)}</span>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
              <button
                className="btn btn-outline-color card-btn px-5"
                data-toggle="modal"
                data-target="#modalProduct"
                onClick={() => onAddedToCart(product_id)}
              >
                Add to cart
              </button>
              <div
                className={`product-wish link ${isWish(product_id)
                  ? 'fa' : 'fal'} fa-heart p-2 ml-1`}
                onClick={() => onToggleToWishList(product_id)}
              />
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="modalProduct"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalProductTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content p-4">
              <div className="modal-header px-0 pt-0">
                <h5
                  className="modal-title h-100 mx-auto text-center"
                  id="modalProductTitle"
                >This item has been added to your cart.</h5>
                <button
                  type="button"
                  className="close ml-n3 mb-n3 mt-n4 mr-n4"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-times mx-1" aria-hidden="true"/>
                </button>
              </div>
              <div className="modal-body px-0 pb-0 d-flex">
                <div>
                  <div className="item">
                    <img className="card-img-top" src={img_urls[0]} alt=""/>
                  </div>
                </div>
                <div className="p-3 w-100">
                  <h6 className='mb-2'>{name}</h6>
                  <p className='mb-2'>{priceFormat(price)}</p>
                  {!!metal && <small className='d-block mb-1'>{metal}</small>}
                  {!!stone && <small className='d-block mb-4'>{stone}</small>}
                  <button
                    className="btn btn-outline-color card-btn px-4 btn-block mb-2"
                    data-dismiss="modal"
                    onClick={handleGoCart}
                  >
                    View Cart
                  </button>
                  <div className="link text-right">
                    <button className='btn btn-sm' data-dismiss="modal">
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductView;
