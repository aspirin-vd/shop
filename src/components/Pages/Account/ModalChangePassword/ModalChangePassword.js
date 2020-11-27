import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { compose } from '../../../../utils';
import { withGeneralService } from '../../../HOC';
import { fetchPassword } from '../../../../store/actions';

const ModalChangePassword = ({ fetchPassword }) => {
  const [{ old_password, new_password, new_password2 }, setPassData] = useState(
    { old_password: '', new_password: '', new_password2: '' });

  const refPassFormClose = React.createRef();

  const handlePassChange = (e) => {
    let data = { old_password, new_password, new_password2 };
    data[e.target.id] = e.target.value;
    setPassData(data);
  };

  const handlePassSubmit = (e) => {
    e.preventDefault();
    fetchPassword({ old_password, new_password });
    refPassFormClose.current.click();
  };

  return (
    <div className="modal fade" id="changePassword" tabIndex="-1" role="dialog"
         aria-labelledby="changePasswordTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <form className="modal-content border-0" onSubmit={handlePassSubmit}>
          <div className="modal-header px-0 mx-3">
            <h5
              className="modal-title h-100 mx-auto text-center"
              id="changePasswordTitle"
            >Change password</h5>
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
            <div className="form-group">
              <label htmlFor="old_password">Old password</label>
              <input
                type="password"
                className="form-control"
                id="old_password"
                value={old_password}
                onChange={handlePassChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new_password">New password</label>
              <input
                type="password"
                className="form-control"
                id="new_password"
                value={new_password}
                onChange={handlePassChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new_password2">Repeat new password</label>
              <input
                type="password"
                className="form-control"
                id="new_password2"
                value={new_password2}
                onChange={handlePassChange}
              />
            </div>
          </div>
          <div className="modal-footer pt-0 border-0">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-dismiss="modal"
              ref={refPassFormClose}
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

const mapDispatchToProps = (dispatch, { generalService }) =>
  bindActionCreators({
    fetchPassword: fetchPassword(generalService),
  }, dispatch);

export default compose(
  withGeneralService(),
  connect(undefined, mapDispatchToProps),
)(ModalChangePassword);
