import React from 'react';
import { connect } from 'react-redux';

import './AccountDetails.scss';

const AccountDetails = ({ userData }) => {
  const {
    first_name, last_name, country, city, address, address2, postcode, phone, email,
  } = userData;

  let titleInf = {
    first_name: 'First Name',
    last_name: 'Last Name',
    country: 'country',
    city: 'city',
    address: 'address 1',
    address2: 'address 2',
    postcode: 'postcode',
    phone: 'phone',
    email: 'email',
  };

  let notSpecifiedInf = [];
  for (let key in userData) {
    if (userData[key] === null && titleInf[key]) notSpecifiedInf.push(
      titleInf[key]);
  }
  if (notSpecifiedInf.length > 0) {
    notSpecifiedInf.forEach((item, index) => {
      if (notSpecifiedInf.length - 1 !== index) notSpecifiedInf[index] = item +
        ', ';
    });
  }

  return (
    <>
      <h5 className="mb-3">Account Details</h5>

      <div className='account-details'>
        <p>{first_name} {last_name}</p>
        <p>{address}</p>
        <p>{address2}</p>
        <p>{postcode} {city}</p>
        <p>{country}</p>
        <p>{email}</p>
        <p>{phone}</p>

        {notSpecifiedInf.length > 0 && (
          <p className='mb-4'>
            Not specified: {notSpecifiedInf.map((item) => item)}
          </p>
        )}

        <div className="px-0 d-flex justify-content-between w-100">
          <button
            type="button"
            className='btn btn-sm btn-outline-dark'
            data-toggle="modal"
            data-target="#changeUserData"
          >
            Change
          </button>

          <button
            type="button"
            className='btn btn-sm btn-outline-dark'
            data-toggle="modal"
            data-target="#changePassword"
          >
            Change password
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ user: { userData } }) => {
  return { userData };
};

export default connect(mapStateToProps)(AccountDetails);
