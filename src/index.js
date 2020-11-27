import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';
import ErrorBoundary from './components/Error/ErrorBoundary';
import { GeneralServiceProvider } from './components/GeneralServiceContext';
// import GeneralService from './services/GeneralService';
import DummyGeneralService from './services/DummyGeneralService';
import App from './components/App';

import 'bootstrap/scss/bootstrap.scss';
import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const generalService = new DummyGeneralService(); // new GeneralService();

const root = (
  <Provider store={store}>
    <ErrorBoundary>
      <GeneralServiceProvider value={generalService}>
        <Router>
          <App/>
        </Router>
      </GeneralServiceProvider>
    </ErrorBoundary>
  </Provider>
);
render(root, document.getElementById('root'));
