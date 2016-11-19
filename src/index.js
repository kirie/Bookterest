import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AUTH_USER } from './actions/types';
import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Recommendations from './containers/recommendations';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import PinBoard from './containers/pin_board';
import NotFound from './components/not_found';

// Redux-thunk middleware to return a function between action and reducer
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(reduxThunk))(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="pinboard" component={RequireAuth(PinBoard)} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="recommendations" component={RequireAuth(Recommendations)} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.entry')
);
