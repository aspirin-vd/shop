import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { compose } from '../../../../utils';
import { withGeneralService } from '../../../HOC';
import { fetchProfile } from '../../../../store/actions';

const ModalChangeUserData = ({ userData, fetchProfile }) => {
  const [
    {
      first_name, last_name, address, address2, city, country, postcode, phone, email,
    }, setUserDataState] = useState({
    first_name: '',
    last_name: '',
    address: '',
    address2: '',
    city: '',
    country: '',
    postcode: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    const _userData = {
      first_name,
      last_name,
      address,
      address2,
      city,
      country,
      postcode,
      phone,
      email,
    };
    for (let key in userData) {
      if (userData[key]) _userData[key] = userData[key];
    }
    setUserDataState(_userData);
  }, [userData]);

  const refUserDataFormClose = React.createRef();

  const handleChange = (e) => {
    let data = {
      first_name,
      last_name,
      address,
      address2,
      city,
      country,
      postcode,
      phone,
      email,
    };
    data[e.target.id] = e.target.value;
    setUserDataState(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchProfile(
      {
        first_name,
        last_name,
        address,
        address2,
        city,
        country,
        postcode,
        phone,
        email,
      });
    refUserDataFormClose.current.click();
  };

  return (
    <div className="modal fade" id="changeUserData" tabIndex="-1" role="dialog"
         aria-labelledby="changeUserDataTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header px-0 mx-3">
            <h5 className="modal-title h-100 mx-auto text-center"
                id="changeUserDataTitle">Change general information</h5>
            <button
              type="button"
              className="close ml-n1 p-2"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="fal fa-times mx-1" aria-hidden="true"/>
            </button>
          </div>
          <div className="modal-body pb-0">
            <div className="form-row">
              <div className="form-group col-sm-6 col-12">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  value={first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-sm-6 col-12">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={last_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-sm-6 col-12">
                <label htmlFor="address">Address 1</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={address} onChange={handleChange}
                />
              </div>
              <div className="form-group col-sm-6 col-12">
                <label htmlFor="address2">Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  value={address2}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-sm-6 col-12">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-sm-6 col-12">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  value={country}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-sm-6 col-12">
                <label htmlFor="postcode">Postcode</label>
                <input
                  type="number"
                  className="form-control"
                  id="postcode"
                  value={postcode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-sm-6 col-12">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="modal-footer pt-0 border-0">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-dismiss="modal"
              ref={refUserDataFormClose}
            >
              Close
            </button>
            <button type="submit" className="btn btn-dark">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { userData } }) => {
  return { userData };
};

const mapDispatchToProps = (dispatch, { generalService }) =>
  bindActionCreators({
    fetchProfile: fetchProfile(generalService),
  }, dispatch);

export default compose(
  withGeneralService(),
  connect(mapStateToProps, mapDispatchToProps))
(ModalChangeUserData);
