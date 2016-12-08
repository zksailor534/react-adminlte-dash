import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';

import App from './App';
import Documentation from './Documentation';

let mainPath = '/';
if (GH_PAGES) { // eslint-disable-line no-undef
  mainPath = NAME; // eslint-disable-line no-undef
}

const routes = (
  <Route path={mainPath} component={App}>
    <IndexRoute component={Documentation} />
  </Route>
);

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app') // eslint-disable-line comma-dangle
);
