import React from 'react';

const ShopWrapper = ({ filters, productList }) => (
   <main className='main'>
      <div className="container py-3">
         <div className="row mx-0">
            <div className="col-xl-2 col-md-3 px-0">
               {filters}
            </div>
            <div className="col-xl-10 col-md-9 px-0">
               {productList}
            </div>
         </div>
      </div>
   </main>);

export default ShopWrapper;
