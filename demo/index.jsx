import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Documentation from './Documentation';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Documentation} />
    </Route>
  </Router>,
  document.getElementById('app') // eslint-disable-line comma-dangle
);
