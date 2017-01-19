import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from '../configureStore';
import AsyncApp from './AsyncApp';
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/(:id)" component={AsyncApp} />
        </Router>
      </Provider>
    )
  }
}
