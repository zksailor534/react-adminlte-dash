import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App, { reducer } from './AppContainer';
import Documentation from './Documentation';

// Make allowances for gh-pages routing
// main path is project name
let mainPath = '/';
if (GH_PAGES) { // eslint-disable-line no-undef
  mainPath = NAME; // eslint-disable-line no-undef
}

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    app: reducer,
    routing: routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Route path={mainPath} component={App}>
    <IndexRoute component={Documentation} />
  </Route>
);

// set app div height
document.getElementById('app').style['min-height'] = '100vh';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app') // eslint-disable-line comma-dangle
);
