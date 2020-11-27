import React from 'react';

const AccountWrapper = ({
  orderHistory, accountDetails, modalChangePassword, modalChangeUserData,
}) => (
  <main className="main">
    <div className="container py-md-5 py-3">
      <h4 className="text-center mb-md-5 mb-4">My account</h4>
      <div className="row mx-0">
        <div className="col-md-6 d-flex flex-column align-items-center mb-3">

          {orderHistory}

        </div>
        <div className="col-md-6 d-flex flex-column align-items-center mb-3">

          {accountDetails}

        </div>
      </div>
    </div>

    {modalChangeUserData}
    {modalChangePassword}

  </main>
);

export default AccountWrapper;
