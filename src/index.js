import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './scss/common.scss';

// VIEWS
import MainView from './views/MainViews';
import NotFoundView from './views/NotFoundViews';

// ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// REDUX

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import rootReducer from './modules';

const store = createStore(rootReducer, applyMiddleware(Thunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={ store }>
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={ MainView }></Route>
              <Route path="*" component={ NotFoundView }></Route>
            </Switch>
          </>
        </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
