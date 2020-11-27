import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { compose } from '../../../utils';
import { withGeneralService } from '../../HOC';
import { fetchLogin } from '../../../store/actions';

import LoginView from './LoginView/LoginView';

const Login = ({ fetchLogin, isLoggedIn, loadingUser }) => {
  const [{ email, password }, setLoginState] = useState(
    { email: '', password: '' });

  const history = useHistory();
  useEffect(() => {
    if (!loadingUser && isLoggedIn) history.push('/');
  }, [loadingUser, isLoggedIn]);

  const handleChange = (e) => {
    const data = { email, password };
    data[e.target.id] = e.target.value;
    setLoginState(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLogin({ email, password });
  };

  return (
    <LoginView
      fieldValues={{ email, password }}
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
    fetchLogin: fetchLogin(generalService),
  }, dispatch);

export default compose(
  withGeneralService(),
  connect(mapStateToProps, mapDispatchToProps))
(Login);
