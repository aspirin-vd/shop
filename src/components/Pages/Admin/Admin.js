import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Spinner from '../../Spinner';
import ErrorIndicator from '../../Error/ErrorIndicator';

const Admin = ({ access, isLoggedIn, loadingUser, errorUser }) => {
  const history = useHistory();

  useEffect(() => {
    (!isLoggedIn && !loadingUser) && history.push('/account/login');
  }, [loadingUser, isLoggedIn]);

  if (loadingUser) return <Spinner/>;
  if (errorUser || access !== 1) return <ErrorIndicator/>;
  return (
    <main className="main">
      <div className="container py-md-5 py-3 px-md-0 px-3">
        <h4 className="text-center mb-md-5 mb-4">Admin panel</h4>
        <div className="row">
          <div className="col-xl-2 col-lg-3 navbar-expand-lg mb-2">
            <div className="d-lg-none d-flex">
              <a
                className='btn btn-block collapsed d-flex justify-content-center'
                href='#'
                data-toggle="collapse"
                data-target="#sidebar"
                aria-controls="sidebar"
                aria-expanded="false"
                aria-label="Toggle sidebar"
              >Sidebar</a>
            </div>
            <div className="collapse navbar-collapse sidebar" id="sidebar">
              <nav
                className="nav flex-column"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active px-0"
                  id="users-tab"
                  data-toggle="pill"
                  href="#users"
                  role="tab"
                  aria-controls="users"
                  aria-selected="true"
                >Users</a>
                <a
                  className="nav-link px-0"
                  id="categories-tab"
                  data-toggle="pill"
                  href="#categories"
                  role="tab"
                  aria-controls="categories"
                  aria-selected="false"
                >Categories</a>
                <a
                  className="nav-link px-0"
                  id="products-tab"
                  data-toggle="pill"
                  href="#products"
                  role="tab"
                  aria-controls="products"
                  aria-selected="false"
                >Products</a>
                <a
                  className="nav-link px-0"
                  id="navigation-tab"
                  data-toggle="pill"
                  href="#navigation"
                  role="tab"
                  aria-controls="navigation"
                  aria-selected="false"
                >Navigation</a>
                <a className="nav-link px-0"
                   id="pages-tab"
                   data-toggle="pill"
                   href="#pages"
                   role="tab"
                   aria-controls="pages"
                   aria-selected="false"
                >Static pages</a>
              </nav>
            </div>
          </div>
          <div className="col-xl-10 col-lg-9">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="users"
                role="tabpanel"
                aria-labelledby="users-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="categories"
                role="tabpanel"
                aria-labelledby="categories-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="products"
                role="tabpanel"
                aria-labelledby="products-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="navigation"
                role="tabpanel"
                aria-labelledby="navigation-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="pages" role="tabpanel"
                aria-labelledby="pages-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = ({ user: { userData: { access }, isLoggedIn, loadingUser, errorUser } }) => {
  return { access, isLoggedIn, loadingUser, errorUser };
};

export default connect(mapStateToProps)(Admin);
