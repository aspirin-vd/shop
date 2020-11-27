import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { compose } from '../../../utils';
import { withGeneralService } from '../../HOC';
import { fetchRegister } from '../../../store/actions';

import RegisterView from './RegisterView/RegisterView';

const Register = ({ fetchRegister, isLoggedIn, loadingUser }) => {
  const [{ firstName, lastName, email, password }, setRegisterState] = useState(
    { firstName: '', lastName: '', email: '', password: '' });

  const history = useHistory();
  useEffect(() => {
    if (!loadingUser && isLoggedIn) history.push('/');
  }, [loadingUser, isLoggedIn]);

  const handleChange = (e) => {
    const data = { firstName, lastName, email, password };
    data[e.target.id] = e.target.value;
    setRegisterState(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRegister({ firstName, lastName, email, password });
  };

  return (
    <RegisterView
      fieldValues={{ firstName, lastName, email, password }}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = ({ user: { isLoggedIn, loadingUser } }) => {
  return { isLoggedIn, loadingUser };
};

const mapDispatchToProps = (dispatch, { generalService }) =>
  bindActionCreators({
    fetchRegister: fetchRegister(generalService),
  }, dispatch);

export default compose(
  withGeneralService(),
  connect(mapStateToProps, mapDispatchToProps),
)(Register);
