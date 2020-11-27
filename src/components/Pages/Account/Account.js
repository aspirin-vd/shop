import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import AccountWrapper from './AccountWrapper/AccountWrapper';
import AccountDetails from './AccountDetails/AccountDetails';
import AccountOrderHistory from './AccountOrderHistory/AccountOrderHistory';
import ModalChangeUserData from './ModalChangeUserData/ModalChangeUserData';
import ModalChangePassword from './ModalChangePassword/ModalChangePassword';
import Spinner from '../../Spinner';
import ErrorIndicator from '../../Error/ErrorIndicator';

const Account = ({ isLoggedIn, loadingUser, errorUser }) => {
   const history = useHistory();

   useEffect(() => {
      (!isLoggedIn && !loadingUser) && history.push('/account/login');
   }, [loadingUser, isLoggedIn]);

   if (loadingUser) return <Spinner/>;
   if (errorUser) return <ErrorIndicator/>;
   return (
      <AccountWrapper
         orderHistory={<AccountOrderHistory/>}
         accountDetails={<AccountDetails/>}
         modalChangeUserData={<ModalChangeUserData/>}
         modalChangePassword={<ModalChangePassword/>}/>
   );
};

const mapStateToProps = ({ user: { isLoggedIn, loadingUser, errorUser } }) => {
   return { isLoggedIn, loadingUser, errorUser };
};

export default connect(mapStateToProps)(Account);
