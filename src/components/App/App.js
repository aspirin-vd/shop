import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

import { compose } from '../../utils';
import { withGeneralService } from '../HOC';
import { fetchNavMenu, fetchUser } from '../../store/actions';

import Spinner from '../Spinner';
import ErrorIndicator from '../Error/ErrorIndicator';
import Header from '../Header';
import {
  About,
  AccountPage,
  Admin,
  Blog,
  Checkouts,
  FAQS,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProductPage,
  RegisterPage,
  SearchPage,
  ShopPage,
  ShoppingCartPage,
  WishListPage,
} from '../Pages';
import ThemePicker from '../ThemePicker';
import Footer from '../Footer';

const App = (
  { fetchNavMenu, menuItems, loadingMenu, errorMenu, fetchUser, loadingUser, isDarkMode }) => {
  useEffect(() => {
    fetchNavMenu();
    fetchUser();
  }, []);

  const categoryId = (productsCategory, menuItems) => {
    let categoryId = null;
    menuItems.forEach(({ link, category_id, submenu }) =>
      submenu ? submenu.forEach(({ link, category_id }) =>
        link === `/${productsCategory}` && (categoryId = category_id))
        : link === `/${productsCategory}` && (categoryId = category_id));
    return categoryId;
  };

  if (loadingMenu || loadingUser) return <Spinner/>;
  if (errorMenu) return <ErrorIndicator/>;
  return (
    <div
      className={`app h-100 d-flex flex-column${isDarkMode
        ? ' dark-mode' : ''}`}
    >
      <Header/>

      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/search' component={SearchPage}/>
        <Route path='/wishlist' component={WishListPage}/>
        <Route path='/cart' component={ShoppingCartPage}/>
        <Route path='/checkouts' component={Checkouts}/>

        <Route path='/blog' component={Blog}/>
        <Route path='/faqs' component={FAQS}/>
        <Route path='/about' component={About}/>

        <Route path='/collections' exact component={NotFoundPage}/>
        <Route path='/collections/:productsCategory/' exact
               render={({ match: { params: { productsCategory } } }) =>
                 <ShopPage
                   categoryId={categoryId(productsCategory, menuItems)}/>}/>
        <Route path='/collections/:productsCategory/:productId'
               render={({ match: { params: { productId } } }) =>
                 <ProductPage productId={productId}/>}/>
        <Route path='/products/:productId'
               render={({ match: { params: { productId } } }) =>
                 <ProductPage productId={productId}/>}/>

        <Route path='/account' exact component={AccountPage}/>
        <Route path='/account/register' component={RegisterPage}/>
        <Route path='/account/login' component={LoginPage}/>

        <Route path='/admin' component={Admin}/>
        <Route path='*' component={NotFoundPage}/>
      </Switch>

      <ThemePicker/>
      <Footer/>
    </div>);
};

const mapStateToProps = ({
  navMenu: { menuItems, loadingMenu, errorMenu },
  user: { loadingUser, errorUser },
  themePicker: { isDarkMode },
}) => {
  return {
    menuItems,
    loadingMenu,
    errorMenu,
    loadingUser,
    errorUser,
    isDarkMode,
  };
};

const mapDispatchToProps = (dispatch, { generalService }) =>
  bindActionCreators({
    fetchNavMenu: fetchNavMenu(generalService),
    fetchUser: fetchUser(generalService),
  }, dispatch);

export default compose(
  withGeneralService(),
  connect(mapStateToProps, mapDispatchToProps),
)(App);
